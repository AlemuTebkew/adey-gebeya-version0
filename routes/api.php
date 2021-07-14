<?php

use App\Http\Controllers\BuyerStatusController;
use App\Http\Controllers\CategoryController;
use App\Http\Controllers\EmployeeController;
use App\Http\Controllers\EmployeeStatusController;
use App\Http\Controllers\OrderStatusController;
use App\Http\Controllers\PaymentTypeStatusController;
use App\Http\Controllers\PermissionController;
use App\Http\Controllers\ProductStatusController;
use App\Http\Controllers\ProductVisiblityStatusController;
use App\Http\Controllers\ReturnItemStatusController;
use App\Http\Controllers\ReturnStatusController;
use App\Http\Controllers\ReviewStatusController;
use App\Http\Controllers\RoleController;
use App\Http\Controllers\RoleControllerController;
use App\Http\Controllers\SubCategoryController;
use App\Http\Controllers\VendorStatusController;
use App\Models\EmployeeStatus;
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
//status table routes
Route::apiResource('/employee_status',EmployeeStatusController::class);
Route::apiResource('/payment_type_status',PaymentTypeStatusController::class);
Route::apiResource('/product_status',ProductStatusController::class);
Route::apiResource('/product_visiblity_status',ProductVisiblityStatusController::class);
Route::apiResource('/return_item_status',ReturnItemStatusController::class);
Route::apiResource('/return_order_status',ReturnStatusController::class);//return order status
Route::apiResource('/review_status',ReviewStatusController::class);
Route::apiResource('/vendor_status',VendorStatusController::class);
Route::apiResource('/order_status',OrderStatusController::class);
Route::apiResource('/buyer_status',BuyerStatusController::class);
//
Route::post('/assignPermission/{role_id}',[RoleController::class,'assignPermission']);
