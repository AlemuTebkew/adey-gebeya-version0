<?php

namespace App\Models;

use App\Http\Controllers\PaymentTypeController;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class PaymentType extends Model
{
    use HasFactory;
    protected $fillable=[
        'name','description' ,'payment_type_status_id',
    ];

 
    public function paymet_type_status(){
        return $this->belongsTo(PaymentTypeStatus::class);
    }

    public function payment_details(){
        return $this->hasMany(PaymentDetail::class);
    }
}
