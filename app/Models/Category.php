<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Category extends Model
{
    use HasFactory;
    protected $fillable=[
        'name','slug','description','image'
    ];

    public function sub_categories(){
        return $this->hasMany(SubCategory::class);
    }

    public function products(){
        return $this->hasMany(Product::class);
    }
    public function category_status(){
        return $this->belongsTo(CategoryStatus::class);
    }


    public function getImageAttribute($name){
        return $this->image=asset('images/category_icons/'.$name) ;
      }

}
