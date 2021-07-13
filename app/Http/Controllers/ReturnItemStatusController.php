<?php

namespace App\Http\Controllers;

use App\Models\ReturnItemStatus;
use App\Traits\ApiResponser;
use Illuminate\Http\Request;

class ReturnItemStatusController extends Controller 
{
    use ApiResponser;
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
      return  ReturnItemStatus::all();
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
        return ReturnItemStatus::create($request->all());
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\ReturnItemStatus  $returnItemStatus
     * @return \Illuminate\Http\Response
     */
    public function show(ReturnItemStatus $returnItemStatus)
    {
        return $returnItemStatus;
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\ReturnItemStatus  $returnItemStatus
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, ReturnItemStatus $returnItemStatus)
    {
        $request->validate([
            'name'=>'required|unique:return_item_statuses', 
            'description'=>'required',
         ]);
         return $returnItemStatus->update($request->all());
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\ReturnItemStatus  $returnItemStatus
     * @return \Illuminate\Http\Response
     */
    public function destroy(ReturnItemStatus $returnItemStatus)
    {
      if( $returnItemStatus->delete()) {
          return $this->successResponse('successfully deleted ',202);
      }
      else{
          return $this->errorResponse('fail to delete',501);
      }

    }
}
