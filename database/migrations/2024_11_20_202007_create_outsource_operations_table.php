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
        Schema::create('outsource_operations', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('hospital_id');
            $table->unsignedBigInteger('patient_id');
            $table->unsignedBigInteger('operation_id');
            $table->string('operation_type');
            $table->text('description')->nullable();
            $table->date('operation_date');
            $table->decimal('total_price', 10, 2); // Replacing 'price' with 'total_price'
            $table->decimal('amount_paid', 10, 2); // Adding 'amount_paid'
            $table->decimal('fee', 10, 2)->nullable(); // Adding 'amount_paid'
            $table->timestamps();

            // Foreign keys
            $table->foreign('hospital_id')->references('id')->on('hospitals');
            $table->foreign('patient_id')->references('id')->on('patients');
            $table->foreign('operation_id')->references('id')->on('operations');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('outsource_operations');
    }
};
