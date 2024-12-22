<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('examenpreferences', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('Examen_category_id');
            $table->string('Examen_type');
            $table->softDeletes();
            $table->timestamps();
            $table->foreign('Examen_category_id')->references('id')->on('examens');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('examenpreferences');
    }
};
