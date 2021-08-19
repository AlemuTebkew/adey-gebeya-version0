<template>
  <nav class="nav  navbar-dark  p-0 topNavbar sticky-top">
    <div class="container-fluid d-flex">

        <!-- <a class="offcanvas-menu-bar"
          data-bs-toggle="offcanvas"
          href="#offcanvasstart"
          aria-controls="offcanvasStart"
        > -->
          <!-- <span class="text-light"
            ><i class="fas fa-bars  fw-bold fs-4 pe-2 mb-3"></i></span>
     -->
     <!-- </a> -->
      <!-- <a class="navbar-brand me-auto pb-4 fw-bold fs-4" href="#">
        Admin
      </a> -->
      <ul class="d-flex  text-dark py-3 m-0 px-0 ms-auto">
        <li class="nav-item nav-link shadow-sm bg-white mx-3 rounded position-relative">
          <a href="#" class=""><i class="far fa-bell text-dark mx-2"></i>
              <span class="position-absolute translate-middle   badge  rounded-pill">
                <span class="text-white ">9</span>
              </span>
          </a>
        </li>
        <li class="nav-item dropdown dropdown nav-link p-0 mt-0  shadow-sm bg-white rounded">
          <a class="nav-link dropdown-toggle text-dark py-0 ps-0" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            <img src="../../assets/dereje.jpg" width="40" height="40" alt=""/>
               <span> Dereje Seifu</span>
           </a>
          <ul class="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdownMenuLink">
            <li><a class="dropdown-item" href="#">Account</a></li>
            <li><a class="dropdown-item" href="#">Log out</a></li>
          </ul>
        </li>
      </ul>
    </div>

<!-- end offcanvas -->
</nav>
</template>
<script>
export default {}
</script>

<style scoped>
*{
  box-sizing: border-box !important;
}
.dropdown-item:active{
  background-color: #ff9500;
}
.badge{
  background-color: #ff9500;
}
/* .dropdown-icon{
  transition: all ease 0.23s;
} */
</style>
