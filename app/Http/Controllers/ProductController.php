<?php

namespace App\Http\Controllers;

use App\Models\Image;
use App\Models\Option;
use App\Models\OptionValue;
use App\Models\Product;
use App\Models\ProductSku;
use App\Models\SkuValue;
use App\Models\Tag;
use App\Traits\ApiResponser;
use Illuminate\Http\Request;
use Illuminate\Support\Str;
use PDO;

class ProductController extends Controller
{
   use ApiResponser;
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
        // return $request->all();
        $product=new Product();
        $product->name=$request->name;

        $product->description=$request->description;
        $product->short_description=$request->short_description;

        //
        //$time = strtotime($request->production_date);
        // $newformat = date('Y-m-d',$time);
        // $employee->date_of_birth=$newformat;
        ///
        $product->production_date=date('Y-m-d',strtotime($request->production_date));
        $product->expired_date=date('Y-m-d',strtotime($request->expired_date));
        $product->commission_rate=2;
        $product->brand=$request->brand;
        // $product->price=$request->price;

            // $product->total_quantity=$request->qty;

        
        $product->manufacturer=$request->manufacturer;
        $product->unit_id=$request->unit_id;  //need to be check from db
        $product->vendor_id=$request->vendor_id;
        $product->sub_category_id=$request->sub_category_id;
        $product->product_status_id=$request->product_status_id;  
        $product->product_visiblity_status_id=$request->product_visiblity_status_id;
        $product->category_id=$request->category_id;

        $product->save();
        

        $tags=explode(',',$request->tags);
        foreach ($tags as $key => $tagName) {
            $tag=new Tag();
            $tag->name=$tagName;
            $tag->save();
            $tag_ids[]=$tag->id;
        }
       $product->tags()->sync($tag_ids);
//
       if(! $request->has_variant){
        $sku=new ProductSku();
        $sku->sku=$request->sku.$product->id;
        $sku->onhand_quantity=$request->qty;
        $sku->unit_price=$request->price;
        $sku->product_id=$product->id;
        // $skus[]=$sku;
        $sku->save();
       }
       //below this if product has variation
      
       if($request->has_variant){
           
         foreach ($request->options as $option) {
            // return response()->json($option['name']);

        
            $newoption=new Option();
            $newoption->name=$option['name']; 
            $newoption->product_id=$product->id; 
            $newoption->save();
            $optionIds[]=$newoption->id;
            
          foreach ($option['values'] as  $value) {
              # code...

              $option_value=new OptionValue();
              $option_value->value=$value;  
              $option_value->option_id=$newoption->id;  
              $option_value->product_id=$product->id;  
              $option_value->save();
            //  $option_values[]=$option_value;
          }
           // $options[]=$option;
        }
        

       
       // $product->options()->saveMany($options);

        
       
  
           
            foreach ($request->variations as  $variation) {
            
                // foreach ($value as $key => $value) {
                 //   $request->file('images');
                   // return $value['images']->extension();
                    $sku=new ProductSku();
                    $sku->sku=$variation['sku'].$product->id;
                    $sku->onhand_quantity=$variation['qty'];
                    $sku->unit_price=$variation['price'];
                    $sku->product_id=$product->id;
                    // $skus[]=$sku;
                    $sku->save();
                     
                    //-----------------Sku VAlu table --the last combined table ..................../
                   $i=0;
                  foreach ($variation['variant'] as $key => $variant) {
                    
                    $sku_value=new SkuValue();
                    $sku_value->product_id=$product->id;
                    $sku_value->product_sku_id=$sku->id;
                    $sku_value->option_id=$optionIds[$i];
                    
                    $sku_value->option_value_id=OptionValue::where('option_id',$optionIds[$i])
                    ->where('value',$variant)->first()->id; 

                    $sku_value->save(); 

                    $i++;
                  }
                  
                    $images=[];
                  
                         foreach ($variation['images'] as $file) {

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
        // foreach ($order->order_items as $key => $order_items) {
        //     $order_items->delete;
              
        //   }
          if( $product->delete()) {
              return $this->successResponse('successfully deleted ',200);
          }
          else{
              return $this->errorResponse('fail to delete',501);
          }
      
        
    }



}
