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
        Schema::create('operation_prefs', function (Blueprint $table) {
            $table->id();
            $table->string('operation_type', 191); // Name of the operation
            $table->decimal('price', 8, 2); // Price of the operation
            $table->string('code', 50)->nullable(); // Optional operation code
            $table->softDeletes();
            $table->timestamps(); // Created at and updated at timestamps
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('operation_prefs');
    }
};
