<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Investiments;

class InvestimentsController extends Controller
{
    //
    public function getinvestiment(Request $request){
       // dd($request->user);
        $investiment=Investiments::where('fkuser',$request->user)->get();
      //  dd($investiment);
        return response()->json($investiment);
    }
   
    public function invest(Request $request){
        

    }

}
