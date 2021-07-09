<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Discount extends Model
{
    use HasFactory;
    protected $fillable=[
        'type','product_id','title','description','discount_percent','start_date',
        'end_date','modified_date'
    ];
}
