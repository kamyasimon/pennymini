<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Investiments extends Model
{
    protected $table = "investiments";
    protected $fillable = [
        'investimentcapital',
        'currentcapital',
        'stockcapital',
        'withdraw',
        'balance',
        'profits',
        'fkuser',
       
    ];
}