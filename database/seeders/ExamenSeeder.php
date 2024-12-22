<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class ExamenSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $data = [
            'Scanner' => [
                "TDM abdominale",
                "TDM abdomino-pelve",
                "TDM uro-scanner",
                "TDM pelvienne",
                "TDM Cérébrale",
                "TDM Thoracique",
                "TDM TAP",
            ],
            'IRM' => [
                "IRM abdominale",
                "IRM abdomino-pelve",
                "IRM uro",
                "IRM pelvienne",
                "IRM Cérébrale",
                "IRM Thoracique",
                "IRM TAP",
            ],
            'échographie' => [
                "Échographie abdominale"
            ],
            'radio' => [
                "AUCP"
            ],
        ];

        foreach ($data as $examenName => $preferences) {
            // Insert the examen
            $examenId = DB::table('examens')->insertGetId([
                'name' => $examenName,
                'created_at' => now(),
                'updated_at' => now(),
            ]);

            // Insert the examen preferences
            foreach ($preferences as $preference) {
                DB::table('examenpreferences')->insert([
                    'Examen_category_id' => $examenId,
                    'Examen_type' => $preference,
                    'created_at' => now(),
                    'updated_at' => now(),
                ]);
            }
        }
    }
}
