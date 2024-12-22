<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class XrayCategory extends Model
{
    use SoftDeletes;
    protected $guarded = [];
    use HasFactory;
    public function xrayprefs()
    {
        return $this->hasMany(Xraypreference::class, 'xray_category_id')->withTrashed();
    }
}
