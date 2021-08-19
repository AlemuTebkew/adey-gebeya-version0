<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;
class Buyer extends Model
{
    use HasFactory,Notifiable,HasApiTokens;

    protected $fillable=[
        'first_name', 'last_name', 'email', 'phone_number', 'gender', 'date_of_birth',
        'type', 'address_id', 'buyer_status_id','password'

       ];

    protected $hidden=['password','otp'];


       public function review(){
        return $this->hasMany(Review::class);
     }
     public function cart_session(){
        return $this->hasOne(CartSession::class);

    }



    public function routeNotificationForNexmo($notification)
    {
        return $this->phone_number;
    }
}
