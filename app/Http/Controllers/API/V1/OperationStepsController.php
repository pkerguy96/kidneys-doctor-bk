<?php

namespace App\Http\Controllers\API\V1;

use App\Http\Controllers\Controller;
use App\Http\Requests\StoreXrayRequest;
use App\Models\Notification;
use App\Models\Operation;
use App\Models\OperationNote;
use Illuminate\Http\Request;
use App\Models\Patient;
use App\Models\Product;
use App\Models\ProductOperationConsumables;
use App\Models\User;
use App\Models\WaitingRoom;
use App\Models\Xray;
use App\Traits\HttpResponses;
use Illuminate\Support\Carbon;
use Illuminate\Support\Facades\Log;

class OperationStepsController extends Controller
{
    use HttpResponses;
    /* First step we create op */
    public function storeOpNote(Request $request, $id)
    {
        $validated = $request->validate([
            'note' => 'nullable|string',
        ]);

        try {
            // Find the patient or throw an exception
            $patient = Patient::findOrFail($id);

            // Create the operation
            $operation = Operation::create([
                'patient_id' => $patient->id,
            ]);

            // If note exists, process it
            if (!empty($validated['note'])) {
                OperationNote::create([
                    'operation_id' => $operation->id,
                    'note' => $validated['note']
                ]);
            }

            // Update or create a WaitingRoom entry
            $waiting = WaitingRoom::where('patient_id', $patient->id)->first();
            if ($waiting) {
                $waiting->update(['status' => 'current']);
            } else {
                WaitingRoom::create([
                    'status' => 'current',
                    'patient_id' => $patient->id,
                    'entry_time' => now(),
                ]);
            }

            // Return operation ID in response
            return $this->success($operation->id, null, 201);
        } catch (\Exception $e) {
            return response()->json([
                'error' => 'An error occurred while creating the operation: ' . $e->getMessage(),
            ], 500);
        }
    }

    /* Step 2 Paraclinique insert */
    public function StoreParaclinique(StoreXrayRequest $request)
    {
        try {
            // Validate request data
            $validatedData = $request->validated();

            $xrayItems = $validatedData['xrays']; // Expecting 'xrays' as an array
            $totalPrice = 0;

            $operation = Operation::findOrFail($validatedData['operation_id']);
            foreach ($xrayItems as $xray) {
                $totalPrice += $xray['price'];
                $xrayData = [
                    'patient_id' => $validatedData['patient_id'],
                    'operation_id' => $operation->id,
                    'xray_type' => $xray['type'],
                    'xray_name' => $xray['name'],
                    'price' => $xray['price'],
                    'note' => $xray['note'],

                ];
                Xray::create($xrayData);
            }
            $operation->update(['total_cost' => $totalPrice]);
            $waiting =   WaitingRoom::where('patient_id', $request->patient_id)->first();
            if ($waiting) {
                $waiting->update([
                    'status' => 'current'
                ]);
            } else {
                WaitingRoom::create([
                    'status' => 'current',
                    'patient_id'
                    => $request->patient_id,
                    'entry_time' => Carbon::now()
                ]);
            }
            return $this->success($operation->id, 'Radiographies enregistrées avec succès', 201);
        } catch (\Throwable $th) {
            Log::error('Error storing x-ray data: ' . $th->getMessage());

            return $this->error($th->getMessage(), 'Une erreur s\'est produite lors de l\'enregistrement des radiographies', 500);
        }
    }
    public function EditOpNote(Request $request, $id)
    {
        $validated = $request->validate([
            'note' => 'nullable|string',
            'operation_id' => 'required|integer|exists:operations,id',
        ]);

        try {
            // Find the patient or throw an exception
            $patient = Patient::findOrFail($id);

            // If note exists, process it
            if (!empty($validated['note'])) {
                OperationNote::updateOrCreate(
                    ['operation_id' => $validated['operation_id']],
                    ['note' => $validated['note']]
                );
            }

            // Update or create a WaitingRoom entry
            $waiting = WaitingRoom::where('patient_id', $patient->id)->first();
            if ($waiting) {
                $waiting->update(['status' => 'current']);
            } else {
                WaitingRoom::create([
                    'status' => 'current',
                    'patient_id' => $patient->id,
                    'entry_time' => now(),
                ]);
            }

            // Return operation ID in response
            return $this->success($validated['operation_id'], null, 200);
        } catch (\Exception $e) {
            return response()->json([
                'error' => 'An error occurred while processing the operation note: ' . $e->getMessage(),
            ], 500);
        }
    }


    /* fetches */
    public function fetchNote($operation_id)
    {

        $data = OperationNote::where('operation_id', $operation_id)->first() ?? [];
        return $this->success($data, null, 200);
    }
    public function fetchXrays($operation_id)
    {

        Log::info($operation_id);
        try {
            $data = Xray::where('operation_id', $operation_id)
                ->select('id', 'xray_name', 'xray_type', 'price')
                ->get();
            if ($data->isEmpty()) {
                return $this->success([], 'No X-rays found', 200);
            }

            return $this->success($data, null, 200);
        } catch (\Exception $e) {
            return response()->json(['error' => 'Failed to fetch X-rays: ' . $e->getMessage()], 500);
        }
    }
}
