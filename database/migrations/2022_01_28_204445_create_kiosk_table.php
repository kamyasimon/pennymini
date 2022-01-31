<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateKioskTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('kiosk', function (Blueprint $table) {
            $table->id();
            $table->string('kioskname');
            $table->string('kioskkey');
            $table->string('kioskmanagername');
            $table->string('contactpass');
            $table->string('password');
            $table->integer('access')->default(1);

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
        Schema::dropIfExists('kiosk');
    }
}
