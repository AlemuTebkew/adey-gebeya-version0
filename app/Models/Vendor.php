<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Vendor extends Model
{
    use HasFactory;

    protected $fillable=[
        'contact_first_name', 'contact_last_name', 'email', 'contact_phone_number', 'gender', 'date_of_birth',  
         'address_id', 'vendor_status_id', 'company_name',
          'url', 'fax', 'company_phone_number', 
   
       ];
       public function address(){
        return $this->belongsTo(Address::class);
      }
}
