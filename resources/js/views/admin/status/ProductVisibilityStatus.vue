<template>
 <the-status :pageLabel="pageLabel" :status="productVisibilityStatus"  @addStatus="addProductVisibilityStatus" @deleteStatus="deleteProductVisibilityStatus"></the-status>

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
        pageName: 'Product Visibility Status',
        btnName: 'Add Visibility Status'
      }
    }
  },
  computed: {
    productVisibilityStatus () {
      return this.$store.getters.productVisibilityStatus
    }
  },
  methods: {
    addProductVisibilityStatus () {
      this.$router.push('/admin-home/add-product-visibility-status')
    },
    deleteProductVisibilityStatus (id) {
      this.$store.dispatch('deleteProductVisibilityStatus', id)
    }
  },

  created () {
  }
}
</script>
