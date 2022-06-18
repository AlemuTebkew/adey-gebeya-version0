"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["deliveryboy"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/status/TheStatus.vue?vue&type=script&lang=js":
/*!**********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/status/TheStatus.vue?vue&type=script&lang=js ***!
  \**********************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: ['pageLabel', 'status'],
  methods: {
    addStatus: function addStatus() {
      this.$emit('addStatus');
    },
    deleteStatus: function deleteStatus(id) {
      this.$emit('deleteStatus', id);
    },
    convertToDate: function convertToDate(date) {
      return new Date(date).toISOString().split('T')[0];
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/admin/employee/DeliveryBoy.vue?vue&type=script&lang=js":
/*!***************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/admin/employee/DeliveryBoy.vue?vue&type=script&lang=js ***!
  \***************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  methods: {
    addDeliveryboy: function addDeliveryboy() {
      this.$router.push('/admin-home/add-deliveryboy');
    },
    viewDetail: function viewDetail(id) {
      this.$router.push('/admin-home/deliveryboy-detail/' + id);
    },
    deleteDeliveryboy: function deleteDeliveryboy(id) {
      this.$store.dispatch('deleteDeliveryboy', id);
    }
  },
  computed: {
    deliveryboys: function deliveryboys() {
      return this.$store.getters.getDeliveryboys;
    }
  },
  created: function created() {
    this.$store.dispatch('fetchDeliveryBoys');
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/admin/manage-employee/ManageRole.vue?vue&type=script&lang=js":
/*!*********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/admin/manage-employee/ManageRole.vue?vue&type=script&lang=js ***!
  \*********************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _components_status_TheStatus_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../components/status/TheStatus.vue */ "./resources/js/components/status/TheStatus.vue");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  components: {
    TheStatus: _components_status_TheStatus_vue__WEBPACK_IMPORTED_MODULE_0__.default
  },
  data: function data() {
    return {
      // units: this.$store.getters.getUnits
      pageLabel: {
        pageName: 'Role',
        btnName: 'Add Role'
      }
    };
  },
  methods: {
    addRole: function addRole() {
      this.$router.push('/admin-home/add-role');
    },
    deleteRole: function deleteRole(id) {
      this.$store.dispatch('deleteRole', id); // alert('delete from role')
    }
  },
  computed: {
    roles: function roles() {
      return this.$store.getters.roles;
    }
  },
  created: function created() {}
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/status/TheStatus.vue?vue&type=template&id=10679d11&scoped=true":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/status/TheStatus.vue?vue&type=template&id=10679d11&scoped=true ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");


(0,vue__WEBPACK_IMPORTED_MODULE_0__.pushScopeId)("data-v-10679d11");

var _hoisted_1 = {
  "class": "mx-3"
};
var _hoisted_2 = {
  "class": "d-flex justify-content-between"
};
var _hoisted_3 = {
  "class": "fw-bold fs-5"
};
var _hoisted_4 = {
  "class": " shadow-sm rounded p-3 bg-white mt-4"
};

var _hoisted_5 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createStaticVNode)("<div class=\"filter d-flex pe-4 mt-4 pt-0 justify-content-between\" data-v-10679d11><div class=\"search-bar w-50  d-flex\" data-v-10679d11><select class=\"\" id=\"searchBy\" aria-label=\"search unit by\" data-v-10679d11><option selected data-v-10679d11><span data-v-10679d11><i class=\"fas fa-sort-amount-down-alt\" data-v-10679d11></i>Name</span></option><option value=\"1\" data-v-10679d11>Email</option><option value=\"2\" data-v-10679d11>Phone No</option></select><input type=\"text\" class=\"search-input flex-fill\" aria-label=\"Text input with segmented dropdown button\" data-v-10679d11><div class=\"search-icon\" data-v-10679d11><span data-v-10679d11><i class=\"fas fa-search\" data-v-10679d11></i></span></div></div><div class=\"form-group \" data-v-10679d11><select class=\"form-select \" aria-label=\"\" data-v-10679d11><option selected data-v-10679d11><span data-v-10679d11><i class=\"fas fa-sort-amount-down-alt\" data-v-10679d11></i>Sort by</span></option><option value=\"1\" data-v-10679d11>asc</option><option value=\"2\" data-v-10679d11>dec</option><option value=\"\" data-v-10679d11><span data-v-10679d11><i class=\"fas fa-sort-amount-down-alt\" data-v-10679d11></i></span></option></select></div></div>", 1);

