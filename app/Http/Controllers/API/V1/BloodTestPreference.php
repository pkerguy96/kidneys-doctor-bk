<?php

namespace App\Http\Controllers\API\V1;

use App\Http\Controllers\Controller;
use App\Models\BloodTestPreference as ModelsBloodTestPreference;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class BloodTestPreference extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $preferences = ModelsBloodTestPreference::orderBy('created_at', 'desc')->get();

        return response()->json([
            'success' => true,
            'data' => $preferences,
        ], 200);
    }
    /*  public function getAllPreferences()
    {
        try {
            // Fetch all preferences and map to the required format
            $preferences = ModelsBloodTestPreference::all(['title', 'code', 'price', 'delai'])
                ->map(function ($preference) {
                    return [
                        'title' => $preference->title,
                        'code' => $preference->code,
                        'delai' => $preference->delai,
                        'price' => $preference->price,
                    ];
                });

            return response()->json([
                'success' => true,
                'data' => $preferences,
            ], 200);
        } catch (\Throwable $th) {
            return response()->json([
                'success' => false,
                'message' => 'Something went wrong.',
                'error' => $th->getMessage(),
            ], 500);
        }
    } */
    public function getAllPreferences(Request $request)
    {
        try {
            // Get the search query from the request
            $searchQuery = $request->input('searchQuery', '');

            // Fetch preferences filtered by title or code, case-insensitive
            $preferences = ModelsBloodTestPreference::when(!empty($searchQuery), function ($query) use ($searchQuery) {
                $query->whereRaw('LOWER(title) LIKE ?', ["%" . strtolower($searchQuery) . "%"])
                    ->orWhereRaw('LOWER(code) LIKE ?', ["%" . strtolower($searchQuery) . "%"]);
            })
                ->get(['title', 'code', 'price', 'delai']) // Specify the columns to retrieve
                ->map(function ($preference) {
                    return [
                        'title' => $preference->title,
                        'code' => $preference->code,
                        'delai' => $preference->delai,
                        'price' => $preference->price,
                    ];
                });

            return response()->json([
                'success' => true,
                'data' => $preferences,
            ], 200);
        } catch (\Throwable $th) {
            return response()->json([
                'success' => false,
                'message' => 'Something went wrong.',
                'error' => $th->getMessage(),
            ], 500);
        }
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'title' => 'required|string|unique:blood_test_preferences,title',
            'code' => 'string|unique:blood_test_preferences,code',
            'price' => 'numeric',
            'delai' => 'string|nullable',
        ]);

        if ($validator->fails()) {
            return response()->json([
                'success' => false,
                'message' => 'Validation errors',
                'errors' => $validator->errors(),
            ], 422);
        }

        try {
            $preference = ModelsBloodTestPreference::create($request->all());

            return response()->json([
                'success' => true,
                'message' => 'Blood test preference created successfully',
                'data' => $preference,
            ], 201);
        } catch (\Throwable $th) {
            return response()->json([
                'success' => false,
                'message' => 'Something went wrong',
                'error' => $th->getMessage(),
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
        $preference = ModelsBloodTestPreference::find($id);

        if (!$preference) {
            return response()->json([
                'success' => false,
                'message' => 'Blood test preference not found',
            ], 404);
        }

        try {
            $preference->delete();

            return response()->json([
                'success' => true,
                'message' => 'Blood test preference deleted successfully',
            ], 200);
        } catch (\Throwable $th) {
            return response()->json([
                'success' => false,
                'message' => 'Something went wrong',
                'error' => $th->getMessage(),
            ], 500);
        }
    }
}
