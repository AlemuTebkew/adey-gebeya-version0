<template>
 <div class="product-preview m-3">
   <span class="back-page" @click="backPage"><i class="fas fa-arrow-left"></i></span>

     <div class="container mt-3">
         <div class="row">
             <div class="col-lg-5">
                 <div class="product-carousel shadow-sm rounded bg-light mb-3">
                     <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>

  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="../../../assets/unsp-2.jpg" class="d-block w-100" alt="..." width="250" height="400">
    </div>
    <div class="carousel-item">
      <img src="../../../assets/product-detail.jpeg" class="d-block w-100" alt="..." width="250" height="400">
    </div>
    <div class="carousel-item">
      <img src="../../../assets/unsp-3.jpg" class="d-block w-100" alt="..." width="250" height="400">
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span class="carousel-control-prev-icon text-dark" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
</div>
            <div class="product-name bg-white p-3  mb-3 shadow-sm rounded">
                  <span class="edit fs-4 float-end"><i class="far fa-edit"></i></span>
                 <label for="#productName" class="pb-1">Product name</label>
                 <input type="text" id="productName" class="form-control" v-model="product.name">
              </div>

             <div class="product-description bg-white p-3  mb-3 shadow-sm rounded">

                 <label  class="pb-1 "> </label>
                     Product Description
                    <span class="edit fs-4 float-end"><i class="far fa-edit"></i></span>
                 <textarea type="text" class="form-control" rows="5" value="Bx z end t-shirt with hight quality, good..."></textarea>
              </div>

           <div class="product-description bg-white p-3  mb-3 shadow-sm rounded">
                  <!-- <span class="edit fs-4 float-end m-0 p-0"><i class="fas fa-plus"></i></span> -->
                  <span class="edit fs-4 pb-1 float-end"><i class="fas fa-plus-circle"></i></span>
                  <label  class="pb-1">Product short Description</label>

                 <ul class="list-group w-100">
                    <li class="list-group-item shortDescriptionHeading">
                        <span class="visually-hidden">Short Description</span>
                      </li>
                    <li class="list-group-item d-flex p-1">
                      <div class="flex-fill p-1">It's gives u comfort</div>
                      <span class="edit fs-4 float-end px-1"><i class="far fa-edit"></i></span>
                      <span class="times fs-4 pe-1"><i class="fas fa-times-circle"></i></span>
                    </li>
                     <li class="list-group-item d-flex p-1">
                      <div class="flex-fill p-1">Short Description</div>
                      <span class="edit fs-4 float-end px-1"><i class="far fa-edit"></i></span>
                      <span class="times fs-4 pe-1"><i class="fas fa-times-circle"></i></span>
                    </li>
                     <li class="list-group-item d-flex p-1">
                      <div class="flex-fill p-1">Short Description</div>
                      <span class="edit fs-4 float-end px-1"><i class="far fa-edit"></i></span>
                      <span class="times fs-4 pe-1"><i class="fas fa-times-circle"></i></span>
                    </li>
                     <li class="list-group-item d-flex p-1">
                      <div class="flex-fill p-1">Short Description</div>
                      <span class="edit fs-4 float-end px-1"><i class="far fa-edit"></i></span>
                      <span class="times fs-4 pe-1"><i class="fas fa-times-circle"></i></span>
                    </li>
                </ul>
              </div>

             <div class="product-brand bg-white p-3  mb-3 shadow-sm rounded">
                 <span class="edit fs-4 float-end"><i class="far fa-edit"></i></span>
                 <label for="#productBrand" class="pb-1">Product brand</label>
                 <input type="text" id="productBrand" class="form-control" value="Puma">
              </div>

              <div class="product-manufacturer bg-white p-3  mb-3 shadow-sm rounded">
                 <span class="edit fs-4 float-end"><i class="far fa-edit"></i></span>
                 <label for="#productManufacturer" class="pb-1">Manufacturer</label>
                 <input type="text" id="productManufacturer" class="form-control" value="Z end technology">
              </div>

             <div class="product-date bg-white p-3  mb-3 shadow-sm rounded d-flex">
                <div class="me-2">
                    <label for="#productionDate" class="p-1">Production date</label>
                    <input type="text" id="productionDate" class="form-control" value="Z end technology">
                </div>
                <div class="ms-2">
                    <label for="#expiryDate" class="p-1">Manufacturer</label>
                    <input type="text" id="expiryDate" class="form-control" value="Z end technology">
                </div>
             </div>

             </div>

