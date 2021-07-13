<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Employee extends Model
{
    use HasFactory;
    protected $appends=['full_name'];
    protected $fillable=[
        'first_name', 'last_name', 'email', 'phone_number', 'gender', 'date_of_birth',  
         'address_id', 'employee_status_id', 'role_id', 
   
       ];
       //relation ship methods
       public function role(){
         return $this->belongsTo(Role::class);
       }
       public function address(){
         return $this->hasOne(Address::class);
       }
       public function employeeStatus(){
        return $this->belongsTo(EmployeeStatus::class);
      }
       public function getFullNameAttribute(){
         return $this->first_name.' '.$this->last_name;

       }
       public function setFirstNameAttribute($first_name){
         $this->attributes['first_name']=ucwords($first_name);
       }
       public function setLastNameAttribute($last_name){
        $this->attributes['last_name']=ucwords($last_name);
      }
}
