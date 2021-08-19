<template>

  <nav class="ms-4 mb-5">
           <span class="fw-bold fs-5">Add Employee</span>
   </nav>
<!-- navbar end  -->

<!-- form begin -->
<form @submit.prevent="submit">
 <div class="container m-3 ">
     <div class="row">
         <div class="col-lg-6">
          <div class="primaryInfo shadow-sm rounded bg-white p-4">
             <div class="form-group">
               <label for="fName">First Name</label>
               <input type="text" v-model="newEmployee.first_name" class="form-control" id="fName">
            </div>
            <div class="form-group">
                <label for="lName">Last Name</label>
                <input type="text" v-model="newEmployee.last_name" class="form-control" id="lName">
            </div>
            <div class="form-group">
                <label for="dob">Date of birth</label>
                <input type="date" v-model="newEmployee.date_of_birth" class="form-control" id="dob">
            </div>
<!-- radio buttons -->
          <div class="form-group d-flex">
             <div class="mr-5">Gender</div>
             <div class="form-check mx-5">
                 <input class="form-check-input"  v-model="newEmployee.gender" type="radio" name="gender" id="gridRadios1" value="female" checked>
                 <label class="form-check-label" for="gridRadios1">Female</label>
             </div>
             <div class="form-check">
                 <input class="form-check-input" v-model="newEmployee.gender" type="radio" name="gender" id="gridRadios2" value="male" checked>
                 <label class="form-check-label" for="gridRadios2">Male </label>
             </div>
          </div>

 <!-- end of radio buttons -->

        <div class="form-group">
               <label for="phonNo">Phone Number</label>
               <input type="tel" v-model="newEmployee.phone_number" class="form-control" id="phonNo">
        </div>
        <div class="form-group">
            <label for="email">Email address</label>
            <input type="email" v-model="newEmployee.email" class="form-control" id="email">
        </div>
      </div>

     <div class="address shadow-sm rounded bg-white p-4 mt-3">
<!-- country select begin-->
      <div class="form-group">
       <label for="#selectCountry">Country</label>
       <select class="form-select" id="selectCountry" v-model="newEmployee.country" aria-label="country select">
             <option selected>Ethiopia</option>
             <option value="1">Eritrea</option>
             <option value="2">South Africa</option>
             <option value="3">Kenya</option>
        </select>
      </div>

<!-- country select end -->

<!-- state select begin-->
      <div class="form-group">
        <label for="#selectState">State</label>
        <select class="form-select" id="selectState" v-model="newEmployee.region" aria-label="select state">
             <option value="5" selected>Addis Ababa</option>
             <option value="1">Amhara</option>
             <option value="2">Oromia</option>
             <option value="3">Tigray</option>
             <option value="4">Tigray</option>

        </select>
      </div>

       <!-- Zone -->
       <div class="form-group">
            <label for="zone">Zone</label>
            <input type="text" v-model="newEmployee.zone" class="form-control" id="zone">
        </div>

        <div class="form-group">
            <label for="city">City/Town</label>
            <input type="text" v-model="newEmployee.city" class="form-control" id="city">
        </div>
        <div class="form-group">
            <label for="subcity">Subcity</label>
            <input type="text" v-model="newEmployee.sub_city" class="form-control" id="subcity">
        </div>
        <div class="form-group">
            <label for="zipcode">Zip Code/Postal Code</label>
            <input type="text" v-model="newEmployee.zip_cod" class="form-control" id="zipcode">
        </div>
        <div class="form-group">
            <label for="kebele">Kebele</label>
            <input type="text" v-model="newEmployee.kebele" class="form-control" id="kebele">
        </div>
        <div class="form-group">
            <label for="village">Village</label>
            <input type="text" v-model="newEmployee.village" class="form-control" id="village">
        </div>
        <div class="form-group">
            <label for="longitude">Longitude</label>
            <input type="number" v-model="newEmployee.longitude" class="form-control" id="longitude">
        </div>
        <div class="form-group">
            <label for="latitude">Latitude</label>
            <input type="number" v-model="newEmployee.latitude" class="form-control" id="latitude">
        </div>
        <div class="form-group">
            <label >Description</label>
            <textarea v-model="newEmployee.description" class="form-control" id="description" rows="5"></textarea>
        </div>
    </div>

</div>

<!-- invisible -->
<div class="d-none d-lg-block  col-lg-1 ">

</div>

       <div class="col-lg-4 ml-lg-4">
         <div class="shadow-sm rounded bg-white p-4">
            <div class="form-group">
               <label for="#selectRole">Employee Role</label>
               <select class="form-select" id="selectRole" ref="role"  aria-label="employe role select">
                  <option v-for="role in roles" :value="role.id" :key="role.id">{{role.name}}</option>
                </select>
               <small>This employee has the Permission of view, edit and delete orders.</small>
            </div>

           <div class="form-group">
               <label for="#selectEmployeeStatus">Employee Status</label>
               <select class="form-select" v-model="newEmployee.employee_status_id" id="selectEmployeeStatus" aria-label="employee status select">
                  <option selected>Active</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </select>
               <small>This employee permission to log in to the system and do his work.</small>
            </div>

            <div class="form-group">
               <label for="#employeePassword">Default password</label>
               <input type="password" v-model="newEmployee.password" class="form-control" id="employeePassword">
               <small>Enter the dafault password for the employee. The employee has the permission to change the password if it's required.</small>
            </div>

<!-- submit button begin-->

 <!-- submit button end  -->
         </div>
         <div class="d-flex justify-content-between mt-5">
       <button class="btn btn-light mt-5 px-4" type="cancel">Cancel</button>
       <button class="btn btnSave text-white mt-5 px-4 " type="submit">Save </button>
    </div>
       </div>
 </div>

</div>
</form>

</template>
<script>
import { mapGetters } from 'vuex'
export default {
  data () {
    return {

      newEmployee: {
        first_name: '',
        last_name: '',
        date_of_birth: '1998-02-07',
        gender: 'female',
        phone_number: '',
        email: '',
        country: '',
        region: '',
        zone: '',
        city: '',
        sub_city: '',
        zip_cod: '',
        kebele: '',
        village: '',
        description: '',
        latitude: '',
        logitude: '',
        role_id: '',
        employee_status_id: '',
        password: ''

      }
    }
  },
  computed: {
    ...mapGetters(['roles'])
  },
  methods: {
    submit () {
      this.newEmployee.employee_status_id = this.$refs.role.value
      this.$store.dispatch('addEmployee', this.newEmployee)
    }
  }
}

</script>
<style scoped>
.form-group{
    margin-bottom: 20px;
}

form{
    padding-bottom: 200px;
}
.btnSave{
  background-color: #ff9500;
}
</style>
