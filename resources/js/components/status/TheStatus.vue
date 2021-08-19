<template>
    <div class="mx-3">
       <nav class="d-flex justify-content-between">
           <span class="fw-bold fs-5">{{pageLabel.pageName}}</span>
           <button class="btnAddProductStatus text-white btn ms-auto" @click="addStatus" type="button">{{pageLabel.btnName}}</button>
       </nav>

<div class=" shadow-sm rounded p-3 bg-white mt-4">
<div class="filter d-flex pe-4 mt-4 pt-0 justify-content-between">
    <div class="search-bar w-50  d-flex" >
        <select class="" id="searchBy"  aria-label="search unit by">
                <option selected><span><i class="fas fa-sort-amount-down-alt"></i>Name</span></option>
                <option value="1">Email</option>
                <option value="2">Phone No</option>
       </select>
       <input type="text" class="search-input flex-fill" aria-label="Text input with segmented dropdown button">
       <div class="search-icon"><span><i class="fas fa-search"></i></span></div>
    </div>

     <div class="form-group ">
               <select class="form-select " aria-label="">
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
                                 <th scope="col">Name</th>
                                 <!-- <th scope="col">Description</th> -->
                                 <th scope="col">Added Date</th>
                                 <th scope="col">Action</th>
                              </tr>
                          </thead>

                          <tbody>
                             <tr v-for="value in status" :key="value.id" class="border rounded">
                                  <th scope="row">{{value.id}}</th>
                                  <td>{{value.name}}</td>
                                  <!-- <td>{{value.description}}</td> -->
                                  <td>{{convertToDate(value.created_at)}}</td>
                                  <td>
                                     <!-- <span  @click="viewDetail(value.id)" class="px-2 fs-5"><i class="fas fa-ellipsis-h"></i></span> -->
                                     <span  @click="deleteStatus(value.id)" class="fs-5"><i class="fas fa-trash"></i></span>
                                 </td>
                             </tr>
                               <!-- <tr v-for="n in 6" :key="n" class="border rounded">
                                  <th scope="row">{{n}}</th>
                                  <td>Pending</td>
                                  <td>Can't be sold </td>
                                  <td>12/10/2022</td>
                                  <td>
                                     <span  @click="deleteStatus(1)" class="fs-5"><i class="fas fa-trash"></i></span>
                                 </td>
                             </tr> -->
                      </tbody>
</table>
</div>
</div>

</template>
<script>
export default {
  props: ['pageLabel', 'status'],
  methods: {
    addStatus () {
      this.$emit('addStatus')
    },
    deleteStatus (id) {
      this.$emit('deleteStatus', id)
    },
    convertToDate (date) {
      return new Date(date).toISOString().split('T')[0]
    }
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
.btnAddProductStatus{
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
