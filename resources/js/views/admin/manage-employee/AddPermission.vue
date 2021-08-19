<template>
<!-- Sorry the name of the component is not related to what i have used here...
but they have same layout. Hence don't consider it as status. I'll give it general name-->

 <add-status @addNewStatus="addPermission" title="Add Permission"></add-status>
</template>
<script>
import AddStatus from '../../../components/status/AddStatus.vue'
export default {
  components: {
    AddStatus
  },
  methods: {
    addPermission (permission) {
      console.log(permission)
      alert('u called me from add permission')
    }
  }
}
</script>
