<?php

namespace App\Http\Controllers;

use App\Models\BuyerStatus;
use App\Traits\ApiResponser;
use Illuminate\Http\Request;

class BuyerStatusController extends Controller
{
    use ApiResponser;
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return BuyerStatus::all();
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
         return BuyerStatus::create($request->all());
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\BuyerStatus  $buyerStatus
     * @return \Illuminate\Http\Response
     */
    public function show(BuyerStatus $buyerStatus)
    {
      
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\BuyerStatus  $buyerStatus
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, BuyerStatus $buyerStatus)
    {
        $request->validate([
            'name'=>'required|unique:return_item_statuses', 
            'description'=>'required',
         ]);
         return $buyerStatus->update($request->all());
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\BuyerStatus  $buyerStatus
     * @return \Illuminate\Http\Response
     */
    public function destroy(BuyerStatus $buyerStatus)
    {
        if( $buyerStatus->delete()) {
            return $this->successResponse('successfully deleted ',202);
        }
        else{
            return $this->errorResponse('fail to delete',501);
        }    }
}
