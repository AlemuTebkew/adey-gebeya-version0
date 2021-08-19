<template>
    <div class="wrapper me-auto ms-auto p-md-3 mt-5 shadow-sm rounded border">
      <h2 class="title fw-bold text-center">Adey Ababa</h2>
      <p v-if="logedInSuccess">Confirmation link is sent to your email. <br>
       Check your email please.
      </p>
      <form @submit.prevent="login" class="my-5">
        <div class="form-group pb-2">
            <label for="email" class="pb-2">Email</label>
            <input type="email" v-model="credentials.email" name="" id="email" class="form-control">
        </div>
        <div class="form-group pb-2">
            <label for="password" class="pb-2">Password</label>
            <input type="password" v-model="credentials.password" name="" id="password" class="form-control">
        </div>
        <div class="d-grid gap-2 mt-4">
            <button class="btn btn-login fw-bold text-white" type="submit">Login</button>
        </div>
      </form>
      <p v-if="errorText" class="text-danger" v-text="errorText"></p>
    </div>

</template>
<script>
import axios from 'axios'
export default {
  data () {
    return {
      credentials: {
        email: '',
        password: ''
      },
      errorText: null,
      logedInSuccess: false
    }
  },
  methods: {
    login () {
      axios.get('/sanctum/csrf-cookie').then(response => {
        axios.post('/spa/login', JSON.stringify(this.credentials)).then(response => {
          // axios.get('/api/products').then(response => {
          // console.log('im from inner most axios good time for rest')
          // console.log(response.data)
          // })

          if (response.status === 200) {
            this.saveManagerData(response.body)
            this.logedInSuccess = true
          } else { this.errorText = 'faild to authenticate' }
        }).catch(e => {
          console.log(e.response.data.errors)
          this.errorText = 'faild to authenticate'
        })
      })
    },
    saveManagerData (responseData) {
      const managerData = {
        manager: {
          role: '',
          info: '',
          permissions: []
        },
        isManagerAuth: false,
        isManagerVerified: false
      }
      managerData.manager.role = responseData.role
      managerData.manager.info = responseData.employee
      managerData.manager.permissions = responseData.permissions
      managerData.isManagerAuth = true
      managerData.isManagerVerified = false

      localStorage.setItem('managerData', JSON.stringify(managerData))
    }

  }
}
</script>
<style scoped>
@media only screen and (min-width: 768px){
  .wrapper{
    width: 25%;
  }
  .btn-login{
    background-color: #ff9500;
  }
  .title{
     color: #ff9500;
  }
}
</style>
