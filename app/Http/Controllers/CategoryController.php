<?php

namespace App\Http\Controllers;

use App\Http\Resources\CategoryResource;
use App\Models\Category;
use App\Models\Employee;
use Illuminate\Http\Request;
use App\Traits\ApiResponser;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;
class CategoryController extends Controller
{

use ApiResponser;


    public function index()
    {
        return Category::all();
    }

    public function search(Request $request) {
     
        $query=Employee::query();
        // $e='employees';
        $search=$request->search_by;
        $sort=$request->sort_by;
        $query = $query->where('name', 'like', "%{$query}%")
                     ->orWhere('description', 'like', "%{$query}%")
                     ->get();
                    $query= $query->orderBy($sort,'asc');
                    $this->sortData(CategoryResource::collection($search)->collection);
                  
                  return response()->json([
                'data' => $query
            ]);
        }

        public function sort()
        {
            return $this->sortData(CategoryResource::collection(Category::get())->collection);
        }
    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {

        $category=new Category();
        $request->validate([
            'name'=>'required',
            'description'=>'required',
            'image'=>'image',
            'have_sub_category'=>'required',
            
          ]);
          if($request->hasFile('image')){
            $file=$request->file('image');
            $name = time().'.'.$file->extension();
            $file->move(public_path().'/images/category_icons/', $name);
            $category->image=$name;

          }else{
            $category->image='default.png';
          }


          $category->name=$request->name;

          $category->description=$request->description;
          $category->slug=Str::slug($request->name);
          $category->have_sub_category=$request->have_sub_category;
          $category->save();
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
            'image'=>'image',
            'have_sub_category'=>'required',
          ]);
          if($request->hasFile('image')){
            $file=$request->file('image');
            $name = time().'.'.$file->extension();
            $file->move(public_path().'/images/category_icons/', $name);
            $category->image=$name;
          }else{
            $category->image='default.png';
          }


          $category->name=$request->name;

          $category->description=$request->description;
          $category->slug=Str::slug($request->name);
          $category->have_sub_category=$request->have_sub_category;
          $category->save();
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
        foreach ($category->sub_categories as $subCategories ) {
            $subCategories->delete();
        }

        if( $category->delete()) {
            return $this->successResponse('successfully deleted ',202);
        }
        else{
            return $this->errorResponse('fail to delete',501);
        }
    }
}
