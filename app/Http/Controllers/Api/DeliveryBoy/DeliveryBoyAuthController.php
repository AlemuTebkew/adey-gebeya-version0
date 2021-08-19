<?php

namespace App\Http\Controllers\Api\DeliveryBoy;

use App\Http\Controllers\Controller;
use App\Models\Employee;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Auth\Events\Registered;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Log;
use App\Http\Traits\ApiMessage;

class DeliveryBoyAuthController extends Controller
{
    use ApiMessage;

    public function index()
    {
        return  Employee::all();

    }

    public function register(Request $request)
    {
       /*
          $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|string|email|max:255|unique:users',
            'password' => ['required', 'confirmed', Password::defaults()],
        ]);
       */


        $validator = Validator::make($request->all(), [
            'name' => 'required',
            'email' => 'required|email|unique:employees',
            'phone_number' => 'required|unique:employees',
            'password' => 'required',
            'confirm_password' => 'required|same:password',
        ]);
        if($validator->fails()){
            return $this->sendError('Error validation', $validator->errors());
        }


        //
        try{
            $boy = Employee::create([
                'name' => $request->name,
                'email' => $request->email,
                'phone_number' => $request->phone_number,
                'password' => Hash::make($request->password),

            ]);
        }catch(\Illuminate\Database\QueryException $e){
            return $this->sendError('Registraton Failed','',401);
        }
        if($boy){

           // event(new Registered($user));

            $token = $boy->createToken('authtoken');

            $message='Registered Succesfully\n Verify ur phone_number';
            $data= [
                'user'=> $boy,
                'token'=> $token->plainTextToken
            ];
            $this->sendOtp($request->phone_number);

           return $this->sendResponse($data,$message);

        }else{
            return $this->sendError('Error ', $validator->errors());

        }

    }


    public function login(Request $request)
    {
        $attr = $request->validate([
            'phone_number' => 'required|string|',
            'password' => 'required|string|min:2'
        ]);
       /*
        Auth::attempt also possible it returns boolean but may use user table beware!!!!!!!!!
        then use $request->user(); and create token
        */
        //optional

        $boy=Employee::where('phone_number',$request->phone_number)->first();
       if(!$boy || ! Hash::check($request->password, $boy->password)){
           // return $this->sendError('Credentials not match', 401);

           $error='Wrong credential in boy';
         return $this->sendError($error,'',401);


       }


        $token = $boy->createToken('authtoken');
      //  return Auth::guard('boy')->user();


        $message='Successfully LogedIn';
        $data= [
            'user'=> $boy,
            'token'=> $token->plainTextToken
        ];

      return $this->sendResponse($data,$message);
    }


    public function loginWithOtp(Request $request){

        $attr = $request->validate([
            'phone_number' => 'required|string|',
            'otp' => 'required'
        ]);
      Log::info($request);

      $boy=Employee::where('phone_number',$request->phone_number)->where('otp',$request->otp)->first();
      if($boy){

         $boy->otp=null;
         $boy->phone_number_verified_at=now();
         $boy->save();
         //$request->session()->put('verified', true);
        return $this->sendResponse($boy,'Successfully Verified');

      }
    }

    public function sendOtp( $phone_number){
        $otp=rand(1000,9999);
        Log::info("otp=".$otp);
       $result= Employee::where('phone_number',$phone_number)->update(['otp'=>$otp]);
       if($result){

       }else{

       }
    }

    public function forgetPassword(Request $request){
        $this->sendOtp($request->phone_number);
    }

    public function checkOtp(Request $request){
        $boy=Employee::where('phone_number',$request->phone_number)->where('otp',$request->otp)->first();
        if($boy){

           $boy->otp=null;
           $boy->save();
           //$request->session()->put('verified', true);
          return $this->sendResponse($boy,'Valid Otp');
        }else{
            return $this->sendError('Error','Valid Otp');

        }

    }

    public function resetPassword(Request $request){

        $boy = Employee::where('phone_number',$request->phone_number)->first();

        $boy->password = Hash::make($request->password);
         $boy->save();
         return response()->json([
             'message' => 'User Reset Password Successfully',
         ], 200);
    }

    public function logout(Request $request)
    {

        $request->user()->tokens()->delete();
       // $request->user()->phone_number_verified_at=null;
        $request->user()->save();
        return response()->json(
            [
                'message' => 'Logged out'
            ]
        );

    }

    public function show(Request $request)
    {
        return request()->user();

    }


/*
    public function authenticate(Request $request){

        $userCredentials = $request->only('EmployeeID', 'Password');

        // check user using auth function

      if ($teachers=Teacher::where($userCredentials)->first()) {
          auth()->login($teachers);
          // redirect to the intended view
       }
        else {
           // redirect to the view on failure to authenticate with a failure message
        }

  }

*/


}
