<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Str;
use App\Models\User;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\User>
 */
class UserFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    protected $model = User::class;
    public function definition(): array
    {
        return [
            'nom' => $this->faker->firstName,
            'prenom' => $this->faker->lastName,
            'date' => $this->faker->date(),
            'address' => 'rue alfred bouge',
            'sex' => $this->faker->randomElement(['male', 'female']),
            'role' => $this->faker->randomElement(['doctor']),
            'phone_number' => $this->faker->unique()->phoneNumber,
            'email' => 'admin@admin.com',
            'password' => bcrypt('password'), // Default password
            'profile_picture' => null,
        ];
    }

    /**
     * Indicate that the model's email address should be unverified.
     *
     * @return $this
     */
    public function unverified(): static
    {
        return $this->state(fn(array $attributes) => [
            'email_verified_at' => null,
        ]);
    }
}
