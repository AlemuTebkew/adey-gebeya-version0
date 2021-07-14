<?php

namespace App\Http\Controllers;

use App\Models\SubCategory;
use Illuminate\Http\Request;

class SubCategoryController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return SubCategory::all();
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
            'name'=>'required',
            'description'=>'required',
            'category_id'=>'required'
          ]);



          $subcategory=SubCategory::create($request->all());
          if ($subcategory) {
              return $this->successResponse("SubCategory Created Successfully",201);
          } else {
              return $this->errorResponse('SubCategory not Created',402);

          }
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\SubCategory  $subCategory
     * @return \Illuminate\Http\Response
     */
    public function show(SubCategory $subCategory)
    {
        return $subCategory;
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\SubCategory  $subCategory
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, SubCategory $subCategory)
    {
        $request->validate([
            'name'=>'required',
            'description'=>'required',
            'category_id'=>'required'
          ]);



          $subCategory->update($request->all());
          if ($subCategory) {
              return $this->successResponse("SubCategory Updated Successfully",201);
          } else {
              return $this->errorResponse('SubCategory not Updated',402);

          }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\SubCategory  $subCategory
     * @return \Illuminate\Http\Response
     */
    public function destroy(SubCategory $subCategory)
    {
        if( $subCategory->delete()) {
            return $this->successResponse('successfully deleted ',202);
        }
        else{
            return $this->errorResponse('fail to delete',501);
        }

    }
}
