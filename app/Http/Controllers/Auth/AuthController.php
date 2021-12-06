<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\User;

class AuthController extends Controller
{
    public function loginuser(Request $request){

        $keyword=$request->kw;
        $email=$request->email;
        $workid=$request->workid;
        $companyid=$request->companyid;

       

        if(Auth::attempt(['email'=>$request->email,'password'=>$request->password],true))
        {
            return response()->Json(Auth::user(),200);
        }
        else{
            return response()->Json([
                'error'=>'Cannot Login'
            ],401);
        }
    }
}
