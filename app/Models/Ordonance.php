<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\Ordonance_Details;

class Ordonance extends Model
{
    protected $guarded = [];
    use HasFactory;
    public function OrdonanceDetails()
    {
        return $this->hasMany(Ordonance_Details::class, 'ordonance_id');
    }
    public function Operation()
    {
        return $this->belongsTo(Operation::class, 'operation_id');
    }
    public function Patient()
    {
        return $this->belongsTo(Patient::class, 'patient_id')->withTrashed();
    }
}
