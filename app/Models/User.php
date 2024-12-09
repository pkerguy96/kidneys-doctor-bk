<?php

namespace App\Models;

/**
 * @method \Illuminate\Database\Eloquent\Relations\MorphMany tokens()
 */
// use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;
use Spatie\Permission\Traits\HasRoles;

class User extends Authenticatable
{
    use HasApiTokens, HasFactory, Notifiable, HasRoles;

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $guarded = [];


    /**
     * The attributes that should be hidden for serialization.
     *
     * @var array<int, string>
     */
    protected $hidden = [
        'password',
        'remember_token',
    ];

    /**
     * The attributes that should be cast.
     *
     * @var array<string, string>
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
    ];
    public function Notifications()
    {
        return $this->hasMany(Notification::class, 'user_id');
    }

    protected static function booted()
    {
        static::creating(function ($user) {


            if ($user->role === 'doctor') {
                // Assign the role using the sanctum guard
                $role = \Spatie\Permission\Models\Role::where('name', 'doctor')
                    ->where('guard_name', 'sanctum')
                    ->first();

                if ($role) {
                    $user->assignRole($role);
                } else {
                    throw new \Exception('Role `doctor` with guard `sanctum` does not exist.');
                }
            }
        });
        static::created(
            function ($user) {
                UserPreference::create([
                    'doctor_id' => $user->id,
                    'kpi_date' => $user->role === 'doctor' ?  'year' : 'day',
                ]);
            }
        );
    }
}
