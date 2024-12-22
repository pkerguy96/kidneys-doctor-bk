<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\ResourceCollection;

class OperationPaymentCollection extends ResourceCollection
{
    /**
     * Transform the resource collection into an array.
     *
     * @return array<int|string, mixed>
     */
    public function toArray(Request $request)
    {
        return $this->collection->map(function ($operation) {
            $totalAmountPaid = $operation->payments->sum('amount_paid');
            return [
                'id' => $operation->id,
                'full_name' => $operation->patient->nom . ' ' . $operation->patient->prenom,
                'Mutuelle' => $operation->patient->mutuelle,
                'date' => $operation->created_at->toDateString(),
                'total_cost' => number_format($operation->total_cost, 2),
                'totalPaid' => number_format($totalAmountPaid, 2),
                'isPaid' => (bool) $operation->is_paid,
            ];
        });
    }
}
