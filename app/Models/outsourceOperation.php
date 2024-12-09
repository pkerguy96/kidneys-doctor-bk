<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class outsourceOperation extends Model
{
    /*     protected $casts = [
        'operation_date' => 'datetime',
    ]; */
    protected $guarded = [];
    use HasFactory;

    public function hospital()
    {
        return $this->belongsTo(hospital::class, 'hospital_id');
    }
    public function patient()
    {
        return $this->belongsTo(Patient::class, 'patient_id')->withTrashed();
    }
    public function operation()
    {
        return $this->belongsTo(Operation::class, 'operation_id');
    }
}
