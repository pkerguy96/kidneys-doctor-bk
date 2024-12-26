<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class OperationNote extends Model
{
    protected $guarded = [];
    use HasFactory;
    public function Operation()
    {
        return $this->belongsTo(Operation::class, 'operation_id');
    }
}
