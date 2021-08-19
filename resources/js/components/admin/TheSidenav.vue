<template>
    <!-- offcanvas -->
    <div
      class="offcanvas  offcanvas-start w-50 shadow-sm"
      tabindex="-1"
      id="offcanvasstart"
      aria-labelledby="offcanvasTopLabel"
    >
      <!-- <div class="offcanvas-header text-light ">
        <h3 id="offcanvasTopLabel" class="my-3">Adey Gebeya</h3> -->
        <!-- <button
          type="button"
          class="btn-close text-reset"
          data-bs-dismiss="offcanvas"
          aria-label="Close"
        ></button> -->
      <!-- </div> -->

      <div class="offcanvas-body px-0  text-light">
        <nav class="navbar-dark">
          <ul class="navbar-nav px-2">
           <li>
             <h3 id="offcanvasTopLabel" class="my-4">Adey Gebeya</h3>
           </li>
      <!-- Dashboard begin -->
          <li>
             <router-link :to="{name:'Dashboard'}" class="nav-link py-1">
               <span class="me-2"><i class="fas fa-tachometer-alt"></i></span>
                 <span>Dashboard</span>
                    <hr class=" m-0 mt-1">
              </router-link>
          </li>
<!-- Dashboard end -->

<!-- Catalog begin -->
      <li>
        <a class="nav-link sidebar-link  d-flex" data-bs-toggle="collapse" href="#sidenavCatalog" role="button" aria-expanded="false" aria-controls="collapseExample">
         <span class="me-2"><i class="fas fa-tachometer-alt"></i></span>
         <span>Catalog</span>
         <span class="ms-auto dropdown-icon"><i class="fas fa-chevron-down"></i></span>
        </a>
        <hr class=" m-0 mt-1">
        <div class="collapse py-2 ms-3 rounded sidebar-items text-dark " id="sidenavCatalog">
<!-- product begin          -->
          <div >
            <router-link :to="{name:'Products'}" class="nav-link px-3">
              <span>Products</span>
                  <!-- <span class="ms-auto"><i class="fas fa-chevron-down"></i></span> -->
            </router-link>
          </div>
<!-- product end -->

<!-- catagory begin -->
          <div >
            <router-link :to="{name:'Category'}" class="nav-link px-3">
              <span>Category</span>
            </router-link>
          </div>
 <!-- catagory end-->

<!-- unit start -->
          <div >
             <router-link :to="{name:'Unit'}" class="nav-link px-3">
                <span>Unit</span>
            </router-link>
          </div>
<!-- unit end  -->

<!-- review start -->
            <div >
                <router-link :to="{name:'Review'}" class="nav-link px-3">
                   <span>Review</span>
               </router-link>
          </div>
 <!-- review end  -->

 <!-- subcategory begin -->
            <div>
                <router-link :to="{name:'Subcategory'}" class="nav-link px-3">
                     <span>Subcategory</span>
                 </router-link>
             </div>
<!-- subcategory end  -->

<!-- prouct variant start -->
          <div>
            <router-link :to="{name:'ProductVariant'}" class="nav-link px-3">
              <span>Product Variant</span>
            </router-link>
          </div>
<!-- prodcut variant end  -->
       </div>
      </li>
<!-- Catalog end  -->

<!-- Order menu begin -->
       <li>
         <a class="nav-link sidebar-link d-flex" data-bs-toggle="collapse" href="#sidenavOrder" role="button" aria-expanded="false" aria-controls="collapseExample">
         <span class="me-2"><i class="fas fa-tachometer-alt"></i></span>
         <span>Order</span>
         <span class="ms-auto dropdown-icon"><i class="fas fa-chevron-down"></i></span>
        </a>
        <hr class=" m-0 mt-1">

        <div class="collapse py-2 ms-3 rounded sidebar-items" id="sidenavOrder">

<!-- order begin  -->
          <div >
            <router-link :to="{name:'Order'}" class="nav-link px-3">
              <span>Order</span>
            </router-link>
          </div>
 <!-- order end  -->

<!-- order status begin -->
           <div >
              <router-link :to="{name:'OrderStatus'}" class="nav-link px-3">
                <span>Order status</span>

             </router-link>
           </div>
  <!-- order status end  -->
         </div>
       </li>
<!-- order menu end  -->

<!-- employee begin -->
    <li>
      <a class="nav-link sidebar-link d-flex" data-bs-toggle="collapse" href="#sidenavEmployee" role="button" aria-expanded="false" aria-controls="collapseExample">
         <span class="me-2"><i class="fas fa-user-friends"></i></span>
         <span>Employee</span>
         <span class="ms-auto dropdown-icon"><i class="fas fa-chevron-down"></i></span>
       </a>
         <hr class=" m-0 mt-1">
         <div class="collapse py-2 ms-3 rounded sidebar-items" id="sidenavEmployee">
           <div >
              <router-link :to="{name:'DeliveryBoy'}" class="nav-link px-3">
                <span>Delivery Boy</span>
             </router-link>
           </div>
           <div >
              <router-link :to="{name:'Employee'}" class="nav-link px-3">
                <span>Employee</span>
             </router-link>
           </div>
         </div>
      </li>
<!-- employee end -->