var _hoisted_6 = {
  "class": "table table-borderless mt-3"
};

var _hoisted_7 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("thead", null, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tr", {
  "class": "tableHeader text-light"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
  scope: "col"
}, "#No"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
  scope: "col"
}, "Name"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" <th scope=\"col\">Description</th> "), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
  scope: "col"
}, "Added Date"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
  scope: "col"
}, "Action")])], -1
/* HOISTED */
);

var _hoisted_8 = {
  scope: "row"
};
var _hoisted_9 = ["onClick"];

var _hoisted_10 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  "class": "fas fa-trash"
}, null, -1
/* HOISTED */
);

var _hoisted_11 = [_hoisted_10];

(0,vue__WEBPACK_IMPORTED_MODULE_0__.popScopeId)();

function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("nav", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", _hoisted_3, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($props.pageLabel.pageName), 1
  /* TEXT */
  ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    "class": "btnAddProductStatus text-white btn ms-auto",
    onClick: _cache[0] || (_cache[0] = function () {
      return $options.addStatus && $options.addStatus.apply($options, arguments);
    }),
    type: "button"
  }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($props.pageLabel.btnName), 1
  /* TEXT */
  )]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_4, [_hoisted_5, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" table "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("table", _hoisted_6, [_hoisted_7, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tbody", null, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($props.status, function (value) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("tr", {
      key: value.id,
      "class": "border rounded"
    }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", _hoisted_8, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(value.id), 1
    /* TEXT */
    ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(value.name), 1
    /* TEXT */
    ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" <td>{{value.description}}</td> "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($options.convertToDate(value.created_at)), 1
    /* TEXT */
    ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" <span  @click=\"viewDetail(value.id)\" class=\"px-2 fs-5\"><i class=\"fas fa-ellipsis-h\"></i></span> "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
      onClick: function onClick($event) {
        return $options.deleteStatus(value.id);
      },
      "class": "fs-5"
    }, _hoisted_11, 8
    /* PROPS */
    , _hoisted_9)])]);
  }), 128
  /* KEYED_FRAGMENT */
  )), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" <tr v-for=\"n in 6\" :key=\"n\" class=\"border rounded\">\r\n                                  <th scope=\"row\">{{n}}</th>\r\n                                  <td>Pending</td>\r\n                                  <td>Can't be sold </td>\r\n                                  <td>12/10/2022</td>\r\n                                  <td>\r\n                                     <span  @click=\"deleteStatus(1)\" class=\"fs-5\"><i class=\"fas fa-trash\"></i></span>\r\n                                 </td>\r\n                             </tr> ")])])])]);
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/admin/employee/DeliveryBoy.vue?vue&type=template&id=0ff8c2b6&scoped=true":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/admin/employee/DeliveryBoy.vue?vue&type=template&id=0ff8c2b6&scoped=true ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");


(0,vue__WEBPACK_IMPORTED_MODULE_0__.pushScopeId)("data-v-0ff8c2b6");

var _hoisted_1 = {
  "class": "mx-3"
};
var _hoisted_2 = {
  "class": "d-flex justify-content-between"
};

var _hoisted_3 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "fw-bold fs-5"
}, "DeliveryBoy", -1
/* HOISTED */
);

var _hoisted_4 = {
  "class": "shadow-sm rounded p-3 bg-white mt-4"
};

