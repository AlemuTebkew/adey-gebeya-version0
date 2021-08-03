<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class CartSession extends Model
{
    use HasFactory;
    protected $fillable=[
        'buyer_id','total_price'
    ];
    public function buyer(){
        return $this->belongsTo(Buyer::class);
    }
    public function cart_items(){
        return $this->hasMany(Buyer::class);
    }
}
