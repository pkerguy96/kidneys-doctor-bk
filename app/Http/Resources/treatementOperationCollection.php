<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\ResourceCollection;

class treatementOperationCollection extends ResourceCollection
{
    /**
     * Transform the resource collection into an array.
     *
     * @return array<int|string, mixed>
     */
    public function toArray(Request $request)
    {
        return $this->collection->map(function ($operation) {
            return [
                'id' => $operation->id,
                'name' => $operation->patient->nom . ' ' . $operation->patient->prenom,
                'date' => $operation->created_at->toDateString(),
                'cost' => $operation->total_cost,
                'treatment_nbr' => $operation->treatment_nbr,
                'operation_names' => $operation->operationdetails
                    ? $operation->operationdetails->pluck('operation_name')->implode(', ')
                    : '', // Convert to string separated by commas
                'xray_types' => $operation->xray
                    ? $operation->xray->pluck('xray_type')->implode(', ')
                    : '', // Convert to string separated by commas
            ];
        });
    }
}
