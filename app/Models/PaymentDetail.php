<?php

namespace App\Models;

use App\Http\Controllers\PaymentTypeController;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class PaymentDetail extends Model
{
    use HasFactory;
    protected $fillable=[
        'ammount','payment_type_id','billing_address_id',
    ];

    public function paymet_type(){
        return $this->belongsTo(PaymentType::class);
    }

    public function order(){
        return $this->hasMany(Order::class);
    }
}
