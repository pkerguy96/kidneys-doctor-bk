<?php

namespace App\Traits;

use Illuminate\Auth\Access\AuthorizationException;

trait HasPermissionCheck
{
    /**
     * Check if the authenticated user has the given permission.
     *
     * @param  string  $permission
     * @throws \Illuminate\Auth\Access\AuthorizationException
     */
    public function authorizePermission($permissions): void
    {
        $user = auth()->user();

        if (is_array($permissions)) {
            // Check if the user has any of the given permissions
            foreach ($permissions as $permission) {
                if ($user->can($permission)) {
                    return; // User has at least one required permission
                }
            }
            throw new AuthorizationException('Unauthorized');
        }

        // Check a single permission
        if (!$user->can($permissions)) {
            throw new AuthorizationException('Unauthorized');
        }
    }
}
