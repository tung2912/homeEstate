<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\CityController;
use App\Http\Controllers\ClientController;
use App\Http\Controllers\EstateController;
use App\Http\Controllers\BlogController;
use App\Http\Controllers\SubscribeController;
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
    Route::get('listEstateAroundMillion',[EstateController::class,'apiEstateAroundMillion']);
    Route::get('listEstateAffordable',[EstateController::class,'apiEstateAffordable']);
    Route::get('ListEstateLuxury',[EstateController::class,'apiEstateLuxury']);
    Route::post('createEstate',[EstateController::class,'apiUploadEstate']);
    Route::get('search/{searchValue}', [EstateController::class, 'searchEstatesByCity']);
});

Route::prefix('cities')->group(function () {
    Route::get('all',[CityController::class,'apiAllCity']);
});

Route::prefix('subscribes')->group(function (){
    Route::post('subForOwner',[SubscribeController::class,'apiAddSubForOwner']);
    Route::post('subForClient',[SubscribeController::class,'apiAddSubForClient']);

});

Route::prefix('owner')->group(function(){
    Route::get('ownerInfo/{owner_id}',[ClientController::class,'apiGetOwnerDetail']);
});

Route::prefix('blog')->group(function () {
    Route::get('allBlog', [BlogController::class, 'apiAllBlogs']);
    Route::get('newBlog', [BlogController::class, 'apiNewBlogs']);
    Route::get('popularBlog', [BlogController::class, 'apiOldBlogs']);
    Route::get('detail/{blog_id}', [BlogController::class, 'apiBlogDetail']);
});
