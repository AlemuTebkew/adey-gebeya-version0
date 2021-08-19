<?php

namespace App\Http\Controllers\Api\Buyer;

use App\Http\Controllers\Controller;
use App\Models\Buyer;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Auth\Events\Registered;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Log;
use App\Http\Traits\ApiMessage;
use App\Notifications\OTPNotification;
use Illuminate\Support\Facades\Notification;

class BuyerAuthController extends Controller
{
    use ApiMessage;

    public function index()
    {
        return  Buyer::all();

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
            'first_name' => 'required',
            'last_name' => 'required',
            'email' => 'required|email|unique:buyers',
            'phone_number' => 'required|unique:buyers',
            'password' => 'required',
            // 'confirm_password' => 'required|same:password',
        ]);
        if($validator->fails()){
            return $this->sendError('Error validation', $validator->errors());
        }


        //
        try{
            $buyer = Buyer::create([
                'first_name' => $request->first_name,
                'last_name' => $request->last_name,
                'email' => $request->email,
                'phone_number' => $request->phone_number,
                'password' => Hash::make($request->password),

            ]);
        }catch(\Illuminate\Database\QueryException $e){
            return $this->sendError('Registraton Failed','',401);
        }
        if($buyer){

           // event(new Registered($user));
            // $token = $buyer->createToken('authtoken');

             $message='Registered Succesfully and we wanna to Verify ur phone_number';
            // $data= [
            //     'user'=> $buyer,
            //     'token'=> $token->plainTextToken
            // ];
            $this->sendOtp($buyer);

           return $this->sendResponse('',$message);

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

        $buyer=Buyer::where('phone_number',$request->phone_number)->first();
       if(!$buyer || ! Hash::check($request->password, $buyer->password)){
           // return $this->sendError('Credentials not match', 401);

           $error='Wrong credential in buyer';
         return $this->sendError($error,'',401);


       }


        $token = $buyer->createToken('authtoken');
      //  return Auth::guard('buyer')->user();


        $message='Successfully LogedIn';
        $data= [
            'user'=> $buyer,
            'token'=> $token->plainTextToken
        ];

      return $this->sendResponse('',$data);
    }


    public function loginWithOtp(Request $request){

        $attr = $request->validate([
            'phone_number' => 'required|string|',
            'otp' => 'required'
        ]);
      Log::info($request);

      $buyer=Buyer::where('phone_number',$request->phone_number)->where('otp',$request->otp)->first();
      if($buyer){

         $buyer->otp=null;
         $buyer->phone_number_verified_at=now();
         $buyer->save();
         //$request->session()->put('verified', true);
        return $this->sendResponse($buyer,'Successfully Verified');

      }
    }


    public function sendOtp($buyer){
        $otp=rand(1000,9999);
        Log::info("otp=".$otp);
        Notification::send($buyer,new OTPNotification($otp));

        // Notification::route('mail', [
        //     'alemteb1010@gmail.com' => 'alemteb1010@gmail.com',
        // ])->notify(new OTPNotification());
       $result= Buyer::where('phone_number',$buyer->phone_number)->update(['otp'=>$otp]);
       if($result){
     //   return $this->sendResponse($buyer,' Verifi');

       }else{

       }
    }

    public function forgetPassword(Request $request){
        $buyer=Buyer::where('phone_number',$request->phone_number)->first();

        $this->sendOtp($buyer);
        $message='Verify ur phone_number';
       return $this->sendResponse('',$message);
    }

    public function checkOtp(Request $request){
        $buyer=Buyer::where('phone_number',$request->phone_number)->where('otp',$request->otp)->first();
        if($buyer){
        // return $buyer;
           $buyer->otp=null;
           $buyer->phone_verified_at=now();
           $buyer->save();
           //$request->session()->put('verified', true);
          return $this->sendResponse($buyer,'Valid Otp');
        }else{
            return $this->sendError('Error','inValid Otp');

        }

    }

    public function resetPassword(Request $request){

        $buyer = Buyer::where('phone_number',$request->phone_number)->first();

        $buyer->password = Hash::make($request->password);
         $buyer->save();
         return $this->sendResponse('','User Reset Password Successfully');

       
    }

    public function logout(Request $request)
    {

        $request->user()->tokens()->delete();
       // $request->user()->phone_number_verified_at=null;
        $request->user()->save();
        return response()->json(
            [
                'message' => 'Logged out'
            ],200);
    }

    public function show(Request $request)
    {
        return request()->user();

    }


/*
    public function authenticate(Request $request){

        $userCredentials = $request->only('BuyerID', 'Password');

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
