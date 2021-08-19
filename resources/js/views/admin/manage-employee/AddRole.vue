<template>
  <div class="mx-2">
      <nav>
         <span class="fw-bold fs-5 mx-3"> Add Role</span>
     </nav>
     <form @submit.prevent="addRole">
     <div class="container mt-3">
         <div class="row">
             <div class="col-lg-6">
                <div class="form-group mb-3 shadow-sm rounded bg-white p-3">
                   <label for="#name" class="form-label">Name</label>
                   <input class="form-control" v-model="name" id="name" type="text" aria-label="">
                </div>
                <div class="form-group mb-3 shadow-sm rounded bg-white p-3">
                   <label for="#description" class="form-label">Description</label>
                   <textarea class="form-control" v-model="description" id="description" rows="5"></textarea>
                </div>
             </div>

             <!-- second column -->
             <div class="col-lg-5 mx-3">
                <div class=" shadow-sm rounded bg-white p-3">
                   <span class="fw-bold fs-5">Permissions</span>
                   <div class="d-flex">
                     <ul class="py-2" v-if="permissions">

                       <li class="form-check list-unstyled"  v-for="permission in permissions" :key="permission.id">
                           <input class="form-check-input" type="checkbox" :value="permission" v-model="checkedPermissions" id="flexCheckProduct1">
                           <label class="form-check-label" for="flexCheckProduct1">
                              {{permission.name}}
                           </label>
                       </li>

                     </ul>
                     <div v-else class="" >
                        Permissions is not found
                     </div>
                    </div>
                </div>
                <div class="d-flex justify-content-between mt-5">
                   <button class="btn" type="cancel">Cancel</button>
                   <button class="btnSave btn" type="submit">Save</button>
                </div>
             </div>
         </div>
     </div>
     </form>
  </div>

</template>

<script>
export default {
  data () {
    return {
      name: '',
      description: '',
      checkedPermissions: []
    }
  },
  computed: {
    permissions () {
      return this.$store.getters.permissions
    }
  },

  methods: {
    addRole () {
      this.$store.dispatch('addRole', {
        name: this.name,
        description: this.description,
        permissions: this.checkedPermissions
      })
    }
  }

}
</script>

<style scoped>
.btnSave{
  width: 7em;
  background-color: #ff9500;
  color: #fff;
}
.btnSave:hover{
  background-color: #ff5100;
}
input[type = checkbox]:checked{
   background-color: #ff9500;
   border : 2px solid #ff9500;
}
</style>
