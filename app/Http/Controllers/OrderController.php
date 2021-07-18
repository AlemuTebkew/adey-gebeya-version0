<?php

namespace App\Http\Controllers;

use App\Models\Order;
use App\Models\OrderItem;
use App\Models\PaymentDetail;
use App\Models\ShippingAddress;
use Illuminate\Http\Request;
use Illuminate\Support\Str;
class OrderController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return Order::latest()->get();
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        /*
        1.save shipping address
        2.save payment detail
        3.save order below
        */

        $address=new ShippingAddress();
        $address->country=$request->country;
        $address->region=$request->region;
        $address->zone=$request->zone;
        $address->city=$request->city;
        $address->sub_city=$request->sub_city;      
        $address->zip_cod=$request->zip_cod;
        $address->kebele=$request->kebele;
        $address->village=$request->village;
        $address->longitude=$request->longitude;
        $address->latitude=$request->latitude;
        $address->description=$request->description;
        $address->save();

        $payment_detail=new PaymentDetail();
        $payment_detail->amount=$request->amount;
        $payment_detail->payment_type_id=$request->payment_type_id;
        $payment_detail->save();
      //  $payment_detail->refresh();
     
        
       $order=new Order();
       $order->pin=Str::random(5);
       $order->expected_time=date('Y-m-d',strtotime($request->expected_time));
      // $order->delivered_at=$request->delivered_at;
       $order->return_end_date=date('Y-m-d',strtotime($request->return_end_date));

      // $order->employee_id=$request->employee_id;//nullable or unassigned
       $order->buyer_id=$request->buyer_id;
       $order->order_status_id=$request->order_status_id;
       $order->shipping_address_id =$address->id ;
     //  $order->payment_detail_id=$payment_detail->id;
  //return $payment_detail->id;
       $payment_detail->order()->save($order);
        
    /**
     * 4.save order item
     * 
     */
    
     foreach ($request->order_items as  $value) {


        $order_item=new OrderItem();
      
        $order_item->order_id=$order->id;
        $order_item->product_id=$value['product_id'];
        $order_item->product_sku_id=$value['sku_id'];
        $order_item->quantity=$value['quantity'];
        $order_item->save();
        
        }
     
   

    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Order  $order
     * @return \Illuminate\Http\Response
     */
    public function show(Order $order)
    {
        return $order;
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Order  $order
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Order $order)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Order  $order
     * @return \Illuminate\Http\Response
     */
    public function destroy(Order $order)
    {
        foreach ($order->order_items as $key => $order_items) {
          $order_items->delete;
            
        }
        if( $order->delete()) {
            return $this->successResponse('successfully deleted ',202);
        }
        else{
            return $this->errorResponse('fail to delete',501);
        }
    }

    public function filterByStatus($status){
        return Order::where('order_status_id',$status);
    } 

    public function filterByDate($date){
        return Order::whereDate('created_at', '=', date('Y-m-d',$date));

    }  
    
    public function filterByDeliveryBoy($boy){
        return Order::where('employee_id',$boy)->latest();

    } 

    public function searchByPin($pin){
        return Order::where('pin',$pin);

    } 
}
