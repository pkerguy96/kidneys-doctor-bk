<?php

namespace App\Http\Controllers\API\V1;

use App\Events\OperationCreated;
use App\Events\OperationTestEvent;
use App\Events\TestBroadcastEvent;
use App\Http\Controllers\Controller;
use App\Http\Requests\StoreXrayRequest;
use App\Http\Resources\OperationXrayCollection;
use App\Http\Resources\XrayResource;
use App\Models\Patient;
use App\Models\Xray;
use App\Models\Xraypreference;
use App\Traits\HttpResponses;
use Illuminate\Http\Request;
use Illuminate\Support\Carbon;
use Illuminate\Support\Facades\Log;
use App\Models\Operation;
use App\Models\operation_detail;
use App\Events\MyEvent;
use App\Models\Notification;
use App\Models\Product;
use App\Models\ProductOperationConsumables;
use App\Models\User;
use App\Models\WaitingRoom;

class XrayController extends Controller
{
    use HttpResponses;
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreXrayRequest $request)
    {
        try {
            // Validate request data
            $validatedData = $request->validated();

            $xrayItems = $validatedData['xrays']; // Expecting 'xrays' as an array
            $totalPrice = 0;

            // Create the operation record first
            $operation = Operation::create([
                'patient_id' => $validatedData['patient_id'],
                'total_cost' => 0, // Initialize with 0, will be updated later
                'is_paid' => false,
                'note' => $validatedData['note'] ?? null,
            ]);

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

            // Update the operation total cost
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





    public function showpatientxrays(string $id)
    {

        try {
            if (!Operation::where('id', $id)->exists()) {
                return $this->error(null, 'xrays operation dosnt exist', 500);
            }
            $xray = Xray::where('operation_id', $id)->get();
            if (!$xray) {
                return $this->error(null, 'no xray', 500);
            }
            return new OperationXrayCollection($xray);
        } catch (\Throwable $th) {
            return $this->error($th, 'something went wrong', 500);
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
        try {
            // Step 1: Parse incoming x-ray data from rows
            $incomingXrays = collect($request->input('rows'));


            if ($incomingXrays->isEmpty()) {
                return response()->json(['message' => 'No x-ray data found in the request.'], 400);
            }


            $operation = Operation::findOrFail($id); // Fetch the operation to adjust total_cost
            $existingXrays = Xray::where('operation_id', $id)->get(); // Fetch existing x-rays for the operation


            // Step 3: Identify deleted, new, and updated x-rays
            $incomingXrayIds = $incomingXrays->pluck('id')->filter(); // Get IDs of incoming x-rays, filter out nulls for new items
            $deletedXrays = $existingXrays->whereNotIn('id', $incomingXrayIds); // Identify x-rays to be deleted
            $newXrays = $incomingXrays->filter(fn($xray) => !isset($xray['id'])); // Identify new x-rays to be added
            $updatedXrays = $incomingXrays->filter(fn($xray) => isset($xray['id'])); // Identify x-rays to be updated

            // Step 4: Adjust the total cost based on deleted X-rays
            $deletedXrayTotalPrice = $deletedXrays->sum('price'); // Sum the price of deleted x-rays
            /*  $operation->total_cost -= $deletedXrayTotalPrice; */ // Deduct deleted x-rays' price from total_cost
            Log::info('Deleted X-rays total price', ['total_price' => $deletedXrayTotalPrice]); // Log the deducted price
            $operation->total_cost = 0;
            // Step 5: Delete the identified x-rays
            Xray::destroy($deletedXrays->pluck('id')->toArray());
            Log::info('Deleted X-rays', ['ids' => $deletedXrays->pluck('id')->toArray()]);

            // Step 6: Update existing x-rays
            foreach ($updatedXrays as $xray) {
                Xray::where('id', $xray['id'])->update([
                    'price' => $xray['price'],
                    'xray_type' => $xray['xray_type'],
                ]);
                Log::info('Updated X-ray', ['id' => $xray['id'], 'data' => $xray]);
                $operation->total_cost += $xray['price'];
            }

            // Step 7: Add new x-rays and calculate their total price
            /*       $newXrayTotalPrice = 0; */ // Initialize total price for new x-rays
            foreach ($newXrays as $xray) {
                operation_detail::create([
                    'operation_id' => $id,
                    'operation_name' => $xray['xray_type'],
                    'price' => $xray['price'],
                ]);
                /*  $newXrayTotalPrice += $xray['price']; */ // Add new x-ray's price to the total
                Log::info('Created new X-ray', ['data' => $xray]);
                $operation->total_cost += $xray['price'];
            }
            /*    $operation->total_cost += $newXrayTotalPrice; */ // Add new x-rays' price to the operation's total cost
            /*  Log::info('New X-rays total price', ['total_price' => $newXrayTotalPrice]); */ // Log the added price

            // Step 8: Update the operation's treatment and total cost
            $isDone = $request->input('treatment_isdone', 0); // Get treatment_isdone from the request

            if ($isDone == 1) {
                $operation->treatment_isdone = 1; // Mark treatment as done
            } else {
                $operation->treatment_isdone = 0; // Mark treatment as not done
                $operation->treatment_nbr += 1; // Increment treatment_nbr for not done treatment
            }
            if ($operation->total_cost == 0) {
                $operation->is_paid = 1;
            } else {
                $operation->is_paid = 0;
            }
            $operation->save(); // Save the updated operation details

            $waiting =   WaitingRoom::where('patient_id', $request->patient_id)->first();
            if ($waiting) {
                $waiting->update([
                    'status' => 'completed'
                ]);
            }

            // Step 9: Handle consumables
            $consomables = collect($request->input('consomables'));
            foreach ($consomables as $consomable) {
                $productid = $consomable['consomable'];
                $quantity = $consomable['qte'];
                $product = Product::where('id', $productid)->first();

                if ($product) {
                    if ($product->qte < $quantity) {
                        return response()->json([
                            'error' => "Stock insuffisant pour '{$product->product_name}'. Disponible : {$product->min_stock}, Demandé : {$quantity}."
                        ], 400);
                    }
                    // Deduct stock
                    $product->qte -= $quantity;
                    $product->save();
                    //consomables
                    ProductOperationConsumables::create([
                        'operation_id' => $operation->id,
                        'product_id' => $product->id,
                        'quantity' => $quantity,
                    ]);

                    if ($product->qte < $product->min_stock) {

                        $users = User::all();
                        foreach ($users as $user) {
                            Notification::create([
                                'user_id' => $user->id,
                                'title' => 'Alerte stock',
                                'message' => "Le produit '{$product->product_name}' a la quantité minimale",
                                'is_read' => false,
                                'type' => 'stock',
                                "target_id" =>  $product->id
                            ]);
                        }
                    }
                } else {
                    return response()->json([
                        'error' => "Consumable '{$product->product_name}' is out of stock."
                    ], 400);
                }
            }
            $nurses = User::where('role', 'nurse')->get();
            $patient = Patient::where('id', $request->input('patient_id'))->first(['nom', 'prenom']);
            // Create notifications for each nurse
            foreach ($nurses as $nurse) {
                Notification::create([
                    'user_id' => $nurse->id,
                    'title' => 'Une facture est disponible de ' . $patient->nom . ' ' . $patient->prenom,
                    'is_read' => false,
                    'type' => 'payment',
                    "target_id" =>  $operation->id
                ]);
            }
            return response()->json(['message' => 'Operation updated successfully.']);
        } catch (\Throwable $th) {
            Log::error('Error updating operation', ['error' => $th->getMessage()]);
            return response()->json(['message' => $th->getMessage()], 500);
        }
    }

    public function insertWihtoutxray(Request $request)
    {
        // Step 1: Create a new operation
        $operation = Operation::create([
            'patient_id' => $request->input('patient_id'),
            'total_cost' => 0, // Initialize total_cost to 0
            'is_paid' => 0,
            'note' => null,

        ]);
        // Step 2: Handle treatment status
        $isDone = $request->input('treatment_isdone', 0);

        if ($isDone == 1) {
            $operation->treatment_isdone = 1;
        } else {
            $operation->treatment_isdone = 0;
            $operation->treatment_nbr += 1;
        }

        // Step 3: Add incoming x-rays and calculate their total price
        $incomingXrays = collect($request->input('rows'));
        $rowsTotalPrice = $incomingXrays->sum('price'); // Calculate the total price of rows

        foreach ($incomingXrays as $xray) {
            operation_detail::create([
                'operation_id' => $operation->id,
                'operation_name' => $xray['xray_type'],
                'price' => $xray['price'],
            ]);
        }

        // Add rowsTotalPrice to the operation's total_cost
        $operation->total_cost += $rowsTotalPrice;
        // Step 9: Handle consumables
        $consomables = collect($request->input('consomables'));
        foreach ($consomables as $consomable) {
            $productid = $consomable['consomable'];
            $quantity = $consomable['qte'];
            $product = Product::where('id', $productid)->first();
            if ($product) {
                if ($product->qte < $quantity) {
                    return response()->json([
                        'error' => "Stock insuffisant pour '{$product->product_name}'. Disponible : {$product->min_stock}, Demandé : {$quantity}."
                    ], 400);
                }
                // Deduct stock
                $product->qte -= $quantity;
                $product->save();

                //consomables
                ProductOperationConsumables::create([
                    'operation_id' => $operation->id,
                    'product_id' => $product->id,
                    'quantity' => $quantity,
                ]);
                if ($product->qte < $product->min_stock) {

                    $users = User::all();
                    foreach ($users as $user) {
                        Notification::create([
                            'user_id' => $user->id,
                            'title' => 'Alerte stock',
                            'message' => "Le produit '{$product->product_name}' a la quantité minimale",
                            'is_read' => false,
                            'type' => 'stock',
                            "target_id" =>  $product->id
                        ]);
                    }
                }
            } else {
                return response()->json([
                    'error' => "Consumable '{$product->product_name}' is out of stock."
                ], 400);
            }
        }
        if ($operation->total_cost == 0) {
            $operation->is_paid = 1;
        } else {
            $operation->is_paid = 0;
        }

        $operation->save();
        $waiting =   WaitingRoom::where('patient_id', $request->patient_id)->first();
        if ($waiting) {
            $waiting->update([
                'status' => 'completed'
            ]);
        }
        $nurses = User::where('role', 'nurse')->get();
        $patient = Patient::where('id', $request->input('patient_id'))->first(['nom', 'prenom']);

        // Create notifications for each nurse
        foreach ($nurses as $nurse) {
            Notification::create([
                'user_id' => $nurse->id,
                'title' => 'Une facture est disponible de ' . $patient->nom . ' ' . $patient->prenom,
                'is_read' => false,
                'type' => 'payment',
                "target_id" =>  $operation->id
            ]);
        }
        return response()->json(['message' => 'Operation created and details added successfully.'], 201);
    }


    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
