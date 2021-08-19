<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Resources\EmployeeResource;
use App\Models\Employee;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Password;
use Response;
use Validator;
use function request;

class ForgotController extends Controller
{
    public function forgot(Request $request)
    {
        $credentials = request()->validate(['email' => 'required|email']);
        if(Employee::query()->where('email',$credentials)->doesntExist()){
            return response()->json([
                "msg" => "Email Not found"
            ],404);
        }
        Password::sendResetLink($credentials);

        return response()->json(["msg" => 'Reset password link sent on your email id.']);
    }

    public function reset(Request $request){
        $this->validate($request, [
            'token' => 'required',
            'email' => 'required|email',
            'password' => 'required|confirmed|min:6',
        ]);

        $employee = Employee::where('email',$request->email)->first();
//        dd();
        $employee->password = bcrypt(\request()->password);
        $employee->save();
        return response()->json([
            'message' => 'Employee Reset Password Successfully',
        ], 200);
    }
}
