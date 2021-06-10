<?php

use App\Http\Controllers\ProductController;
use App\Http\Controllers\UserController;
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

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::post("/register",[UserController::class,'register']);
Route::post("/login",[UserController::class,'login']);
Route::post("/add",[ProductController::class,'addProduct']);
Route::get("/productlist",[ProductController::class,'productList']);
Route::delete("/delete/{id}",[ProductController::class,'Delete']);
Route::get("/product/{id}",[ProductController::class,'getProduct']);
Route::post("/updateProduct/{id}",[ProductController::class,'update']);
Route::get("/search/{key}",[ProductController::class,'search']);









