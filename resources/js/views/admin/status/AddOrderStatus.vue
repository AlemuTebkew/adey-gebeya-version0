<template>
 <add-status @addNewStatus="addOrderStatus" title="Add Order Status"></add-status>
</template>
<script>
import AddStatus from '../../../components/status/AddStatus.vue'
export default {
  components: {
    AddStatus
  },
  methods: {
    addOrderStatus (status) {
      console.log(status)
    }
  }
}
</script>
