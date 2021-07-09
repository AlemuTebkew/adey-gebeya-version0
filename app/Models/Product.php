<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    use HasFactory;
    protected $fillable=[
         'name', 'description', 'commission_rate', 'short_description', 'production_date',
          'vendor_id', 'sub_category_id', 'category_id', 'brand','quantity', 'expired_date', 
          'product_status_id', 'unit_id','manufacturer', 'product_visiblity_status_id',
          'number_of_sold',
       ];
}
