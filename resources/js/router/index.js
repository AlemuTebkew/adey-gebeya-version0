import store from '../store/index'
import { createRouter, createWebHistory } from 'vue-router'
import BuyerApp from '../views/buyer/BuyerApp.vue'
import HomePage from '../views/buyer/HomePage.vue'
// import TheDashboard from '../views/admin/TheDashboard.vue'
// import AdminHome from '../views/admin/AdminHome.vue'
const routes = [{

  path: '/',
  name: 'BuyerApp',
  component: BuyerApp,
  children: [
    { path: '/', component: HomePage }
  ]
},
{
  path: '/admin-login',
  name: 'AdminLogin',
  component: () => import(/* webpackChunkName: "adminlogin" */ '../views/admin/AdminLogin.vue'),
  beforeEnter: (to, from, next) => {
    if (store.getters.isManagerVerified) {
      next(from.path)
    }
    next()
  }
},
{
  path: '/email-confirmation/:id',
  props: true,
  name: 'EmailConfirmation',
  component: () => import(/* webpackChunkName: "EmailConfirmation" */ '../views/admin/EmailConfirmation.vue')

},

{
  path: '/admin-home',
  name: 'AdminHome',
  meta: { authRequired: true },
  component: () =>
    import(/* webpackChunkName: "admin" */ '../views/admin/AdminHome.vue'),
  children: [{
    path: '/admin-home/',
    name: 'Dashboard',
    component: () =>
      import(/* webpackChunkName: "admin" */ '../views/admin/TheDashboard.vue')
  },

  {
    path: '/admin-home/products',
    name: 'Products',
    component: () =>
      import(/* webpackChunkName: "product" */ '../views/admin/catalog/TheProduct.vue')
  },
  {
    path: '/admin-home/review',
    name: 'Review',
    component: () =>
      import(/* webpackChunkName: "product" */ '../views/admin/catalog/TheReview.vue')
  },
  {
    path: '/admin-home/review-detail/:reviewId',
    name: 'ReviewDetail',
    props: true,
    component: () =>
      import(/* webpackChunkName: "product" */ '../views/admin/catalog/ReviewDetail.vue')
  },
  {
    path: '/admin-home/category',
    name: 'Category',
    props: true,
    component: () =>
      import(/* webpackChunkName: "catagory" */ '../views/admin/catalog/TheCatagory.vue')
  },

  {
    path: '/admin-home/unit',
    name: 'Unit',
    component: () =>
      import(/* webpackChunkName: "unit" */ '../views/admin/catalog/TheUnit.vue')
  },

  {
    path: '/admin-home/deliveryboy',
    name: 'DeliveryBoy',
    component: () =>
      import(/* webpackChunkName: "deliveryboy" */ '../views/admin/employee/DeliveryBoy.vue')
  },
  {
    path: '/admin-home/employee',
    name: 'Employee',
    component: () =>
      import(/* webpackChunkName: "employee" */ '../views/admin/employee/TheEmployee.vue')
  },
  {
    path: '/admin-home/employee',
    name: 'Employee',
    component: () =>
      import(/* webpackChunkName: "employee" */ '../views/admin/employee/TheEmployee.vue')
  },
  {
    path: '/admin-home/manage-permission',
    name: 'ManagePermission',
    component: () =>
      import(/* webpackChunkName: "manage-permission" */ '../views/admin/manage-employee/ManagePermission.vue')
  },
  {
    path: '/admin-home/manage-role',
    name: 'ManageRole',
    component: () =>
      import(/* webpackChunkName: "deliveryboy" */ '../views/admin/manage-employee/ManageRole.vue')
  },
  {
    path: '/admin-home/order-status',
    name: 'OrderStatus',
    component: () =>
      import(/* webpackChunkName: "orderstatus" */ '../views/admin/status/OrderStatus.vue')
  },
  {
    path: '/admin-home/the-order',
    name: 'Order',
    component: () =>
      import(/* webpackChunkName: "order" */ '../views/admin/order/TheOrder.vue')
  },
  {
    path: '/admin-home/add-order-status',
    name: 'AddOrder',
    component: () =>
      import(/* webpackChunkName: "addorder" */ '../views/admin/status/AddOrderStatus.vue')
  },
  {
    path: '/admin-home/customer',
    name: 'Customer',
    component: () =>
      import(/* webpackChunkName: "customer" */ '../views/admin/TheCustomer.vue')
  },
  {
    path: '/admin-home/payment-method',
    name: 'PaymentMethod',
    component: () =>
      import(/* webpackChunkName: "paymentmethod" */ '../views/admin/PaymentMethod.vue')
  },
  {
    path: '/admin-home/push-notification',
    name: 'PushNotification',
    component: () =>
      import(/* webpackChunkName: "pushnotification" */ '../views/admin/PushNotification.vue')
  },
  {
    path: '/admin-home/return',
    name: 'Return',
    component: () =>
      import(/* webpackChunkName: "return" */ '../views/admin/TheReturn.vue')
  },
  {
    path: '/admin-home/vendor',
    name: 'Vendor',
    component: () =>
      import(/* webpackChunkName: "vendor" */ '../views/admin/TheVendor.vue')
  },
  {
    path: '/admin-home/shipping-method',
    name: 'ShippingMethod',
    component: () =>
      import(/* webpackChunkName: "shippingmethod" */ '../views/admin/ShippingMethod.vue')
  },
  {
    path: '/admin-home/general-setting',
    name: 'GeneralSetting',
    component: () =>
      import(/* webpackChunkName: "generalsetting" */ '../views/admin/GeneralSetting.vue')
  },
  {
    path: '/admin-home/add-employee',
    name: 'AddEmployee',
    component: () =>
      import(/* webpackChunkName: "addemployee" */ '../views/admin/employee/AddEmployee.vue')
  },
  {
    path: '/admin-home/add-deliveryboy',
    name: 'AddDeliveryBoy',
    component: () =>
      import(/* webpackChunkName: "adddeliveryboy" */ '../views/admin/employee/AddDeliveryboy.vue')
  },
  {
    path: '/admin-home/deliveryboy-detail/:deliveryboyId',
    name: 'DeliveryboyDetail',
    props: true,
    component: () =>
      import(/* webpackChunkName: "adddeliveryboy" */ '../views/admin/employee/DeliveryBoyDetail.vue')
  },
  {
    path: '/admin-home/add-product',
    name: 'AddProduct',
    component: () =>
      import(/* webpackChunkName: "addproduct" */ '../views/admin/catalog/AddProduct.vue')
  },
  {
    path: '/admin-home/product-detail/:productId',
    props: true,
    name: 'ProductDetail',
    component: () =>
      import(/* webpackChunkName: "productdetail" */ '../views/admin/catalog/ProductDetail.vue')
  },
  {
    path: '/admin-home/add-unit',
    name: 'AddUnit',
    component: () =>
      import(
        /* webpackChunkName: "addunits" */
        '../views/admin/catalog/AddUnit.vue'
      )
  },
  {
    path: '/admin-home/add-category',
    name: 'AddCategory',
    component: () =>
      import(
        /* webpackChunkName: "addcategory" */
        '../views/admin/catalog/AddCategory.vue'
      )
  },
  {
    path: '/admin-home/add-variant',
    name: 'AddVariant',
    component: () =>
      import(
        /* webpackChunkName: "addvariant" */
        '../views/admin/catalog/AddVariant.vue'
      )
  },
  {
    path: '/admin-home/add-subcategory',
    name: 'Addsubcategory',
    component: () =>
      import(
        /* webpackChunkName: "addsubcategory" */
        '../views/admin/catalog/AddSubCategory.vue'
      )
  },

  {
    path: '/admin-home/add-permission',
    name: 'Addpermission',
    component: () =>
      import(
        /* webpackChunkName: "addermission" */
        '../views/admin/manage-employee/AddPermission.vue'
      )
  },
  {
    path: '/admin-home/add-role',
    name: 'Addrole',
    component: () =>
      import(
        /* webpackChunkName: "addrole" */
        '../views/admin/manage-employee/AddRole.vue'
      )
  },
  {
    path: '/admin-home/permission-detail',
    name: 'Permissiondetail',
    component: () =>
      import(
        /* webpackChunkName: "permissiondetail" */
        '../views/admin/manage-employee/PermissionDetail.vue'
      )
  },
  {
    path: '/admin-home/category-detail/:categoryId',
    name: 'Categorydetail',
    props: true,
    component: () =>
      import(
        /* webpackChunkName: "categorydetail" */
        '../views/admin/catalog/CategoryDetail.vue'
      )
  },
  {
    path: '/admin-home/sub-category-detail/:subcategoryId',
    props: true,
    name: 'SubcategoryDetail',
    component: () =>
      import(
        /* webpackChunkName: "subcategorydetail" */
        '../views/admin/catalog/SubCategoryDetail.vue'
      )
  },
  {
    path: '/admin-home/variant-detail/:variantId',
    props: true,
    name: 'Variantdetail',
    component: () =>
      import(
        /* webpackChunkName: "ariantdetail" */
        '../views/admin/catalog/VariantDetail.vue'
      )
  },

  {
    path: '/admin-home/unit-detail/:unitId',
    name: 'Unitdetail',
    props: true,
    component: () =>
      import(
        /* webpackChunkName: "unitdetail" */
        '../views/admin/catalog/UnitDetail.vue'
      )
  },
  {
    path: '/admin-home/role-detail',
    name: 'roledetail',
    component: () =>
      import(
        /* webpackChunkName: "roledetail" */
        '../views/admin/manage-employee/RoleDetail.vue'
      )
  },

  {
    path: '/admin-home/product-variant',
    name: 'ProductVariant',
    component: () =>
      import(/* webpackChunkName: "prouct-variant" */ '../views/admin/catalog/ProductVariant.vue')
  },
  {
    path: '/admin-home/subcategory',
    name: 'Subcategory',
    component: () =>
      import(/* webpackChunkName: "sub-catagory" */ '../views/admin/catalog/TheSubcategory.vue')
  },
  {
    path: '/admin-home/employee-detail/:employeeId',
    props: true,
    name: 'EmployeeDetail',
    component: () =>
      import(/* webpackChunkName: "employeedetail" */ '../views/admin/employee/EmployeeDetail.vue')
  },

  {
    path: '/admin-home/order-detail/:orderId',
    props: true,
    name: 'OrderDetail',
    component: () =>
      import(/* webpackChunkName: "OrderDetail" */ '../views/admin/order/OrderDetail.vue')
  },
  {
    path: '/admin-home/product-status',
    name: 'ProductStatus',
    component: () =>
      import(/* webpackChunkName: "productstatus" */ '../views/admin/status/ProductStatus.vue')
  },
  {
    path: '/admin-home/add-product-status',
    name: 'AddProductStatus',
    component: () =>
      import(/* webpackChunkName: "addproductstatus" */ '../views/admin/status/AddProductStatus.vue')
  },
  {
    path: '/admin-home/product-visibility-status',
    name: 'ProductVisibilityStatus',
    component: () =>
      import(/* webpackChunkName: "ProductVisibilityStatus" */ '../views/admin/status/ProductVisibilityStatus.vue')
  },
  {
    path: '/admin-home/add-product-visibility-status',
    name: 'AddProductVisibilityStatus',
    component: () =>
      import(/* webpackChunkName: "AddProductVisibilityStatus" */ '../views/admin/status/AddProductVisibilityStatus.vue')
  }

  ]
},

{ path: '/:notFound(.*)*', redirect: ' /' }

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  linkActiveClass: 'active'
})

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.authRequired) && !store.getters.isManagerVerified) {
    next({ name: 'AdminLogin', query: { to: to.path } })
  } else {
    next()
  }
})
export default router
