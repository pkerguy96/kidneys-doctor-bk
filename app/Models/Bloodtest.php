<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Bloodtest extends Model
{
    protected $guarded = [];
    use HasFactory;
    public function Ordonance()
    {
        return $this->belongsTo(Ordonance::class, 'ordonance_id');
    }
    public function Patient()
    {
        return $this->belongsTo(Patient::class, 'patient_id')->withTrashed();
    }
}
