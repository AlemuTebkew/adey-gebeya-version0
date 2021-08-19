<template>
<div class="mx-3">
    <nav>
           <span class="fw-bold fs-5"> Add Product Unit</span>
    </nav>
  <!-- navbar end   -->
  <form action="#" @submit.prevent="addProductUnit" class="ms-auto mt-4 me-auto w-75 ">
    <div class=" shadow-sm bg-white p-4">
      <div class="mb-3">
        <label for="#name" class="form-label">Name</label>
        <input class="form-control" v-model="name" id="name" type="text" aria-label=".form-control-lg example">
      </div>
      <div class="mb-3">
        <label for="#unitDescription" class="form-label">Description</label>
        <textarea class="form-control" v-model="description" id="unitDescription" rows="5"></textarea>
      </div>
      <div class="mb-3">
        <label for="#symbol" class="form-label">Symbol</label>
        <input class="form-control" v-model="abbrevation" type="text" aria-label=".form-control-lg example">
      </div>
    </div>
    <div class=" mt-5 mb-5 float-end ">
         <button class="btn  btnSave" type="submit" >Save</button>
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
      abbrevation: ''
    }
  },
  methods: {
    addProductUnit () {
      this.$store.dispatch('addUnit', {
        name: this.name,
        description: this.description,
        abbrevation: this.abbrevation
      })
    }
  }
}
</script>

<style scoped>
* {
  box-sizing: border-box;
}

.btnSave{
  width: 7em;
  background-color: #ff9500;
  color: #fff;
}
.btnSave:hover{
  background-color: #ff5100;
}
</style>
