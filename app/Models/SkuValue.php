<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class SkuValue extends Model
{
    use HasFactory;
    protected $fillable=[
        'option_id','product_id','product_sku_id','option_value_id',
    ];

    public function option(){
        return $this->belongsTo(Option::class);
    }

    public function product(){
        return $this->belongsTo(Product::class);
    }

    public function option_value(){
        return $this->belongsTo(OptionValue::class);
    }

    public function product_sku(){
        return $this->belongsTo(ProductSku::class);
    }
}
