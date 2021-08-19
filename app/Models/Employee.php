<?php

namespace App\Models;

use App\Notifications\NewPasswordNotification;
use App\Notifications\VerifyEmail;
use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;
class Employee extends Authenticatable implements MustVerifyEmail
{
    use HasFactory, Notifiable,HasApiTokens;




    /**
     * The attributes that should be cast to native types.
     *
     * @var array
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
    ];

    protected $appends=['full_name'];


    protected $fillable=[
        'first_name', 'last_name', 'email', 'phone_number', 'gender', 'date_of_birth',
         'address_id', 'employee_status_id', 'role_id',

       ];

          /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
      'password',
      'remember_token',
  ];


       //relation ship methods
       public function role(){
         return $this->belongsTo(Role::class);
       }
       public function address(){
         return $this->belongsTo(Address::class);
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


      public function sendPasswordResetNotification($token)
      {
          $url = 'https://127.0.0.1/reset-password?token='.$token;

          $this->notify(new NewPasswordNotification($url));
      }

      public function sendEmailVerificationNotification()
      {
          $this->notify(new VerifyEmail());
      }


}
