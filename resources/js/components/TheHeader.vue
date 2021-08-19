<template>
<nav class="navbar bg-warning  sticky-top">
  <div class="container-fluid px-0">
<!-- brand with navbar -->
    <div class="brand d-flex ms-0">
      <a class="align-self-center text-dark" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" aria-controls="offcanvasExample">
           <i class="fas fa-bars fw-bold fs-3 px-2 "></i>
      </a>
     <h2 class="text-white">አደይ ገበያ</h2>
    </div>
<!-- end brand with navbar -->

<!-- searchbar -->

<div id="searchbar" class="input-group" style="">
   <button class="searchbar-dropdown btn border dropdown-toggle bg-light " type="button" data-bs-toggle="dropdown" aria-expanded="false">Hereandthere</button>
   <ul class="dropdown-menu">
     <li><a class="dropdown-item" href="#">Action</a></li>
     <li><a class="dropdown-item" href="#">Another action</a></li>
     <li><hr class="dropdown-divider"></li>
     <li><a class="dropdown-item" href="#">Separated link</a></li>
  </ul>
     <input type="text" class=" form-control " placeholder="Search..." aria-label="Text input with dropdown button">
     <button class="btn-search btn border"><span><i class=" fas fa-search"></i></span></button>
 </div>
 <!-- end searchbar -->

<!-- cart-language -->
 <div class="d-flex  cart-language">
     <div id="dropdown-account" class="dropdown">
        <button class="btn  dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
          <i class="far fa-user-circle"></i>Account
        </button>
      <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1"></ul>
     </div>

    <div class="dropdown">
      <button  class="btn  dropdown-toggle pb-2" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
          <i class="fas fa-globe"></i>EN
      </button>
    </div>

    <button type="button" class="btn position-relative me-2 mt-1">
       <span class="position-relative">
            <i class="fas fa-cart-plus p-1"></i>
                 <span id="cart-badge " style="background-color:orangered" class="position-absolute top-0 start-100 translate-middle badge rounded-circle">
                  47
                     <span class="visually-hidden">number of items in the cart</span>
                 </span>
       </span>
     </button>
  </div>
<!-- end cart-language -->

</div>
</nav>

<!--OffCanvas-->
<div class="offcanvas offcanvas-start  px-0 w-75" style=" padding:0!important;" tabindex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
  <div class="offcanvas-header">
    <h5 class="offcanvas-title" id="offcanvasExampleLabel">Offcanvas</h5>
    <button type="button" class="btn-close text-reset text-light" data-bs-dismiss="offcanvas" aria-label="Close"></button>
  </div>
 <div class="offcanvas-body p-0 text-start text-dark">
  <nav class="navbar-light px-0">
    <ul class="navbar-nav px-2">
      <li px-0>
          <div class="text-muted small fw-bold text-uppercase">
             Core
          </div>
      </li>
      <li>
        <a href="#" class="nav-link px-3 active">
          <span class="me-2"><i class="fas fa-tachometer-alt"></i></span>
          <span>Dashboard</span>
          <!-- <span class="ms-auto"><i class="fas fa-chevron-down"></i></span> -->
        </a>
      </li>
      <li>
        <a class="nav-link sidebar-link" data-bs-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
         <span class="me-2"><i class="fas fa-tachometer-alt"></i></span>
         <span>Here and there</span>
         <span class="ms-auto dropdown-icon"><i class="fas fa-chevron-down"></i></span>
        </a>
        <div class="collapse pb-2" id="collapseExample">
          <div >
            <a href="#" class="nav-link px-3">
          <span class="me-2"><i class="fas fa-tachometer-alt"></i></span>
          <span>Dashboard</span>
          <!-- <span class="ms-auto"><i class="fas fa-chevron-down"></i></span> -->
        </a>
          </div>
          <div >
            <a href="#" class="nav-link px-3">
          <span class="me-2"><i class="fas fa-tachometer-alt"></i></span>
          <span>Dashboard</span>
        </a>
          </div>
          <div >
            <a href="#" class="nav-link px-3">
          <span class="me-2"><i class="fas fa-tachometer-alt"></i></span>
          <span>Dashboard</span>
        </a>
          </div>
       </div>
      </li>

      <!-- accordion panal -->
      <div class="accordion accordion-flush" id="accordionFlushExample">
  <div class="accordion-item">
    <h2 class="accordion-header" id="flush-headingOne">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
        Accordion Item #1
      </button>
    </h2>
    <div id="flush-collapseOne" class="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
      <div class="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the first item's accordion body.</div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="flush-headingTwo">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
        Accordion Item #2
      </button>
    </h2>
    <div id="flush-collapseTwo" class="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
      <div class="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the second item's accordion body. Let's imagine this being filled with some actual content.</div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="flush-headingThree">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
        Accordion Item #3
      </button>
    </h2>
    <div id="flush-collapseThree" class="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
      <div class="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the third item's accordion body. Nothing more exciting happening here in terms of content, but just filling up the space to make it look, at least at first glance, a bit more representative of how this would look in a real-world application.</div>
    </div>
  </div>
</div>
  <!-- end accordion panel -->
    </ul>
  </nav>
 </div>
</div>
</template>

<script>
export default {
  props: [],
  data () {
    return {

    }
  },
  methods: {
  }

}
</script>

<style scoped>
.navbar{
 margin-left: 0 !important;
 margin-right: 0 !important;
 padding: 0 0 !important;
}
#searchbar{
 width:50%;
}

.sidebar-link{
  display: flex;
}
.dropdown-icon{
  transition: all ease 0.23s;
}
.sidebar-link[aria-expanded="true"] .dropdown-icon{
  transform:rotate(180deg)
}

.btn:focus,
input.form-control:focus,
input[type=text]:focus
 {
  box-shadow: none;
  border:  4px solid #ff8c00 !important;

  /* border: 3px solid red; */
}

/* input.form-control:focus #searchbar{
    border: 3px solid red !important;
} */

@media only screen and (max-width:568px) {
 .searchbar-dropdown{
    /* font-size: 0.8em; */
    display: none;
  }
  #searchbar{
      margin: 0 1em;
  }
#searchbar .btn-search{
     border-top-right-radius: 1.5em!important;
     border-bottom-right-radius: 1.5em !important;
     font-size: 16px;
}
  #searchbar input{

     border-top-left-radius: 1.5em!important;
     border-bottom-left-radius: 1.5em !important;
     font-size: 16px;
  }
  .navbar {
      height: 90px !important;
  }
}
@media only screen and (min-width:768px) {
.offcanvas{
 width:20% !important;
}
}
@media only screen and (max-width:768px) {

  #searchbar{
 width:100%;
}
.cart-language{
  position: absolute;
  top: 0;
  right: 0;
}
#dropdown-account{
  display: none;
}

}

</style>
