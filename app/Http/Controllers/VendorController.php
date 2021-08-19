<?php

namespace App\Http\Controllers;

use App\Models\Address;
use App\Models\Vendor;
use Illuminate\Http\Request;

class VendorController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return Vendor::with('address')->get();
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $address=new Address();
        $address->country='Ethiopia';
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

        $vendor=new Vendor();
        $vendor->contact_first_name=$request->contact_first_name;
        $vendor->contact_last_name=$request->contact_last_name;
        $time = strtotime($request->date_of_birth);
        $newformat = date('Y-m-d',$time);
        $vendor->date_of_birth=$newformat;
        $vendor->email=$request->email;
        $vendor->contact_phone_number=$request->contact_phone_number;
        $vendor->company_phone_number=$request->company_phone_number;
        $vendor->gender=$request->gender;
        $vendor->password=$request->password;
        $vendor->fax=$request->fax;
        $vendor->url=$request->url;
        $vendor->campany_name=$request->company_name;
        $vendor->vendor_status_id=1;

         $vendor->refresh();
        $address->vendor()->save($vendor);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Vendor  $vendor
     * @return \Illuminate\Http\Response
     */
    public function show(Vendor $vendor)
    {
        return $vendor;
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Vendor  $vendor
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Vendor $vendor)
    {
        $address=$vendor->address;
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


        $vendor->contact_first_name=$request->first_name;
        $vendor->contact_last_name=$request->last_name;
        $time = strtotime($request->date_of_birth);
        $newformat = date('Y-m-d',$time);
        $vendor->date_of_birth=$newformat;
        $vendor->email=$request->email;
        $vendor->contact_phone_number=$request->contact_phone_number;
        $vendor->company_phone_number=$request->company_phone_number;
        $vendor->gender=$request->gender;
        $vendor->password=$request->password;
        $vendor->fax=$request->fax;
        $vendor->url=$request->url;
        $vendor->campany_name=$request->company_name;
        $vendor->vendor_status_id=$request->vendor_status_id;

         $vendor->refresh();
        $address->vendor()->save($vendor);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Vendor  $vendor
     * @return \Illuminate\Http\Response
     */
    public function destroy(Vendor $vendor)
    {
        if($vendor->address()->delete()&& $vendor->delete()) {
            return $this->successResponse('successfully deleted ',202);
        }
        else{
            return $this->errorResponse('fail to delete',501);
        }    }
    }

