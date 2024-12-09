<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class hospital extends Model
{
    protected $guarded = [];
    use HasFactory;

    public function outsource()
    {
        return $this->hasMany(outsourceOperation::class, 'hospital_id');
    }
}
