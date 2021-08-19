<template>
<!-- Sorry the name of the component is not related to what i have used here...
but they have same layout. Hence don't consider it as status. I'll give it general name-->

<the-status :pageLabel="pageLabel" :status="roles" @addStatus="addRole" @deleteStatus="deleteRole"></the-status>
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
        pageName: 'Role',
        btnName: 'Add Role'
      }
    }
  },
  methods: {
    addRole () {
      this.$router.push('/admin-home/add-role')
    },
    deleteRole (id) {
      this.$store.dispatch('deleteRole', id)
      // alert('delete from role')
    }
  },
  computed: {
    roles () {
      return this.$store.getters.roles
    }
  },
  created () {
  }
}
</script>
