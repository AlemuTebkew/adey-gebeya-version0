<?php

namespace App\Http\Controllers;

use App\Models\VendorStatus;
use App\Traits\ApiResponser;
use Illuminate\Http\Request;

class VendorStatusController extends Controller
{
    use ApiResponser;
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return VendorStatus::all();
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
         return VendorStatus::create($request->all());
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\VendorStatus  $vendorStatus
     * @return \Illuminate\Http\Response
     */
    public function show(VendorStatus $vendorStatus)
    {
        return $vendorStatus;
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\VendorStatus  $vendorStatus
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, VendorStatus $vendorStatus)
    {
        $request->validate([
            'name'=>'required|unique:return_item_statuses', 
            'description'=>'required',
         ]);
         return $vendorStatus->update($request->all());
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\VendorStatus  $vendorStatus
     * @return \Illuminate\Http\Response
     */
    public function destroy(VendorStatus $vendorStatus)
    {
        if( $vendorStatus->delete()) {
            return $this->successResponse('successfully deleted ',202);
        }
        else{
            return $this->errorResponse('fail to delete',501);
        }
    }
}
