<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class RefundItem extends Model
{
    use HasFactory;
    protected $fillable=[
        'return_item_id', 'refund_id', 'refunded_item_quantity',  
      
      ];
}
