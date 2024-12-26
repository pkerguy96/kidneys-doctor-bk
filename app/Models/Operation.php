<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Operation extends Model
{
    use SoftDeletes;
    protected $guarded = [];
    use HasFactory;
    public function patient()
    {
        return $this->belongsTo(Patient::class, 'patient_id')->withTrashed();
    }
    public function operationdetails()
    {
        return $this->hasMany(operation_detail::class, 'operation_id');
    }
    public function payments()
    {
        return $this->hasMany(Payment::class, 'operation_id');
    }
    public function xray()
    {
        return $this->hasMany(Xray::class, 'operation_id');
    }
    public function ProductConsumable()
    {
        return $this->hasMany(ProductOperationConsumables::class, 'operation_id');
    }
    public function externalOperations()
    {
        return $this->hasMany(outsourceOperation::class, 'operation_id');
    }
    public function OperationNote()
    {
        return $this->hasOne(OperationNote::class, 'operation_id');
    }
}
