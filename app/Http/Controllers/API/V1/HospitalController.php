<?php

namespace App\Http\Controllers\API\V1;

use App\Http\Controllers\Controller;
use App\Models\hospital;
use App\Traits\HttpResponses;
use Illuminate\Http\Request;

class HospitalController extends Controller
{
    use HttpResponses;
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        try {
            $hospitals = hospital::all();
            return $this->success($hospitals, 'success', 200);
        } catch (\Throwable $th) {
            return $this->error($th->getMessage(), 'error', 500);
        }
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        try {
            $validatedData = $request->validate([
                'name' => 'required|string|max:255',
                'address' => 'nullable|string|max:255',
                'contact_info' => 'nullable|string|max:255',
            ]);

            // Create a new hospital
            Hospital::create($validatedData);
            return $this->success(null, 'success', 200);
        } catch (\Throwable $th) {
            return $this->error($th->getMessage(), 'error', 500);
        }
        // Validate input data



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
        try {
            $hospital = Hospital::find($id);

            // Check if hospital exists
            if (!$hospital) {
                return response()->json([
                    'success' => false,
                    'message' => 'Hospital not found.'
                ], 404);
            }

            // Delete the hospital
            $hospital->delete();
            return $this->success(null, 'success', 200);
        } catch (\Throwable $th) {
            return $this->error($th->getMessage(), 'error', 200);
        }


        // Return JSON response

    }
}
