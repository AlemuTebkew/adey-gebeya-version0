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
     //--------search works but pagination donot work------------------
        $query=Category::query();
        // $e='employees';
        $search=$request->search_by;
        $sort=$request->input('sort_by','name');
        $query = $query->where('name', 'like', "%{$search}%")
                     ->orWhere('description', 'like', "%{$search}%");
                $query->orderBy($sort,'asc');
      // $this->sortData(CategoryResource::collection($search)->collection);
      return CategoryResource::collection($query->paginate(15));
                //  return response()->json([ 'Search Results' => $query ]);
        }

        public function sort(Request $request)
        {
           $query=Category::query();
           $sorts=explode(',',$request->input('sort',''));
           foreach ($sorts as  $sortColumn) {
               $sortDirection=str_starts_with($sortColumn,'-') ? 'desc' : 'asc';
               $sortColumn=ltrim($sortColumn,'-');
               $query->orderBy($sortColumn,$sortDirection);
           }
           return CategoryResource::collection($query->paginate(15));
           // return $this->sortData(CategoryResource::collection(Category::get())->collection);
        }


        public function filter(Request $request)
        {
           $query=Category::query();
           $query->when($request->filled('filter'),function($query,$request){
           $filters=explode(',',$request->filter);
           foreach ($filters as $filter) {
               [$criteria,$value]=explode(':',$filter);
               $query->where($criteria,$value);
           }
           return $query;
           });

           return CategoryResource::collection($query->paginate(15));
           // return $this->sortData(CategoryResource::collection(Category::get())->collection);
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
          $category->have_sub_category=0;     //$request->have_sub_category;
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
        if($category){
          $path= public_path('/images/category_icons/');
            if($category->image && file_exists($path.$category->image)){
                Storage::delete($path.$category->image);
               // unlink($path.$category->image);
            }

            if($category->sub_categories->count() > 0){
                $category->sub_categories->delete() ;
            }
            if($category->delete()) {
                return $this->successResponse('successfully deleted ',202);
            }
            else{
                return $this->errorResponse('fail to delete',501);
            }
        }

        // foreach ($category->sub_categories as $subCategories ) {
        //     $subCategories->delete();
        // }


    }
}
