<template>
      <nav class="navbar">
        <div class="container-fluid">
          <span class="navbar-brand mb-0 h1">Add Category</span>
        </div>
      </nav>

    <!-- navbar end   -->
    <form action="#" @submit.prevent="addCategory" class="w-75 ms-auto me-auto p-5">
      <div class="mt-2 shadow-sm bg-white p-3">
        <div class="mb-3">
          <label for="#name" class="form-label">Name</label>
          <input type="text" class="form-control" v-model="name" id="name" />
        </div>
        <div class="mb-3">
          <label for="#categoryDescription" class="form-label">Description</label>
          <textarea
            class="form-control"
            id="categoryDescription"
            rows="3" v-model="description"
          ></textarea>
        </div>
      </div>
      <!--image input drag and drop -->
       <div class="mt-3 ms-3">Imge</div>
      <div class="upload-image rounded  shado-sm p-3 bg-white text-center"
        @dragenter="onDragEnter" @dragleave="onDragLeave"
                @dragover="onDragEnter" @drop.prevent="handleFiles"
                :class="{draging: isDraging}" @change="handleFiles">
               <label class="btn mt-4 mb-1" for="icon">Add Images</label><br>
               <span class="mt-3" v-if="isImageHandeled">Image is added</span>
             <span class="mt-3" v-else>Drag and drop here</span>
             <input type="file" name="icon" id="icon" ref="dropedImage" accept="image/png, image/gif, image/jpeg, image/jpg" />
             </div>

      <div class="mb-5">
          <button class="btn mt-4 float-end mb-5">Save</button>
      </div>
    </form>

    <div v-if="isLoading" class="loading">
     <div  class="spinner-border mx-auto" role="status">
           <span class="sr-only">Loading...</span>
     </div>
</div>
</template>
<script>
export default {
  data () {
    return {
      name: '',
      description: '',
      dropedImage: '',
      isDraging: false,
      isLoading: false,
      isImageHandeled: false
    }
  },
  methods: {
    // handle drag and drop
    onDragEnter (e) {
      e.preventDefault()
      this.isDraging = true
    },
    onDragLeave (e) {
      e.preventDefault()
      this.isDraging = false
    },
    //   handle product images
    handleFiles (e) {
      this.dropedImage =
      this.$refs.dropedImage.files[0]
      console.log(this.dropedImage)
      this.isImageHandeled = true
      this.isDraging = false
    },
    // add new category
    addCategory () {
      const formData = new FormData()
      formData.append('name', this.name)
      formData.append('description', this.description)
      formData.append('have_sub_category', false)
      formData.append('image', this.dropedImage)
      this.$store.dispatch('addCategory', formData)
      this.isImageHandeled = false
    }
  }
}
</script>

<style scoped>
* {
  box-sizing: border-box;
}
.upload-image{
    border:2px dashed darkgray;
    height: 150px;
}
 .upload-image input{
     width: 0;
    }
.upload-image label{
   cursor: pointer;
}
.btn{
  width: 8em;
  background-color: #ff9500;
  color: #fff;
}
.btn:hover{
  background-color: #ff5100;
}
.draging{
  background-color: rgba(230, 231, 233, 0.877);
}
</style>
