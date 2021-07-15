<?php

namespace App\Http\Controllers;

use App\Models\CategoryStatus;
use App\Traits\ApiResponser;
use Illuminate\Http\Request;

class CategoryStatusController extends Controller
{ use ApiResponser;
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return CategoryStatus::all();
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
            'name'=>'required|unique:category_statuses', 
            'description'=>'required',
         ]);
         return CategoryStatus::create($request->all());
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\CategoryStatus  $CategoryStatus
     * @return \Illuminate\Http\Response
     */
    public function show(CategoryStatus $categoryStatus)
    {
      return $categoryStatus;
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\CategoryStatus  $CategoryStatus
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, CategoryStatus $categoryStatus)
    {
        $request->validate([
            'name'=>'required|unique:return_item_statuses', 
            'description'=>'required',
         ]);
         return $categoryStatus->update($request->all());
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\CategoryStatus  $CategoryStatus
     * @return \Illuminate\Http\Response
     */
    public function destroy(CategoryStatus $categoryStatus)
    {
        if( $categoryStatus->delete()) {
            return $this->successResponse('successfully deleted ',202);
        }
        else{
            return $this->errorResponse('fail to delete',501);
        }    }
}
