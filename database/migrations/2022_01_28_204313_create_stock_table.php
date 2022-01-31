<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateStockTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('stock', function (Blueprint $table) {
            $table->id();
            $table->string('stockdate')->default(time());
            $table->string('stocktype');
            $table->string('stockitem');
            $table->integer('stockprice')->default(0);
            $table->integer('marketprice')->default(0);
            $table->integer('amount')->default(0);
            $table->integer('fkstockstall');
             /////////////////FK////////////////
             $table->integer('fkcompany');///for company
             $table->foreign('fkcompany')->references('id')->on('companies');
             $table->integer('fkuser');///for user
             $table->foreign('fkuser')->references('id')->on('user');
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
        Schema::dropIfExists('stock');
    }
}
