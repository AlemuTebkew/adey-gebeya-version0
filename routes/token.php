
<?php

use App\Http\Controllers\Api\Buyer\BuyerAuthController;
use App\Http\Controllers\Api\Boy\DeliveryController;
use App\Http\Controllers\Api\Vendor\SPAAuthController;
use App\Http\Controllers\Api\Employee\SPAAuth2Controller;
use App\Http\Controllers\Api\BookController;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

use App\Http\Controllers\Api\NewPasswordController;
use App\Http\Controllers\Api\EmailVerificationController;

// //boy routes
// Route::prefix('boy')->name('boy.')->group(function(){

//     Route::post('login', [DeliveryController::class, 'login']);
//     Route::post('register', [DeliveryController::class, 'register']);
//     Route::post('loginVerifyy', [DeliveryController::class, 'loginWithOtp'])->middleware('auth:sanctum');
//     Route::post('forgotPassword', [DeliveryController::class, 'forgotPassword']);
//     Route::post('checkOtp', [DeliveryController::class, 'checkOtp']);
//     Route::post('resetPassword', [DeliveryController::class, 'resetPassword']);

//     Route::middleware(['auth:sanctum','phoneVerified'])->group(function(){
//         Route::post('logout', [DeliveryController::class, 'logout']);
//         Route::get('/', [DeliveryController::class, 'show']);
//         Route::get('all', [DeliveryController::class, 'index']);
//         // Route::get('/', function (Request $request) {
//         //   return $request->user();
//         // });
//    });
// });

//buyer routes
Route::prefix('buyer')->name('buyer.')->group(function(){
    Route::post('login', [BuyerAuthController::class, 'login']);
    Route::post('register', [BuyerAuthController::class, 'register']);
    Route::post('loginVerify', [BuyerAuthController::class, 'loginWithOtp'])->middleware('auth:sanctum');
    Route::post('forgotPassword', [BuyerAuthController::class, 'forgetPassword']);
    Route::post('checkOtp', [BuyerAuthController::class, 'checkOtp']);
    Route::post('resetPassword', [BuyerAuthController::class, 'resetPassword']);

    Route::middleware(['auth:sanctum','phoneVerified'])->group(function(){

        Route::post('logout', [BuyerAuthController::class, 'logout']);
        Route::get('/', [BuyerAuthController::class, 'show']);
        Route::get('all', [BuyerAuthController::class, 'index']);
    });


});
