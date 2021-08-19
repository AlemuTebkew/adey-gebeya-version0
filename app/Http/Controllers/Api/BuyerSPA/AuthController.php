<?php

namespace App\Http\Controllers\Api\BuyerSPA;

use App\Http\Controllers\Controller;
use App\Http\Requests\BuyerRequest;
use App\Models\Buyer;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Session;

class AuthController extends Controller
{
    public function register(BuyerRequest $request)
    {

        $buyer = $this->create($request->all());
        if(!$buyer){
            $error='registration not succssefull.';

          return $this->sendError($error,'',422);
        }
      //  $this->guard()->login($buyer);
      $message='Registered Succesfully ';
      $data= [
         'buyer'=> $buyer,
       ];
       return $this->sendResponse($data,$message);
    }


  // a methode for creating new buyer
    protected function create(array $data)
    {
        return Buyer::create([
            'name' => $data['name'],
            'email' => $data['email'],
            'phone' => $data['phone'],
            'password' => Hash::make($data['password']),
        ]);
    }
    protected function guard()
    {
        return Auth::guard('buyer');
    }

    public function login(Request $request)
    {
        $buyer = Buyer::where('email', $request->email)->first();
        if (!$buyer || !password_verify($request->password, $buyer->password)) {

             $error='These credentials do not match our records.';
             $errors= [
                'email' => 'These credentials do not match our records.',
                  ];
             return $this->sendError($error,$errors,422);
        }
            // Authentication passed...
        Auth::guard('buyer')->login($buyer);

       $message='LoggedIn Succesfully ';
       $data= [
          'buyer'=> $buyer,

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
