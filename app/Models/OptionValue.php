<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class OptionValue extends Model
{
    use HasFactory;
    protected $fillable=[
        'product_id', 'option_id', 'value'
   
       ];


       public function product(){
        return $this->belongsTo(Product::class);
    }

    
    public function option(){
        return $this->belongsTo(Option::class);
    }
}