var _hoisted_5 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createStaticVNode)("<ul class=\" nav d-flex status-nav mt-2\" data-v-0ff8c2b6><li class=\"nav-item \" data-v-0ff8c2b6><button class=\"btn-status fw-bold pe-3\" data-v-0ff8c2b6>All</button></li><li class=\"nav-item\" data-v-0ff8c2b6><button class=\"btn-status fw-bold mx-2\" data-v-0ff8c2b6>Active</button></li><li class=\"nav-item\" data-v-0ff8c2b6><button class=\"btn-status fw-bold mx-2\" data-v-0ff8c2b6>Inactive</button></li></ul><div class=\"filter d-flex pe-4 mt-4 pt-0 justify-content-between\" data-v-0ff8c2b6><div class=\"search-bar w-50  d-flex\" data-v-0ff8c2b6><select class=\"\" id=\"searchBy\" aria-label=\"search deliveryboy by\" data-v-0ff8c2b6><option selected data-v-0ff8c2b6><span data-v-0ff8c2b6><i class=\"fas fa-sort-amount-down-alt\" data-v-0ff8c2b6></i>Name</span></option><option value=\"1\" data-v-0ff8c2b6>Email</option><option value=\"2\" data-v-0ff8c2b6>Phone No</option></select><input type=\"text\" class=\"search-input flex-fill\" aria-label=\"Text input with segmented dropdown button\" data-v-0ff8c2b6><div class=\"search-icon\" data-v-0ff8c2b6><span data-v-0ff8c2b6><i class=\"fas fa-search\" data-v-0ff8c2b6></i></span></div></div><!-- &lt;div class=&quot;form-group mx-2&quot;&gt;\r\n            &lt;select class=&quot;form-select &quot; id=&quot;vender&quot; aria-label=&quot;sort deliveryboy&quot;&gt;\r\n                &lt;option class=&quot;&quot; selected&gt;&lt;span&gt;&lt;i class=&quot;fas fa-sort-amount-down-alt&quot;&gt;&lt;/i&gt;Role&lt;/span&gt;&lt;/option&gt;\r\n                &lt;option value=&quot;1&quot;&gt;Status&lt;/option&gt;\r\n                &lt;option value=&quot;2&quot;&gt;i don&#39;t&lt;/option&gt;\r\n                &lt;option value=&quot;&quot;&gt; &lt;span&gt;&lt;i class=&quot;fas fa-sort-amount-down-alt&quot;&gt;&lt;/i&gt;&lt;/span&gt;&lt;/option&gt;\r\n            &lt;/select&gt;\r\n     &lt;/div&gt; --><div class=\"form-group \" data-v-0ff8c2b6><select class=\"form-select \" aria-label=\"sort deliveryboy\" data-v-0ff8c2b6><option selected data-v-0ff8c2b6><span data-v-0ff8c2b6><i class=\"fas fa-sort-amount-down-alt\" data-v-0ff8c2b6></i>Sort by</span></option><option value=\"1\" data-v-0ff8c2b6>asc</option><option value=\"2\" data-v-0ff8c2b6>dec</option><option value=\"\" data-v-0ff8c2b6><span data-v-0ff8c2b6><i class=\"fas fa-sort-amount-down-alt\" data-v-0ff8c2b6></i></span></option></select></div></div>", 2);

var _hoisted_7 = {
  "class": "table table-borderless mt-3"
};

var _hoisted_8 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("thead", null, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tr", {
  "class": "deliveryboyTableHeader text-light"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
  scope: "col"
}, "#No"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
  scope: "col"
}, "Employee Name"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
  scope: "col"
}, "Employee Role"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
  scope: "col"
}, "Phone No"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
  scope: "col"
}, "Email Address"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
  scope: "col"
}, "Status"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
  scope: "col"
}, "Action")])], -1
/* HOISTED */
);

var _hoisted_9 = {
  "class": "border rounded"
};

var _hoisted_10 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
  scope: "row"
}, "1", -1
/* HOISTED */
);

var _hoisted_11 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, "Eyob Diress", -1
/* HOISTED */
);

var _hoisted_12 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, "Order Manager", -1
/* HOISTED */
);

var _hoisted_13 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, "+2519178334", -1
/* HOISTED */
);

var _hoisted_14 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, "eyobadiress@gmail.com", -1
/* HOISTED */
);

var _hoisted_15 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, "Active", -1
/* HOISTED */
);

var _hoisted_16 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  "class": "fas fa-ellipsis-h"
}, null, -1
/* HOISTED */
);

var _hoisted_17 = [_hoisted_16];

var _hoisted_18 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  "class": "fas fa-trash"
}, null, -1
/* HOISTED */
);

var _hoisted_19 = [_hoisted_18];

(0,vue__WEBPACK_IMPORTED_MODULE_0__.popScopeId)();

