/* eslint-disable no-undef */
<template>
<div class="backArow">
  <router-link :to="{name:'Category'}" class="back ms-5 fs-3"><i class="fas fa-arrow-left"></i></router-link>
  </div>
  <form action="#" @submit.prevent="saveEditedCategory" class="row">
  <div class="col-md-6 mt-3 ms-5">
    <div class="p-3 hadow-sm bg-white rounded">
    <div class="d-flex">
    <label for="#name" class="form-label">Category Name</label>
      <span class="ms-auto fs-3" @click="editIt"><i class="fas fa-edit"></i></span>
      </div>
        <input class="form-control" :class="{editOn:isEditable}" :readonly="isEditable" placeholder="Change order status"
         id="name" type="text" v-model="category.name" >
    </div>
    <div class="p-3 shadow-sm bg-white rounded mt-3">
      <label for="#categoryDescription" class="form-label">Category Description</label>
        <textarea class="form-control" :class="{editOn:isEditable}" :readonly="isEditable" placeholder="This permission can Chenge order status"
         id="categoryDescription" rows="5" v-model="category.description" >
         </textarea>
      </div>

    </div>
    <!--change icon-->
    <div class="col-md-4 text-center ms-3 ">
    <div class="p-3 shadow-sm bg-white rounded mt-3 text-center"
    @dragenter="onDragEnter" @dragleave="onDragLeave"
                @dragover="onDragEnter" @drop.prevent="handleFiles"
                :class="{draging: isDraging}" @change="handleFiles">
    <img :src="category.image" class="img-fluid" alt=""><br>
       <label for="icon" class="btn mt-5 ms-auto">Change Icon</label>
       <input :disabled="isEditable" type="file" id="icon" ref="categoryIcon" accept="image/png, image/gif, image/jpeg, image/jpg" />
    </div>
    <div class="mb-5 mt-5">
      <button class="btn">Save</button>
    </div>
    </div>
    </form>
</template>
<script>
export default {
  props: ['categoryId'],
  data () {
    return {

      isDraging: false,
      isEditable: true,
      category: {}

    }
  },
  computed: {
    getCategories () {
      console.log(this.$store.getters.categories)
      return this.$store.getters.categories
    }
  },

  created () {
    this.getCategories.forEach(category => {
      if (parseInt(category.id) === parseInt(this.categoryId)) {
        this.category = category
      }
    })
  },

  methods: {
    submitEditedPermission () {
      // code herr
    },
    onDragEnter (e) {
      e.preventDefault()
      this.isDraging = true
    },
    onDragLeave (e) {
      e.preventDefault()
      this.isDraging = false
    },
    handleFiles (e) {
      const images = e.target.files || e.dataTransfer.files || this.$refs.categoryIcon.files
      // console.log(this.categoryIcon)
      this.category.image = images[0]
    },
    saveEditedCategory () {
      console.log('hello from handleFile')
      console.log(this.category.image)
      const formData = new FormData()
      // Object.entries(this.category).forEach(([key, value]) => {
      //   formData.append(key, value)
      // })
      // console.log('product name' + this.category.name)
      // formData.append('id', this.category.id)
      // formData.append('name', this.category.name)
      // formData.append('discription', this.description)
      // formData.append('slug', this.category.description)
      // formData.append('image', this.category.image)
      // formData.append('have_sub_category', this.category.have_sub_category)
      // formData.append('created_at', this.category.created_at)
      // formData.append('updated_at', this.category.updated_at)
      this.$store.dispatch('updateCategory', this.category)
      console.log('hello im form saveEditedCategory', formData)
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
