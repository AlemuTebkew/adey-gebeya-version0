<template>
<div class="pb-5">
  <form action="#" @submit.prevent="submitEditedUnit">
  <div class="backArow">
  <router-link :to="{name:'Unit'}" class="back"><i class="fas fa-arrow-left"></i></router-link>
  </div>

    <div class="ms-auto me-auto w-50 mt-4">
    <div class="shadow-sm p-3 mb-3 bg-body rounded">
    <div class="w-100 d-flex">
      <label for="#name" class="form-label">Unit Name</label>
      <span class="btndetail fs-5 ms-auto mb-2 "><i class="fas fa-edit"></i></span>
      </div>
        <input class="form-control"
         id="name" type="text" aria-label=".form-control-lg example" v-model="unit.name">
    </div>
    <div class="shadow-sm p-3 bg-body rounded">
        <div class="w-100 d-flex">
      <label for="#unitDescription" class="form-label">Unit Description</label>
      </div>
        <textarea class="form-control"
         id="unitDescription" rows="5" v-model="unit.description"></textarea>
      </div>
      <div class="shadow-sm p-3 mt-4 bg-body rounded">
      <label for="#unitDescription" class="form-label">Unit Abrivation</label>
       <input type="text" name="" id="" class="form-control" v-model="unit.abbrevation">
      </div>
      <div class="  mt-5  pb-5">
      <button class="btn float-end save">Save</button>
    </div>
    </div>
    </form>
    </div>
</template>
<script>
export default {
  data () {
    return {
      unit: {}
    }
  },
  methods: {
    submitEditedUnit () {
      // code herr
    }

  },
  computed: {
    units () {
      return this.$store.getters.getUnits
    }
  },
  created () {
    console.log('unit id' + this.$route.params.unitId)
    this.units.forEach(unit => {
      console.log('unit name' + unit.name)
      if (parseInt(unit.id) === parseInt(this.$route.params.unitId)) { this.unit = unit }
    })
  }
}
</script>

<style scoped>
* {
  box-sizing: border-box;
}
.btndetail{
border: none;
color: #ff9500;
}
.fas{
  cursor: pointer;
}
.btndetail:hover{
  color: #ff5100;
}
.save{
    background-color: #ff9500;
    width: 7em;
    color: #fff;
}
.save:hover{
    background-color:#ff5100 ;
}
a{
  color: #ff9500;
  margin: .2rem 2rem;
  font-size: 2rem;
  /* cursor: pointer; */
}

</style>
