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
    public function getFormattedBloodTestsAttribute()
    {
        // Explode comma-separated fields into arrays
        $titles = explode('|', $this->title);
        $codes = explode('|', $this->code);
        $delais = explode('|', $this->delai);
        $prices = explode('|', $this->price);

        // Format blood test rows
        $bloodTests = [];
        foreach ($titles as $index => $title) {
            $bloodTests[] = [
                'title' => $title,
                'code' => $codes[$index] ?? null,
                'delai' => $delais[$index] ?? null,
                'price' => $prices[$index] ?? null,
            ];
        }

        return $bloodTests;
    }
}