function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("nav", _hoisted_2, [_hoisted_3, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    "class": "btnAddEmployee text-white btn ms-auto",
    onClick: _cache[0] || (_cache[0] = function () {
      return $options.addDeliveryboy && $options.addDeliveryboy.apply($options, arguments);
    }),
    type: "button"
  }, "Add DeliveryBoy")]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" navbar end   "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_4, [_hoisted_5, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" table "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("table", _hoisted_7, [_hoisted_8, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tbody", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" <tr v-for=\"deliveryboy in deliveryboys\" :key=\"deliveryboy.id\" class=\"border rounded\">\r\n                                  <th scope=\"row\">{{deliveryboy.id}}</th>\r\n                                  <td>{{deliveryboy.first_name + deliveryboy.last_name}}</td>\r\n                                  <td>{{deliveryboy.role_id}}</td>\r\n                                  <td>{{deliveryboy.phone_number}}</td>\r\n                                  <td>{{deliveryboy.email}}</td>\r\n                                  <td>{{deliveryboy.deliveryboy_status_id}}</td>\r\n                                  <td>\r\n                                     <span  @click=\"viewDetail(deliveryboy.id)\" class=\"px-2 fs-5\"><i class=\"fas fa-ellipsis-h\"></i></span>\r\n                                     <span  @click=\"deleteEmployee(deliveryboy.id)\" class=\"fs-5\"><i class=\"fas fa-trash\"></i></span>\r\n                                 </td>\r\n                             </tr> "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tr", _hoisted_9, [_hoisted_10, _hoisted_11, _hoisted_12, _hoisted_13, _hoisted_14, _hoisted_15, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
    onClick: _cache[1] || (_cache[1] = function ($event) {
      return $options.viewDetail(1);
    }),
    "class": "px-2 fs-5"
  }, _hoisted_17), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
    onClick: _cache[2] || (_cache[2] = function ($event) {
      return _ctx.deleteEmployee(1);
    }),
    "class": "fs-5"
  }, _hoisted_19)])])])])])]);
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/admin/manage-employee/ManageRole.vue?vue&type=template&id=b579161a":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/admin/manage-employee/ManageRole.vue?vue&type=template&id=b579161a ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_the_status = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("the-status");

  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Sorry the name of the component is not related to what i have used here...\r\nbut they have same layout. Hence don't consider it as status. I'll give it general name"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_the_status, {
    pageLabel: $data.pageLabel,
    status: $options.roles,
    onAddStatus: $options.addRole,
    onDeleteStatus: $options.deleteRole
  }, null, 8
  /* PROPS */
  , ["pageLabel", "status", "onAddStatus", "onDeleteStatus"])], 2112
  /* STABLE_FRAGMENT, DEV_ROOT_FRAGMENT */
  );
}

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/status/TheStatus.vue?vue&type=style&index=0&id=10679d11&scoped=true&lang=css":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/status/TheStatus.vue?vue&type=style&index=0&id=10679d11&scoped=true&lang=css ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\n*[data-v-10679d11]{\r\n    box-sizing: border-box;\n}\r\n/* .view{\r\n    color: #ff9500;\r\n} */\n.fas[data-v-10679d11]{\r\n  cursor: pointer;\n}\n.btn-status[data-v-10679d11]:focus\r\n/* input.form-control:focus,\r\ninput[type=text]:focus */\r\n {\r\n  border:  3px solid lightgray !important;\r\n  border-radius: 5px;\n}\n.dropdown-item[data-v-10679d11]:focus{\r\n    background-color: lightgray;\r\n    color: #000;\n}\n.btn-status[data-v-10679d11]{\r\n   border: none;\r\n   background-color: white !important;\n}\nbutton[data-v-10679d11]{\r\n    cursor: pointer !important;\n}\n.btnAddProductStatus[data-v-10679d11]{\r\n  background-color: #ff9500;\n}\n#searchBy[data-v-10679d11]{\r\n  background-color: #ff9500;\r\n  color: #fff;\r\n  padding: 5px;\n}\nselect option[data-v-10679d11]:hover{\r\n  background-color: transparent;\r\n  color: fff;\n}\r\n/* search bar ዙሪያ */\n.search-bar[data-v-10679d11]{\r\n    border: 2px solid lightgray;\r\n    border-radius: 5px;\n}\n.search-bar input[data-v-10679d11] {\r\n    border: none;\n}\n.search-bar select[data-v-10679d11]{\r\n    border: none;\r\n    border-right:2px solid lightgray;\n}\n.search-bar select[data-v-10679d11]:focus,\r\ninput.search-input[data-v-10679d11]:focus{\r\n    outline: none;\n}\n.search-bar[data-v-10679d11]:focus-within{\r\n    border: 2px solid  #ff9500 !important;\n}\n.search-icon[data-v-10679d11]{\r\n    padding-top: 4px;\r\n    text-align: center !important;\n}\n.search-bar span[data-v-10679d11]{\r\n    font-size: 1.2em;\r\n    cursor: pointer;\r\n    padding: 0 10px 0 5px;\n}\n.tableHeader[data-v-10679d11]{\r\n    background-color: #ff9500;\r\n    border: 2px solid #ff9500;\r\n    border-radius: 0;\r\n    border-bottom-left-radius: 0.5em;\r\n    border-bottom-right-radius: 0.5em;\n}\r\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/admin/employee/DeliveryBoy.vue?vue&type=style&index=0&id=0ff8c2b6&scoped=true&lang=css":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/admin/employee/DeliveryBoy.vue?vue&type=style&index=0&id=0ff8c2b6&scoped=true&lang=css ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\n*[data-v-0ff8c2b6]{\r\n    box-sizing: border-box;\n}\r\n/* .view{\r\n    color: #ff9500;\r\n} */\n.fas[data-v-0ff8c2b6]{\r\n  cursor: pointer;\n}\n.btn-status[data-v-0ff8c2b6]:focus\r\n/* input.form-control:focus,\r\ninput[type=text]:focus */\r\n {\r\n  border:  3px solid lightgray !important;\r\n  border-radius: 5px;\n}\n.dropdown-item[data-v-0ff8c2b6]:focus{\r\n    background-color: lightgray;\r\n    color: #000;\n}\n.btn-status[data-v-0ff8c2b6]{\r\n   border: none;\r\n   background-color: white !important;\n}\nbutton[data-v-0ff8c2b6]{\r\n    cursor: pointer !important;\n}\n.btnAddEmployee[data-v-0ff8c2b6]{\r\n  background-color: #ff9500;\n}\n#searchBy[data-v-0ff8c2b6]{\r\n  background-color: #ff9500;\r\n  color: #fff;\r\n  padding: 5px;\n}\nselect option[data-v-0ff8c2b6]:hover{\r\n  background-color: transparent;\r\n  color: fff;\n}\r\n/* search bar ዙሪያ */\n.search-bar[data-v-0ff8c2b6]{\r\n    border: 2px solid lightgray;\r\n    border-radius: 5px;\n}\n.search-bar input[data-v-0ff8c2b6] {\r\n    border: none;\n}\n.search-bar select[data-v-0ff8c2b6]{\r\n    border: none;\r\n    border-right:2px solid lightgray;\n}\n.search-bar select[data-v-0ff8c2b6]:focus,\r\ninput.search-input[data-v-0ff8c2b6]:focus{\r\n    outline: none;\n}\n.search-bar[data-v-0ff8c2b6]:focus-within{\r\n    border: 2px solid  #ff9500 !important;\n}\n.search-icon[data-v-0ff8c2b6]{\r\n    padding-top: 4px;\r\n    text-align: center !important;\n}\n.search-bar span[data-v-0ff8c2b6]{\r\n    font-size: 1.2em;\r\n    cursor: pointer;\r\n    padding: 0 10px 0 5px;\n}\n.deliveryboyTableHeader[data-v-0ff8c2b6]{\r\n    background-color: #ff9500;\r\n    border: 2px solid #ff9500;\r\n    border-radius: 0;\r\n    border-bottom-left-radius: 0.5em;\r\n    border-bottom-right-radius: 0.5em;\n}\r\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/status/TheStatus.vue?vue&type=style&index=0&id=10679d11&scoped=true&lang=css":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/status/TheStatus.vue?vue&type=style&index=0&id=10679d11&scoped=true&lang=css ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_TheStatus_vue_vue_type_style_index_0_id_10679d11_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./TheStatus.vue?vue&type=style&index=0&id=10679d11&scoped=true&lang=css */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/status/TheStatus.vue?vue&type=style&index=0&id=10679d11&scoped=true&lang=css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_TheStatus_vue_vue_type_style_index_0_id_10679d11_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_TheStatus_vue_vue_type_style_index_0_id_10679d11_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/admin/employee/DeliveryBoy.vue?vue&type=style&index=0&id=0ff8c2b6&scoped=true&lang=css":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/admin/employee/DeliveryBoy.vue?vue&type=style&index=0&id=0ff8c2b6&scoped=true&lang=css ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_DeliveryBoy_vue_vue_type_style_index_0_id_0ff8c2b6_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./DeliveryBoy.vue?vue&type=style&index=0&id=0ff8c2b6&scoped=true&lang=css */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/admin/employee/DeliveryBoy.vue?vue&type=style&index=0&id=0ff8c2b6&scoped=true&lang=css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_DeliveryBoy_vue_vue_type_style_index_0_id_0ff8c2b6_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_DeliveryBoy_vue_vue_type_style_index_0_id_0ff8c2b6_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "./resources/js/components/status/TheStatus.vue":
/*!******************************************************!*\
  !*** ./resources/js/components/status/TheStatus.vue ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _TheStatus_vue_vue_type_template_id_10679d11_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TheStatus.vue?vue&type=template&id=10679d11&scoped=true */ "./resources/js/components/status/TheStatus.vue?vue&type=template&id=10679d11&scoped=true");
