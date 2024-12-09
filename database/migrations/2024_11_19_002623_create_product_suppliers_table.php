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
        Schema::create('product_suppliers', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('supplier_id'); // Reference to supplier
            $table->unsignedBigInteger('product_id');  // Reference to product
            $table->integer('quantity');              // Quantity purchased
            $table->decimal('buy_price', 10, 2);          // Price per unit
            $table->decimal('sell_price', 10, 2);          // Price per unit
            $table->date('expiry_date')->nullable();  // Expiry date of the batch
            $table->string("invoice")->nullable();
            $table->timestamps();                    // Created and updated timestamps

            // Foreign keys
            $table->foreign('supplier_id')->references('id')->on('suppliers');
            $table->foreign('product_id')->references('id')->on('products');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('product_suppliers');
    }
};
