/* eslint-disable no-unused-expressions */
<template>
<div class="mx-3">
    <nav class="">
           <span class="fw-bold fs-5"> Add Product</span>
       </nav>
<!-- navbar end  -->

<!-- form begin -->
<form @submit.prevent="addProduct" class="position-relative">

 <div class=" mt-4 position-relative  pb-lg-5">
     <div class="row">
         <div class="col-lg-8">
         <div class="shadow-sm rounded mb-3 bg-white p-4 ">
             <div class="form-group">
               <label for="#productName" >Product Name</label>
               <input type="text" class="form-control" ref="name" id="productName">
            </div>
            <div class="form-group">
                <label for="#productDescription" >Description</label>
                <textarea  class="form-control" rows="5" ref="description" id="productDescription" placeholder="Describe the product"></textarea>
            </div>
            <div class="form-group">
                <label for="#shortDescription1">Short Descriptin</label>
                <input type="text" class="form-control mb-2" ref="shortDescription1" id="shortDescription1" placeholder="description one">
                <input type="text" class="form-control mb-2" ref="shortDescription2" id="shortDescription2" placeholder="description two">
                <input type="text" class="form-control mb-2" ref="shortDescription3" id="shortDescription3" placeholder="description three">
                <input type="text" class="form-control mb-2" ref="shortDescription4" id="shortDescription4" placeholder="description four">
                <input type="text" class="form-control mb-2" ref="shortDescription5" id="shortDescription5" placeholder="description five">

            </div>

        </div>
       <div class="shadow-sm rounded bg-white mb-3 p-4">
            <!-- price -->
         <div class="form-group">
                <label for="#price">Price</label>
                <input type="number"  class="form-control" rows="5" ref="price" id="price" placeholder="price">
            </div>
            <!-- sku -->
        <div class="form-group">
               <label for="#skuId">SKU(stock keeping unit)</label>
               <input type="text" class="form-control" ref="sku" id="skuId">
        </div>
        <!-- production and expire date -->
        <div class="date d-flex border">
            <div class="form-group col-5 mx-3 py-2">
            <label for="#productiondate">Production date</label>
            <input type="date" class="form-control" ref="productionDate" id="productiondate">
        </div>
        <div class="form-group col-5 mx-3 py-2">
            <label for="#expireDate">Expire date</label>
            <input type="date" class="form-control" ref="expireDate" id="expireDate">
        </div>
        </div>

      <!-- quantity -->
      <div class="form-group mt-2">
                <label for="#quantity">Quantity</label>
                <input type="number"  class="form-control" rows="5" ref="qty" id="quantity" placeholder="0">
            </div>
   </div>
 <div class="shadow-sm rounded bg-white mb-3 p-4">
<!-- checkbox product variant-->
            <div class="form-check border">
                <div class="my-2">variants</div>
                <input class="form-check-input ms-2 mt-2" type="checkbox" value="" v-model="showProductVariant" id="productVariants">
                <label class="form-check-label ms-2 my-2 mb-1" for="#productVariants"> is the product have varianties</label>
            </div>

<!-- product options  -->
           <div class="productOption border p-2" v-show="showProductVariant">
               <div class="fw-bold">Options</div>
               <div class="option d-flex" v-for="(productOption, index) in productOptions" :key="index">
                  <div class="form-group col-md-3 mx-3 py-2">
                      <label for="#option">Option {{index+1}}</label>
                      <input type="text" class="form-control" v-model="productOption.name" id="option">
                </div>
                <div class="form-group col-md-7 mx-3 py-2">
                      <label></label>
                      <input type="text" class="form-control" multiple v-model="productOption.value"
                       @click="addProductOption(index)" @blur="addFinalProductOption(productOptions)"  id="optionValue">
                </div>
            </div>

<!-- product options end  -->

