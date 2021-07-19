<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Order extends Model
{
    use HasFactory;
    protected $fillable=[
         'payment_detail_id', 'order_status_id', 
        'pin', 'expected_time', 'buyer_id', 'employee_id','shipping_address_id',
    
   
       ];

       protected $casts=[
           'created_at'=>'datetime:Y-m-d'
       ];
     
     public function employee(){
        return $this->belongsTo(Employee::class);
    }
    
     
    public function buyer(){
        return $this->belongsTo(Buyer::class);
    }

     
    public function payment_detail(){
        return $this->belongsTo(PaymentDetail::class);
    }

     
    public function order_status(){
        return $this->belongsTo(OrderStatus::class);
    }
    public function shipping_address(){
        return $this->belongsTo(ShippingAddress::class);
    }

    public function order_item(){
        return $this->hasMany(OrderItem::class);
    }
}
