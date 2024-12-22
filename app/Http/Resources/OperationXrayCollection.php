<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\ResourceCollection;

class OperationXrayCollection extends ResourceCollection
{
    /**
     * Transform the resource collection into an array.
     *
     * @return array<int|string, mixed>
     */
    public function toArray(Request $request)
    {
        return $this->collection->map(function ($xray) {
            return [
                "id" => $xray->id,
                'operation_id' => $xray->operation_id,
                'patient_id' => $xray->patient_id,
                'xray_type' => $xray->xray_name,

                'price' => (int) $xray->price,
            ];
        })->all(); // Use `all()` to convert the collection to an array
    }
}
