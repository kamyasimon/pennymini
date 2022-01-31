<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateSalesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('sales', function (Blueprint $table) {
            $table->id();
            $table->string('saledate')->default(time());
            $table->string('saleitem');
            $table->string('amount')->default(0);

             /////////////////FK////////////////
             $table->integer('fkcompany');///for user
             $table->foreign('fkcompany')->references('id')->on('company');
             $table->integer('fkkiosk');///for user
             $table->foreign('fkkiosk')->references('id')->on('kiosk');

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
        Schema::dropIfExists('sales');
    }
}
