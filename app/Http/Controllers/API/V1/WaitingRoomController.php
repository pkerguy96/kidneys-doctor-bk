<?php

namespace App\Http\Controllers\API\V1;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Models\WaitingRoom;
use App\Traits\HttpResponses;
use Illuminate\Support\Facades\Log;
use App\Models\Patient;
use App\Http\Resources\PatientsWaitingRoomCollection;
use App\Http\Resources\WaitingListCollection;

class WaitingRoomController extends Controller
{
    use HttpResponses;
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        try {

            $patientswaiting = WaitingRoom::count();
            return $this->success($patientswaiting, 'success', 201);
        } catch (\Throwable $th) {
            $this->error($th->getMessage(), 'oops', 500);
        }
    }
    public function addPatient(Request $request)
    {
        try {
            // Assuming you pass `patient_id` in the request
            $patientId = $request->input('patient_id');

            // Check if the patient is already in the waiting room
            $existingPatient = WaitingRoom::where('patient_id', $patientId)->first();
            if ($existingPatient) {
                return $this->error(null, "Ce patient est déjà dans la salle d'attente.", 400);
            }

            // Add a new entry in the waiting room for the patient
            WaitingRoom::create([
                'patient_id' => $patientId,
                'entry_time' => now()
            ]);

            return $this->success(null, 'Patient ajouté à la liste d\'attente', 201);
        } catch (\Throwable $th) {
            return $this->error($th->getMessage(), 'oops', 500);
        }
    }


    public function decrementPatient($id)
    {
        try {


            // Find the patient in the waiting room
            $patientInQueue = WaitingRoom::where('id', $id)->first();

            if (!$patientInQueue) {
                return $this->error(null, "Il n'y a pas de patient correspondant dans la salle d'attente", 400);
            }

            // Remove the patient from the waiting room
            $patientInQueue->delete();

            return $this->success(null, 'Patient retiré de la salle d\'attente', 200);
        } catch (\Throwable $th) {
            return $this->error($th->getMessage(), 'oops', 500);
        }
    }
    public function tvwaitinglist()
    {
        $waitingListQuery = WaitingRoom::with('patient')

            ->orderBy('entry_time', 'asc')->get();

        return new WaitingListCollection($waitingListQuery);
    }
    public function resetPatientCounter()
    {
        try {
            // Clear the waiting room table
            WaitingRoom::truncate();

            return $this->success(null, 'Tous les patients ont été retirés de la salle d\'attente', 200);
        } catch (\Throwable $th) {
            return $this->error($th->getMessage(), 'oops', 500);
        }
    }
    public function PatientsWaitingRoom(Request $request)
    {
        $searchQuery = $request->input('searchQuery');

        // Execute the query with ->get() to fetch the results
        $patients = Patient::where(function ($query) use ($searchQuery) {
            $query->where('nom', 'like', "%{$searchQuery}%")
                ->orWhere('prenom', 'like', "%{$searchQuery}%");
        })
            ->orderBy('id', 'desc')
            ->get(); // Fetch the patients

        return new PatientsWaitingRoomCollection($patients); // Return the collection
    }
    /*   public function GetWaitingList(Request $request)
    {
        $searchQuery = $request->input('searchQuery'); // Retrieve search query from request

        $waitingList = WaitingRoom::with('patient') // Include 'patient' relationship
            ->orderBy('id', 'desc') // Order by descending ID
            ->paginate($request->get('per_page', 20)); // Default to 20 items per page

        if (!empty($searchQuery)) {
            // Apply search filters if there's a search query
            $waitingList = WaitingRoom::with('patient')
                ->whereHas('patient', function ($query) use ($searchQuery) {
                    $query->where('nom', 'like', "%{$searchQuery}%")
                        ->orWhere('prenom', 'like', "%{$searchQuery}%");
                    // You can add more fields to search in the 'patient' table if needed
                })
                ->orderBy('id', 'desc')
                ->paginate($request->get('per_page', 20));
        }

        return new WaitingListCollection($waitingList);
    } */

    public function GetWaitingList(Request $request)
    {
        $searchQuery = $request->input('searchQuery'); // Retrieve search query from request
        $count = WaitingRoom::where('status', 'completed')->count();
        $waitingListQuery = WaitingRoom::with('patient')->where('status', '!=', 'completed') // Include 'patient' relationship
            ->orderByRaw("FIELD(status, 'current', 'pending', 'waiting')") // Custom order for statuses
            ->orderBy('entry_time', 'asc'); // Then order by entry_time

        if (!empty($searchQuery)) {
            // Apply search filters if there's a search query
            $waitingListQuery->whereHas('patient', function ($query) use ($searchQuery) {
                $query->where('nom', 'like', "%{$searchQuery}%")
                    ->orWhere('prenom', 'like', "%{$searchQuery}%");
                // You can add more fields to search in the 'patient' table if needed
            });
        }

        // Apply pagination after filtering and ordering
        $waitingList = $waitingListQuery->paginate($request->get('per_page', 20));

        // Modify the collection inside the paginator
        $waitingList->getCollection()->transform(function ($item) use ($count) {
            $item->count = $count; // Add the count property to each item
            return $item;
        });

        return new WaitingListCollection($waitingList);
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
        //
    }
}
