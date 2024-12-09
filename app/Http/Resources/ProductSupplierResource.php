<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class ProductSupplierResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'id' => $this->id,
            'supplier_id' => $this->supplier_id,
            'product_name' => $this->product->product_name ?? null,
            'supplier_name' => $this->supplier->company_name ?? null,
            'contact_person' => $this->supplier->contact_person ?? null,
            'quantity' => $this->quantity,
            'buy_price' => $this->buy_price,
            'sell_price' => $this->sell_price,
            'expiry_date' => $this->expiry_date,
            'invoice' => $this->invoice,
            'created_at' => $this->created_at->format('Y-m-d'),

        ];
    }
}
