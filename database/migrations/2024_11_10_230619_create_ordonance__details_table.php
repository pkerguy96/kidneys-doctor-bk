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
        Schema::create('ordonance_details', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('ordonance_id');
            $table->string('medicine_name');
            $table->text('note')->nullable();
            $table->timestamps();
            $table->foreign('ordonance_id')->references('id')->on('ordonances')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('ordonance_details');
    }
};
