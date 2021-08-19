<?php

namespace App\Http\Controllers\Api\Employee;

use App\Http\Controllers\Controller;
use App\Http\Requests\EmployeeRequest;
use App\Http\Traits\ApiMessage;
use App\Models\Buyer;
use App\Models\Employee;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Session;

class AuthController extends Controller
{
    use ApiMessage;

    protected function guard()
    {
        return Auth::guard('employee');
    }

    public function login(Request $request)
    {
        /////
        $employee = Employee::where('email', $request->email)->first();
        if (!$employee || !password_verify($request->password, $employee->password)) {

             $error='These credentials do not match our records.';
             $errors= [
                'email' => 'These credentials do not match our records.',
                  ];
           return $this->sendError($error,$errors,422);
        }
            // Authentication passed...
        Auth::guard('employee')->login($employee);

       $message='LoggedIn Succesfully ';
       $data= [
          'employee'=> $employee,
          'role'=> $employee->role,
          'permissions'=>$employee->role->permissions,
        ];
        return $this->sendResponse($data,$message);
    }

    public function logout()
    {
       $this->guard()->logout();
        return response()->json(['message' => 'Logged Out'], 200);
//or
        // Session::flush();
        // $success = true;
        // $message = 'Successfully logged out';
    }
}



