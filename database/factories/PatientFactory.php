<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Patient>
 */
use Illuminate\Support\Str;
use App\Models\Patient;
class PatientFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
     protected $model = Patient::class;
    public function definition(): array
    {
        return [
            'nom' => $this->faker->lastName,
            'prenom' => $this->faker->firstName,
            'cin' => strtoupper(Str::random(6)), // Example for CIN
            'date' => $this->faker->date(),
            'address' => $this->faker->address,
            'sex' => $this->faker->randomElement(['male', 'female']),
            'phone_number' => $this->faker->phoneNumber,
            'mutuelle' => $this->faker->word,
            'note' => $this->faker->sentence,
            'p_folder' => $this->faker->word,
        ];
    }
}