<!-- table -->
<div class="table-responsive">
    <table class="table table-striped mt-2 ">
  <thead>
    <tr>
      <th scope="col" style="width:5%;">No</th>
      <th scope="col" style="width:15%;">Price</th>
      <th scope="col" style="width:15%;">Qty</th>
      <th scope="col" style="width:20%;">SKU</th>
      <th scope="col" style="width:30%;">Images</th>
      <th scope="col" style="width:5%;"> <span class="">Action</span> </th>
    </tr>
  </thead>
  <tbody>
    <tr v-for="(variation, index) in variationListArray" :key="variation.id">
      <!-- <th scope="row">{{optionName(variation.variant)}}</th> -->
      <th scope="row">{{index+1}}</th>
      <td >
          <input type="number" v-model="variationListArray[index].price"   class="input-group">
      </td>
      <td>
          <input type="number" v-model="variationListArray[index].qty"  class="input-group">
      </td>
      <td>
          <input type="text"  class="input-group" :value="optionName(variation.variant)" readonly>
      </td>
      <td>

          <div class="upload-image text-center p-2"
               @dragenter="onDragEnter" @dragleave="onDragLeave"
                @dragover="onDragEnter" @drop.prevent="handleFiles($event, variation.id)"
                :class="{draging: isDraging}" @change="handleFiles($event, variation.id)">
              <label :for="variation.id" >{{getNumberOfImages(variation.id)}}</label>
              <input type="file" name="" accept="image/png, image/gif, image/jpeg, image/jpg" :id="variation.id" multiple ref="dropedImages">

              <div class="small">Drag and drop here</div>
          </div>
      </td>
      <td>
          <div class="actions">
            <button type="button" @click="deleteVariant(variation.id)" class="btn"><i class="fas fa-trash px-2 text-dark"></i></button>
          </div>
     </td>

    </tr>
    </tbody>
</table>
</div>

</div>
  <!-- product option end  -->
  </div>
</div>

<div class="col-lg-4 ml-lg-4">
    <div class="shadow-sm rounded bg-white mb-3 p-4">
            <div class="form-group">
               <label for="#productStatus">Product Status</label>
               <select class="form-select" ref="status" id="productStatus" aria-label="product status">
                  <option v-for="productStatus in productStatuses" :value="productStatus.id" :key="productStatus.id">{{productStatus.name}}</option>
               </select>
               <small>This product is visible to the customer.</small>
            </div>

           <div class="form-group">
               <label for="#productVisibilityStatus">Product Visibility Status</label>
               <select class="form-select" ref="visibilityStatus" id="productVisibilityStatus" aria-label="product visibility status">
                  <option  v-for="visibilityStatus in visibilityStatuses" :value="visibilityStatus.id" :key="visibilityStatus.id">{{visibilityStatus.name}}</option>
                </select>
               <small>It can't be shown as a featured</small>
            </div>

            <div class="form-group">
               <label for="#productCollection">Category</label>
               <select class="form-select" ref="category" v-model="categoryId" id="productCollection" aria-label="product collections">
                  <option v-for="category in categories" :key="category.id" :value="category.id">{{category.name}}</option>

                </select>
               <small>products category</small>
            </div>

            <div class="form-group" v-if="categoryId">
               <label for="#productsubCategory">Sub Category</label>
               <select class="form-select" ref="subcategory"  id="productsubCategory" aria-label="product sub collections">
                  <option v-for="subcategory in getCategoryBasedSubcategories(categoryId)" :key="subcategory.id" :value="subcategory.id">{{subcategory.name}}</option>

                </select>
               <small>products sub category</small>
            </div>
</div>
 <div class="shadow-sm rounded bg-white mb-3 p-4">
            <div class="form-group">
               <label for="#productTags">Product Tags</label>
               <input type="text" class="form-control" ref="tags" id="productTags">
               <small>use comma(,) to separate. /#tag1,#tag2/</small>
            </div>

            <div class="form-group">
               <label for="#vender">Vendor</label>
               <select class="form-select" ref="vendor" id="vender" aria-label="product vender">
                  <option v-for="vendor in vendors" v-text="vendor.campany_name" :value="vendor.id" :key="vendor.id"></option>

                </select>
            </div>

            <div class="form-group">
               <label for="#productBrand">Product Brand</label>
               <input type="text" class="form-control" ref="brand" id="productBrand">
            </div>

            <div class="form-group">
               <label for="#productBrand">Manufacturer</label>
               <input type="text" class="form-control" ref="manufacturer" id="productManufacturer">

            </div>

              <div class="form-group">
                 <label for="#productUnit">Prodcut Unit</label>
                    <select class="form-select"  ref="unit" id="productUnit" aria-label="product unit">
                       <option v-for="unit in units" :key="unit.id" :value="unit.id" >{{unit.name}}</option>
                    </select>
              </div>
        </div>