<!-- manage employee start -->
  <li>
      <a class="nav-link sidebar-link d-flex" data-bs-toggle="collapse" href="#sidenavManageEmployee" role="button" aria-expanded="false" aria-controls="collapseExample">
         <span class="me-2"><i class="fas fa-tachometer-alt"></i></span>
         <span>Permission</span>
         <span class="ms-auto dropdown-icon"><i class="fas fa-chevron-down"></i></span>
       </a>
         <hr class=" m-0 mt-1">
         <div class="collapse py-2 ms-3 rounded sidebar-items" id="sidenavManageEmployee">
           <div >
              <router-link :to="{name:'ManagePermission'}" class="nav-link px-2">
                <span>Manage Permission</span>
             </router-link>
           </div>
           <div >
              <router-link :to="{name:'ManageRole'}" class="nav-link px-2">
                <span>Manage Role</span>
             </router-link>
           </div>
         </div>
      </li>
<!-- manage employee end  -->

   <!-- vender start  -->
          <li>
             <router-link :to="{name:'Vendor'}" class="nav-link py-1">
               <span class="me-2"><i class="fas fa-tachometer-alt"></i></span>
               <span>Vendor</span>
               <hr class=" m-0 mt-1">
             </router-link>
           </li>
   <!-- veder end  -->

<!-- status begin -->
<li>
         <a class="nav-link sidebar-link d-flex" data-bs-toggle="collapse" href="#sidenavStatus" role="button" aria-expanded="false" aria-controls="">
         <span class="me-2"><i class="fas fa-tachometer-alt"></i></span>
         <span>Status</span>
         <span class="ms-auto dropdown-icon"><i class="fas fa-chevron-down"></i></span>
        </a>
        <hr class=" m-0 mt-1">

        <div class="collapse py-2 ms-3 rounded sidebar-items" id="sidenavStatus">

<!-- product status begin  -->
          <div >
            <router-link :to="{name:'ProductStatus'}" class="nav-link px-3">
              <span>Product Status</span>
            </router-link>
          </div>
 <!-- product status end  -->

<!-- product visibility status begin -->
           <div >
              <router-link :to="{name:'ProductVisibilityStatus'}" class="nav-link px-3">
                <span>Visisbility Status</span>
             </router-link>
           </div>
  <!-- product visibility status end  -->
         </div>
       </li>
<!-- status end -->

 <!-- report begin  -->
          <li>
             <a href="#" class="nav-link py-1">
               <span class="me-2"><i class="fas fa-tachometer-alt"></i></span>
               <span>Report</span>
                 <hr class=" m-0 mt-1">
             </a>
           </li>
 <!-- report end  -->

 <!-- customer begin  -->
          <li>
             <router-link :to="{name:'Customer'}" class="nav-link py-1">
               <span class="me-2"><i class="fas fa-users"></i></span>
               <span>Customer</span>
               <hr class=" m-0 mt-1">
             </router-link>
           </li>
 <!-- customer end  -->

 <!-- payment method start -->
          <li>
             <router-link :to="{name:'PaymentMethod'}" class="nav-link py-1">
               <span class="me-2"><i class="fas fa-tachometer-alt"></i></span>
               <span>Payment Method</span>
               <hr class=" m-0 mt-1">
             </router-link>
           </li>
 <!-- payment method end  -->

<!-- shipping method  -->
         <li>
             <router-link :to="{name:'ShippingMethod'}" class="nav-link py-1">
               <span class="me-2"><i class="fas fa-truck"></i></span>
               <span>Shipping Method</span>
               <hr class=" m-0 mt-1">
             </router-link>
           </li>
<!-- shipping method -->

<!-- push notification  -->
         <li>
             <router-link :to="{name:'PushNotification'}" class="nav-link py-1">
               <span class="me-2"><i class="fas fa-bell"></i></span>
               <span>Push Notification</span>
               <hr class=" m-0 mt-1">
             </router-link>
           </li>
<!-- push notification  -->

 <!-- General Setting start -->
           <li>
             <router-link :to="{name:'GeneralSetting'}" class="nav-link py-1">
               <span class="me-2"><i class="fas fa-cog"></i></span>
               <span>General Setting</span>
               <hr class=" m-0 mt-1">
             </router-link>
           </li>
 <!--General setting end  -->

     </ul>
   </nav>
  </div>
</div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Open+Sans+Condensed:wght@300&display=swap');
*{
  box-sizing: border-box !important;
}
.offcanvas-header{
  font-family: 'Open Sans Condensed', sans-serif;
}
.dropdown-icon{
  transition: all ease 0.23s;
}
.sidebar-link[aria-expanded="true"] .dropdown-icon{
  transform:rotate(180deg)
}
.offcanvas{
 width:18% !important;
 visibility: visible;
 transform: none;
 background-color: #ff9500;
 border-top-right-radius: 2em;
 border-bottom-right-radius: 2em;
 border: none;

}

@media only screen and (min-width:768px) {
/* .offcanvas-menu-bar{
  display: none;
} */
.offcanvas{
 width:18% !important;
 visibility: visible;
 transform: none;

}
}
/* li a{
  color:#fff !important
} */
.sidebar-items{
background-color: #f5f6fa;
}
.sidebar-items a{
  color: #000 !important;
  border-bottom: 1px solid #ff9500;

}
.sidebar-items :first-child a{
  border-top: 0.5px solid #ff9500;
}
.sidebar-items .active{
  background-color: #ff9500;
  color: #fff !important;
}

</style>
