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

     public function category(){
        return $this->belongsTo(Category::class);
    }

    public function sub_category(){
        return $this->belongsTo(SubCategory::class);
    }

     public function product_status(){
        return $this->belongsTo(SubCategory::class);
    }

     public function product_visiblity_status(){
        return $this->belongsTo(SubCategory::class);
    }

    public function vendor(){
        return $this->belongsTo(SubCategory::class);
    } 
     public function unit(){
        return $this->belongsTo(SubCategory::class);
    }

    public function options(){
        return $this->hasMany(Option::class);
    }

    public function option_values(){
        return $this->hasMany(OptionValue::class);
    }
}
