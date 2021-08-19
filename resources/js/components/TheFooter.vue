<template>
<div class="">
    <div class="back-to-top text-center pt-4">
        <a href="#">
         <span class="fw-bold fs-2"><i  class="far fa-arrow-alt-circle-up"></i></span>
         <br>
        <strong>BACK TO TOP</strong>
        </a>
    </div>
   <div class="jumbotron py-5 px-1 d-flex flex-column mt-0">
       <div class="jumbotron-content align-self-center m-0 p-0">
          <h4 class=" fw-bold">NEWS LETTER SUBSCRIPTION</h4>
                <p class="text-center">Receive product news and updates in your inbox.</p>
              <div class="input-group mb-3 ">
              <input type="text" class="form-control" placeholder="Email address" aria-label="Recipient's username" aria-describedby="button-addon2">
           <button class="btn btn-outline-warning bg-warning text-dark" type="button " id="button-addon2"><i class="fas fa-chevron-right"></i></button>
        </div>
       </div>
   </div>
</div>

<div class="important-link pt-3">
    <hr>
    <div class="container-fluid mx-auto ">
        <div class="row mx-auto px-0">
            <div class="col-md-6 col-lg-4 my-2">
            <div class="d-flex">
               <div class="pe-2">
                   <span class="fs-2"><i class="fas fa-truck"></i></span>
               </div>
               <div class="description">
                   <strong>Free Delivery</strong><br>
                   <small>All orders will be delivered within 20-30 minutes</small>
               </div>
           </div>
        </div>
         <div class="col-md-6 col-lg-4 my-2">
            <div class="d-flex">
                <div class="pe-2">
                    <span class="fs-2"><i class="fas fa-undo-alt"></i></span>
                </div>
                <div class="description">
                   <strong>90-Day Returns</strong><br>
                   <small>We offer returns for 90-Days for 10ETB</small>
               </div>
              </div>
            </div>

            <div class="col-md-6 col-lg-4 my-2">
            <div class="d-flex ">
                <div class="pe-2">
                   <span class="fs-2"><i class="fas fa-phone"></i></span>
               </div>
               <div class="description">
                   <strong>Contact</strong><br>
                   <small>+251966016473</small>
               </div>
              </div>
            </div>
        </div>
    </div>
</div>

<div class="important-link ">
    <hr>
    <div class="container-fluid mx-auto ">
        <div class="row mx-auto px-0">
            <div class="col-md-6 col-lg-4 my-2">
            <div class="d-flex">
               <div class="pe-2">
                   <span class="fs-2"><i class="fas fa-cash-register"></i></span>
               </div>

                   <strong>Secure And Easy Payment</strong><br>

           </div>
        </div>
         <div class="col-md-6 col-lg-4 my-2">
            <div class="d-flex">

                    <img src="../assets/amole-2.jpg" class="mx-2" width="40" height="40" alt="amole">
                    <img src="../assets/amole.jpg" class="mx-2" width="40" height="40" alt="amole">

            </div>
        </div>

        </div>
    </div>
</div>
</template>

<style scoped>

.back-to-top a{
    text-decoration: none;
    margin-bottom: 0!important;
}
.jumbotron{
  background-color: #f1f1f1;
}
.jumbotron .input-group{
    max-width: 400px;
}

.important-link img{
   border-radius: 50%;
}
.important-link hr{
  height: 3px;
}

@media only screen and(min-with:768){

}
</style>
