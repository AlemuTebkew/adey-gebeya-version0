<template>

  <nav class="ms-4 mb-5">
           <span class="fw-bold fs-5">Add Deliveryboy</span>
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
               <input type="text" v-model="newDeliveryboy.first_name" class="form-control" id="fName">
            </div>
            <div class="form-group">
                <label for="lName">Last Name</label>
                <input type="text" v-model="newDeliveryboy.last_name" class="form-control" id="lName">
            </div>
            <div class="form-group">
                <label for="dob">Date of birth</label>
                <input type="date" v-model="newDeliveryboy.date_of_birth" class="form-control" id="dob">
            </div>
<!-- radio buttons -->
          <div class="form-group d-flex">
             <div class="mr-5">Gender</div>
             <div class="form-check mx-5">
                 <input class="form-check-input"  v-model="newDeliveryboy.gender" type="radio" name="gender" id="gridRadios1" value="female" checked>
                 <label class="form-check-label" for="gridRadios1">Female</label>
             </div>
             <div class="form-check">
                 <input class="form-check-input" v-model="newDeliveryboy.gender" type="radio" name="gender" id="gridRadios2" value="male" checked>
                 <label class="form-check-label" for="gridRadios2">Male </label>
             </div>
          </div>

 <!-- end of radio buttons -->

        <div class="form-group">
               <label for="phonNo">Phone Number</label>
               <input type="tel" v-model="newDeliveryboy.phone_number" class="form-control" id="phonNo">
        </div>
        <div class="form-group">
            <label for="email">Email address</label>
            <input type="email" v-model="newDeliveryboy.email" class="form-control" id="email">
        </div>
      </div>

     <div class="address shadow-sm rounded bg-white p-4 mt-3 pb-3 ">
            <div class="form-group">
               <label for="#selectDeliveryStatus">DeliveryBoy Status</label>
               <select class="form-select" v-model="newDeliveryboy.status_id" id="selectDeliveryStatus" aria-label="deliveryboy status select">
                  <option selected>Active</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </select>
               <small>This delivery boy permission to log in to the system and do his work.</small>
            </div>

            <div class="form-group">
               <label for="#deliveryPassword">Default password</label>
               <input type="password" v-model="newDeliveryboy.password" class="form-control" id="deliveryPassword">
               <small>Enter the dafault password for the delivery boy. The deliveryboy has the permission to change the password if it's required.</small>
            </div>

    </div>

     <div class="address shadow-sm rounded bg-white p-4 mt-3">

<!-- country select begin-->
      <div class="form-group">
       <label for="#selectCountry">Country</label>
       <select class="form-select" id="selectCountry" v-model="newDeliveryboy.country" aria-label="country select">
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
        <select class="form-select" id="selectState" v-model="newDeliveryboy.region" aria-label="select state">
             <option value="5" selected>Addis Ababa</option>
             <option value="1">Amhara</option>
             <option value="2">Oromia</option>
             <option value="3">Tigray</option>
             <option value="4">Tigray</option>

        </select>
      </div>

    </div>

</div>

<!-- invisible -->
<!-- <div class="d-none d-lg-block  col-lg-1 ">

</div> -->

       <div class="col-lg-5 ml-lg-4">
         <div class="shadow-sm rounded bg-white p-4">

       <!-- Zone -->
       <div class="form-group">
            <label for="zone">Zone</label>
            <input type="text" v-model="newDeliveryboy.zone" class="form-control" id="zone">
        </div>

        <div class="form-group">
            <label for="city">City/Town</label>
            <input type="text" v-model="newDeliveryboy.city" class="form-control" id="city">
        </div>
        <div class="form-group">
            <label for="subcity">Subcity</label>
            <input type="text" v-model="newDeliveryboy.sub_city" class="form-control" id="subcity">
        </div>
        <div class="form-group">
            <label for="zipcode">Zip Code/Postal Code</label>
            <input type="text" v-model="newDeliveryboy.zip_cod" class="form-control" id="zipcode">
        </div>
        <div class="form-group">
            <label for="kebele">Kebele</label>
            <input type="text" v-model="newDeliveryboy.kebele" class="form-control" id="kebele">
        </div>
        <div class="form-group">
            <label for="village">Village</label>
            <input type="text" v-model="newDeliveryboy.village" class="form-control" id="village">
        </div>
        <div class="form-group">
            <label for="longitude">Longitude</label>
            <input type="number" v-model="newDeliveryboy.longitude" class="form-control" id="longitude">
        </div>
        <div class="form-group">
            <label for="latitude">Latitude</label>
            <input type="number" v-model="newDeliveryboy.latitude" class="form-control" id="latitude">
        </div>
        <div class="form-group">
            <label >Description</label>
            <textarea v-model="newDeliveryboy.description" class="form-control" id="description" rows="5"></textarea>
        </div>

         </div>
         <!-- submit button begin-->
    <div class="d-flex justify-content-between mt-5 pt-4">
       <button class="btn btn-light mt-5 px-4" type="cancel">Cancel</button>
       <button class="btn btn-danger mt-5 px-4"  type="submit">Save </button>
    </div>

 <!-- submit button end  -->
       </div>
 </div>

</div>
</form>

</template>
<script>
export default {
  data () {
    return {

      newDeliveryboy: {
        first_name: '',
        last_name: '',
        date_of_birth: '',
        gender: '',
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
        // role_id: '',
        status_id: '',
        password: ''

      }
    }
  },
  methods: {
    submit () {


      this.newEmployee.employee_status_id = this.$refs.role.value
      this.newEmployee.role_id = this.$refs.role.value
      this.$store.dispatch('addEmployee', this.newEmployee)}
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
button[type=submit]{
   background-color: #ff9500;
   border:none
}
</style>
