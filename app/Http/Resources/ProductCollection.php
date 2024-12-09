<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\ResourceCollection;

class ProductCollection extends ResourceCollection
{
    /**
     * Transform the resource collection into an array.
     *
     * @return array<int|string, mixed>
     */
    public function toArray(Request $request)
    {
        return $this->collection->map(function ($product) {
            return [
                'id' => $product->id,
                'bar_code' => $product->bar_code,
                'product_name' => $product->product_name,
                'product_family' => $product->product_family,
                'product_nature' => $product->product_nature,
                'min_stock' => (int) $product->min_stock,
                'qte' => (int) $product->qte
            ];
        });
    }
}
