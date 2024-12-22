<?php

namespace App\Http\Controllers\API\V1;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Traits\HttpResponses;
use App\Models\User;
use Illuminate\Support\Facades\Auth;
use App\Http\Requests\LoginUserRequest;
use Illuminate\Support\Facades\Log;
use Laravel\Sanctum\PersonalAccessToken;
use Illuminate\Support\Carbon;
use Illuminate\Support\Facades\Hash;

class AuthController extends Controller
{
    use HttpResponses;
    /*    if ($user->role === 'nurse') {
                $terminationDate = $user->termination_date;
                if ($terminationDate && now() > $terminationDate) {

                    return response()->json(['message' => "votre accès a été résilié. contacter l'administrateur pour plus d'informations"], 401);
                }
            } */

    public function login(LoginUserRequest $request)
    {

        try {
            $request->validated($request->all());
            $credentials = $request->only('email', 'password');
            if (!Auth::attempt($credentials)) {
                return response()->json(['message' => "Les informations d'identification ne correspondent pas"], 422);
            }

            $user = User::where('email', $request->email)->first();


            if ($user->tokens()->where('tokenable_id', $user->id)->exists()) {
                $user->tokens()->delete();
            }


            $token = $user->createToken('Api token of ' . $user->nom)->plainTextToken;
            $url = null;
            if ($user->profile_picture) {
                $url = url('storage/profile_pictures/' . $user->profile_picture);
            }
            $permissionNames = [];
            if ($user->hasRole('doctor')) {
                $permissionNames[] = 'doctor';
            } else {
                $permissionsviarole = $user->getPermissionsViaRoles()->toArray();
                $permissionNames = array_map(function ($permission) {
                    return $permission['name'];
                }, $permissionsviarole);
            }
            //TODO SEND ONLY USER DATA
            //TODO: Delete patient from salle dattente once deleted
            return $this->success([
                'user' => $user,
                'token' => $token,
                'profile' => $url,
                'roles' => $permissionNames

            ]);
        } catch (\Throwable $th) {
            Log::error($th);
            return response()->json(["Quelque chose s'est mal passé", $th], 500);
        }
    }
    public function Verifytoken(Request  $request)
    {
        $token = $request->bearerToken();

        if (!$token) {
            return response()->json(['error' => 'Unauthorized'], 401);
        }
        $accessToken = PersonalAccessToken::findToken($token);

        if (!$accessToken || Carbon::parse($accessToken->expires_at)->isPast()) {
            return response()->json(['error' => 'Invalid or expired token'], 401);
        }

        $user = $accessToken->tokenable; /* gives the user by its token */

        return response()->json(['success' => 'valid token'], 200);
    }
    public function changePassword(Request $request)
    {
        $request->validate([
            'new_password' => 'required|min:8|confirmed',
        ]);

        $user = Auth::user();

        // Update the user's password
        $user->password = Hash::make($request->new_password);
        $user->save();

        return response()->json(['message' => 'Le mot de passe a été modifié avec succès'], 200);
    }

    public function Logout()
    {
        if (auth::check()) {
            $user = Auth::user();
            if ($user->tokens()->where('tokenable_id', $user->id)->exists()) {
                $user->tokens()->delete();
            }
            return response()->json(['success', 'user is logged out'], 200);
        }
        return response()->json(['error', 'user tokens invalid'], 400);
    }
}
