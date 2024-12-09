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
        Schema::create('operation_details', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('operation_id');
            $table->string('operation_name')->nullable();
            $table->decimal('price', 10, 2);
            $table->string('type')->nullable();
            $table->softDeletes();
            $table->timestamps();
            $table->foreign('operation_id')->references('id')->on('operations')->onDelete('cascade');


            /*    $table->foreign('operation_type')->references('operation_type')->on('operation_preferences')->onDelete('cascade'); */
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('operation_details');
    }
};
/* TESSTS */