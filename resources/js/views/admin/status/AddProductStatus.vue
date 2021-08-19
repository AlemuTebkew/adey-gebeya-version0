<template>
    <add-status @addNewStatus="addProductStatus" title="Add Product Status"></add-status>
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
    addProductStatus (status) {
      //  here call the status state and set value
    }
  }
}
</script>
