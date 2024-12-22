<?php

namespace App\Http\Controllers\API\V1;

use App\Http\Controllers\Controller;
use App\Http\Resources\XraypreferenceResource;

use App\Models\XrayCategory;
use App\Models\Xraypreference;
use App\Traits\HttpResponses;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;

class Xraypreferences extends Controller
{
    use HttpResponses;
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        try {
            // Eager-load xray_category relationship
            $xrays = Xraypreference::with(['xray_category' => function ($query) {
                $query->withTrashed();
            }])->get();



            return XraypreferenceResource::collection($xrays);
        } catch (\Exception $e) {
            // Log the error for debugging
            Log::error('Error fetching X-ray preferences: ' . $e->getMessage());

            return response()->json([
                'status' => 'error',
                'message' => 'Failed to fetch X-rays',
                'errors' => $e->getMessage(),
            ], 500);
        }
    }

    public function getxrayCategorys()
    {
        try {
            $categorys = XrayCategory::select('id', 'name')->get();
            return $this->success($categorys, 'success', 200);
        } catch (\Throwable $th) {
            return $this->success($th->getMessage(), 'Something went wrong', 500);
        }
    }
    public function deleteCategory($id)
    {
        try {
            // Find the category by ID
            $category = XrayCategory::findOrFail($id);

            // Delete the category
            $category->delete();

            // Return a success response
            return $this->success(null, 'Catégorie supprimée avec succès.', 200);
        } catch (\Illuminate\Database\Eloquent\ModelNotFoundException $e) {
            // Handle case where category is not found
            return response()->json([
                'status' => 'error',
                'message' => 'Category not found.',
            ], 404);
        } catch (\Exception $e) {
            // Handle other exceptions
            return response()->json([
                'status' => 'error',
                'message' => 'Failed to delete category.',
                'error' => $e->getMessage(),
            ], 500);
        }
    }

    /**
     * Store a newly created resource in storage.
     */
    /*   public function store(Request $request)
    {
        try {
            $xrayPreference = Xraypreference::withTrashed()
                ->where('xray_type', $request->xray_type)
                ->first();

            if ($xrayPreference && $xrayPreference->trashed()) {
                // Restore the soft-deleted record
                $xrayPreference->restore();

                // Update price if provided in the request
                $newPrice = $request->input('price');
                if ($newPrice) {
                    $xrayPreference->update(['price' => $newPrice]);
                }

                return $this->success(
                    new XraypreferenceResource($xrayPreference),
                    'X-ray preference restored successfully',
                    200
                );
            }
            // Validate the request data
            $validated = $request->validate([
                'xray_type' => 'required,xray_type,NULL,id,deleted_at,NULL',
                'price' => 'required|numeric|min:0',
            ]);

            // Create a new X-ray preference
            $xray = Xraypreference::create($validated);

            // Return the newly created resource
            return $this->success(
                new XraypreferenceResource($xray),
                'X-ray preference created successfully',
                201
            );
        } catch (\Illuminate\Validation\ValidationException $e) {
            // Handle validation errors
            return response()->json([
                'status' => 'error',
                'message' => 'Validation failed',
                'errors' => $e->errors(),
            ], 422);
        } catch (\Exception $e) {
            // Handle other exceptions
            return $this->error(
                'Failed to create X-ray preference',
                $e->getMessage(),
                500
            );
        }
    } */


    public function store(Request $request)
    {
        try {
            // Check if xray_category is provided
            if (!$request->has('xray_category') || empty($request->xray_category)) {
                return response()->json([
                    'status' => 'error',
                    'message' => 'Veuillez choisir une catégorie.',
                ], 422);
            }

            // Check if xray_category exists or create it
            $xrayCategory = XrayCategory::withTrashed()
                ->where('name', $request->xray_category)
                ->first();

            if ($xrayCategory && $xrayCategory->trashed()) {
                // Restore the soft-deleted category
                $xrayCategory->restore();
            } elseif (!$xrayCategory) {
                // Create a new XrayCategory if it doesn't exist
                $xrayCategory = XrayCategory::create(['name' => $request->xray_category]);
            }



            $validated = $request->validate([
                'xray_type' => 'required',
                'price' => 'required|numeric|min:0',
            ]);

            // Create a new X-ray preference linked to the category
            $xray = Xraypreference::create(array_merge($validated, [
                'xray_category_id' => $xrayCategory->id,
            ]));

            // Return the newly created resource
            return $this->success(
                new XraypreferenceResource($xray),
                'Préférence de radiographie créée avec succès',
                201
            );
        } catch (\Illuminate\Validation\ValidationException $e) {
            // Handle validation errors
            return response()->json([
                'status' => 'error',
                'message' => 'La validation a échoué',
                'errors' => $e->errors(),
            ], 422);
        } catch (\Exception $e) {
            // Handle other exceptions
            return $this->error(
                'Échec de la création de la préférence de radiographie',
                $e->getMessage(),
                500
            );
        }
    }
    public function getXrayPreferencesWithCategories()
    {
        try {

            $xrayPreferences = Xraypreference::with(['xray_category' => function ($query) {
                $query->withTrashed(); // Include soft-deleted categories
            }])->get();


            $result = [];
            foreach ($xrayPreferences as $preference) {
                $categoryName = $preference->xray_category->name ?? 'Uncategorized';
                $result[$categoryName][] = [
                    'name' => $preference->xray_type,
                    'price' => $preference->price,
                ];
            }


            return response()->json([
                'status' => 'success',
                'data' => $result,
            ], 200);
        } catch (\Exception $e) {
            // Handle exceptions and log errors
            Log::error('Error fetching X-ray preferences: ' . $e->getMessage());

            return response()->json([
                'status' => 'error',
                'message' => 'Failed to fetch X-ray preferences',
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
            Log::info($id);
            // Find the X-ray preference by ID
            $xray = Xraypreference::findOrFail($id);
            Log::info($xray);
            // Delete the X-ray preference
            $xray->delete();

            // Return a success response
            return $this->success(null, 'X-ray preference deleted successfully', 200);
        } catch (\Illuminate\Database\Eloquent\ModelNotFoundException $e) {
            // Handle the case where the X-ray preference is not found
            return $this->error('X-ray preference not found', 'error', 404);
        } catch (\Exception $e) {
            // Handle any other exceptions
            return $this->error('Failed to delete X-ray preference', 'error', 500);
        }
    }
}
