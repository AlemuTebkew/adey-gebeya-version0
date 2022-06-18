<template>
  <div class="wrapper">
       <div class="sidebar">
          <the-sidebar></the-sidebar>
       </div>
       <div class="viewport">
         <admin-header></admin-header>
         <router-view/>
      </div>

      <div v-if="isLoading" class="loading-page position-fixed top-0 start-0">
         <div class="loading-spinner spinner-border position-absolute top-50 end-50" role="status">
            <span class="visually-hidden">Loading...</span>
         </div>
      </div>

  </div>

</template>
<script>
import AdminHeader from '../../components/admin/AdminHeader.vue'
import TheSidebar from '../../components/admin/TheSidenav.vue'

export default {
  components: {
    AdminHeader,
    TheSidebar
  },
  computed: {
    isLoading () {
      return this.$store.getters.isLoading
    }
  },
  created () {
    this.initializeManagerState()
    this.$store.dispatch('fetchUnits')
    this.$store.dispatch('fetchEmployees')
    this.$store.dispatch('fetchCategories')
    this.$store.dispatch('fetchProductStatus')
    this.$store.dispatch('fetchSubcategories')
    this.$store.dispatch('fetchProductVisibilityStatus')
    this.$store.dispatch('fetchVendors')
    this.$store.dispatch('fetchPermissions')
    this.$store.dispatch('fetchRoles')
  },
  methods: {
    initializeManagerState () {
      const managerData = JSON.parse(localStorage.getItem('managerData'))
      if (managerData) {
        this.$store.dispatch('updateManager', managerData.manager)
        this.$store.dispatch('updateIsManagerAuth', managerData.isManagerAuth)
        this.$store.dispatch('updateIsManagerVerified', managerData.isManagerVerified)
      }
    }
  }
}

</script>

<style scoped>

@media only screen and (min-width:768px) {
.wrapper{
  padding: 0 !important;
  margin: 0 !important;
  width: 100%;
  min-height: 100vh;
  background-color: #f5f6fa !important;
  background-size: 100%, 100%;
}
.viewport{
    margin-left: 18% !important;
    /* overflow: visible; */
}
.sidebar{

}
.loading-page{
  z-index: 10000;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.65)
}
.loading-spinner{

   color: #ff9500;
}
}

</style>
