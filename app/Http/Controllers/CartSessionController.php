<?php

namespace App\Http\Controllers;

use App\Models\CartItem;
use App\Models\CartSession;
use App\Models\ProductSku;
use Illuminate\Http\Request;

class CartSessionController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
     return CartSession::where('buyer_id',1)->cart_items;
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request,$sku_id)
    {

        $cart=CartSession::where('buyer_id',1);
        if(!$cart){
            $cart=new CartSession();
            $cart->buyer_id=1;
            $cart->total_price=0;
            $cart->save();
        }
        $sku = ProductSku::find($sku_id);
        $check=CartItem::where('sku_id',$sku->id)->first();
        if($check){
          $check->quantity++;
          $check->save();
        }
        else{
            $cart_item=new CartItem();
            $cart_item->cart_session_id=$cart->id;
            $cart_item->product_id=$sku->product_id;
            $cart_item->product_sku_id=$sku->id;
            $cart_item->quantity=1;
            $cart_item->save();

        }
    }

   
        
    



//         /**
//          *  session()->put('cart', $request->post('cart'));

//             return response()->json([
//             'status' => 'added'
//              ]);
//          */
 
       

//         // if(!$sku) {

//         //     abort(404);

//         // }

//         //$cart = session()->get('cart');
         

//         // if cart is empty then this the first product
//         if(!$cart) {

//             $cart = [
//                     $id => [
//                         "name" => $product->name,
//                         "quantity" => 1,
//                         "price" => $product->price,
//                         "photo" => $product->photo
//                     ]
//             ];

//             session()->put('cart', $cart);

//             return redirect()->back()->with('success', 'Product added to cart successfully!');
//         }

//         // if cart not empty then check if this product exist then increment quantity
//         if(isset($cart[$id])) {

//             $cart[$id]['quantity']++;

//             session()->put('cart', $cart);

//             return redirect()->back()->with('success', 'Product added to cart successfully!');

//         }else{}

//         // if item not exist in cart then add to cart with quantity = 1
//         $cart[$id] = [
//             "name" => $product->name,
//             "quantity" => 1,
//             "price" => $product->price,
//             "photo" => $product->photo
//         ];

//         session()->put('cart', $cart);

//         return redirect()->back()->with('success', 'Product added to cart successfully!');
//     }
// }
    

//     /**
//      * Display the specified resource.
//      *
//      * @param  \App\Models\CartSession  $cartSession
//      * @return \Illuminate\Http\Response
//      */
//     public function show(CartSession $cartSession)
//     {
//         //
//     }

//     /**
//      * Update the specified resource in storage.
//      *
//      * @param  \Illuminate\Http\Request  $request
//      * @param  \App\Models\CartSession  $cartSession
//      * @return \Illuminate\Http\Response
//      */
    public function update(Request $request, CartItem $cart_item)
    {

        $qty=$request->quantity;
        $cart_item->quantity=$qty;
        $cart_item->save();
        // if($request->id and $request->quantity)
        // {
        //     $cart = session()->get('cart');
        //     $cart[$request->id]["quantity"] = $request->quantity;
        //     session()->put('cart', $cart);
        //     session()->flash('success', 'Cart updated successfully');
        // }
    }

//     /**
//      * Remove the specified resource from storage.
//      *
//      * @param  \App\Models\CartSession  $cartSession
//      * @return \Illuminate\Http\Response
//      */
    public function destroy(CartItem $cart_item)
    {

        
        if( $cart_item->delete()) {
            return $this->successResponse('successfully deleted ',202);
        }
        else{
            return $this->errorResponse('fail to delete',501);
        }
        // if($request->id) {
        //     $cart = session()->get('cart');
        //     if(isset($cart[$request->id])) {
        //         unset($cart[$request->id]);
        //         session()->put('cart', $cart);
        //     }
        //     session()->flash('success', 'Product removed successfully');
        // }
    }
  
    
}
