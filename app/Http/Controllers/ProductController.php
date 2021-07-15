<?php

namespace App\Http\Controllers;

use App\Models\Option;
use App\Models\OptionValue;
use App\Models\Product;
use Illuminate\Http\Request;
use Illuminate\Support\Str;
class ProductController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return Product::all();
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $product=new Product();

        $product->name=$request->name;        
        $product->description=$request->description;
        $product->slug=Str::slug($request->name);
        $product->short_description=$request->short_description;
        $product->production_date=$request->production_date;
        $product->expired_date=$request->expired_date;
        $product->commission_rate=$request->commission_rate;
        $product->brand=$request->brand;
        $product->quantity=$request->quantity;
        $product->manufacturer=$request->manufacturer;
        $product->unit_id=$request->unit_id;
        $product->vendor_id=$request->vendor_id;
        $product->sub_category_id=$request->sub_category_id;
        $product->product_status_id=$request->product_status_id;
        $product->product_visiblity_status_id=$request->product_visiblity_status_id;
        $product->category_id=$request->category_id;

        $product->save();

        foreach ($request->options as $option_name) {
            $option=new Option();
            $option->name=$request->option_name;  
            $options[]=$option;
        }
        

       
        $product->options()->saveMany($options);

        foreach ($request->options as $option) {


            foreach ($request->option_values as $value_name) {
                $option_value=new OptionValue();
                $option_value->name=$request->value_name;  
                $option_values[]=$option_value;
            }
            $option->option_values()->saveMany($option_values);

            $product->option_values()->saveMany($option_values);
        }

    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Product  $product
     * @return \Illuminate\Http\Response
     */
    public function show(Product $product)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Product  $product
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Product $product)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Product  $product
     * @return \Illuminate\Http\Response
     */
    public function destroy(Product $product)
    {
        //
    }
}
