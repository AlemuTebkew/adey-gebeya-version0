<template>
  <div class="" v-if="isNotConfirmed">
     Error confirmation page
  </div>
</template>
<script>
import axios from 'axios'
export default {
  data () {
    return {
      isNotConfirmed: false
    }
  },
  computed: {
    // confirmationToken () {
    //   return this.$route.query.token
    // }
  },
  methods: {
    async confirmToken () {
      try {
        var response = await axios.get(`/api/verify-email/${this.$route.params.id}?signature=${this.$route.query.token}&expiries=${this.$route.query.expiry}`)
        if (response.status === 200) {
          const managerData = JSON.parse(localStorage.getItem('managerData'))
          if (managerData) {
            managerData.isManagerVerified = true
            localStorage.setItem('managerData', JSON.stringify(managerData))
            this.$route.push({ name: 'AdminHome' })
          }
        } else {
          this.isNotConfirmed = true
        }
      } catch (e) {
        this.isNotConfirmed = true
        console.log(e)
      }
    }
  },
  created () {
    this.confirmToken()
  }
}
</script>
<style scoped>

</style>
