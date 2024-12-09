<?php

namespace App\Http\Controllers\API\V1;

use App\Http\Controllers\Controller;
use App\Http\Resources\OperationprefResource;
use App\Models\OperationPref;
use App\Traits\HttpResponses;
use Illuminate\Http\Request;

class OperationPrefsController extends Controller
{
    use HttpResponses;
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        try {
            // Fetch all operation preferences
            $operations = OperationPref::all();

            // Return a JSON response
            return  OperationprefResource::collection($operations);
        } catch (\Exception $e) {
            // Handle exceptions
            return response()->json([
                'status' => 'error',
                'message' => 'Failed to fetch operation preferences',
                'error' => $e->getMessage(),
            ], 500);
        }
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        try {
            // Validate the request data
            $validated = $request->validate([
                'operation_type' => 'required|string|max:191',
                'price' => 'required|numeric|min:0',
                'code' => 'nullable|string|max:50',
            ]);

            // Create a new operation preference
            $operation = OperationPref::create($validated);

            // Return a success response
            return response()->json([
                'status' => 'success',
                'message' => 'Operation preference created successfully',
                'data' => $operation,
            ], 201);
        } catch (\Illuminate\Validation\ValidationException $e) {
            // Handle validation errors
            return response()->json([
                'status' => 'error',
                'message' => 'Validation failed',
                'errors' => $e->errors(),
            ], 422);
        } catch (\Exception $e) {
            // Handle other exceptions
            return response()->json([
                'status' => 'error',
                'message' => 'Failed to create operation preference',
                'error' => $e->getMessage(),
            ], 500);
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
        try {
            // Find the operation preference by ID
            $operation = OperationPref::findOrFail($id);

            // Delete the operation preference
            $operation->delete();

            // Return a success response
            return $this->success(null, 'Operation preference deleted successfully', 200);
        } catch (\Illuminate\Database\Eloquent\ModelNotFoundException $e) {
            // Handle case where the operation preference is not found
            return response()->json([
                'status' => 'error',
                'message' => 'Operation preference not found',
            ], 404);
        } catch (\Exception $e) {
            return $this->error($e->getMessage(), 'Failed to delete operation preference', 500);
        }
    }
}
