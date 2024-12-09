<?php

namespace App\Http\Controllers\API\V1;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Appointment;
use App\Http\Resources\AppointmentCollection;
use App\Http\Requests\AppointmentRequest;
use Illuminate\Support\Carbon;
use App\Http\Resources\AppointmentResource;
use App\Traits\HttpResponses;

class AppointmentController extends Controller
{
    use HttpResponses;
    /**
     * Display a listing of the resource.
     */
    public function index()
    {

        return new AppointmentCollection(
            Appointment::with('patient')->orderBy('id', 'desc')
                ->get()
        );
    }
    public function GetAppointmentPagated(Request $request)
    {
        $searchQuery = $request->input('searchQuery'); // Retrieve search query from request
        $appointments = Appointment::with('patient') // Include 'patient' relationship
            ->orderBy('id', 'desc') // Order appointments by descending ID
            ->paginate($request->get('per_page', 20)); // Paginate with a default of 20 items per page

        if (!empty($searchQuery)) {
            // Apply search filters if there's a search query
            $appointments = Appointment::with('patient')
                ->whereHas('patient', function ($query) use ($searchQuery) {
                    $query->where('nom', 'like', "%{$searchQuery}%")
                        ->orWhere('prenom', 'like', "%{$searchQuery}%");
                    // Add more fields to search in the 'patient' table if needed
                })
                ->orderBy('id', 'desc')
                ->paginate($request->get('per_page', 20));
        }

        return new AppointmentCollection($appointments);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(AppointmentRequest $request)
    {

        $appointment_date = Carbon::parse($request->input('date'));
        // check if past date specialy hours
        if ($appointment_date->isPast()) {
            return response()->json([
                'message' => 'Impossible de prendre un rendez-vous dans le passé.',
            ], 422);
        }
        // check if theres a date taken already 
        $existingAppointment = Appointment::where('date', $appointment_date)->first();
        if ($existingAppointment) {
            return response()->json([
                'message' => 'Un rendez-vous existe déjà à cette date et heure.',
            ], 422);
        }
        // Minimum difference between appointments in minutes set it for 15 min 
        $minDifference = 1;
        $earliestAllowedTime = $appointment_date->copy()->subMinutes($minDifference);
        $latestAllowedTime = $appointment_date->copy()->addMinutes($minDifference);
        $existingAppointments = Appointment::whereBetween('date', [$earliestAllowedTime, $latestAllowedTime])
            ->exists();
        if ($existingAppointments) {
            return response()->json([
                'message' => 'Il doit y avoir au moins 15 minutes entre chaque rendez-vous.',
            ], 422);
        }
        $attributes = $request->all();

        $data = new AppointmentResource(Appointment::create($attributes));
        return response()->json([
            'message' => 'appointment created successfully',
            'data' => $data
        ], 201);
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
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
        $appointment = Appointment::find($id);
        if (!$appointment) {
            return response()->json(['message' => 'Appointment not found'], 404);
        }
        // Delete the appointment
        $appointment->delete();
        return $this->success(null, 'deleted', 200);
    }
}
