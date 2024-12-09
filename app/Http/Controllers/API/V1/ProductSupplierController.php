<?php

namespace App\Http\Controllers\API\V1;

use App\Http\Controllers\Controller;
use App\Http\Resources\ProductSupplierResource;
use App\Models\Product;
use App\Models\ProductSupplier;
use Illuminate\Http\Request;

class ProductSupplierController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        $searchQuery = $request->input('searchQuery');
        $perPage = $request->get('per_page', 20); // Default to 20 items per page

        // Base query with eager loading
        $query = ProductSupplier::with(['product' => function ($query) {
            $query->withTrashed(); // Include soft-deleted products
        }, 'supplier'])->orderBy('id', 'desc');


        // Apply search filters if a search query is provided
        if (!empty($searchQuery)) {
            $query->whereHas('product', function ($q) use ($searchQuery) {
                $q->where('name', 'like', "%{$searchQuery}%");
            })
                ->orWhereHas('supplier', function ($q) use ($searchQuery) {
                    $q->where('name', 'like', "%{$searchQuery}%");
                });
        }

        // Paginate the query results
        $productSuppliers = $query->paginate($perPage);

        // Return the paginated results as a resource collection
        return ProductSupplierResource::collection($productSuppliers);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $validated = $request->validate([
            'supplier_id' => 'required|exists:suppliers,id',
            'product_id' => 'required|exists:products,id',
            'quantity' => 'required|integer|min:1',
            'buy_price' => 'required|numeric|min:0.01',
            'sell_price' => 'required|numeric|min:0.01',
            'expiry_date' => 'nullable|date',
            'invoice' => 'nullable|string',
        ]);

        $product = Product::findOrFail($validated['product_id']);

        ProductSupplier::create([
            'supplier_id' => $validated['supplier_id'],
            'product_id' => $validated['product_id'],
            'quantity' => $validated['quantity'],
            'sell_price' => $validated['sell_price'],
            'buy_price' => $validated['buy_price'],
            'expiry_date' => $validated['expiry_date'],
            'invoice' => $validated['invoice'],
        ]);

        $product->qte += $validated['quantity'];
        $product->save();

        return response()->json(['message' => 'Product batch added successfully!']);
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        $productSupplier = ProductSupplier::with(['product', 'supplier'])->find($id);

        // Check if the record exists
        if (!$productSupplier) {
            return response()->json([
                'message' => "Impossible de trouver l'opération de stock",
            ], 404);
        }

        // Return the found record as a resource
        return response()->json([
            'message' => 'Opération de produit trouvée avec succès',
            'data' => new ProductSupplierResource($productSupplier),
        ], 200);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        // Validate incoming request data (exclude product_id)
        $validatedData = $request->validate([
            'supplier_id' => 'nullable|exists:suppliers,id',
            'quantity' => 'nullable|integer|min:0',
            'buy_price' => 'nullable|numeric|min:0',
            'sell_price' => 'nullable|numeric|min:0',
            'expiry_date' => 'nullable|date',
            'invoice' => 'nullable|string|max:255',
        ]);

        // Find the ProductSupplier record by ID
        $productSupplier = ProductSupplier::find($id);

        // Check if the record exists
        if (!$productSupplier) {
            return response()->json([
                'message' => "Impossible de trouver l'opération de stock",
            ], 404);
        }

        try {
            // Update only the allowed fields
            $productSupplier->fill($validatedData);

            // Save the updated record
            $productSupplier->save();

            return response()->json([
                'message' => 'Opération de produit mise à jour avec succès',
                'data' => new ProductSupplierResource($productSupplier),
            ], 200);
        } catch (\Exception $e) {
            // Handle errors during the update operation
            return response()->json([
                'message' => 'Échec de la mise à jour du fournisseur de produits',
                'error' => $e->getMessage(),
            ], 500);
        }
    }



    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        // Find the record by its ID
        $productSupplier = ProductSupplier::find($id);
        if (!$productSupplier) {
            return response()->json([
                'message' => "Impossible de trouver l'opération de stock",
            ], 404);
        }
        try {
            // Retrieve the associated product
            $product = $productSupplier->product;

            if ($product) {

                $product->qte -= $productSupplier->quantity;

                // Ensure the quantity does not go below zero
                $product->qte = max(0, $product->qte);

                // Save the updated product quantity
                $product->save();
            }

            // Delete the productSupplier record
            $productSupplier->delete();

            return response()->json([
                'message' => 'Opération de produit supprimée avec succès',
            ], 200);
        } catch (\Exception $e) {
            // Handle errors during the delete operation
            return response()->json([
                'message' => 'Échec de la suppression du fournisseur de produits',
                'error' => $e->getMessage(),
            ], 500);
        }
    }
}
