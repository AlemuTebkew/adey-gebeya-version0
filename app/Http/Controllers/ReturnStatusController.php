<?php

namespace App\Http\Controllers;

use App\Models\ReturnStatus;
use App\Traits\ApiResponser;
use Illuminate\Http\Request;

class ReturnStatusController extends Controller
{
    use ApiResponser;
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return ReturnStatus::all();
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
         return ReturnStatus::create($request->all());
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\ReturnStatus  $returnStatus
     * @return \Illuminate\Http\Response
     */
    public function show(ReturnStatus $returnStatus)
    {
        return $returnStatus;
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\ReturnStatus  $returnStatus
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, ReturnStatus $returnStatus)
    {
        $request->validate([
            'name'=>'required|unique:return_item_statuses', 
            'description'=>'required',
         ]);
         return $returnStatus->update($request->all());
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\ReturnStatus  $returnStatus
     * @return \Illuminate\Http\Response
     */
    public function destroy(ReturnStatus $returnStatus)
    {
        if( $returnStatus->delete()) {
            return $this->successResponse('successfully deleted ',202);
        }
        else{
            return $this->errorResponse('fail to delete',501);
        }
    }
}
