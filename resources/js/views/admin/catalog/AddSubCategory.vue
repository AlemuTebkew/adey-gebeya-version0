<template>
      <nav class="navbar">
        <div class="container-fluid">
          <span class="fw-bold mb-0 fs-5">Add SubCategory</span>
        </div>
      </nav>

    <!-- navbar end   -->
    <form action="#" @submit.prevent="addSubCategory" class="w-75 ms-auto me-auto p-5">
      <div class="mt-2 shadow-sm bg-white p-3">
        <div class="mb-3">
          <label for="#name" class="form-label">Name</label>
          <input type="text" class="form-control" v-model="name" id="name" />
        </div>
        <div class="mb-3">
          <label for="#subDescription" class="form-label">Description</label>
          <textarea
            class="form-control"
            id="subDescription"
            rows="3" v-model="description"
          ></textarea>
        </div>
      </div>
      <!--image input drag and drop -->

 <div class="status mt-4 border rounded shadow-sm p-3 bg-white">
          <div class="ms-3 mt-2">Catagory</div>
          <select class="w-50 mt-1 ms-3 rounded" ref="categoryId" id="status">
            <option selected>Select Category</option>
            <option v-for="category in categories"  :value="category.id" :key="category.id">{{category.name}}</option>
          </select>
          <div class="ms-3 mt-2">This cataegory is visible to the customer</div>
     </div>
      <div class="mb-5">
          <button  class="btn mt-4 float-end mb-5">Save</button>
      </div>
    </form>
</template>
<script>
export default {
  data () {
    return {
      name: '',
      description: '',
      categoryId: '',
      statusId: ''
    }
  },
  computed: {
    categories () {
      return this.$store.getters.categories
    }
  },
  methods: {
    // add new category
    addSubCategory () {
      this.$store.dispatch('addSubcategory', {
        name: this.name,
        description: this.description,
        category_id: this.$refs.categoryId.value,
        have_product: false
      })
    }
  }
}
</script>

<style scoped>
* {
  box-sizing: border-box;
}

.btn{
  width: 8em;
  background-color: #ff9500;
  color: #fff;
}
.btn:hover{
  background-color: #ff5100;
}

</style>
