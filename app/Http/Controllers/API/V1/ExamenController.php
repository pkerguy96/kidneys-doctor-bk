<?php

namespace App\Http\Controllers\API\V1;

use App\Http\Controllers\Controller;
use App\Http\Resources\ExamenPreferenceResource;
use App\Models\Examen;
use App\Models\Examenpreferences;
use Illuminate\Http\Request;
use App\Traits\HttpResponses;

class ExamenController extends Controller
{
    use HttpResponses;
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        try {
            // Eager-load xray_category relationship
            $xrays = Examenpreferences::with(['examen_category' => function ($query) {
                $query->withTrashed();
            }])->get();



            return ExamenPreferenceResource::collection($xrays);
        } catch (\Exception $e) {
            return response()->json([
                'status' => 'error',
                'message' => 'Failed to fetch X-rays',
                'errors' => $e->getMessage(),
            ], 500);
        }
    }

    public function getExamenPreferencesWithCategories()
    {
        try {
            $xrayPreferences = Examenpreferences::with(['examen_category' => function ($query) {
                $query->withTrashed();
            }])->get();

            $result = [];
            foreach ($xrayPreferences as $preference) {
                $categoryName = $preference->examen_category->name ?? 'Uncategorized';

                // Directly add the exam type to the category array
                $result[$categoryName][] = $preference->Examen_type;
            }

            return response()->json([
                'status' => 'success',
                'data' => $result, // Flattened structure
            ], 200);
        } catch (\Exception $e) {
            return response()->json([
                'status' => 'error',
                'message' => 'Failed to fetch X-ray preferences',
            ], 500);
        }
    }



    public function getexamenCategorys()
    {
        try {
            $categorys = Examen::select('id', 'name')->get();
            return $this->success($categorys, 'success', 200);
        } catch (\Throwable $th) {
            return $this->success($th->getMessage(), 'Something went wrong', 500);
        }
    }


    public function deleteExamenCategory($id)
    {
        try {
            // Find the category by ID
            $category = Examen::findOrFail($id);

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
            $xrayCategory = Examen::withTrashed()
                ->where('name', $request->xray_category)
                ->first();

            if ($xrayCategory && $xrayCategory->trashed()) {
                // Restore the soft-deleted category
                $xrayCategory->restore();
            } elseif (!$xrayCategory) {
                // Create a new XrayCategory if it doesn't exist
                $xrayCategory = Examen::create(['name' => $request->xray_category]);
            }



            $validated = $request->validate([
                'Examen_type' => 'required',

            ]);

            // Create a new X-ray preference linked to the category
            $xray = Examenpreferences::create(array_merge($validated, [
                'Examen_category_id' => $xrayCategory->id,
            ]));

            // Return the newly created resource
            return $this->success(
                new ExamenPreferenceResource($xray),
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

            $xray = Examenpreferences::findOrFail($id);
            $xray->delete();
            return $this->success(null, 'X-ray preference deleted successfully', 200);
        } catch (\Illuminate\Database\Eloquent\ModelNotFoundException $e) {
            return $this->error('X-ray preference not found', 'error', 404);
        } catch (\Exception $e) {
            return $this->error('Failed to delete X-ray preference', 'error', 500);
        }
    }
}
