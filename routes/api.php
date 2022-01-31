<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\Auth;
/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/
Auth::routes();
Route::post('/registeruser', [App\Http\Controllers\Auth\AuthController::class, 'registeruser']);
Route::post('/loginuser', [App\Http\Controllers\Auth\AuthController::class, 'loginuser']);
Route::post('/logoutuser', [App\Http\Controllers\Auth\AuthController::class, 'logout'])->middleware('auth:sanctum');

Route::group(['middleware' => 'auth:sanctum','namespace'=>'Auth'] , function() ////in providers/routerservice providerd Uncomment for name space to work
{ 
    Route::get('/dashboard', [App\Http\Controllers\Auth\DashboardController::class, 'dashboard']);
    Route::post('/getinvestiments', [App\Http\Controllers\InvestimentsController::class, 'getinvestiment']);
});