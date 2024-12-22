<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Examen extends Model
{
    use SoftDeletes;
    protected $guarded = [];
    use HasFactory;
    public function examenprefs()
    {
        return $this->hasMany(Examenpreferences::class, 'Examen_category_id')->withTrashed();
    }
}
