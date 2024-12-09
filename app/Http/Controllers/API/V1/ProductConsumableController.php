<?php

namespace App\Http\Controllers\API\V1;

use App\Http\Controllers\Controller;
use App\Http\Resources\consumablesResource;
use App\Http\Resources\productoperationpage;
use App\Models\ProductOperationConsumables;
use App\Traits\HttpResponses;
use Illuminate\Http\Request;

class ProductConsumableController extends Controller
{
    use HttpResponses;
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        $searchQuery = $request->input('searchQuery');
        $perPage = $request->get('per_page', 20); // Default to 20 items per page

        // Base query with eager loading
        $query = ProductOperationConsumables::with(['Product', 'Operation.patient'])->orderBy('id', 'desc');

        // Apply search filters
        if (!empty($searchQuery)) {
            $query->whereHas('Product', function ($q) use ($searchQuery) {
                $q->where('product_name', 'like', "%{$searchQuery}%")
                    ->orWhere('product_nature', 'like', "%{$searchQuery}%");
            })
                ->orWhereHas('Operation.patient', function ($q) use ($searchQuery) {
                    $q->where('nom', 'like', "%{$searchQuery}%")
                        ->orWhere('prenom', 'like', "%{$searchQuery}%");
                });
        }

        // Paginate the query results
        $productConsumables = $query->paginate($perPage);

        // Return the paginated results as a resource collection
        return consumablesResource::collection($productConsumables);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
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

            $consumable = ProductOperationConsumables::find($id);

            // Check if the record exists
            if (!$consumable) {
                return $this->error(
                    null,
                    "Impossible de trouver le consommable avec l'ID spécifié.",
                    404
                );
            }

            // Delete the consumable
            $consumable->delete();

            // Return a success response
            return $this->success(
                null,
                "Le consommable a été supprimé avec succès."
            );
        } catch (\Exception $e) {
            // Handle any errors
            return $this->error(
                null,
                "Une erreur s'est produite lors de la suppression : " . $e->getMessage(),
                500
            );
        }
    }
}
