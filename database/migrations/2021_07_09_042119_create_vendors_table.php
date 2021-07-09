<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateVendorsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('vendors', function (Blueprint $table) {
            $table->id();
            $table->string('contact_first_name');
            $table->string('contact_last_name');
            $table->date('date_of_birth');
            $table->string('email')->unique();
            $table->string('contact_phone_number')->unique();
            $table->string('gender');
            $table->string('password');
            $table->string('campany_name');
            $table->string('url');
            $table->string('fax');
            $table->string('company_phone_number');
            $table->foreignId('address_id')->constrained()->cascadeOnDelete()->cascadeOnUpdate();
            $table->foreignId('vendor_status_id')->constrained()->cascadeOnDelete()->cascadeOnUpdate();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('vendors');
    }
}
