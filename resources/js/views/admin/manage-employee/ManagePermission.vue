<template>
<!-- Sorry the name of the component is not related to what i have used here...
but they have same layout. Hence don't consider it as status. I'll give it general name-->

<the-status :pageLabel="pageLabel" :status="permissions" @addStatus="addPermission" @deleteStatus="deletePermission"></the-status>
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
        pageName: 'Permission',
        btnName: 'Add Permission'
      }
    }
  },
  methods: {
    addPermission () {
      this.$router.push('/admin-home/add-permission')
    },
    deletePermission (id) {
      // this.$store.dispatch('deletePermission', id)
      alert('delete from permission')
    }
  },
  computed: {
    permissions () {
      return this.$store.getters.permissions
    }
  },
  created () {
  }
}
</script>
