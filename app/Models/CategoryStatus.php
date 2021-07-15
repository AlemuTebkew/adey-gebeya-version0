<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class CategoryStatus extends Model
{
    use HasFactory;
     protected $fillable=[
        'name','description',
    ];
    public function employees(){
        return $this->hasMany(Employee::class);
    }
}
