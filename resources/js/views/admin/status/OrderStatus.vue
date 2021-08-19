<template>
   <the-status :pageLabel="pageLabel" @addStatus="addOrderStatus" @deleteStatus="deleteOrderStatus"></the-status>
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
        pageName: 'Order Status',
        btnName: 'Add Order Status'
      }
    }
  },
  methods: {
    addOrderStatus () {
      this.$router.push('/admin-home/add-order-status')
    },
    deleteOrderStatus (id) {
      // this.$store.dispatch('deleteOrderStatus', id)
      alert('delete from order  status')
    }
  },
  computed: {
  },
  created () {
    // this.$s
  }
}
</script>
