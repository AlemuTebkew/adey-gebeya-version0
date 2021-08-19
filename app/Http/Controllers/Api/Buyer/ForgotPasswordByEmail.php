<?php

namespace App\Http\Controllers\Api\Buyer;

use App\Http\Controllers\Controller;
use App\Http\Resources\BuyerResource;
use App\Models\Buyer;
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
        if(Buyer::query()->where('email',$credentials)->doesntExist()){
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

        $buyer = Buyer::where('email',$request->email)->first();
//        dd();
        $buyer->password = bcrypt(\request()->password);
        $buyer->save();
        return response()->json([
            'message' => 'Buyer Reset Password Successfully',
        ], 200);
    }
}
