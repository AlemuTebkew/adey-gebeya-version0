<template>
<div class="mx-3">
       <nav class="d-flex justify-content-between">
           <span class="fw-bold fs-5">Sub Categories</span>
           <button class="btnAddSubCategory text-white btn ms-auto" @click="addSubCategory" type="button">Add SubCategory</button>
       </nav>

<!-- navbar end   -->
<div class="shadow-sm rounded p-3 bg-white mt-4">
<ul class=" nav d-flex status-nav mt-2">
     <li class="nav-item ">
        <button class="btn-status fw-bold pe-3">All</button>
    </li>

    <li class="nav-item">
        <button class="btn-status fw-bold mx-2">Active</button>
    </li>
     <li class="nav-item">
        <button class="btn-status fw-bold mx-2">Disabled</button>
    </li>
</ul>

<div class="filter d-flex pe-4 mt-4 pt-0 justify-content-between">
    <div class="search-bar w-50  d-flex" >
        <select class="" id="searchBy"  aria-label="search sucategpry by">
                <option selected><span><i class="fas fa-sort-amount-down-alt"></i>Name</span></option>
                <option value="1">Email</option>
                <option value="2">Phone No</option>
       </select>
       <input type="text" class="search-input flex-fill" aria-label="Text input with segmented dropdown button">
       <div class="search-icon"><span><i class="fas fa-search"></i></span></div>
    </div>
        <div class="form-group ">
               <select class="form-select ">
                  <option selected><span><i class="fas fa-sort-amount-down-alt"></i>Category</span></option>
                  <option value="1">name</option>
                  <option value="2">id</option>
                  <option value=""> <span><i class="fas fa-sort-amount-down-alt"></i></span></option>
                </select>
     </div>
     <div class="form-group ">
               <select class="form-select ">
                  <option selected><span><i class="fas fa-sort-amount-down-alt"></i>Sort by</span></option>
                  <option value="1">name</option>
                  <option value="2">id</option>
                  <option value=""> <span><i class="fas fa-sort-amount-down-alt"></i></span></option>
                </select>
     </div>
</div>

<!-- table -->
<table class="table table-borderless mt-3">
                          <thead>
                              <tr class="subcategoryTableHeader text-light">
                                 <th scope="col">#ID</th>
                                 <th scope="col">Name</th>
                                 <th scope="col">Category</th>
                                 <th scope="col">Status</th>
                                 <th scope="col">Added date</th>
                                 <th scope="col">Action</th>
                                 </tr>
                          </thead>

                          <tbody>

                             <tr v-for="subCategory in subCategories" :key="subCategory.id" class="border rounded">
                                  <th scope="row">{{subCategory.id}}</th>
                                  <td>{{subCategory.name}}</td>
                                  <td>{{getCategoryName(subCategory.category_id)}}</td>
                                  <td>{{getFormatedDate(subCategory.created_at) }}</td>
                                  <td>{{subCategory.have_sub_subCategory}}</td>
                                  <td>
                                     <span  @click="viewDetail(subCategory.id)" class="px-2 fs-5"><i class="fas fa-ellipsis-h"></i></span>
                                     <span  @click="deleteSubcategory(subCategory.id)" class="fs-5"><i class="fas fa-trash"></i></span>
                                 </td>
                             </tr>
                          <!--
                               <tr class="border rounded" v-for = "n in 15" :key="n">
                                  <th scope="row">1</th>
                                  <td>T-shirt</td>
                                  <td>Clothes</td>
                                  <td>Active</td>
                                  <td>7/26/2021</td>
                                  <td>
                                     <span  @click="viewDetail(1)" class="px-2 fs-5"><i class="fas fa-ellipsis-h"></i></span>
                                     <span  @click="deleteSubCategory(1)" class="fs-5"><i class="fas fa-trash"></i></span>
                                 </td>
                             </tr> -->

                      </tbody>

</table>
</div>
</div>
</template>
<script>
export default {
  props: ['categoryId'],
  methods: {
    addSubCategory () {
      this.$router.push('/admin-home/add-SubCategory')
    },
    viewDetail (Id) {
      this.$router.push('/admin-home/sub-category-detail/' + Id)
    },
    deleteSubcategory (id) {
      this.$store.dispatch('deleteSubcategory', id)
    },
    getCategoryName (categoryId) {
      let categoryName
      this.categories.forEach(category => {
        if (parseInt(category.id) === parseInt(categoryId)) { categoryName = category.name }
      })
      return categoryName
    },
    getFormatedDate (date) {
      return new Date(date).toISOString().split('T')[0]
    }
  },
  computed: {
    subCategories () {
      return this.$store.getters.subcategories
    },
    categories () {
      return this.$store.getters.categories
    }
  },
  created () {

  }
}
</script>

<style scoped>
*{
    box-sizing: border-box;
}
/* .view{
    color: #ff9500;
} */
.fas{
  cursor: pointer;
}
.btn-status:focus
/* input.form-control:focus,
input[type=text]:focus */
 {
  border:  3px solid lightgray !important;
  border-radius: 5px;
}
.dropdown-item:focus{
    background-color: lightgray;
    color: #000;
}

.btn-status{
   border: none;
   background-color: white !important;
}
button{
    cursor: pointer !important;;
}
.btnAddSubCategory{
  background-color: #ff9500;
}
#searchBy{
  background-color: #ff9500;
  color: #fff;
  padding: 5px;
}
select option:hover{
  background-color: transparent;
  color: fff;
}
/* search bar ዙሪያ */
.search-bar{
    border: 2px solid lightgray;
    border-radius: 5px;
}

.search-bar input {
    border: none;

}
.search-bar select{
    border: none;
    border-right:2px solid lightgray;
}
.search-bar select:focus,
input.search-input:focus{
    outline: none;
}

.search-bar:focus-within{
    border: 2px solid  #ff9500 !important;
}

.search-icon{
    padding-top: 4px;
    text-align: center !important;
}
 .search-bar span{
    font-size: 1.2em;
    cursor: pointer;
    padding: 0 10px 0 5px;
}
.subcategoryTableHeader{
    background-color: #ff9500;
    border: 2px solid #ff9500;
    border-radius: 0;
    border-bottom-left-radius: 0.5em;
    border-bottom-right-radius: 0.5em;
}
</style>
