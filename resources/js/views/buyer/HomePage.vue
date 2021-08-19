<template>
    <div class="category-carousel d-flex">
      <div class="category-list">
         <categrory-list></categrory-list>
      </div>
      <div class="home-carousel">
         <home-carousel></home-carousel>
      </div>
    </div>

     <div class="top-category my-4 ">
       <div class="ms-md-5 header">
         <h4 class="ms-2 fw-bold">Top Categories</h4>
       </div>
       <top-category></top-category>
     </div>

    <div class="top-category my-4 ">
       <div class="ms-md-5 header">
         <h4 class="ms-2 fw-bold">Featured Products</h4>
       </div>
       <featured-products></featured-products>
    </div>

     <div class="top-category my-4 ">
       <div class="ms-md-5 header">
         <h4 class="ms-2 fw-bold">New Arrival Products</h4>
       </div>
       <featured-products></featured-products>
     </div>

</template>
<script>
import CategroryList from '../../components/CategoryList.vue'
import HomeCarousel from '../../components/HomeCarousel.vue'
import TopCategory from '../../components/TopCategories.vue'
import FeaturedProducts from '../../components/FeaturedProducts.vue'

export default {
  components: {
    CategroryList,
    HomeCarousel,
    TopCategory,
    FeaturedProducts
  }
}
</script>
<style scoped>

.category-list{
  display: none;
  width: 20%;

}
.home-carousel{
  width: 100% !important;

}

@media only screen and (min-width: 568px){
 .category-list{
     display: block;
 }

}

@media only screen and (min-width: 768px){

}
</style>
