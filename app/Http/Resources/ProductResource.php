<?php

namespace App\Http\Resources;

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
            "id"=>$this->id,
            "name"=>$this->name,
            "slug"=>$this->slug,
            "description"=>$this->name,
            "short_description"=>$this->description,
            "production_date"=>$this->production_date,
            "expired_date"=>$this->expired_date,
            "commission_rate"=>$this->commission_rate,
            "brand"=>$this->brand,
            "quantity"=>$this->quantity,
            "manufacturer"=>$this->manufacturer,
            "number_of_sold"=>$this->number_of_sold,
            "unit_id"=>$this->unit_id,
            "vendor_id"=>$this->vendor_id,
            "sub_category_id"=>$this->sub_category_id,
            "product_status_id"=>$this->product_status_id,
            "product_visiblity_status_id"=>$this->product_status_id,
            "category_id" =>$this->product_status_id,
            "created_at"=>$this->created_at,
            "updated_at"=>$this->updated_at,
        ];
    }
}
