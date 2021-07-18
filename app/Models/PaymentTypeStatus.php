<?php

namespace App\Models;

use App\Http\Controllers\PaymentTypeController;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class PaymentTypeStatus extends Model
{
    use HasFactory;

    protected $fillable=[
        'name','description',
    ];

    public function payment_type(){
        return $this->hasMany(PaymentType::class);
    }
    
}
