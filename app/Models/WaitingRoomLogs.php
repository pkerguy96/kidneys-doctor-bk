<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class WaitingRoomLogs extends Model
{
    protected $guarded = [];
    use HasFactory;
    public function patient()
    {
        return $this->belongsTo(Patient::class, 'patient_id');
    }
    public function waitingroom()
    {
        return $this->belongsTo(WaitingRoom::class, 'waiting_room_id');
    }
}
