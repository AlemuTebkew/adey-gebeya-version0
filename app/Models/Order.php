<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Order extends Model
{
    use HasFactory;
    protected $fillable=[
        'product_id', 'payment_detail_id', 'order_status_id', 
        'pin', 'expected_time', 'buyer_id', 'employee_id','shipping_address_id',
    
   
       ];
}
