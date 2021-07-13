<?php

namespace App\Http\Controllers;

use App\Models\ProductStatus;
use App\Traits\ApiResponser;
use Illuminate\Http\Request;

class ProductStatusController extends Controller
{
    use ApiResponser;
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return ProductStatus::all();
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
         return ProductStatus::create($request->all());
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\ProductStatus  $productStatus
     * @return \Illuminate\Http\Response
     */
    public function show(ProductStatus $productStatus)
    {
        return $productStatus;
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\ProductStatus  $productStatus
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, ProductStatus $productStatus)
    {
        $request->validate([
            'name'=>'required|unique:return_item_statuses', 
            'description'=>'required',
         ]);
         return $productStatus->update($request->all());
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\ProductStatus  $productStatus
     * @return \Illuminate\Http\Response
     */
    public function destroy(ProductStatus $productStatus)
    {
        if( $productStatus->delete()) {
            return $this->successResponse('successfully deleted ',202);
        }
        else{
            return $this->errorResponse('fail to delete',501);
        }
    }
}
