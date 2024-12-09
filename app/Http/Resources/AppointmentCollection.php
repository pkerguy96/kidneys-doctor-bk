<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\ResourceCollection;

class AppointmentCollection extends ResourceCollection
{
    /**
     * Transform the resource collection into an array.
     *
     * @return array<int|string, mixed>
     */
    public function toArray(Request $request): array
    {
        return $this->collection->map(function ($appointment) {
            return [
                'id' => $appointment->id,
                'patient_id' => $appointment->patient_id,
                'patient_name' => $appointment->patient->nom . ' ' . $appointment->patient->prenom, // Assuming you have 'nom' and 'prenom' columns in Patient model
                'title' => $appointment->title,
                'date' => $appointment->date,
                'note' => $appointment->note,
            ];
        })->toArray();
    }
}
