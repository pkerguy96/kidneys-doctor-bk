<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class ProductResource extends JsonResource
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
            'bar_code' => $this->bar_code,
            'product_name' => $this->product_name,
            'product_family' => $this->product_family,
            'product_nature' => $this->product_nature,
            'min_stock' => (int) $this->min_stock,
            'qte' => (int) $this->qte
        ];
    }
}
