<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\EstateController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

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

Route::middleware('api')->prefix('auth')->group(function(){
    Route::post('login',[AuthController::class,'login']);
    Route::post('register',[AuthController::class,'register']);
    Route::post('logout',[AuthController::class,'logout']);
    Route::get('profile',[AuthController::class,'profile']);
    Route::post('profile',[AuthController::class,'profile']);
    Route::post('refresh',[AuthController::class,'refresh']);
});

Route::prefix('estate')->group(function () {
    Route::get('listNewestEstate',[EstateController::class,'apiNewEstEstate']);
    Route::get('detail/{estate_id}',[EstateController::class,'apiEstateDetail']);
    Route::post('search/{request}', [EstateController::class, 'searchEstatesByCity']);
    Route::get('listEstateAroundMillion',[EstateController::class,'apiEstateAroundMillion']);
    Route::get('listEstateAffordable',[EstateController::class,'apiEstateAffordable']);
    Route::get('ListEstateLuxury',[EstateController::class,'apiEstateLuxury']);
});
