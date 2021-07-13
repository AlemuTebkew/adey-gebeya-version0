<?php

namespace App\Http\Controllers;

use App\Models\ReviewStatus;
use App\Traits\ApiResponser;
use Illuminate\Http\Request;

class ReviewStatusController extends Controller
{
    use ApiResponser;
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return ReviewStatus::all();
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $request->validate([
            'name'=>'required|unique:return_item_statuses', 
            'description'=>'required',
         ]);
         return ReviewStatus::create($request->all());
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\ReviewStatus  $reviewStatus
     * @return \Illuminate\Http\Response
     */
    public function show(ReviewStatus $reviewStatus)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\ReviewStatus  $reviewStatus
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, ReviewStatus $reviewStatus)
    {
        $request->validate([
            'name'=>'required|unique:return_item_statuses', 
            'description'=>'required',
         ]);
         return $reviewStatus->update($request->all());
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\ReviewStatus  $reviewStatus
     * @return \Illuminate\Http\Response
     */
    public function destroy(ReviewStatus $reviewStatus)
    {
        if( $reviewStatus->delete()) {
            return $this->successResponse('successfully deleted ',202);
        }
        else{
            return $this->errorResponse('fail to delete',501);
        }    }
}
