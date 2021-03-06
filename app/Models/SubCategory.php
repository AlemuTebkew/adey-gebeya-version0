<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class SubCategory extends Model
{
    use HasFactory;
    protected $fillable=[
        'option_id','product_id','product_sku_id','option_value_id',
    ];

    public function products(){
        return $this->hasMany(Product::class);
    }
}
