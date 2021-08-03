<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class EmployeeRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'first_name'=>'required|alpha',
            'last_name'=>'required|alpha',
            'date_of_birth'=>'required', // rules',
            'email'=>'required|email|unique:employees',
            'phone_number'=>'required|unique:employees',
            'gender'=>'required',
            'password'=>'required',
            'role_id'=>'required',
            'employee_status_id'=>'required',
            'country'=>'required',
            'zone'=>'required',
            
            'city'=>'required',
            'sub_city'=>'required',
            'zip_cod'=>'required',
            'kebele'=>'required',
            'village'=>'required',
            'longitude'=>'required',
            'latitude'=>'required',
            'description'=>'required',
           

        ];
    }
}