/* harmony import */ var _TheStatus_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TheStatus.vue?vue&type=script&lang=js */ "./resources/js/components/status/TheStatus.vue?vue&type=script&lang=js");
/* harmony import */ var _TheStatus_vue_vue_type_style_index_0_id_10679d11_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./TheStatus.vue?vue&type=style&index=0&id=10679d11&scoped=true&lang=css */ "./resources/js/components/status/TheStatus.vue?vue&type=style&index=0&id=10679d11&scoped=true&lang=css");




;
_TheStatus_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default.render = _TheStatus_vue_vue_type_template_id_10679d11_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render
_TheStatus_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default.__scopeId = "data-v-10679d11"
/* hot reload */
if (false) {}

_TheStatus_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default.__file = "resources/js/components/status/TheStatus.vue"

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_TheStatus_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default);

/***/ }),

/***/ "./resources/js/views/admin/employee/DeliveryBoy.vue":
/*!***********************************************************!*\
  !*** ./resources/js/views/admin/employee/DeliveryBoy.vue ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _DeliveryBoy_vue_vue_type_template_id_0ff8c2b6_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DeliveryBoy.vue?vue&type=template&id=0ff8c2b6&scoped=true */ "./resources/js/views/admin/employee/DeliveryBoy.vue?vue&type=template&id=0ff8c2b6&scoped=true");
