<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Storage;
use Illuminate\Database\Eloquent\SoftDeletes;

class Patient extends Model
{
    use HasFactory, SoftDeletes;

    public function getAllergyAttribute($value)
    {
        return $value ? explode(',', $value) : [];
    }

    // Convert disease to an array when retrieving
    public function getDiseaseAttribute($value)
    {
        return $value ? explode(',', $value) : [];
    }

    // Convert referral to an array when retrieving
    public function getReferralAttribute($value)
    {
        return $value ? explode(',', $value) : [];
    }


    protected $fillable = [
        'nom',
        'prenom',
        'cin',
        'date',
        'address',
        'sex',
        'phone_number',
        'mutuelle',
        'note',
        'allergy',
        'disease',
        'referral'
    ];
    protected static function boot()
    {
        parent::boot();
        static::created(function ($patient) {
            // Use the patient's ID to create a folder
            $patientFolder = 'patients/' . $patient->id;
            // Create the folder using the Storage facade
            Storage::disk('public')->makeDirectory($patientFolder);
            // Assign the folder to the patient
            $patient->p_folder = $patientFolder;
            $patient->save(); // Save the patient to persist the changes
        });
    }
    public function appointments()
    {
        return $this->hasMany(Appointment::class, 'patient_id');
    }
    public function Ordonance()
    {
        return $this->hasMany(Ordonance::class, 'patient_id');
    }
    public function Xray()
    {
        return $this->hasMany(Xray::class, 'patient_id');
    }
    public function Payments()
    {
        return $this->hasMany(Payment::class, 'patient_id');
    }

    public function waitingRoom()
    {
        return $this->hasOne(WaitingRoom::class);
    }
    public function operations()
    {
        return $this->hasMany(Operation::class, 'patient_id');
    }
    public function operationsNote()
    {
        return $this->hasMany(OperationNote::class, 'patient_id');
    }
    public function waitingroomlogs()
    {
        return $this->hasMany(waitingroomlogs::class, 'patient_id');
    }
}
