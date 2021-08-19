<template>
    <add-status @addNewStatus="addProductVisibilityStatus" title="Add Product Visibility Status "></add-status>
</template>
<script>
import AddStatus from '../../../components/status/AddStatus.vue'
export default {
  components: { AddStatus },
  data () {
    return {
    }
  },
  methods: {
    addProductVisibilityStatus (status) {
      //  here call the status state and set value
      this.$store.dispatch('addProductVisibilityStatus', status)
    }
  }
}
</script>
