<?php

namespace App\Http\Controllers\API\V1;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Http\Resources\NurseCollection;
use App\Models\User;
use App\Http\Requests\StoreNurseRequest;
use Illuminate\Support\Facades\Hash;
use App\Http\Resources\NurseResource;
use App\Traits\HasPermissionCheck;
use App\Traits\HttpResponses;

class NurseController extends Controller
{
    use HttpResponses;
    use HasPermissionCheck;
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $this->authorizePermission(['superadmin']);

        return new NurseCollection(User::where('role', 'nurse')->orderBy('id', 'desc')->get());
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreNurseRequest $request)
    {
        $this->authorizePermission(['superadmin']);

        $authenticatedUserId = auth()->user();
        if ($authenticatedUserId->role === 'nurse') {
            return $this->error(null, 'Only doctors can create nurses!', 401);
        }
        $attributes = $request->all();
        $attributes = $request->except('checkbox');
        /*     $attributes['doctor_id'] = $authenticatedUserId->id; */
        $attributes['password'] = Hash::make($attributes['password']);
        $attributes['role'] = 'nurse';
        if ($request->input('checkbox') === true) {

            $attributes['termination_date'] = null;
        } else {

            $attributes['termination_date'] = $request->input('termination_date');
        }
        try {
            $nurseCount = User::where('role', 'nurse')
                ->count();

            if ($nurseCount >= 6) {
                return response()->json(['message' => "Vous ne pouvez avoir que jusqu'à six infirmières."], 400);
            }


            $data = new NurseResource(User::create($attributes));
            return $this->success($data, 'Nurse created successfully', 201);
        } catch (\Exception $e) {
            return $this->error(null, $e->getMessage(), 500);
        }
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $this->authorizePermission(['superadmin']);

        try {
            $authenticatedUser = auth()->user();

            // Ensure only doctors can delete nurses
            if ($authenticatedUser->role !== 'doctor') {
                return $this->error(null, 'Only doctors can delete nurses!', 401);
            }

            // Find the nurse by ID
            $nurse = User::where('role', 'nurse')->find($id);

            // Check if the nurse exists
            if (!$nurse) {
                return $this->error(null, 'Nurse not found!', 404);
            }

            // Delete the nurse
            $nurse->delete();

            return $this->success(null, 'Nurse deleted successfully!', 200);
        } catch (\Exception $e) {
            return $this->error(null, 'Failed to delete Nurse: ' . $e->getMessage(), 500);
        }
    }
}
