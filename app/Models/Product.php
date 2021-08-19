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
        return $this->belongsTo(ProductStatus::class);
    }

     public function product_visiblity_status(){
        return $this->belongsTo(ProductVisiblityStatus::class);
    }

    public function vendor(){
        return $this->belongsTo(Vendor::class);
    }
     public function unit(){
        return $this->belongsTo(Unit::class);
    }

    public function options(){
        return $this->hasMany(Option::class);
    }

    public function option_values(){
        return $this->hasMany(OptionValue::class);
    }

    public function product_skus(){
        return $this->hasMany(ProductSku::class);
    }

    public function images(){
        return $this->hasMany(Image::class);
    }

    public function tags(){
        return $this->belongsToMany(Tag::class);
    }
}
