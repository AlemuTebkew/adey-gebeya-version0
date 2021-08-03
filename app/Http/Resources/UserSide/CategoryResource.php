<?php

namespace App\Http\Resources\UserSide;

use Illuminate\Http\Resources\Json\JsonResource;

class CategoryResource extends JsonResource
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
            "image"=>$this->image,
            "sub_category"=>SubCategoryResource::collection($this->sub_categories),
           // "sub_category_name"=>$this->name,
    ];

    }
}
