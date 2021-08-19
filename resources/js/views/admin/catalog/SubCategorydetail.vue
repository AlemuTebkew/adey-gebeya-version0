/* eslint-disable no-undef */
<template>
<div class="backArow">
  <router-link :to="{name:'Subcategory'}" class="back ms-5 fs-3"><i class="fas fa-arrow-left"></i></router-link>
  </div>
  <form action="#" @submit.prevent="saveEditedSubCategory" class="row pb-5">
  <div class="col-md-6 mt-3 ms-5">
    <div class="p-3 hadow-sm bg-white rounded">
    <div class="d-flex">
    <label for="#name" class="form-label">Subcategory Name</label>
      <span class="ms-auto fs-3" @click="editIt"><i class="fas fa-edit"></i></span>
      </div>
        <input class="form-control" :class="{editOn:isEditable}" :readonly="isEditable" placeholder="Change order status"
         id="name" type="text" v-model="subcategory.name" >
    </div>
    <div class="p-3 shadow-sm bg-white rounded mt-3">
      <label for="#categoryDescription" class="form-label">SubCategory Description</label>
        <textarea class="form-control" :class="{editOn:isEditable}" :readonly="isEditable" placeholder="This permission can Chenge order status"
         id="categoryDescription" rows="5" v-model="subcategory.description" >
         </textarea>
      </div>
      <div class="p-3 shadow-sm bg-white rounded mt-3">
        <span>Category</span>
        <select class="form-select mt-2" :class="{editOn:isEditable}" :disabled="isEditable"  aria-label="">
            <!-- <option value="5" selected>Open this select menu</option> -->
            <option :value="category.id" :selected="category.id === subcategory.id" v-for="category in categories" :key="category.id">
              {{category.name}}
            </option>
       </select>
    </div>
    <!-- <div class="p-3 shadow-sm bg-white rounded mt-3">
        <span>SubCategory</span>
        <select class="form-select mt-2" :class="{editOn:isEditable}" :disabled="isEditable" v-model="subcategory.category_id" aria-label="selecte category">
            <option selected>Open this select menu</option>
            <option value="1">Active</option>
            <option value="2">Inactive</option>
       </select>
    </div> -->
    </div>

    </form>
</template>
<script>
export default {
  props: ['subcategoryId'],
  data () {
    return {

      isEditable: true,
      subcategory: {}
    }
  },
  computed: {
    subcategories () {
      return this.$store.getters.subcategories
    },
    categories () {
      return this.$store.getters.categories
    }

  },

  created () {
    this.subcategories.forEach(subcategory => {
      if (parseInt(subcategory.id) === parseInt(this.subcategoryId)) {
        this.subcategory = subcategory
      }
    })
  },

  methods: {

    saveEditedCategory () {
      console.log('hello from handleFile')
      console.log(this.subCategory.image)
      this.$store.dispatch('updateCategory', this.subCategory)
    },
    editIt () {
      this.isEditable = !this.isEditable
    }
  }
}
</script>

<style scoped>
* {
  box-sizing: border-box;
}
#icon{
  width: 0;
}
.btn{
  background-color: #ff9500;
  color: #fff;
  width: 9em;
}
.btn:hover{
  background-color: #ff5100;
}
.fas{
  color: #ff9500;
  cursor: pointer;
}
.fas:hover{
  color: #ff5100;
}
.draging{
  background-color: darkgray;
}
.editOn{
  background-color: white;
}
</style>
