<template>
<div class="mx-3" v-if="hasRole">
       <nav class="d-flex justify-content-between">
           <span class="fw-bold fs-5">Products</span>
           <button class="btnAddProduct text-white btn ms-auto" @click="addProduct" type="button">Add Products</button>
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
        <button class="btn-status fw-bold mx-2">Pending</button>
    </li>
</ul>

<div class="filter d-flex pe-4 mt-4 pt-0 justify-content-between">
    <div class="search-bar w-50  d-flex" >
        <select class="" id="searchBy"  aria-label="search product by">
                <option selected><span><i class="fas fa-sort-amount-down-alt"></i>Name</span></option>
                <option value="1">Email</option>
                <option value="2">Phone No</option>
       </select>
       <input type="text" class="search-input flex-fill" >
       <div class="search-icon"><span><i class="fas fa-search"></i></span></div>
    </div>

      <div class="form-group mx-2">
            <select class="form-select " aria-label="">
                <option class="" selected><span><i class="fas fa-sort-amount-down-alt"></i>Product Category</span></option>
                <option value="1">Status</option>
                <option value="2">i don't</option>
                <option value=""> <span><i class="fas fa-sort-amount-down-alt"></i></span></option>
            </select>
     </div>
     <div class="form-group mx-2">
            <select class="form-select " aria-label="">
                <option class="" selected><span><i class="fas fa-sort-amount-down-alt"></i>More Filter</span></option>
                <option value="1">Status</option>
                <option value="2">i don't</option>
                <!-- <option value=""> <span><i class="fas fa-sort-amount-down-alt"></i></span></option> -->
            </select>
     </div>
     <div class="form-group ">
               <select class="form-select " aria-label="">
                  <option selected><span><i class="fas fa-sort-amount-down-alt"></i>Sort by</span></option>
                  <option value="1">asc</option>
                  <option value="2">dec</option>
                  <!-- <option value=""> <span><i class="fas fa-sort-amount-down-alt"></i></span></option> -->
                </select>
     </div>
</div>

<!-- table -->
<table class="table table-borderless mt-3">
                          <thead>
                              <tr class="productTableHeader text-light">
                                 <th scope="col">#No</th>
                                 <th scope="col"> Name</th>
                                 <th scope="col">Status</th>
                                 <th scope="col">Vender</th>
                                 <th scope="col">Added Date</th>
                                 <th scope="col">Quantityy</th>
                                 <th scope="col">Action</th>
                              </tr>
                          </thead>

                          <tbody>
                             <tr v-for="product in products" :key="product.id" class="border rounded">
                                  <th scope="row">{{product.id}}</th>
                                  <td>{{product.name}}</td>
                                  <td>{{product.product_status_id}}</td>
                                  <td>{{product.vendor_id}}</td>
                                  <td>{{getFormatedDate(product.created_at) }}</td>
                                  <td>{{product.quantity}}</td>
                                  <td>
                                     <span  @click="viewDetail(product.id)" class="px-2 fs-5"><i class="fas fa-ellipsis-h"></i></span>
                                     <span  @click="deleteProduct(product.id)" class="fs-5"><i class="fas fa-trash"></i></span>
                                 </td>
                             </tr>
                               <!-- <tr v-for="n in 10" :key="n" class=" border rounded">
                                  <th scope="row">123425</th>
                                  <td>Black Box</td>
                                  <td>Active</td>
                                  <td>Adey Basics</td>
                                  <td>12/08/2021</td>
                                  <td>9</td>
                                  <td>
                                     <span  @click="viewDetail(1)" class="px-2 fs-5"><i class="fas fa-ellipsis-h"></i></span>
                                     <span  @click="deleteProduct(1)" class="fs-5"><i class="fas fa-trash"></i></span>
                                 </td>
                             </tr> -->
                      </tbody>
</table>
</div>
</div>
</template>
<script>
export default {
  data () {
    return {

    }
  },
  methods: {
    addProduct () {
      this.$router.push('/admin-home/add-product')
    },
    viewDetail (id) {
      this.$router.push('/admin-home/product-detail/' + id)
    },
    deleteProduct (id) {
      this.$store.dispatch('deleteProduct', id)
    },
    getFormatedDate (date) {
      return new Date(date).toISOString().split('T')[0]
    }

  },

  computed: {
    products () {
      return this.$store.getters.products
    },
    role () {
      return this.$store.getters.manager.role
    },
    hasRole () {
      return this.role.name === 'product manager' || this.role.name === 'admin'
    }
  },
  created () {
    this.$store.dispatch('fetchProducts')
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
.btnAddProduct{
  background-color: #ff9500;
}
#searchBy{
  background-color: #ff9500;
  color: #fff;
  padding: 5px;
}
select option:focus{
  background-color: green !important;
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
.productTableHeader{
    background-color: #ff9500;
    border: 2px solid #ff9500;
    border-radius: 0;
    border-bottom-left-radius: 0.5em;
    border-bottom-right-radius: 0.5em;
}
</style>
