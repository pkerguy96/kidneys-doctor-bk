<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\ResourceCollection;

class PatientCollection extends ResourceCollection
{
    /**
     * Transform the resource collection into an array.
     *
     * @return array<int|string, mixed>
     */
    public function toArray($request)
    {
        return $this->collection->map(function ($patient) {
            return [
                'id' => $patient->id,
                'nom' => $patient->nom,
                'prenom' => $patient->prenom,
                'cin' => $patient->cin,
                'date' => $patient->date,
                'address' => $patient->address,
                'sex' => $patient->sex,
                'phoneNumber' => $patient->phone_number,
                'mutuelle' => $patient->mutuelle,
                'note' => $patient->note,
                'appointments' => CustomAppointmentResource::collection($patient->appointments) ?? [],
                'ordonances' => OrdonanceResource::collection($patient->Ordonance) ?? []
            ];
        });
    }
}
