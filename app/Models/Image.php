<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Image extends Model
{
    use HasFactory;
    protected $fillable=[
        'product_id', 'product_sku_id', 'name', 
         
   
       ];
       
    public function product(){
        return $this->belongsTo(Product::class);
    }
    public function product_sku(){
        return $this->belongsTo(ProductSku::class);
    }
}
