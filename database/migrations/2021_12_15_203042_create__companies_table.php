<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateCompaniesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('companies', function (Blueprint $table) {
            $table->id();
            $table->string('businessname');
            $table->string('companykey');
            $table->integer('manager')->nullable();
            $table->integer('access')->default(1);

                /////FK///////
                $table->integer('fk_suprememanager')->unsigned();///for the topic  the subtopic topic belongs to
                $table->foreign('fk_suprememanager')->references('id')->on('user');
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
        Schema::dropIfExists('_companies');
    }
}
