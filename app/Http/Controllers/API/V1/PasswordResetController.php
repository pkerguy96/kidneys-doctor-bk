<?php

namespace App\Http\Controllers\API\V1;

use App\Http\Controllers\Controller;
use App\Mail\PasswordReset;
use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Carbon;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Mail;

class PasswordResetController extends Controller
{
    public function sendResetLinkEmail(Request $request)
    {

        $request->validate(['email' => 'required|email']);

        $user = User::where('email', $request->email)->first();

        if (!$user) {
            return response()->json(['message' => 'there are no user'], 404);
        }

        $token = Str::random(20);

        $row = DB::table('password_reset_tokens')->where('email', $user->email)->first();
        Log::info($row);
        if (!$row) {
            DB::table('password_reset_tokens')->insert([
                'email' => $user->email,
                'token' => $token,
                'created_at' => Carbon::now()
            ]);
            Log::info('tokencreated');
        } else {
            DB::table('password_reset_tokens')->where('email', $user->email)->update([
                'token' => $token,
                'created_at' => Carbon::now()
            ]);
        }

        try {

            $mail = new PasswordReset(['to' => [$user->email], 'token' => $token]);
            Mail::send($mail);
            Log::info('mail', $mail);
            return  response()->json(['message' => 'Reset link sent to your email'], 200);
        } catch (\Exception $e) {
            Log::error($e);
            return response()->json(['message' => 'Unable to send reset link '], 400);
        }
    }
    public function resetPassword(Request $request)
    {
        try {
            $request->validate([
                'email' => 'required|email',
                'token' => 'required|string',
                'password' => 'required',
            ]);

            $token = DB::table('password_reset_tokens')
                ->where('token', $request->token)
                ->where('email', $request->email)
                ->first();
            if (!$token) {
                Log::info('Password reset attempt failed: Token does not exist', [
                    'email' => $request->email,
                    'token' => $request->token,
                ]);
                return response()->json(['Error' => 'Token dosnt exist'], 404);
            }
            if (Carbon::parse($token->created_at)->addMinutes(config('auth.passwords.users.expire')) < Carbon::now()) {
                Log::info('Password reset attempt failed: Token has expired', [
                    'email' => $request->email,
                    'token' => $request->token,
                ]);
                return response()->json(['error' => 'Token has expired'], 422);
            } else {
                $user = User::where('email', $request->email)->first();
                $user->update([
                    'password' =>  bcrypt($request->password)
                ]);
                DB::table('password_reset_tokens')
                    ->where('token', $request->token)
                    ->where('email', $request->email)
                    ->delete();
                Log::info('Password reset successful', [
                    'email' => $request->email,
                ]);
                return response()->json(['message' => 'Password updated successfully'], 200);
            }
        } catch (\Throwable $th) {
            Log::error($th);
            return response()->json(['Error' => 'Oops something went wrong'], 500);
        }
    }
}
