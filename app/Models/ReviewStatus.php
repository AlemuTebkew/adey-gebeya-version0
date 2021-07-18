<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ReviewStatus extends Model
{
    use HasFactory;
    protected $fillable=[
        'name','description',
    ];
    public function review(){
        return $this->hasMany(Review::class);
     }
}
