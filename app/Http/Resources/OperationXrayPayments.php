<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class OperationXrayPayments extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            "id" => $this->id,
            "patient_id" => $this->patient_id,
            'xray_type' => $this->xray_type ? explode(',', $this->xray_type) : [],
            'price' => $this->price,
        ];
    }
}
