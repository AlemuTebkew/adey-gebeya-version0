<template>
  <form action="#" @submit.prevent="">
   <div class="backArow">
  <router-link :to="{name:'ManagePermission'}"><i class="fas fa-long-arrow-alt-left"></i></router-link>
  </div>
    <div class="ms-auto me-auto w-75 mt-4">
    <div class="shadow p-3 mb-5 bg-body rounded">
    <div class="w-100 d-flex">
      <label for="#name" class="form-label">Permission Name</label>
      <button class="btndetail ms-auto mb-2 me-5"><i class="fas fa-edit"></i></button>
      </div>
        <input class="form-control" placeholder="Change order status"
         id="name" type="text" aria-label=".form-control-lg example" v-model="editedPermissionName">
    </div>
    <div class="shadow p-3 bg-body rounded">
        <div class="w-100 d-flex">
      <label for="#description" class="form-label">Permission Description</label>
      <button class="btndetail ms-auto mb-2 me-5"><i class="fas fa-edit"></i></button>
      </div>
        <textarea class="form-control" placeholder="This permission can Chenge order status"
         id="description" rows="5" v-model="editedPermissionDescription"></textarea>
      </div>
      <div class="me-5 mt-5 mb-5 float-end">
      <button class="btn btn-danger me-5" @click="submitEditedPermission">Save</button>
    </div>
    </div>
    </form>
</template>
<script>
export default {
  data () {
    return {
      editedPermissionName: '',
      editedPermissionDescription: ''
    }
  },
  methods: {
    submitEditedPermission () {
      // code herr
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
}
.btndetail:hover{
 background-color: darkgray;
}
a{
  color: #ff9500;
  margin: .2rem 2rem;
  font-size: 4rem;
}
</style>
