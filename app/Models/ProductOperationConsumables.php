<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ProductOperationConsumables extends Model
{
    protected $guarded = [];
    use HasFactory;
    public function Product()
    {
        return $this->belongsTo(Product::class, 'product_id');
    }
    public function Operation()
    {
        return $this->belongsTo(Operation::class, 'operation_id');
    }
}
