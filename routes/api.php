<?php

use App\Http\Controllers\CategoryController;
use App\Http\Controllers\EmployeeController;
use App\Http\Controllers\PermissionController;
use App\Http\Controllers\RoleController;
use App\Http\Controllers\RoleControllerController;
use App\Http\Controllers\SubCategoryController;
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


Route::apiResource('/employees',EmployeeController::class);
Route::apiResource('/roles',RoleController::class);
Route::apiResource('/permissions',PermissionController::class);
Route::apiResource('/categories',CategoryController::class);
Route::apiResource('/sub_categories',SubCategoryController::class);
Route::post('/assignPermission/{role_id}',[RoleController::class,'assignPermission']);