/* harmony import */ var _DeliveryBoy_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DeliveryBoy.vue?vue&type=script&lang=js */ "./resources/js/views/admin/employee/DeliveryBoy.vue?vue&type=script&lang=js");
/* harmony import */ var _DeliveryBoy_vue_vue_type_style_index_0_id_0ff8c2b6_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./DeliveryBoy.vue?vue&type=style&index=0&id=0ff8c2b6&scoped=true&lang=css */ "./resources/js/views/admin/employee/DeliveryBoy.vue?vue&type=style&index=0&id=0ff8c2b6&scoped=true&lang=css");




;
_DeliveryBoy_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default.render = _DeliveryBoy_vue_vue_type_template_id_0ff8c2b6_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render
_DeliveryBoy_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default.__scopeId = "data-v-0ff8c2b6"
/* hot reload */
if (false) {}

_DeliveryBoy_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default.__file = "resources/js/views/admin/employee/DeliveryBoy.vue"

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_DeliveryBoy_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default);

/***/ }),

/***/ "./resources/js/views/admin/manage-employee/ManageRole.vue":
/*!*****************************************************************!*\
  !*** ./resources/js/views/admin/manage-employee/ManageRole.vue ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ManageRole_vue_vue_type_template_id_b579161a__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ManageRole.vue?vue&type=template&id=b579161a */ "./resources/js/views/admin/manage-employee/ManageRole.vue?vue&type=template&id=b579161a");
/* harmony import */ var _ManageRole_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ManageRole.vue?vue&type=script&lang=js */ "./resources/js/views/admin/manage-employee/ManageRole.vue?vue&type=script&lang=js");



_ManageRole_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default.render = _ManageRole_vue_vue_type_template_id_b579161a__WEBPACK_IMPORTED_MODULE_0__.render
/* hot reload */
if (false) {}

_ManageRole_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default.__file = "resources/js/views/admin/manage-employee/ManageRole.vue"

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_ManageRole_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default);

/***/ }),

