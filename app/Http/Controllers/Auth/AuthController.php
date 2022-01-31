<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;
use App\Models\User;
use App\Models\Investiments;

class AuthController extends Controller
{

    public function loginuser(Request $request){

        $keyword=$request->kw;
        $email=$request->email;
        $workid=$request->workid;
        $companyid=$request->companyid;

       

        if(Auth::attempt(['email'=>$request->email,'password'=>$request->password],true))
        {
           

            $user = Auth::user(); 
           $token= $user->createToken('usertoken')->plainTextToken;
            $response=[
                $user,
                $token
            ]; 
            return $response;
        }
        else{
            return response()->Json([
                'error'=>'Cannot Login'
            ],401);
        }
    }

    public function registeruser(Request $request){
        $regdata = $request->validate([
            'firstname' => ['required', 'string', 'max:255'],
            'lastname' => ['required', 'string', 'max:255'],
            'telephone' => ['required', 'string', 'max:10'],
            'email' => ['required', 'string', 'email', 'max:255', 'unique:users'],
            'password' => ['required', 'string', 'min:8', ],
        ]);
      
        $user= User::create([
            'firstname' => $regdata['firstname'],
            'lastname' => $regdata['lastname'],
            'telephone' => $regdata['telephone'],
            'email' => $regdata['email'],
            'password' => Hash::make($regdata['password']),
        ]);

       // dd($user->id);
        $createinvestiments = Investiments::create([
            'fkuser'=>$user->id,
        ]);

       

      //  $token= $user->createToken('usertoken')->plainTextToken;

        $response=[
           'user'=> $user,
         //  'token'=> $token
        ];
       
        return response($response,201);
    }

    public function logout(Request $request){
        Auth::user()->tokens()->delete();

        $response= [
            'messege' =>'logout',
        ];
       
        return response($response,200);
    }
}
