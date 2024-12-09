<?php

namespace App\Http\Controllers\API\V1;

use App\Http\Controllers\Controller;
use App\Http\Resources\NurseRoleResource;
use App\Http\Resources\RoleCollection;
use App\Http\Resources\RoleResource;
use App\Models\User;
use App\Traits\HttpResponses;
use Illuminate\Http\Request;
use Spatie\Permission\Models\Role;
use Spatie\Permission\Models\Permission;
use Illuminate\Support\Facades\Auth;
use Spatie\Permission\Exceptions\RoleDoesNotExist;

class PermissionController extends Controller
{
    use HttpResponses;
    public function createRole(Request $request)
    {
        try {
            // Validate the incoming request
            $validated = $request->validate([
                'rolename' => 'required|string|unique:roles,name',
            ]);

            // Create the role
            $role = Role::create([
                'name' => $validated['rolename'],
                'guard_name' => 'sanctum', // Use the appropriate guard
            ]);
            app()->make(\Spatie\Permission\PermissionRegistrar::class)->forgetCachedPermissions();
            // Return a success response using the trait
            return $this->success($role, 'Role created successfully.', 201);
        } catch (\Throwable $th) {
            // Return an error response using the trait
            return $this->error(null, $th->getMessage(), 500);
        }
    }
    public function getUsersViaRoles()
    {
        try {



            $roles = Role::where('name', '!=', 'doctor')
                ->with('users') // Include users for other roles
                ->get();
            return new RoleCollection($roles);
        } catch (\Throwable $th) {
            return $this->error(null, $th->getMessage(), 500);
        }
    }


    public function getRoles()
    {
        try {
            $authenticatedUser = auth()->user();
            if ($authenticatedUser->role === 'nurse') {
                return $this->error(null, 'Seuls les médecins sont autorisés à accéder.', 401);
            }
            $roles = Role::where('name', '!=', 'doctor')->get();
            $rolesResource  = RoleResource::collection($roles);
            return $this->success($rolesResource, 'success', 201);
        } catch (\Throwable $th) {
            $this->error($th->getMessage(), 'error', 501);
        }
    }
    public function grantAccess(Request $request)
    {
        try {
            $user = auth()->user();
            if ($user->role === 'nurse') {
                return $this->error(null, 'Seuls les médecins sont autorisés à accéder.', 501);
            }

            $nurse = User::where('id', $request->nurseid)->first();

            if (!$nurse) {
                return $this->error(null, "Aucune infirmière n'a été trouvée", 501);
            }
            $role = Role::findByName($request->rolename);
            if (!$role) {
                throw RoleDoesNotExist::named($request->rolename, 'sanctum');
            }
            $role->syncPermissions([]);
            $permissions = $request->permissions;
            $role->syncPermissions($permissions);

            $roles = $nurse->roles;
            foreach ($roles as $singlerole) {
                $nurse->removeRole($singlerole);
            }
            $nurse->assignRole($request->rolename);
            app()->make(\Spatie\Permission\PermissionRegistrar::class)->forgetCachedPermissions();

            return $this->success(null, "L'autorisation a été mise à jour avec succès.", 201);
        } catch (RoleDoesNotExist $exception) {

            return $this->error(null, $exception->getMessage(), 500);
        } catch (\Throwable $th) {
            return $this->error(null, $th->getMessage(), 500);
        }
    }
    public function userPermissions(Request $request)
    {
        try {
            $user = auth()->user();
            if ($user->role === 'nurse') {
                return $this->error(null, 'Seuls les médecins sont autorisés à accéder.', 501);
            }

            $role = Role::findByName($request->rolename);
            if (!$role) {
                throw RoleDoesNotExist::named($request->rolename, 'sanctum');
            }
            $permissions = $role->permissions->pluck('name')->toArray();
            return $this->success($permissions, 'success', 201);
        } catch (RoleDoesNotExist $exception) {

            return $this->error(null, $exception->getMessage(), 500);
        } catch (\Throwable $th) {
            return $this->error(null, $th->getMessage(), 500);
        }
    }
    public function RolesNursesList()
    {
        $authenticatedUserId = auth()->user();
        if ($authenticatedUserId->role === 'nurse') {
            return $this->error(null, 'Only doctors are allowed access!', 401);
        }

        $nurses = User::where('role', 'nurse')->get();

        $data =  NurseRoleResource::collection($nurses);
        return $this->success($data, 'success', 200);
    }
    public function deleteRole($id)
    {
        try {
            $user = auth()->user();
            if ($user->role === 'nurse') {
                return $this->error(null, 'Seuls les médecins sont autorisés à accéder.', 501);
            }

            $role = Role::where('id', $id)->first();
            $role->delete();
            app()->make(\Spatie\Permission\PermissionRegistrar::class)->forgetCachedPermissions();

            return $this->success(null, 'deleted success', 201);
        } catch (\Throwable $th) {
            return $this->error(null, $th->getMessage(), 500);
        }
    }
}
