<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\ResourceCollection;

class PatientsWaitingRoomCollection extends ResourceCollection
{
    /**
     * Transform the resource collection into an array.
     *
     * @return array<int|string, mixed>
     */
    public function toArray(Request $request)
    {
        return $this->collection->map(function ($patient) {
            return [
                'id' => $patient->id,
                'name' => $patient->nom . ' ' . $patient->prenom,
                'phone' => $patient->phone_number
            ];
        })->all();
    }
}
