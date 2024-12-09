<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\ResourceCollection;

class RoleCollection extends ResourceCollection
{
    /**
     * Transform the resource collection into an array.
     *
     * @return array<int|string, mixed>
     */
    public function toArray($request)
    {
        return $this->collection->map(function ($role) {
            $usersData = $role->users->map(function ($user) {
                return [
                    'nom' => $user->nom .  ' ' . $user->prenom,

                ];
            });

            return [
                'id' => $role->id,
                'rolename' => $role->name,
                'created_at' => $role->created_at->format('Y-m-d'),
                'patients' => $usersData,
            ];
        });
    }
}
