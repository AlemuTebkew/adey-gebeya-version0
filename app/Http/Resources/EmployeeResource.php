<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class EmployeeResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {
        return [
         'id'=>$this->id,
         'full_name'=>$this->full_name,
         'email'=>$this->email,
         'phone_no'=>$this->phone_number,
         'date_of_birth'=>$this->date_of_birth,
         

         'role'=>new RoleResource( $this->role),
          'status'=>$this->employeeStatus->name,
        ];
    }
}
