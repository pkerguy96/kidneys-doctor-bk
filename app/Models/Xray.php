<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Xray extends Model
{
    use SoftDeletes;
    protected $guarded = [];
    use HasFactory;
    public function preference()
    {
        return $this->belongsTo(Xraypreference::class, 'xray_preference_id');
    }
    public function Operation()
    {
        return $this->belongsTo(Operation::class, 'operation_id');
    }
    public function patient()
    {
        return $this->belongsTo(Patient::class, 'patient_id')->withTrashed();
    }
}
