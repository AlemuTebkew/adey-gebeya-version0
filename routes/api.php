<?php

use App\Http\Controllers\AddressController;
use App\Http\Controllers\BuyerStatusController;
use App\Http\Controllers\CategoryController;
use App\Http\Controllers\CategoryStatusController;
use App\Http\Controllers\EmployeeController;
use App\Http\Controllers\EmployeeStatusController;
use App\Http\Controllers\OrderController;
use App\Http\Controllers\OrderStatusController;
use App\Http\Controllers\PaymentTypeController;
use App\Http\Controllers\PaymentTypeStatusController;
use App\Http\Controllers\PermissionController;
use App\Http\Controllers\ProductController;
use App\Http\Controllers\ProductStatusController;
use App\Http\Controllers\ProductVisiblityStatusController;
use App\Http\Controllers\ReturnItemStatusController;
use App\Http\Controllers\ReturnStatusController;
use App\Http\Controllers\ReviewController;
use App\Http\Controllers\ReviewStatusController;
use App\Http\Controllers\RoleController;
use App\Http\Controllers\RoleControllerController;
use App\Http\Controllers\SubCategoryController;
use App\Http\Controllers\UnitController;
use App\Http\Controllers\VendorController;
use App\Http\Controllers\VendorStatusController;
use App\Models\CategoryStatus;
use App\Models\EmployeeStatus;
use App\Models\Order;
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
Route::apiResource('/products',ProductController::class);
Route::apiResource('/reviews',ReviewController::class);
Route::get('/get_product_reviews/{name}',[ReviewController::class,'getProductReview']);
Route::apiResource('/addresses',AddressController::class);
Route::apiResource('/orders',OrderController::class);

Route::apiResource('/vendors',VendorController::class);
Route::apiResource('/roles',RoleController::class);
Route::apiResource('/permissions',PermissionController::class);
Route::apiResource('/categories',CategoryController::class);
Route::apiResource('/sub_categories',SubCategoryController::class);
Route::apiResource('/units',UnitController::class);

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
Route::apiResource('/category_status',CategoryStatusController::class);
Route::apiResource('/payment_types',PaymentTypeController::class);

//-----------employee .......//
//sort
Route::get('/sort_employees',[EmployeeController::class,'sort']);
//filter
Route::get('/filter_employees',[EmployeeController::class,'filter']);
//search
Route::get('/search_employees',[EmployeeController::class,'search']);
//..............end employee...//

//.....category............//
//sort
Route::get('/sort_categories',[CategoryController::class,'sort']);
//filter
Route::get('/filter_categories',[CategoryController::class,'filter']);
//search
Route::get('/search_categories',[CategoryController::class,'search']);
//.....end category...../

//.....subcategory............//
//sort
Route::get('/sort_sub_categories',[SubCategoryController::class,'sort']);
//filter
Route::get('/filter_sub_categories',[SubCategoryController::class,'filter']);
//search
Route::get('/search_sub_categories',[SubCategoryController::class,'search']);
//.....end subcategory...../
Route::post('/assignPermission/{role_id}',[RoleController::class,'assignPermission']);

//.....order related...../
Route::get('/filter_by_tatus/{status}',[OrderController::class,'filterByStatus']);
Route::get('/filter_by_date',[OrderController::class,'filterByDate']);
Route::get('/filter_by_deliveryBoy/{boy}',[OrderController::class,'filterByDeliveryBoy']);
Route::get('/search_by_pin/{pin}',[OrderController::class,'searchByPin']);
Route::get('/search/{pin}',[OrderController::class,'searchByPin']);

//Route::get('/search/{pin}',[EmployeeController::class,'searchByPin']);