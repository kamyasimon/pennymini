<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateInvestimentsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('investiments', function (Blueprint $table) {
            $table->id();
            $table->integer('investimentcapital')->default(0);
            $table->integer('currentcapital')->default(0);
            $table->integer('stockcapital')->default(0);
            $table->integer('withdraw')->default(0);
            $table->integer('balance')->default(0);
            $table->integer('profits')->default(0);

            /////////////////FK////////////////
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
        Schema::dropIfExists('investiments');
    }
}
