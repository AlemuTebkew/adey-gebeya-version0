<template>
    <div class="mx-3">
        <div class="back ms-2">
            <span @click="backPage" class=""><i class="fas fa-arrow-left"></i> </span>
        </div>

        <div class="row mt-3">
            <div class="col-lg-8">
        <div class="shadow-sm rounded bg-white p-4 mb-3">
                <div class="numberOfItems">2 Items</div>
                <table class="table  mt-2" >
                    <thead>
                       <tr class="tableHeader text-white">
                           <th scope="col">Item Image</th>
                           <th scope="col">Item name</th>
                           <th scope="col">Quantity</th>
                           <th scope="col">Price</th>
                      </tr>
                  </thead>
                  <tbody>
                      <tr class="border rounded" >
                         <td class="">
                           <img src="../../../assets/apple.jpg" width="50" height="60" alt="">
                         </td>
                         <td class="align-middle">Apple</td>
                         <td class="align-middle">4 kg</td>
                         <td class="align-middle">$56.4</td>
                       </tr>
                       <tr class="border rounded">
                         <td>
                           <img src="../../../assets/apple.jpg" width="50" height="60" alt="">
                         </td>
                         <td class="align-middle">Apple</td>
                         <td class="align-middle">4 kg</td>
                         <td class="align-middle">$56.4</td>
                       </tr>
                   </tbody>
               </table>
            </div>
               <div class="shadow-sm rounded bg-white p-4 mb-3">
                   <div class="fw-bold my-1">Shipping Addres</div>
                   <div class="border rounded p-2">Addis Ababa Bole Bulbula</div>
               </div>
            </div>

            <div class="col-lg-4 ">
              <div class="shadow-sm rounded bg-white mb-3">
                 <ul class="list-group list-group-flush">
                  <li class="list-group-item fw-bold">Order Summary</li>
                  <li class="list-group-item py-3 small">Total order : $112.8</li>
                  <li class="list-group-item py-3 small">Shipping fee : Free delivery</li>
                  <li class="list-group-item py-3 small">Tax : $0</li>
                  <li class="list-group-item py-3">Total summary : $112.8</li>
               </ul>
              </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
  methods: {
    backPage () {
      this.$router.back()
    }
  }
}
</script>
<style scoped>
 .back .fas{
     cursor: pointer;
     color: #ff9500;
     transform: scale(2,1.5);
 }
 .tableHeader{
    background-color: #ff9500;
    border: 2px solid #ff9500;
    border-radius: 0;
    border-bottom-left-radius: 0.5em;
    border-bottom-right-radius: 0.5em;
}

</style>
