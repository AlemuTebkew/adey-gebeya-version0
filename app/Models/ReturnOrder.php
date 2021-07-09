<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ReturnOrder extends Model
{
    use HasFactory;
    protected $fillable=[
        'order_id', 'payment_type_id', 'return_methode_id', 'return_status_id', 
      
      ];
}
