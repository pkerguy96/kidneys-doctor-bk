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
        Schema::create('operation_notes', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('operation_id');
            $table->unsignedBigInteger('patient_id')->nullable();
            $table->longText('note')->nullable();
            $table->timestamps();
            $table->foreign('operation_id')->references('id')->on('operations')->onDelete('cascade');
            $table->foreign('patient_id')->references('id')->on('patients')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('operation_notes');
    }
};
