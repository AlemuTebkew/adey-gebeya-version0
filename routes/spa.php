
<?php

use App\Http\Controllers\Api\Buyer\AuthController;
use App\Http\Controllers\Api\Vendor\SPAAuthController;
use App\Http\Controllers\Api\Employee\SPAAuth2Controller;
use App\Http\Controllers\Api\BookController;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

use App\Http\Controllers\Api\NewPasswordController;
use App\Http\Controllers\Api\Employee\AuthController as EmployeeAuthController;
use App\Http\Controllers\Api\Employee\EmailVerificationController ;

//boy routes
Route::prefix('employee')->name('employee.')->group(function(){

    Route::post('login', [EmployeeAuthController::class, 'login']);
    Route::post('register', [EmployeeAuthController::class, 'register']);
    Route::post('loginVerify', [EmployeeAuthController::class, 'loginWithOtp'])->middleware('auth:sanctum');
    Route::post('forgotPassword', [EmployeeAuthController::class, 'forgotPassword']);
    Route::post('checkOtp', [EmployeeAuthController::class, 'checkOtp']);
    Route::post('resetPassword', [EmployeeAuthController::class, 'resetPassword']);

    Route::post('send-to-verify', [EmailVerificationController::class, 'sendVerificationEmail'])->middleware('auth:sanctum');
    Route::get('verify-email/{id}/{hash}', [EmailVerificationController::class, 'verify'])->name('verification.verify')->middleware(['auth:sanctum','signed']);

    Route::middleware(['auth:sanctum','verified'])->group(function(){
        Route::post('logout', [EmployeeAuthController::class, 'logout']);
        Route::get('/', [EmployeeAuthController::class, 'show']);
        Route::get('all', [EmployeeAuthController::class, 'index']);
        // Route::get('/', function (Request $request) {
        //   return $request->user();
        // });
   });
});
