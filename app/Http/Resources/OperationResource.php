<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class OperationResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        /*    $this->externalOperations->patient = $this->patient; */
        return [
            'outsource' => $this->outsource,
            'patient_id' =>  $this->patient_id ?? null,
            'patient_name' =>  $this->patient ? ($this->patient->nom . ' ' . $this->patient->prenom) : 'No patient',

            'operation_details' => OperationDetailResource::collection($this->operationdetails),
            'xrays' => OperationXrayPayments::collection($this->xray),
            'externalOperation' => hospitaloperationresource::collection($this->externalOperations),
            'payments' => PayementResource::collection($this->payments),
            'total_cost' => $this->total_cost,
            'is_paid' => $this->is_paid,
            'note' => $this->note,
        ];
    }
}
