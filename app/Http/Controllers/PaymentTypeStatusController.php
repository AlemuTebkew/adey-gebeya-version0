<?php

namespace App\Http\Controllers;

use App\Models\PaymentTypeStatus;
use App\Traits\ApiResponser;
use Illuminate\Http\Request;

class PaymentTypeStatusController extends Controller
{
    use ApiResponser;
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return PaymentTypeStatus::all();
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $request->validate([
            'name'=>'required|unique:return_item_statuses', 
            'description'=>'required',
         ]);
         return PaymentTypeStatus::create($request->all());
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\PaymentTypeStatus  $paymentTypeStatus
     * @return \Illuminate\Http\Response
     */
    public function show(PaymentTypeStatus $paymentTypeStatus)
    {
        return $paymentTypeStatus;
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\PaymentTypeStatus  $paymentTypeStatus
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, PaymentTypeStatus $paymentTypeStatus)
    {
        $request->validate([
            'name'=>'required|unique:return_item_statuses', 
            'description'=>'required',
         ]);
         return $paymentTypeStatus->update($request->all());
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\PaymentTypeStatus  $paymentTypeStatus
     * @return \Illuminate\Http\Response
     */
    public function destroy(PaymentTypeStatus $paymentTypeStatus)
    {
        if( $paymentTypeStatus->delete()) {
            return $this->successResponse('successfully deleted ',202);
        }
        else{
            return $this->errorResponse('fail to delete',501);
        }
    }
}
