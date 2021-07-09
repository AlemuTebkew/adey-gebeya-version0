<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Buyer extends Model
{
    use HasFactory;

    protected $fillable=[
        'first_name', 'last_name', 'email', 'phone_number', 'gender', 'date_of_birth',  
        'type', 'address_id', 'buyer_status_id', 
   
       ];
}
