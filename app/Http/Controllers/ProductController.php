<?php

namespace App\Http\Controllers;

use App\Models\Image;
use App\Models\Option;
use App\Models\OptionValue;
use App\Models\Product;
use App\Models\ProductSku;
use App\Models\SkuValue;
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
        $product->short_description=$request->short_description;
        //
        //$time = strtotime($request->production_date);
        // $newformat = date('Y-m-d',$time);
        // $employee->date_of_birth=$newformat;
        ///
        $product->production_date=date('Y-m-d',strtotime($request->production_date));
        $product->expired_date=date('Y-m-d',strtotime($request->expired_date));
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
            $option->name=$option_name;  
            $options[]=$option;
        }
        

       
        $product->options()->saveMany($options);

        
       
          
             
            foreach ($request->option_values as $key=> $value_name) {
                $option_values=[];
                for ($i=0; $i < count($value_name) ; $i++) { 
                    $option_value=new OptionValue();
                    $option_value->value=$value_name[$i];  
                    $option_value->product_id=$product->id;  
                    $option_values[]=$option_value;

                }
            //   return   $request->options;
                 $option=Option::where('name',$request->options[$key])
                 ->where('product_id',$product->id)
                 ->first();
                 // return $option_values;
                $option->option_values()->saveMany($option_values);
              //  $product->option_values()->saveMany($option_values);
                 unset($option_values);
            }
                   
            $new_options=$product->options;
            foreach ($request->sku as $key => $value) {
            
                // foreach ($value as $key => $value) {
                 //   $request->file('images');
                   // return $value['images']->extension();
                    $sku=new ProductSku();
                    $sku->sku=$value['sku'];
                    $sku->onhand_quantity=$value['quantity'];
                    $sku->unit_price=$value['price'];
                    $sku->product_id=$product->id;
                    $skus[]=$sku;
                    $sku->save();
                     
                    //-----------------Sku VAlu table --the last combined table ..................../
                  foreach ($product->options as $key => $option) {
                    
                    $sku_value=new SkuValue();
                    $sku_value->product_id=$product->id;
                    $sku_value->product_sku_id=$sku->id;
                    $sku_value->option_id=$option->id;
                 
                    $sku_value->option_value_id=OptionValue::where('option_id',$option->id)->first() ; 
                    $sku_value->save(); 
                  }
                  
                    $images=[];
                  
                         foreach ($value['images'] as $file) {

                            $name = time().'.'.$file->extension();
                            $file->move(public_path().'/images/sku_images', $name);
                            $image=new Image();
                            $image->name=$name;
                            $image->product_sku_id=$sku->id;

                            $images[] = $image;
  
                     }

                     $product->images()->saveMany($images);
                            
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
