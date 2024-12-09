<?php

namespace App\Http\Controllers\API\V1;

use App\Http\Controllers\Controller;
use App\Http\Requests\StoreBloodTestRequest;
use App\Models\Bloodtest;
use App\Models\Patient;
use App\Models\WaitingRoom;
use App\Traits\HttpResponses;
use Carbon\Carbon;
use Illuminate\Http\Request;

class BloodTestController extends Controller
{
    use HttpResponses;
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        try {
            // Extract search query and pagination parameters
            $searchQuery = $request->input('searchQuery');
            $perPage = $request->get('per_page', 20);

            // Build the query for blood tests with patient information
            $query = Bloodtest::with('patient:id,nom,prenom')
                ->orderBy('id', 'desc');

            // Apply search filters if a search query is provided
            if (!empty($searchQuery)) {
                $query->whereHas('patient', function ($q) use ($searchQuery) {
                    $q->where('nom', 'like', "%{$searchQuery}%")
                        ->orWhere('prenom', 'like', "%{$searchQuery}%");
                });
            }

            // Paginate the results
            $bloodTests = $query->paginate($perPage);

            // Transform the paginated data
            $data = $bloodTests->map(function ($bloodTest) {
                return [
                    'id' => $bloodTest->id,
                    'patient_name' => $bloodTest->patient->nom . ' ' . $bloodTest->patient->prenom,
                    'blood_test' => $bloodTest->blood_test,
                    'created_at' => $bloodTest->created_at->format('Y-m-d'),
                ];
            });

            return response()->json([
                'success' => true,
                'data' => $data,
                'pagination' => [
                    'current_page' => $bloodTests->currentPage(),
                    'last_page' => $bloodTests->lastPage(),
                    'per_page' => $bloodTests->perPage(),
                    'total' => $bloodTests->total(),
                ],
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
    public function store(StoreBloodTestRequest $request)
    {
        try {
            $validatedData = $request->validated();


            $bloodTests = $validatedData['blood_test'];

            // Create a new blood test record
            Bloodtest::create([
                'operation_id' => $validatedData['operation_id'] ?? null,
                'patient_id' => $validatedData['patient_id'],
                'blood_test' => $bloodTests, // Store all tests in one column
            ]);



            $waiting =  WaitingRoom::where('patient_id', $request->patient_id)->first();
            $patient = Patient::where('id', $request->patient_id)->first();
            if ($waiting) {
                $waiting->update([
                    'status' => 'current'
                ]);
            } else {
                WaitingRoom::create([
                    'status' => 'current',
                    'patient_id'
                    => $request->patient_id,
                    'entry_time' => Carbon::now(),

                ]);
            }
            return $this->success($patient, 'Test sanguin enregistré avec succès', 200);
        } catch (\Throwable $th) {
            return $this->error($th->getMessage(), 'oops something went wrong', 500);
        }
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        try {

            $bloodTest = Bloodtest::with('patient:id,nom,prenom')->findOrFail($id);


            $data = [
                'id' => $bloodTest->id,
                'nom' => $bloodTest->patient->nom,
                'prenom' => $bloodTest->patient->prenom,
                // Convert the blood_test string into an array
                'blood_tests' => explode(',', $bloodTest->blood_test),
                'created_at' => $bloodTest->created_at->format('Y-m-d'),
            ];
            return response()->json([
                'success' => true,
                'data' => $data,
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

            $bloodTest = Bloodtest::findOrFail($id);


            $bloodTest->delete();

            return response()->json([
                'success' => true,
                'message' => 'Blood test record deleted successfully.',
            ], 200);
        } catch (\Throwable $th) {
            return response()->json([
                'success' => false,
                'message' => 'Failed to delete the blood test record.',
                'error' => $th->getMessage(),
            ], 500);
        }
    }
}
