<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateReturnItemsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('return_items', function (Blueprint $table) {
            $table->id();
            $table->foreignId('return_order_id')->constrained()->cascadeOnDelete()->cascadeOnUpdate();
            $table->foreignId('order_item_id')->constrained()->cascadeOnDelete()->cascadeOnUpdate();
            $table->foreignId('return_item_status_id')->constrained()->cascadeOnDelete()->cascadeOnUpdate();
            $table->text('buyer_reason');
            $table->integer('quantity');
            $table->integer('accepted_quantity')->nullable();
            $table->text('organization_reason')->nullable();
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
        Schema::dropIfExists('return_items');
    }
}
