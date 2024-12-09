<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Product extends Model
{
    protected $guarded = [];
    use HasFactory,  SoftDeletes;

    public function ProductSupplier()
    {
        return $this->hasMany(Product::class, 'product_id');
    }

    public function ProductConsumable()
    {
        return $this->hasMany(ProductOperationConsumables::class, 'product_id');
    }
}
