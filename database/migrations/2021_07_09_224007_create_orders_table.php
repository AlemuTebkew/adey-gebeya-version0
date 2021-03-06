<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateOrdersTable extends Migration
{
 
    
    public function up()
    {
        Schema::create('orders', function (Blueprint $table) {
            $table->id();
            $table->integer('pin');
            $table->dateTime('expected_time');
           //nullable
            $table->dateTime('delivered_at')->nullable();
            $table->dateTime('return_end_date');
           //nullable
            $table->foreignId('employee_id')->nullable()->constrained()->cascadeOnDelete()->cascadeOnUpdate();
            $table->foreignId('buyer_id')->constrained()->cascadeOnDelete()->cascadeOnUpdate();
            $table->foreignId('payment_detail_id')->constrained()->cascadeOnDelete()->cascadeOnUpdate();
            $table->foreignId('order_status_id')->constrained()->cascadeOnDelete()->cascadeOnUpdate();
            $table->foreignId('shipping_address_id')->constrained()->cascadeOnDelete()->cascadeOnUpdate();
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
        Schema::dropIfExists('orders');
    }
}
