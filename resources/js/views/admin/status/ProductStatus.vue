<template>
   <the-status :pageLabel="pageLabel" :status="productStatus" @addStatus="addProductStatus" @deleteStatus="deleteProductStatus"></the-status>
</template>
<script>
import TheStatus from '../../../components/status/TheStatus.vue'
export default {
  components: {
    TheStatus
  },
  data () {
    return {
      // units: this.$store.getters.getUnits
      pageLabel: {
        pageName: 'Product Status',
        btnName: 'Add Product Status'
      }
    }
  },
  methods: {
    addProductStatus () {
      this.$router.push('/admin-home/add-product-status')
    },
    deleteProductStatus (id) {
      this.$store.dispatch('deleteProductStatus', id)
      // alert('delete from status')
    }
  },
  computed: {
    productStatus () {
      return this.$store.getters.productStatus
    }
  },
  created () {
  }
}
</script>
