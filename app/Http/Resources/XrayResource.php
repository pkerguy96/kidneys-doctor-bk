<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class XrayResource extends JsonResource
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
            "operation_id" => $this->operation_id ?? null,
            'xray_type' => $this->xray_type ? explode(',', $this->xray_type) : [],
            'view_type' => $this->view_type ? explode(',', $this->view_type) : [],
            'body_side' => $this->body_side ? explode(',', $this->body_side) : [],
            'type' => $this->type,
            'note' => $this->note,
            'price' => $this->price,
        ];
    }
}
