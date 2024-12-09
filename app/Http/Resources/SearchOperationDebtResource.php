<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;
use Illuminate\Support\Carbon;

class SearchOperationDebtResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray($request)
    {
        $operation = $this->operation ?? $this; // Use `operation` if present, otherwise use current instance

        return [
            'name' => $operation->patient->nom . ' ' . $operation->patient->prenom ?? 'N/A',
            'date' => Carbon::parse($operation->created_at)->toDateString(),
            'total_cost' => (float) $operation->total_cost,
            'operation_type' => $this->operation_type ?? $this->resolveOperationType(),
            'total_amount_paid' => (float) $operation->payments->sum('amount_paid'),
            'amount_due' => (float) $operation->total_cost - (float) $operation->payments->sum('amount_paid'),
        ];
    }


    /**
     * Resolve the operation type.
     * 
     * If the operation comes from hospitals, use the operation_type from outsource_operations.
     * Otherwise, combine xray_type and operation_name.
     *
     * @return string
     */
    public function resolveOperationType()
    {
        // Check if there's an associated outsourceOperation
        if ($this->externalOperations && $this->externalOperations->isNotEmpty()) {
            return $this->externalOperations->pluck('operation_type')->implode(', ');
        }

        // Default to combining xray_type and operation_name
        return $this->mapOperationTypes();
    }

    /**
     * Combine xray_type and operation_name into a single operation_type field.
     *
     * @return string
     */
    public function mapOperationTypes()
    {
        $xrayTypes = $this->xray->pluck('xray_type')->toArray();
        $operationNames = $this->operationdetails->pluck('operation_name')->toArray();

        // Combine both arrays and join with a comma
        $combined = array_merge($xrayTypes, $operationNames);

        return implode(', ', $combined);
    }
}
