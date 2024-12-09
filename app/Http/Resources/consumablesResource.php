<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class consumablesResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return  [
            "id" => $this->id,
            'product' => $this->product->product_name ?? null,
            'product_nature' => $this->product->product_nature ?? null,
            'quantity' => $this->quantity,
            "date" => $this->operation->created_at->format('Y-m-d H:i:s'),
            "patient" => $this->operation->patient->nom . ' ' . $this->operation->patient->prenom ?? null

        ];
    }
}
