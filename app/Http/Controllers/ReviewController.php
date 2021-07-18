<?php

namespace App\Http\Controllers;

use App\Models\Review;
use Illuminate\Http\Request;

class ReviewController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return Review::latest()->get();
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $review=new Review();
        $review->title=$request->title;
        $review->description=$request->description;
        $review->product_name=$request->product_name;
        $review->rate=$request->rate;
        $review->buyer_id=$request->buyer_id;
        $review->review_status_id=$request->review_status_id;
        $review->save();

    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Review  $review
     * @return \Illuminate\Http\Response
     */
    public function show(Review $review)
    {
        return $review;
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Review  $review
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Review $review)
    {
        $review->title=$request->title;
        $review->description=$request->description;
        $review->product_name=$request->product_name;
        $review->rate=$request->rate;
        $review->buyer_id=$request->buyer_id;
        $review->review_status_id=$request->review_status_id;
        $review->save();
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Review  $review
     * @return \Illuminate\Http\Response
     */
    public function destroy(Review $review)
    {
        if( $review->delete()) {
            return $this->successResponse('successfully deleted ',202);
        }
        else{
            return $this->errorResponse('fail to delete',501);
        }
    }

    public function getProductReview($name ){
        return Review::where('product_name',$name)->get();
       
    }
}
