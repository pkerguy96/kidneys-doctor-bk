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
        Schema::create('product_operation_consumables', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('operation_id'); // Reference to the operation
            $table->unsignedBigInteger('product_id');  // Reference to the product
            $table->integer('quantity');              // Quantity consumed
            $table->timestamps();

            // Foreign keys
            $table->foreign('operation_id')->references('id')->on('operations');
            $table->foreign('product_id')->references('id')->on('products');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('product_operation_consumables');
    }
};
