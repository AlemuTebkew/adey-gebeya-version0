<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Review extends Model
{
    use HasFactory;
    protected $fillable=[
        'rate', 'description', 'buyer_id', 'product_name', 'title',
      
      ];
      public function buyer(){
        return $this->belongsTo(Buyer::class);
     }
     public function review_status(){
      return $this->belongsTo(ReviewStatus::class);
   }

}
