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
        Schema::create('suppliers', function (Blueprint $table) {
            $table->id();

            $table->string('address')->nullable(); // Address of the supplier
            $table->string('phone')->nullable(); // Phone number of the supplier
            $table->string('email')->nullable(); // Email address of the supplier
            $table->string('contact_person')->nullable(); // Name of the contact person
            $table->string('company_name')->nullable(); // Company name if applicable
            $table->string('supply_type')->nullable(); // Type of supplies (e.g., medical equipment)
            $table->string('tax_id')->nullable(); // Tax Identification Number for invoicing        
            $table->enum('status', ['active', 'inactive'])->default('active'); // Status of the supplier
            $table->text('note')->nullable(); // Additional notes or comments
            $table->timestamps(); // Timestamps for created_at and updated_at
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('suppliers');
    }
};
