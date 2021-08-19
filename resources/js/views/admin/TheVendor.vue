<template>
<div class="mx-3">
       <nav class="d-flex justify-content-between">
           <span class="fw-bold fs-5">Vendor</span>
           <button class="btnAddVendor text-white btn ms-auto" @click="addVendor" type="button">Add Vendor</button>
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
        <button class="btn-status fw-bold mx-2">Inactive</button>
    </li>
</ul>

<div class="filter d-flex pe-4 mt-4 pt-0 justify-content-between">
    <div class="search-bar w-50  d-flex" >
        <select class="" id="searchBy"  aria-label="search vendor by">
                <option selected><span><i class="fas fa-sort-amount-down-alt"></i>Name</span></option>
                <option value="1">Email</option>
                <option value="2">Phone No</option>
       </select>
       <input type="text" class="search-input flex-fill" aria-label="Text input with segmented dropdown button">
       <div class="search-icon"><span><i class="fas fa-search"></i></span></div>
    </div>

      <!-- <div class="form-group mx-2">
            <select class="form-select " id="vender" aria-label="sort vendor">
                <option class="" selected><span><i class="fas fa-sort-amount-down-alt"></i>Role</span></option>
                <option value="1">Status</option>
                <option value="2">i don't</option>
                <option value=""> <span><i class="fas fa-sort-amount-down-alt"></i></span></option>
            </select>
     </div> -->
     <div class="form-group ">
               <select class="form-select " aria-label="sort vendor">
                  <option selected><span><i class="fas fa-sort-amount-down-alt"></i>Sort by</span></option>
                  <option value="1">asc</option>
                  <option value="2">dec</option>
                  <option value=""> <span><i class="fas fa-sort-amount-down-alt"></i></span></option>
                </select>
     </div>
</div>

<!-- table -->
<table class="table table-borderless mt-3">
                          <thead>
                              <tr class="tableHeader text-light">
                                 <th scope="col">#No</th>
                                 <th scope="col">Vendor Name</th>
                                 <th scope="col">Company name</th>
                                 <th scope="col">Phone No</th>
                                 <th scope="col">Email Address</th>
                                 <th scope="col">Status</th>
                                 <th scope="col">Action</th>
                              </tr>
                          </thead>

                          <tbody>
                             <tr v-for="vendor in vendors" :key="vendor.id" class="border rounded">
                                  <th scope="row">{{vendor.id}}</th>
                                  <td>{{vendor.contact_first_name + vendor.contact_last_name}}</td>
                                  <td>{{vendor.campany_name}}</td>
                                  <td>{{vendor.contact_phone_number}}</td>
                                  <td>{{vendor.email}}</td>
                                  <td>{{vendor.vendor_status_id}}</td>
                                  <td>
                                     <span  @click="viewDetail(vendor.id)" class="px-2 fs-5"><i class="fas fa-ellipsis-h"></i></span>
                                     <span  @click="deleteVendor(vendor.id)" class="fs-5"><i class="fas fa-trash"></i></span>
                                 </td>
                             </tr>
                               <!-- <tr class="border rounded">
                                  <th scope="row">1</th>
                                  <td>Eyob Diress</td>
                                  <td>Order Manager</td>
                                  <td>+2519178334</td>
                                  <td>eyobadiress@gmail.com</td>
                                  <td>Active</td>
                                  <td>
                                     <span  @click="viewDetail(1)" class="px-2 fs-5"><i class="fas fa-ellipsis-h"></i></span>
                                     <span  @click="deleteVendor(1)" class="fs-5"><i class="fas fa-trash"></i></span>
                                 </td>
                             </tr> -->
                      </tbody>
</table>
</div>
</div>
</template>
<script>
export default {
  methods: {
    addVendor () {
      // this.$router.push('/admin-home/add-vendor')
      alert('wait me please')
    },
    viewDetail (id) {
      // this.$router.push('/admin-home/vendor-detail/' + id)
      alert('wait me please')
    },
    deleteVendor (id) {
      // this.$store.dispatch('deleteVendor', id)
      alert('wait me please')
    }
  },
  computed: {
    vendors () {
      return this.$store.getters.vendors
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
.btnAddVendor{
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
.tableHeader{
    background-color: #ff9500;
    border: 2px solid #ff9500;
    border-radius: 0;
    border-bottom-left-radius: 0.5em;
    border-bottom-right-radius: 0.5em;

}
</style>
