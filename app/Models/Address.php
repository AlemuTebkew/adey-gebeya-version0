<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Address extends Model
{
    use HasFactory;
    protected $fillable=[
     'country', 'region', 'zone', 'city', 'sub_city', 'zip_code', 'kebele', 
     'village', 'longitude', 'latitude', 'description',

    ];
    public function employee(){
        return $this->hasOne(Employee::class);
    }
    public function vendor(){
        return $this->hasOne(Vendor::class);
    }
}