/***/ "./resources/js/components/status/TheStatus.vue?vue&type=script&lang=js":
/*!******************************************************************************!*\
  !*** ./resources/js/components/status/TheStatus.vue?vue&type=script&lang=js ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_TheStatus_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__.default)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_TheStatus_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./TheStatus.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/status/TheStatus.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/views/admin/employee/DeliveryBoy.vue?vue&type=script&lang=js":
/*!***********************************************************************************!*\
  !*** ./resources/js/views/admin/employee/DeliveryBoy.vue?vue&type=script&lang=js ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_DeliveryBoy_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__.default)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_DeliveryBoy_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./DeliveryBoy.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/admin/employee/DeliveryBoy.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/views/admin/manage-employee/ManageRole.vue?vue&type=script&lang=js":
/*!*****************************************************************************************!*\
  !*** ./resources/js/views/admin/manage-employee/ManageRole.vue?vue&type=script&lang=js ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ManageRole_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__.default)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ManageRole_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./ManageRole.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/admin/manage-employee/ManageRole.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/components/status/TheStatus.vue?vue&type=template&id=10679d11&scoped=true":
/*!************************************************************************************************!*\
  !*** ./resources/js/components/status/TheStatus.vue?vue&type=template&id=10679d11&scoped=true ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_TheStatus_vue_vue_type_template_id_10679d11_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_TheStatus_vue_vue_type_template_id_10679d11_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./TheStatus.vue?vue&type=template&id=10679d11&scoped=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/status/TheStatus.vue?vue&type=template&id=10679d11&scoped=true");


/***/ }),

/***/ "./resources/js/views/admin/employee/DeliveryBoy.vue?vue&type=template&id=0ff8c2b6&scoped=true":
/*!*****************************************************************************************************!*\
  !*** ./resources/js/views/admin/employee/DeliveryBoy.vue?vue&type=template&id=0ff8c2b6&scoped=true ***!
  \*****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_DeliveryBoy_vue_vue_type_template_id_0ff8c2b6_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_DeliveryBoy_vue_vue_type_template_id_0ff8c2b6_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./DeliveryBoy.vue?vue&type=template&id=0ff8c2b6&scoped=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/admin/employee/DeliveryBoy.vue?vue&type=template&id=0ff8c2b6&scoped=true");


/***/ }),

/***/ "./resources/js/views/admin/manage-employee/ManageRole.vue?vue&type=template&id=b579161a":
/*!***********************************************************************************************!*\
  !*** ./resources/js/views/admin/manage-employee/ManageRole.vue?vue&type=template&id=b579161a ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ManageRole_vue_vue_type_template_id_b579161a__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ManageRole_vue_vue_type_template_id_b579161a__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./ManageRole.vue?vue&type=template&id=b579161a */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/admin/manage-employee/ManageRole.vue?vue&type=template&id=b579161a");


/***/ }),

/***/ "./resources/js/components/status/TheStatus.vue?vue&type=style&index=0&id=10679d11&scoped=true&lang=css":
/*!**************************************************************************************************************!*\
  !*** ./resources/js/components/status/TheStatus.vue?vue&type=style&index=0&id=10679d11&scoped=true&lang=css ***!
  \**************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_TheStatus_vue_vue_type_style_index_0_id_10679d11_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader/dist/cjs.js!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./TheStatus.vue?vue&type=style&index=0&id=10679d11&scoped=true&lang=css */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/status/TheStatus.vue?vue&type=style&index=0&id=10679d11&scoped=true&lang=css");


/***/ }),

/***/ "./resources/js/views/admin/employee/DeliveryBoy.vue?vue&type=style&index=0&id=0ff8c2b6&scoped=true&lang=css":
/*!*******************************************************************************************************************!*\
  !*** ./resources/js/views/admin/employee/DeliveryBoy.vue?vue&type=style&index=0&id=0ff8c2b6&scoped=true&lang=css ***!
  \*******************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_DeliveryBoy_vue_vue_type_style_index_0_id_0ff8c2b6_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader/dist/cjs.js!../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./DeliveryBoy.vue?vue&type=style&index=0&id=0ff8c2b6&scoped=true&lang=css */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/admin/employee/DeliveryBoy.vue?vue&type=style&index=0&id=0ff8c2b6&scoped=true&lang=css");


/***/ })

}]);