<template>
<div class="container ms-2 me-4 mt-2 mb-4">
    <span @click="backPage" class="back-arrow"><i class="fas fa-arrow-left"></i></span>
    <form @submit.prevent="saveChanges">
        <div class="row mt-1 mx-1">
        <div class="col-lg-6">
            <div class="primary-info bg-white p-3 shadow-sm rounded">
               <span @click="editPrimaryInfo" class="edit fs-4 float-end"><i class="far fa-edit"></i></span>
               <br>
               <div class="form-group py-2">
                  <label for="#name" class="pb-1">Name</label>
                  <input type="text" id="name" v-model="employee.first_name" class="form-control" :readonly="primaryEditable">
                </div>
                <div class="form-group py-2">
                   <label for="#dob" class="pb-1">Date of birth</label>
                   <input type="date" id="dob" class="form-control" v-model="employee.date_of_birth" :readonly="primaryEditable">
                </div>
                <div class="form-group py-2">
                   <label for="#gender" class="pb-1">Gender</label>
                   <select class="form-select" id="gender" v-model="employee.gender" :disabled="primaryEditable">
                      <option value="male">Male</option>
                      <option value="female" >Female</option>
                   </select>
                </div>
                <div class="form-group py-2">
                     <label for="#email" class="pb-1">Email address</label>
                     <input type="email" id="email" class="form-control" v-model="employee.email" :readonly="primaryEditable">
                </div>
                <div class="form-group py-2">
                     <label for="#phoneNumber" class="pb-1">Phone Number</label>
                     <input type="tel" id="phoneNumber" class="form-control" v-model="employee.phone_number" :readonly="primaryEditable">
                </div>
           </div>
           <div class="address bg-white p-3 mt-3 mb-3 mb-lg-5 shadow-sm rounded">
                <!-- <span class="edit fs-4 float-end"><i class="far fa-edit"></i></span> -->
                <div class="form-group py-2">
                    <label for="#address" class="pb-1">City</label>
                    <input type="tel" id="address" class="form-control" v-model="employee.city" :readonly="primaryEditable">
                </div>
           </div>
        </div>

<!-- for layout only  -->
        <div class="col-lg-1"></div>

        <div class="col-lg-4 position-relative">
             <div class="employee-role bg-white p-3  mb-3 shadow-sm rounded">
                 <label for="#emloyeeRole" class="pb-1">Employee role</label>
                 <select class="form-select" id="emloyeeRole" v-model="employee.role_id" :disabled="primaryEditable">
                      <option value="1" >Order Manager</option>
                      <option value="2">Product Manager</option>
                      <option value="3">Product Manager</option>

                 </select>
              </div>

              <div class="employee-status bg-white p-3  mb-3 shadow-sm rounded">
                 <label for="#employeeStatus" class="pb-1">Employee status</label>
                 <select class="form-select" id="employeeStatus" v-model="employee.employee_status_id" :disabled="primaryEditable">
                      <option value="1">Active</option>
                      <option value="2">Inactive</option>
                 </select>
              </div>

              <div class="employee-password bg-white p-3  mb-3 shadow-sm rounded">
                 <label for="#employeePassword" class="pb-1">Password</label>
                 <input type="password" id="employeePassword" class="form-control" v-model="employee.password" :readonly="primaryEditable">
              </div>
              <div class="float-end mt-lg-5">
                  <button id="btnSave" type="submit" class="btn px-4 text-white mt-lg-5" :disabled="primaryEditable">Save</button>
              </div>
        </div>
</div>
 </form>

</div>
<!-- <div><span><i class="bi bi-arrow-left"></i></span>ds</div> -->
</template>

<script>
export default {
  props: ['deliveryboyId'],
  data () {
    return {
      primaryEditable: true,
      deliveryboy: {}
    }
  },

  methods: {

    editPrimaryInfo () {
      this.primaryEditable = !this.primaryEditable
      //   if (this.primaryEditable) { this.$refs.input[0].focus() }
    },

    saveChanges () {
      // console.log('employee id' + this.employee.id)
      // console.log('employee data' + this.employee.first_name)
      // this.employee.first_name = 'alex z ortho'
      // this.employee.last_name = 'teb'
      // this.employee.phone_number = 87887990
      this.$store.dispatch('updateDeliveryboy', this.deliveryboy)
    },
    backPage () {
      this.$router.back()
    }
  },
  computed: {
    deliveryboys () {
      return this.$store.getters.getDeliveryboys
    }
  },
  created () {
    this.deliveryboys.forEach(deliveryboy => {
      // console.log('iterate' + employee.id)
      if (parseInt(deliveryboy.id) === parseInt(this.deliveryboyId)) {
        this.deliveryboy = deliveryboy
        // this.employee.id = employee.id
        // this.employee.first_name = employee.first_name
        // this.employee.last_name = employee.last_name
        // this.employee.date_of_birth = employee.date_of_birth
        // this.employee.gender = employee.gender
        // this.employee.phone_number = employee.phone_number
        // this.employee.email = employee.email
        // this.employee.country = employee.country
        // this.employee.region = employee.region
        // this.employee.zone = employee.zone
        // this.employee.city = employee.city
        // this.employee.sub_city = employee.sub_city
        // this.employee.zip_cod = employee.zip_cod
        // this.employee.kebele = employee.kebele
        // this.employee.village = employee.village
        // this.employee.description = employee.description
        // this.employee.latitude = employee.latitude
        // this.employee.logitude = employee.logitude
        // this.employee.role_id = employee.role_id
        // this.employee.employee_status_id = employee.employee_status_id
        // this.employee.password = employee.password
      }
    })

    // var employees = this.employees
    // this.employee = employees[this.employeeId]
    // console.log('deliveryboy value' + this.deliveryboy)
  }
}

</script>

<style scoped>
.back-arrow{
    cursor: pointer;
}
.fas {
    transform: scale(2,1.5);
    color: #ff9500;
}
.far{
    color: #ff9500;
}
.edit{
    cursor: pointer;
}
#btnSave{
    background-color: #ff9500;
}
input[readonly], select[disabled]  {
    background-color: #fff;
}
/* input[type="date"]::-webkit-calendar-picker-indicator { */

  /* filter: invert(1); */
  /* color: #ff9500; */
/* } */
</style>
