<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class CartItem extends Model
{
    use HasFactory;

    protected $fillable=[
        'cart_session_id','product_id','product_sku_id','quantity',
    ];
    public function cart_session(){
        return $this->belongsToMany(CartSession::class);
    }
}
