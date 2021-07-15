<?php

namespace App\Http\Controllers;

use App\Http\Requests\EmployeeRequest;
use App\Http\Resources\EmployeeResource;
use App\Models\Address;
use App\Models\Employee;
use App\Traits\ApiResponser;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class EmployeeController extends Controller
{
    use ApiResponser;
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return EmployeeResource::collection( Employee::with(['role','employeeStatus'])->get());
    }

    public function sort()
    {
        return $this->sortData(EmployeeResource::collection(Employee::with(['role','employeeStatus'])->get())->collection);
    }

    public function filter()
    {
        return $this->filterData(EmployeeResource::collection(Employee::with(['role','employeeStatus'])->get())->collection);
    }

    public function search(Request $request) {
     
    // $e='employees';
        $query=$request->search_by;
        $search = Employee::where('first_name', 'like', "%{$query}%")
                 ->orWhere('last_name', 'like', "%{$query}%")
                 ->orWhere('email', 'like', "%{$query}%")
                 ->orWhere('phone_number', 'like', "%{$query}%")
                 ->get();

        return response()->json([
            'data' => $search
        ]);
    }
    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(EmployeeRequest $request)
    {
        $address=new Address();
        $address->country=$request->country;
        $address->region=$request->region;
        $address->zone=$request->zone;
        $address->city=$request->city;
        $address->sub_city=$request->sub_city;      
        $address->zip_cod=$request->zip_cod;
        $address->kebele=$request->kebele;
        $address->village=$request->village;
        $address->longitude=$request->longitude;
        $address->latitude=$request->latitude;
        $address->description=$request->description;
        $address->save();
        // $address->refresh();
        
        $employee=new Employee();
        $employee->first_name=$request->first_name;
        $employee->last_name=$request->last_name;
        $time = strtotime($request->date_of_birth);
        $newformat = date('Y-m-d',$time);
        $employee->date_of_birth=$newformat;
        $employee->email=$request->email;
        $employee->phone_number=$request->phone_number;
        $employee->gender=$request->gender;
        $employee->password=$request->password;
        //$employee->address_id=$request->address_id;
        $employee->role_id=$request->role_id;
        $employee->employee_status_id=$request->employee_status_id;
       
        $address->refresh();
        $address->employee()->save($employee);
        
       
     


      //  Employee::create($request->all());
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Employee  $employee
     * @return \Illuminate\Http\Response
     */
    public function show(Employee $employee)
    {
        return $employee;
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Employee  $employee
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Employee $employee)
    {
        $address=$employee->address;
        $address->country=$request->country;
        $address->region=$request->region;
        $address->zone=$request->zone;
        $address->city=$request->city;
        $address->sub_city=$request->sub_city;      
        $address->zip_cod=$request->zip_cod;
        $address->kebele=$request->kebele;
        $address->village=$request->village;
        $address->longitude=$request->longitude;
        $address->latitude=$request->latitude;
        $address->description=$request->description;
        $address->save();
        // $address->refresh();
        
      
        $employee->first_name=$request->first_name;
        $employee->last_name=$request->last_name;
        $time = strtotime($request->date_of_birth);
        $newformat = date('Y-m-d',$time);
        $employee->date_of_birth=$newformat;
        $employee->email=$request->email;
        $employee->phone_number=$request->phone_number;
        $employee->gender=$request->gender;
        $employee->password=$request->password;
        //$employee->address_id=$request->address_id;
        $employee->role_id=$request->role_id;
        $employee->employee_status_id=$request->employee_status_id;
       
        $address->refresh();
        $address->employee()->save($employee);
            }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Employee  $employee
     * @return \Illuminate\Http\Response
     */
    public function destroy(Employee $employee)
    {
        

        if($employee->address()->delete()&& $employee->delete()) {
            return $this->successResponse('successfully deleted ',202);
        }
        else{
            return $this->errorResponse('fail to delete',501);
        }    }
 
}
