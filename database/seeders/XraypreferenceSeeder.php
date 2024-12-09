<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Xraypreference;

class XraypreferenceSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $xrayTypes = [
            ["title" => "Crâne"],
            ["title" => "Cou (Rachis cervical)"],
            ["title" => "Thorax"],
            ["title" => "Épaule"],
            ["title" => "Coude"],
            ["title" => "Poignet"],
            ["title" => "Hanche"],
            ["title" => "Bassin"],
            ["title" => "Genou"],
            ["title" => "Cheville"],
            ["title" => "Pied"],
            ["title" => "Main"],
            ["title" => "Rachis dorsal (Thoracique)"],
            ["title" => "Rachis lombaire"]
        ];

        foreach ($xrayTypes as $xrayType) {
            Xraypreference::create([
                'xray_type' => $xrayType['title'],
                'price' => mt_rand(50, 800), // Random price between 50 and 200
            ]);
        }
    }
}
