<template>
  <form action="#" @submit.prevent="">
  <span class="back" @click="back"><i class="fas fa-long-arrow-alt-left"></i></span>
  <div class="d-flex">
  <div class="ms-3 col-sm-6 mt-4">
    <div class="shadow-sm p-3 mb-5 bg-body rounded">
    <div class="w-100 d-flex justify-content-center">
      <label for="#name" class="form-label">Role Name</label>
      <button class="btndetail ms-auto mb-2 me-5"><i class="fas fa-edit"></i></button>
      </div>
        <input class="form-control" placeholder="Role name..."
         id="name" type="text" aria-label=".form-control-lg example" v-model="editedRoleName">
    </div>
    <div class="shadow-sm p-3 bg-body rounded">
        <div class="w-100 d-flex">
      <label for="#unitDescription" class="form-label">Role Description</label>
      <button class="btndetail ms-auto mb-2 me-5"><i class="fas fa-edit"></i></button>
      </div>
        <textarea class="form-control" placeholder="has the responsibility of
                  managing the product"
         id="unitDescription" rows="5" v-model="editedRoleDescription"></textarea>
      </div>
    </div>
    <!-- permission-->
     <div class="ms-5 mt-4 shadow-sm align-self-start">
    <h4 class="mt-3 ms-5">permissions</h4>
     <div class="mt-2 ms-3 me-3 ">
    <!-- checkboxes -->
    <div class="checkboxs d-flex mb-5">
     <div class="clo-md-3">
    <div class="form-check">
  <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" v-model="viewModel">
  <label class="form-check-label" for="flexCheckDefault">
    View order
  </label>
</div>
<div class="form-check">
  <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" checked v-model="updateOrder">
  <label class="form-check-label" for="flexCheckChecked">
    Update Order
  </label>
</div>
<div class="form-check">
  <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" v-model="deleteOrder">
  <label class="form-check-label" for="flexCheckChecked">
    Delete Order
  </label>
</div>
 <div class="form-check">
  <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
  <label class="form-check-label" for="flexCheckDefault">
    View order
  </label>
</div>
 <div class="form-check">
  <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
  <label class="form-check-label" for="flexCheckDefault">
    View order
  </label>
</div>
 <div class="form-check">
  <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
  <label class="form-check-label" for="flexCheckDefault">
    View order
  </label>
</div>
    </div>

    <div class="ms-5 clo-md-3">
    <div class="form-check">
  <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
  <label class="form-check-label" for="flexCheckDefault">
    View Product
  </label>
</div>
<div class="form-check">
  <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" checked>
  <label class="form-check-label" for="flexCheckChecked">
    Update Product
  </label>
</div>
<div class="form-check">
  <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" checked>
  <label class="form-check-label" for="flexCheckChecked">
    Delete Product
  </label>
</div>
 <div class="form-check">
  <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
  <label class="form-check-label" for="flexCheckDefault">
    View order
  </label>
</div>
 <div class="form-check">
  <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
  <label class="form-check-label" for="flexCheckDefault">
    View order
  </label>
</div>
 <div class="form-check">
  <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
  <label class="form-check-label" for="flexCheckDefault">
    View order
  </label>
</div>
    </div>
    </div>
    </div>
    </div>
    </div>
     <div class="savebtn mt-1 ms-auto mb-5">
      <button class="save btn" @click="submitEditedRole">Save</button>
    </div>
  </form>
</template>
<script>
export default {
  data () {
    return {
      editedRoleName: '',
      editedRoleDescription: ''
    }
  },
  methods: {
    submitEditedRole () {
      // code herr
    },
    back () {
      this.$router.back('/admin-home/manage-role')
    }
  }
}
</script>

<style scoped>
* {
  box-sizing: border-box;
}
.btndetail{
border: none;
color: #ff9500;
}
.btndetail:hover{
 background-color: darkgray;
}
.savebtn{
    width: 7em;
    margin-right: 15rem;
    margin-bottom: 3rem;
    }
.save{
    background-color: #ff9500;
    width: 7em;
    color: #fff;
    }
.save:hover{
    background-color: #f5b357;
}
.back{
  color: #ff9500;
  margin: .2rem 2rem;
  font-size: 4rem;
}
</style>
