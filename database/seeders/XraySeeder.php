<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class XraySeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        // Define the data
        $data = [
            'échographie' => [
                ['name' => "Abdomino pelvienne", 'price' => 200],
                ['name' => "Scrotale", 'price' => 250],
            ],
            'Cystoscopie' => [
                ['name' => "Exploration", 'price' => 700],
                ['name' => "Ablation de sonde jj", 'price' => 1200],
            ],
            'Gestes' => [
                ['name' => "Biopsie prostatique", 'price' => 300],
                ['name' => "dilatation au béniquet", 'price' => 200],
            ],
            'Urgences' => [
                ['name' => "RA sondage vésicale", 'price' => 800],
                ['name' => "Hématurie sondage à 03 voies", 'price' => 600],
                ['name' => "CN / PNA injection IM,IV,VV", 'price' => 750],
            ],
        ];

        foreach ($data as $categoryName => $preferences) {
            // Insert category and get its ID
            $categoryId = DB::table('xray_categories')->insertGetId([
                'name' => $categoryName,
                'created_at' => now(),
                'updated_at' => now(),
            ]);

            // Insert preferences for the category
            foreach ($preferences as $preference) {
                DB::table('xraypreferences')->insert([
                    'xray_category_id' => $categoryId,
                    'xray_type' => $preference['name'],
                    'price' => $preference['price'],
                    'created_at' => now(),
                    'updated_at' => now(),
                ]);
            }
        }
    }
}
