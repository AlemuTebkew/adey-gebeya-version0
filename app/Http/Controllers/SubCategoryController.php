<?php

namespace App\Http\Controllers;

use App\Http\Resources\SubCategoryResource;
use App\Models\SubCategory;
use App\Traits\ApiResponser;
use Illuminate\Http\Request;
use Illuminate\Support\Str;
class SubCategoryController extends Controller
{
    use ApiResponser;
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return SubCategory::all();
    }

    public function search(Request $request) {
     
        // $e='employees';
            $query=$request->search_by;
            $search = SubCategory::where('name', 'like', "%{$query}%")
                     ->orWhere('description', 'like', "%{$query}%")
                    
                     ->get();
    
            return response()->json([
                'data' => $search
            ]);
        }

        public function sort()
        {
            return $this->sortData(SubCategoryResource::collection(SubCategory::get())->collection);
        }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $subCategory=new SubCategory();
        $request->validate([
            'name'=>'required',
            'description'=>'required',
            'category_id'=>'required'
          ]);



          $subCategory->name=$request->name;
          $subCategory->description=$request->description;
          $subCategory->slug=Str::slug($request->name);
          $subCategory->category_id=$request->category_id;
          $subCategory->save();

          if ($subCategory) {
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



          $subCategory->name=$request->name;
          $subCategory->description=$request->description;
          $subCategory->slug=Str::slug($request->name);
          $subCategory->category_id=$request->category_id;
          $subCategory->save();

          if ($subCategory) {
              return $this->successResponse("SubCategory Created Successfully",201);
          } else {
              return $this->errorResponse('SubCategory not Created',402);

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
