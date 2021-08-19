<?php

namespace App\Http\Resources\UserSide;

use App\Models\Review;
use Illuminate\Http\Resources\Json\JsonResource;

class ProductResource extends JsonResource
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
            "name"=>$this->name,
            "unit"=>$this->unit->abbrevation,
            'price'=>$this->product_skus->pluck('unit_price')->first(),
            //optional way
          //  'price'=>$this->when($sku=$this->product_skus->first(),$sku['unit_price']),
            "image"=>$this->when($image=$this->images->first(),asset('images/sku_images/'.$image['name'])),
            "rate"=>$this->when($review=Review::where('product_name',$this->name)->first(),$review['rate']),
            ];
    }
}
