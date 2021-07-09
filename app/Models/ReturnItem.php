<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ReturnItem extends Model
{
    use HasFactory;
    protected $fillable=[
        'order_item_id', 'return_order_id', 'return_item_status', 
        'buyer_reason','company_reason', 'accepted_quantity', 'quantity',
      
      ];
}

