<?php

namespace App\Http\Controllers;

use App\Models\ProductVisiblityStatus;
use App\Traits\ApiResponser;
use Illuminate\Http\Request;

class ProductVisiblityStatusController extends Controller
{
    use ApiResponser;
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return ProductVisiblityStatus::all();
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
         return ProductVisiblityStatus::create($request->all());
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\ProductVisiblityStatus  $productVisiblityStatus
     * @return \Illuminate\Http\Response
     */
    public function show(ProductVisiblityStatus $productVisiblityStatus)
    {
        return $productVisiblityStatus;
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\ProductVisiblityStatus  $productVisiblityStatus
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, ProductVisiblityStatus $productVisiblityStatus)
    {
        $request->validate([
            'name'=>'required|unique:return_item_statuses', 
            'description'=>'required',
         ]);
         return $productVisiblityStatus->update($request->all());
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\ProductVisiblityStatus  $productVisiblityStatus
     * @return \Illuminate\Http\Response
     */
    public function destroy(ProductVisiblityStatus $productVisiblityStatus)
    {
        if( $productVisiblityStatus->delete()) {
            return $this->successResponse('successfully deleted ',202);
        }
        else{
            return $this->errorResponse('fail to delete',501);
        }
    }
}
