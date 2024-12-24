<?php

namespace App\Http\Controllers\API\V1;

use App\Http\Controllers\Controller;
use App\Http\Resources\hospitaloperationresource;
use App\Models\hospital;
use App\Models\Operation;
use App\Models\outsourceOperation;
use App\Models\Payment;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;

class HospitalOperationsController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        $searchQuery = $request->input('searchQuery');
        $perPage = $request->get('per_page', 20);
        $isPaidFilter = $request->input('isPaid'); // Get the isPaid filter from the request

        // Base query with relationships
        $query = OutsourceOperation::with([
            'hospital',
            'patient' => function ($query) {
                $query->withTrashed(); // Include both deleted and non-deleted patients
            },
            'operation', // Include the operation relationship
        ]);

        // Apply isPaid filter through the operation relationship if provided
        if (!is_null($isPaidFilter)) {
            $query->whereHas('operation', function ($q) use ($isPaidFilter) {
                $q->where('is_paid', $isPaidFilter);
            });
        }

        // Apply search filters if searchQuery is provided
        if (!empty($searchQuery)) {
            $query->where(function ($q) use ($searchQuery) {
                $q->whereHas('hospital', function ($q) use ($searchQuery) {
                    $q->where('name', 'like', '%' . $searchQuery . '%');
                })
                    ->orWhereHas('patient', function ($q) use ($searchQuery) {
                        $q->whereRaw("CONCAT(nom, ' ', prenom) like ?", ['%' . $searchQuery . '%']);
                    })
                    ->orWhere('operation_date', 'like', '%' . $searchQuery . '%');
            });
        }

        // Paginate results
        $data = $query->orderBy('id', 'desc')->paginate($perPage);

        // Return the paginated resource collection
        return hospitaloperationresource::collection($data);
    }



    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        try {
            // Validate the request payload
            $validated = $request->validate([
                'hospital_id' => 'required|exists:hospitals,id',
                'patient_id' => 'required|exists:patients,id',
                'operation_type' => 'required|string|max:255',
                'description' => 'nullable|string',
                'operation_date' => 'required|date',
                'total_price' => 'required|numeric|min:0',
                'amount_paid' => 'required|numeric|min:0',
                'fee' => 'nullable|numeric|min:0',
            ]);

            // Check if the amount paid equals the total price
            $isPaid = $validated['amount_paid'] >= $validated['total_price'];

            // Step 1: Create the operation
            $operation = DB::transaction(function () use ($validated, $isPaid) {
                $operation = Operation::create([
                    'patient_id' => $validated['patient_id'],
                    'total_cost' => $validated['total_price'],
                    'is_paid' => $isPaid,
                    'outsource' => 1,
                    'note' => $validated['description'],
                ]);

                // Step 2: Create the outsource operation
                outsourceOperation::create([
                    'hospital_id' => $validated['hospital_id'],
                    'patient_id' => $validated['patient_id'],
                    'operation_id' => $operation->id,
                    'operation_type' => $validated['operation_type'],
                    'description' => $validated['description'],
                    'operation_date' => $validated['operation_date'],
                    'total_price' => $validated['total_price'],
                    'amount_paid' => $validated['amount_paid'],
                    'fee' => $validated['fee'],
                ]);

                $validated['amount_paid'] > 0
                    ? Payment::create([
                        'patient_id' => $validated['patient_id'],
                        'operation_id' => $operation->id,
                        'total_cost' => $validated['total_price'],
                        'amount_paid' => $validated['amount_paid'],
                    ])
                    : null;

                return $operation;
            });

            // Return the created operation with its associated details
            return response()->json([
                'message' => 'Opération et données associées créées avec succès.',
                'operation' => $operation,
            ], 201);
        } catch (\Throwable $th) {
            return response()->json([
                'message' => $th->getMessage(),

            ], 500);
        }
    }




    public function searchHospitals(Request $request)
    {
        $search = $request->input('searchQuery');
        $hospitals =
            hospital::where(function ($query) use ($search) {
                $query->where('name', 'like', "%{$search}%");
            })->orderBy('id', 'desc')->get();

        return response()->json(['data' => $hospitals]);
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
            // Find the outsource operation by ID
            $outsourceOperation = OutsourceOperation::findOrFail($id);

            DB::transaction(function () use ($outsourceOperation) {
                // Delete the outsource operation first
                $outsourceOperation->delete();

                // Delete related payments
                $paymentsDeleted = Payment::where('operation_id', $outsourceOperation->operation_id)->delete();


                // Delete the related operation
                $operationDeleted = Operation::where('id', $outsourceOperation->operation_id)->delete();
            });

            return response()->json(['message' => 'Operation and related records deleted successfully.'], 200);
        } catch (\Illuminate\Database\Eloquent\ModelNotFoundException $e) {

            return response()->json(['error' => 'Outsource Operation not found.'], 404);
        } catch (\Exception $e) {

            return response()->json(['error' => 'Failed to delete operation: ' . $e->getMessage()], 500);
        }
    }
}
