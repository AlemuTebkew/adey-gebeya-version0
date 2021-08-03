<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateProductsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('products', function (Blueprint $table) {
            $table->id();

            $table->string('name');
            $table->string('slug');
            $table->text('description');
            $table->text('short_description');
            $table->Date('production_date');
            $table->Date('expired_date');
            $table->double('commission_rate');
            $table->string('brand');
            $table->double('total_quantity')->nullable();
            $table->string('manufacturer');
            $table->integer('number_of_sold');
            $table->foreignId('unit_id')->constrained()->cascadeOnDelete()->cascadeOnUpdate();
            $table->foreignId('vendor_id')->constrained()->cascadeOnDelete()->cascadeOnUpdate();
            $table->foreignId('sub_category_id')->constrained()->cascadeOnDelete()->cascadeOnUpdate();
            $table->foreignId('product_status_id')->constrained()->cascadeOnDelete()->cascadeOnUpdate();
            $table->foreignId('product_visiblity_status_id')->constrained()->cascadeOnDelete()->cascadeOnUpdate();
            $table->foreignId('category_id')->constrained()->cascadeOnDelete()->cascadeOnUpdate();

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
        Schema::dropIfExists('products');
    }
}