<!-- submit button begin-->
           <div class="d-flex justify-content-between mt-5">
               <button class="btn btn-light btnCancel  mt-5" @click="cancel" type="cancel">Cancel</button>
               <button :disabled="isLoading"  class="btn btnSave  text-light  mt-5" type="submit">Save </button>

           </div>
 <!-- submit button end  -->
       </div>
    </div>

  <!-- <span>
      <i class="fas fa-minus-circle" @click="remove(k)" v-show="k || ( !k && inputs.length > 1)">Remove</i>
      <i class="fas fa-plus-circle" @click="add(k)" v-show="k == inputs.length-1">Add fields</i>
    </span> -->
</div>

</form>
</div>
</template>
<script>
export default {

  data () {
    return {
      showProductVariant: false,
      productOptions: [
        {
          name: '',
          value: ''
        }
      ],
      // productVariant: [

      // ],
      finalProductOption: [],
      variationListArray: [],
      categoryId: null,
      // for drag and drop
      isDraging: false
    }
  },
  computed: {
    categories () {
      return this.$store.getters.categories
    },
    subcategories () {
      return this.$store.getters.subcategories
    },
    units () {
      return this.$store.getters.getUnits
    },
    visibilityStatuses () {
      return this.$store.getters.productVisibilityStatus
    },
    productStatuses () {
      return this.$store.getters.productStatus
    },
    vendors () {
      return this.$store.getters.vendors
    },
    isLoading () {
      return this.$store.getters.isLoading
    }
  },
  methods: {
    addProductOption (index) {
      if (index === this.productOptions.length - 1) {
        this.productOptions.push(
          {
            name: '',
            value: ''
          }
        )
      }
    },
    getCategoryBasedSubcategories (categoryId) {
      const subcategories = this.subcategories.filter((subcategory) => {
        return parseInt(subcategory.category_id) === parseInt(categoryId)
      })

      return subcategories
    },
    addFinalProductOption (productOptions) {
      this.finalProductOption = []
      productOptions.forEach((option) => {
        if (option !== null && option.name.trim().length !== 0 && option.value.trim().length !== 0) {
          this.finalProductOption.push({
            name: option.name,
            value: option.value.split(',').filter((val) => {
              if (val.trim().length !== 0) { return val }
            })
          })
        }
      })
      this.createVariation()
    },

    createVariation () {
    //   this.finalProductOption[0].value

      const cartesianProduct = (...arr) => {
        return arr.reduce((acc, val) => {
          return acc.map(el => {
            return val.map(element => {
              return el.concat([element])
            })
          }).reduce((acc, val) => acc.concat(val), [])
        }, [
          []
        ])
      }

      var variationList = []

      var variationValues = []
      for (var i = 0; i < this.finalProductOption.length; i++) {
        variationValues[i] = this.finalProductOption[i].value
      }
      variationList = cartesianProduct(...variationValues)

      this.makeVariationTable(variationList)
    },

    makeVariationTable (variationList) {
      this.variationListArray = []
      for (var i = 0; i < variationList.length; i++) {
        this.variationListArray.push({
          id: i,
          variant: variationList[i],
          price: '',
          sku: this.optionName(variationList[i]),
          qty: 0,
          images: []
        })
      }
    },

    optionName (variantNames) {
      var variantSubNames = ''
      variantNames.forEach((item, index) => {
        if (index === 0) { variantSubNames += item.trim().substr(0, 2) } else { variantSubNames += '-' + item.trim().substr(0, 2) }
      })
      return variantSubNames
    },

    // handle drag and drop
    onDragEnter (e) {
      e.preventDefault()
      this.isDraging = true
    },
    onDragLeave (e) {
      e.preventDefault()
      this.isDraging = false
    },
    //   handle product images
    handleFiles (e, variationId) {
      const inputImages = e.target.files || e.dataTransfer.files || this.$refs.dropedImages.files
      console.log(inputImages)
      var uploadedImages = []
      inputImages.forEach((item) => {
        uploadedImages.push(item)
        console.log('from item')
        console.log(item)
      })

      //   find index
      const variationIndex = this.variationListArray.findIndex((item) => {
        return item.id === variationId
      })
      this.variationListArray[variationIndex].images = uploadedImages

      //   console.log(this.variationListArray[variationId].images);
      this.isDraging = false
    },

    // delete variation id
    deleteVariant (variationId) {
      this.variationListArray = this.variationListArray.filter(item => {
        return item.id !== variationId
      })
    },

    getNumberOfImages (variationId) {
    //  console.log(variationId);
      const imagesLength = this.variationListArray.find((item) => {
        return item.id === variationId
      }).images.length
      return imagesLength === 0 ? 'Add images' : imagesLength + 'images added'
      // return 'Add image';
    },

    async addProduct () {
      var shortDescription = ''
      //    for (let i = 0; i < 5; i++) {
      shortDescription = this.$refs.shortDescription1.value + '`' + this.$refs.shortDescription2.value + '`' + this.$refs.shortDescription3.value + '`' + this.$refs.shortDescription4.value + this.$refs.shortDescription5.value

      //    }
      var formData = new FormData()
      formData.append('has_variant', this.showProductVariant)
      formData.append('name', this.$refs.name.value)
      formData.append('description', this.$refs.description.value)
      formData.append('short_description', shortDescription)
      formData.append('price', this.$refs.price.value)
      formData.append('sku', this.$refs.sku.value)
      formData.append('production_date', this.$refs.productionDate.value)
      formData.append('expired_date', this.$refs.expireDate.value)
      formData.append('qty', this.$refs.qty.value)

      for (let i = 0; i < this.finalProductOption.length; i++) {
        formData.append(`options[${i}][name]`, this.finalProductOption[i].name)

        for (let j = 0; j < this.finalProductOption[i].value.length; j++) {
          formData.append(`options[${i}][values][${j}]`, this.finalProductOption[i].value[j])
        }
      }

      // forEach loop for variationListArray
      this.variationListArray.forEach((variationItem, index) => {
        formData.append(`variations[${index}][id]`, variationItem.id)
        formData.append(`variations[${index}][price]`, variationItem.price)
        formData.append(`variations[${index}][sku]`, variationItem.sku)
        formData.append(`variations[${index}][qty]`, variationItem.qty)

        //   forEach loop for variationItem.variant
        variationItem.variant.forEach((variantValue, i) => {
          formData.append(`variations[${index}][variant][${i}]`, variantValue)
        })
        variationItem.images.forEach((image, i) => {
          formData.append(`variations[${index}][images][${i}]`, image)
        })
      })

      formData.append('product_status_id', this.$refs.status.value)
      formData.append('product_visiblity_status_id', this.$refs.visibilityStatus.value)
      formData.append('category_id', this.$refs.category.value)
      formData.append('sub_category_id', this.$refs.subcategory.value)
      formData.append('vendor_id', this.$refs.vendor.value)
      formData.append('brand', this.$refs.brand.value)
      formData.append('manufacturer', this.$refs.manufacturer.value)
      formData.append('unit_id', this.$refs.unit.value)

      //   var tags=this.$refs.tags;
      //   tags=tags.split(",")
      //   tags=tags.filter(val=>{
      //       if(val.length !==0)
      //          return val
      //   });
      formData.append('tags', this.$refs.tags.value)
      this.$store.dispatch('addProduct', formData)
    }

  }

  //  watch:{
  //      productOptions(newValue, oldValue){
  //         console.log(newValue);
  //         console.log(oldValue);
  //      }
  //  }

}
</script>

<style scoped>

.form-group{
    margin-bottom: 20px;
    cursor: pointer !important;
}
.draging{
    background-color: darkgray;
}

/* input.form-control:focus */
/* ,input[type=text]:focus */
 /* {
  border:  3px solid lightgray !important;
  border-radius: 5px;
  outline: none !important;

}  */
.btnSave{
  background-color: #ff9500;
  width:7em;
}
.btnCancel{
  width: 7em;
}
.upload-image{
    border:2px dashed darkgray;
    padding: 2px, 5px;

}
.upload-image input{
    width: 0;
}
.upload-image label{
    border: 2px solid darkgray;
    border-radius: 5px;
    padding: 2px 5px;
    cursor: pointer;
}

.cancel{
  width: 7em;
}
.save{
  width: 7em;
}

.loading{
    /* position: absolute !important;
    z-index: 1000000 !important;
    width: 100% !important;
    text-align: center;
    height: 100% !important;
    top: 0;
    bottom: 0;  */

}
.form-group label{
  margin-bottom: 5px;
}
</style>
