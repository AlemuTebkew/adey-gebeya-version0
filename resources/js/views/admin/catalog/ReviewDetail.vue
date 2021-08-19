<template>
 <div class="product-preview m-3 pb-5">
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
        <label for="#productName" class="pb-1">Product name</label>
        <input type="text" id="productName" class="form-control" v-model="product.name">
    </div>
</div>

<!-- second column  -->
             <div class="col-lg-7">
                 <div class="bg-white p-3  mb-3 shadow-sm rounded">
                   <label  class=" fw-bold">Review Writer</label>
                   <div class="py-2">Alemayehu Gelagay</div>
                 </div>

                 <div class="bg-white p-3  mb-3 shadow-sm rounded">
                   <label  class=" fw-bold">Review Writer</label>
                   <div class="py-2">
                        <span class="rate">
                            <i class="fas mx-1 fa-star"></i>
                            <i class="fas mx-1 fa-star"></i>
                            <i class="fas mx-1 fa-star"></i>
                            <i class="far mx-1 fa-star"></i>
                            <i class="far mx-1 fa-star"></i>
                        </span>
                   </div>
                 </div>

                 <div class=" bg-white p-3  mb-3 shadow-sm rounded">
                   <label class=" fw-bold">Review Title</label>
                   <div class="p-2 my-2 border rounded">
                       It's geramy and im in love with it but that make me alittle bit nerveous
                    </div>
                 </div>

                  <div class=" bg-white p-3  mb-3 shadow-sm rounded">
                   <label class=" fw-bold">Review Description</label>
                   <div class="p-2 my-2 border rounded">
                       It's geramy and im in love with it but that make me alittle bit nerveous
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
  },
  created () {
  }
}
</script>
<style scoped>

.rate{
    color: #ff9500;
}

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

</style>
