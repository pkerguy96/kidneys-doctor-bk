<?php

namespace App\Http\Controllers\API\V1;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Log;

class AdminController extends Controller
{

    public function storeprofile(Request $request)
    {
        $request->validate([
            'picture' => 'required|image|mimes:jpeg,png,jpg,gif|max:5000',
        ]);
        $user = auth()->user();
        if ($user->profile_picture) {
            // Delete the existing profile picture
            Storage::disk('public')->delete('profile_pictures/' . $user->profile_picture);
        }
        if ($request->hasFile('picture') && $request->file('picture')->isValid()) {
            $extension = $request->file('picture')->getClientOriginalExtension();
            $fileName = 'user_' . $user->id . '_' . Str::random(10) . '.' . $extension;

            $request->file('picture')->storeAs('profile_pictures', $fileName, 'public');

            $user->profile_picture = $fileName;
            $user->save();

            return response()->json(['message' => 'Profile picture uploaded successfully']);
        }
        return response()->json(['message' => 'Failed to upload profile picture'], 400);
    }

    public function ModifyProfile(Request $request)
    {
        try {
            $userid = Auth::id();
            $user = User::findOrFail($userid);
            $oldProfilePicture = $user->profile_picture;

            // Handle profile picture upload
            if ($request->hasFile('picture') && $request->file('picture')->isValid()) {
                $request->validate([
                    'picture' => 'required|image|mimes:jpeg,png,jpg,gif|max:5000',
                ]);

                // Delete the existing profile picture only if it exists
                if ($oldProfilePicture && Storage::disk('public')->exists('profile_pictures/' . $oldProfilePicture)) {
                    Storage::disk('public')->delete('profile_pictures/' . $oldProfilePicture);
                }

                // Save new picture
                $extension = $request->file('picture')->getClientOriginalExtension();
                $fileName = 'user_' . $user->id . '_' . Str::random(10) . '.' . $extension;

                // Ensure the profile_pictures folder exists before saving
                if (!Storage::disk('public')->exists('profile_pictures')) {
                    Storage::disk('public')->makeDirectory('profile_pictures');
                }

                $filePath = $request->file('picture')->storeAs('profile_pictures', $fileName, 'public');
                Log::info($filePath); // Debug the stored path

                $user->profile_picture = $fileName;
            }

            // Debug profile_picture before saving
            Log::info($user->profile_picture);

            // Update other user attributes
            $user->nom = $request->name ?? $user->nom;
            $user->email = $request->email ?? $user->email;

            // Save changes to the user
            $user->save();

            return response()->json([
                'message' => 'Profile updated successfully',
                'data' => $user,
                'profile' => url('storage/profile_pictures/' . $user->profile_picture),
            ], 200);
        } catch (\Throwable $th) {
            return response()->json([
                'error' => $th->getMessage(),
            ], 500);
        }
    }


    /*   public function getpicture()
    {
        $user = Auth()->user();
        if (!$user || !$user->profile_picture) {
            return response()->json(['message' => 'No profile picture was found']);
        } else {


            $url =  url('storage/profile_pictures/' . $user->profile_picture);
            return response()->json(['url' => $url]);
        }
    } */
}