<!-- second column  -->
             <div class="col-lg-7">
                 <div class="product-vender bg-white p-3  mb-3 shadow-sm rounded">
                   <label for="#productVender" class="pb-1">Product Vender</label>
                   <input type="text" id="productVender" class="form-control" value="Adey Basics">
                 </div>

                  <div class="product bg-white p-3 mb-3 shadow-sm rounded">
                      <table class="table table-borderless">
                          <thead>
                              <tr class="productVariantHeader text-light">
                                 <th scope="col">#</th>
                                 <th scope="col">Name</th>
                                 <th scope="col">SKU</th>
                                 <th scope="col">Price</th>
                                 <th scope="col">Qty</th>
                                 <th scope="col"><span class="visually-hidden">Action</span></th>
                              </tr>
                          </thead>

                          <tbody>
                             <tr class="border rounded">
                                  <th scope="row">1</th>
                                  <td>white xl cotten</td>
                                  <td>100wh-xl-co</td>
                                  <td>12</td>
                                  <td>200ETB</td>
                                  <td class="p-0 m-0 pe-2">
                                     <span class="edit fs-4 float-end"><i class="far fa-edit"></i></span>
                                     <span class="times fs-4"><i class="fas fa-times-circle"></i></span>
                                  </td>
                             </tr>
                             <tr class="border rounded">
                                 <th scope="row">2</th>
                                 <td>white xl cotten</td>
                                 <td>100wh-xl-co</td>
                                 <td>12</td>
                                 <td>200ETB</td>
                                 <td class="p-0 m-0 pe-2">
                                     <span class="edit fs-4 float-end"><i class="far fa-edit"></i></span>
                                     <span class="times fs-4"><i class="fas fa-times-circle"></i></span>
                                </td>
                            </tr>
                            <tr class="border rounded">
                                <th scope="row">3</th>
                                <td>white xl cotten</td>
                                <td>100wh-xl-co</td>
                                <td>12</td>
                                <td>200ETB</td>
                                <td class="p-0 m-0 pe-2">
                                  <span class="edit fs-4 float-end"><i class="far fa-edit"></i></span>
                                  <span class="times fs-4"><i class="fas fa-times-circle"></i></span>
                               </td>
                           </tr>
                      </tbody>
                   </table>
                  </div>
<!-- category/subcategory -->
<div class="bg-white p-3  mb-3 shadow-sm rounded d-flex justify-content-between">
                     <div class="form-group me-2">
                        <label for="#productStats" class="p-1">Product status</label>
                        <select  id="productStats" class="form-select">
                            <option value="active" selected>Active</option>
                            <option value="pending">Pending</option>
                        </select>
                     </div>
                      <div class="form-group me-2">
                        <label for="#productVisibility" class="p-1">Product Visibility</label>
                        <select  id="productVisibility" class="form-select">
                            <option value="nomral" selected>Normal</option>
                            <option value="new">New</option>
                        </select>
                     </div>
                   </div>
<!-- product status status -->
                  <div class="bg-white p-3  mb-3 shadow-sm rounded d-flex justify-content-between">
                     <div class="form-group me-2">
                        <label for="#productStats" class="p-1">Product status</label>
                        <select  id="productStats" class="form-select">
                            <option value="active" selected>Active</option>
                            <option value="pending">Pending</option>
                        </select>
                     </div>
                      <div class="form-group me-2">
                        <label for="#productVisibility" class="p-1">Product Visibility</label>
                        <select  id="productVisibility" class="form-select">
                            <option value="nomral" selected>Normal</option>
                            <option value="new">New</option>
                        </select>
                     </div>
                   </div>
             </div>
         </div>
     </div>
 </div>
</template>
<script>
export default {
  data () {
    return {
      product: {}
    }
  },
  methods: {
    backPage () {
      this.$router.back()
    }
  },
  computed: {
    products () {
      return this.$store.getters.products
    }
  },
  created () {
    console.log('products id' + this.products)

    this.products.forEach((product) => {
      if (parseInt(product.id) === parseInt(this.$route.params.productId)) { this.product = product }
    })
  }
}
</script>
<style scoped>
.edit{
    color: #ff9500;
}
.times{
     color: #ff1e00e7;
}
/* .edit .fa-plus{
    border: 2px solid #ff9500;
    border-radius: 50%;
    font-size: 20px;
    padding: 2px;
    margin-bottom: 5px;
} */
.back-page .fas{
    color: #ff9500;
    transform: scale(2,1.5);
    cursor: pointer;
}
.carousel-control-prev-icon{
    color: #000;
}

.carousel-control-prev-icon,
.carousel-control-next-icon {
  height: 100px;
  width: 100px;
  /* outline: black; */
  background-size: 100%, 100%;
  border-radius: 50%;
  /* border: 1px solid black; */
  background-image: none;
}

.carousel-control-next-icon:after
{
  content: '>';
  font-size: 40px;
  color: black;
}

.carousel-control-prev-icon:after {
  content: '<';
  font-size: 40px;
  color:black;
}

.list-group{
border-radius: 0;
}
.list-group-item{
    border: 1px solid lightgray;
    border-radius: 0.5em;
}
.shortDescriptionHeading{
    background-color: #ff9500;
    padding: 1.2em;
    border: none !important;
    border-radius: 0;
    border-bottom-left-radius: 0.5em;
    border-bottom-right-radius: 0.5em;
}

.productVariantHeader{
    background-color: #ff9500;
    border: none !important;
    border-radius: 0;
    border-bottom-left-radius: 0.5em;
    border-bottom-right-radius: 0.5em;

}
</style>
