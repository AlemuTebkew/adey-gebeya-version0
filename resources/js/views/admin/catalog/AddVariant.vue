<template>
 <nav class="ms-3 mb-5">
           <span class="fw-bold fs-5">Add Product Variant</span>
   </nav>
  <form action="#" @submit.prevent="" class="">

    <div class="ms-auto me-auto w-75 mt-4">
    <div class="shadow-sm p-3 mb-5 bg-body rounded">
    <div class="w-100 d-flex">
      <label for="#name" class="form-label">Variant Name</label>
      <span class="btndetail ms-auto mb-2 fs-4"><i class="fas fa-edit"></i></span>
      </div>
        <input class="form-control" placeholder="አይዞሽ ገለቴ"
         id="name" type="text" aria-label=".form-control-lg example">
    </div>
    <div class="shadow-sm p-3 bg-body rounded">
        <div class="w-100 d-flex">
      <label for="#unitDescription" class="form-label">Variant Description</label>
      </div>
        <textarea class="form-control" placeholder=" ምንም ማረግ አይቻልም"
         id="unitDescription" rows="5" ></textarea>
      </div>
      <div class=" mt-5 mb-5 float-end">
      <button class="btn  text-white save" @click="submitEditedVariant">Save</button>
    </div>
    </div>
    </form>
</template>
<script>
export default {
  data () {
    return {
      // editedVariantName: '',
      // editedVariantDescription: ''
    }
  },
  methods: {
    submitEditedVariant () {
      // code herr
    },
    backPage () {
      this.$router.back()
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
.save{
    background-color: #ff9500;
    width: 7em;
}
.save:hover{
    background-color: darkgray;
}
a{
  color: #ff9500;
  margin: .2rem 2rem;
  font-size: 4rem;
}
.back-page .fas{
    color: #ff9500;
    transform: scale(2,1.5);
    cursor: pointer;
}
</style>
