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
        Schema::create('bloodtests', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('operation_id')->nullable();
            $table->unsignedBigInteger('patient_id');
            $table->string('blood_test')->nullable();
            $table->timestamps();
            $table->foreign('operation_id')->references('id')->on('operations')->onDelete('cascade');
            $table->foreign('patient_id')->references('id')->on('patients');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('bloodtests');
    }
};
