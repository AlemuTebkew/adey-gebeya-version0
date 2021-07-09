<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Address extends Model
{
    use HasFactory;
    protected $fillable=[
     'country', 'region', 'zone', 'city', 'sub_city', 'zip_code', 'kebele', 
     'village', 'longitude', 'latitude', 'description',

    ];
}
