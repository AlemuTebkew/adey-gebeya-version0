<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class VendorBalance extends Model
{
    use HasFactory;

    protected $fillable=[
        'order_item_id','is_paid','balance','vendor_id',
    ];
}
