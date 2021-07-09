<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateCartSessionsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('cart_sessions', function (Blueprint $table) {
            $table->id();
            $table->double('total_price');
            $table->foreignId('buyer_id')->constrained()->cascadeOnDelete()->cascadeOnUpdate();
            $table->date('modified_at');
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
        Schema::dropIfExists('cart_sessions');
    }
}
