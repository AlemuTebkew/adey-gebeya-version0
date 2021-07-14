<?php

namespace App\Http\Controllers;

use App\Models\Category;
use Illuminate\Http\Request;
use App\Traits\ApiResponser;
use Illuminate\Support\Facades\Storage;

class CategoryController extends Controller
{

use ApiResponser;


    public function index()
    {
        return Category::all();
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
            'image'=>'image|mimetypes:jpg,png'
          ]);
          $data=$request->all();
          if($request->hasFile('image')){
            $file=$request->file('image');
            $name = time().'.'.$file->extension();
            $file->move(public_path().'/images/category_icons/', $name);
            $data['image']=$name;
          }else{
            $data['image']='default.png';
          }


          $category=Category::create($data);
          if ($category) {
              return $this->successResponse("Category Created Successfully",201);
          } else {
              return $this->errorResponse('Category not Created',402);

          }
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Category  $category
     * @return \Illuminate\Http\Response
     */
    public function show(Category $category)
    {
        return $category;
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Category  $category
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Category $category)
    {
        $request->validate([
            'name'=>'required',
            'description'=>'required',
            'image'=>'mimetypes:jpg,png'
          ]);
          $data=$request->all();
          if($request->hasFile('image')){
            $file=$request->file('image');
            $name = time().'.'.$file->extension();
            $file->move(public_path().'/images/category_icons/', $name);
            $data['image']=$name;
          }else{
            $data['image']='default.png';
          }


          $category->update($data);
          if ($category) {
              return $this->successResponse("Category Created Successfully",201);
          } else {
              return $this->errorResponse('Category not Created',402);

          }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Category  $category
     * @return \Illuminate\Http\Response
     */
    public function destroy(Category $category)
    {

        Storage::delete(public_path().'/images/category_icons/'.$category->image);
        if( $category->delete()) {
            return $this->successResponse('successfully deleted ',202);
        }
        else{
            return $this->errorResponse('fail to delete',501);
        }
    }
}
