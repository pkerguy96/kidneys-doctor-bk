<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\ResourceCollection;

class OrdonanceCollection extends ResourceCollection
{
    /**
     * Transform the resource collection into an array.
     *
     * @return array<int|string, mixed>
     */
    public function toArray(Request $request)
    {
        return $this->collection->map(function ($ordonance) {
            return [
                'id' => $ordonance->id,
                'patient_id' => $ordonance->patient_id,
                'date' => $ordonance->date,
                'patient_name' => trim(optional($ordonance->patient)->nom . ' ' . optional($ordonance->patient)->prenom),
                'patient_deleted_at' => $ordonance->patient->deleted_at,
            ];
        });
    }
}
