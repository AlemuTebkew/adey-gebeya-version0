"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["productdetail"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/admin/catalog/ProductDetail.vue?vue&type=script&lang=js":
/*!****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/admin/catalog/ProductDetail.vue?vue&type=script&lang=js ***!
  \****************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return {
      product: {}
    };
  },
  methods: {
    backPage: function backPage() {
      this.$router.back();
    }
  },
  computed: {
    products: function products() {
      return this.$store.getters.products;
    }
  },
  created: function created() {
    var _this = this;

    console.log('products id' + this.products);
    this.products.forEach(function (product) {
      if (parseInt(product.id) === parseInt(_this.$route.params.productId)) {
        _this.product = product;
      }
    });
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/admin/catalog/ProductDetail.vue?vue&type=template&id=17d76eca&scoped=true":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/admin/catalog/ProductDetail.vue?vue&type=template&id=17d76eca&scoped=true ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");
/* harmony import */ var _assets_unsp_2_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../assets/unsp-2.jpg */ "./resources/js/assets/unsp-2.jpg");
/* harmony import */ var _assets_product_detail_jpeg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../assets/product-detail.jpeg */ "./resources/js/assets/product-detail.jpeg");
/* harmony import */ var _assets_unsp_3_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../assets/unsp-3.jpg */ "./resources/js/assets/unsp-3.jpg");





(0,vue__WEBPACK_IMPORTED_MODULE_0__.pushScopeId)("data-v-17d76eca");

var _hoisted_1 = {
  "class": "product-preview m-3"
};

var _hoisted_2 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  "class": "fas fa-arrow-left"
}, null, -1
/* HOISTED */
);

var _hoisted_3 = [_hoisted_2];
var _hoisted_4 = {
  "class": "container mt-3"
};
var _hoisted_5 = {
  "class": "row"
};
var _hoisted_6 = {
  "class": "col-lg-5"
};

var _hoisted_7 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "product-carousel shadow-sm rounded bg-light mb-3"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  id: "carouselExampleIndicators",
  "class": "carousel slide",
  "data-bs-ride": "carousel"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "carousel-indicators"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
  type: "button",
  "data-bs-target": "#carouselExampleIndicators",
  "data-bs-slide-to": "0",
  "class": "active",
  "aria-current": "true",
  "aria-label": "Slide 1"
}), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
  type: "button",
  "data-bs-target": "#carouselExampleIndicators",
  "data-bs-slide-to": "1",
  "aria-label": "Slide 2"
}), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
  type: "button",
  "data-bs-target": "#carouselExampleIndicators",
  "data-bs-slide-to": "2",
  "aria-label": "Slide 3"
})]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "carousel-inner"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "carousel-item active"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
  src: _assets_unsp_2_jpg__WEBPACK_IMPORTED_MODULE_1__.default,
  "class": "d-block w-100",
  alt: "...",
  width: "250",
  height: "400"
})]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "carousel-item"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
  src: _assets_product_detail_jpeg__WEBPACK_IMPORTED_MODULE_2__.default,
  "class": "d-block w-100",
  alt: "...",
  width: "250",
  height: "400"
})]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "carousel-item"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
  src: _assets_unsp_3_jpg__WEBPACK_IMPORTED_MODULE_3__.default,
  "class": "d-block w-100",
  alt: "...",
  width: "250",
  height: "400"
})])]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
  "class": "carousel-control-prev",
  type: "button",
  "data-bs-target": "#carouselExampleIndicators",
  "data-bs-slide": "prev"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "carousel-control-prev-icon text-dark",
  "aria-hidden": "true"
}), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "visually-hidden"
}, "Previous")]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
  "class": "carousel-control-next",
  type: "button",
  "data-bs-target": "#carouselExampleIndicators",
  "data-bs-slide": "next"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "carousel-control-next-icon",
  "aria-hidden": "true"
}), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "visually-hidden"
}, "Next")])])], -1
/* HOISTED */
);

var _hoisted_8 = {
  "class": "product-name bg-white p-3  mb-3 shadow-sm rounded"
};

var _hoisted_9 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "edit fs-4 float-end"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  "class": "far fa-edit"
})], -1
/* HOISTED */
);

var _hoisted_10 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "for": "#productName",
  "class": "pb-1"
}, "Product name", -1
/* HOISTED */
);

var _hoisted_11 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "product-description bg-white p-3  mb-3 shadow-sm rounded"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "class": "pb-1 "
}), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Product Description "), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "edit fs-4 float-end"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  "class": "far fa-edit"
})]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("textarea", {
  type: "text",
  "class": "form-control",
  rows: "5",
  value: "Bx z end t-shirt with hight quality, good..."
})], -1
/* HOISTED */
);

var _hoisted_12 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "product-description bg-white p-3  mb-3 shadow-sm rounded"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" <span class=\"edit fs-4 float-end m-0 p-0\"><i class=\"fas fa-plus\"></i></span> "), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "edit fs-4 pb-1 float-end"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  "class": "fas fa-plus-circle"
})]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "class": "pb-1"
}, "Product short Description"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("ul", {
  "class": "list-group w-100"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", {
  "class": "list-group-item shortDescriptionHeading"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "visually-hidden"
}, "Short Description")]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", {
  "class": "list-group-item d-flex p-1"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "flex-fill p-1"
}, "It's gives u comfort"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "edit fs-4 float-end px-1"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  "class": "far fa-edit"
})]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "times fs-4 pe-1"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  "class": "fas fa-times-circle"
})])]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", {
  "class": "list-group-item d-flex p-1"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "flex-fill p-1"
}, "Short Description"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "edit fs-4 float-end px-1"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  "class": "far fa-edit"
})]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "times fs-4 pe-1"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  "class": "fas fa-times-circle"
})])]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", {
  "class": "list-group-item d-flex p-1"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "flex-fill p-1"
}, "Short Description"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "edit fs-4 float-end px-1"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  "class": "far fa-edit"
})]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "times fs-4 pe-1"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  "class": "fas fa-times-circle"
})])]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", {
  "class": "list-group-item d-flex p-1"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "flex-fill p-1"
}, "Short Description"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "edit fs-4 float-end px-1"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  "class": "far fa-edit"
})]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "times fs-4 pe-1"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  "class": "fas fa-times-circle"
})])])])], -1
/* HOISTED */
);

var _hoisted_13 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "product-brand bg-white p-3  mb-3 shadow-sm rounded"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "edit fs-4 float-end"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  "class": "far fa-edit"
})]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "for": "#productBrand",
  "class": "pb-1"
}, "Product brand"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
  type: "text",
  id: "productBrand",
  "class": "form-control",
  value: "Puma"
})], -1
/* HOISTED */
);

var _hoisted_14 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "product-manufacturer bg-white p-3  mb-3 shadow-sm rounded"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "edit fs-4 float-end"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  "class": "far fa-edit"
})]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "for": "#productManufacturer",
  "class": "pb-1"
}, "Manufacturer"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
  type: "text",
  id: "productManufacturer",
  "class": "form-control",
  value: "Z end technology"
})], -1
/* HOISTED */
);

var _hoisted_15 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "product-date bg-white p-3  mb-3 shadow-sm rounded d-flex"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "me-2"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "for": "#productionDate",
  "class": "p-1"
}, "Production date"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
  type: "text",
  id: "productionDate",
  "class": "form-control",
  value: "Z end technology"
})]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "ms-2"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "for": "#expiryDate",
  "class": "p-1"
}, "Manufacturer"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
  type: "text",
  id: "expiryDate",
  "class": "form-control",
  value: "Z end technology"
})])], -1
/* HOISTED */
);

var _hoisted_16 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createStaticVNode)("<div class=\"col-lg-7\" data-v-17d76eca><div class=\"product-vender bg-white p-3  mb-3 shadow-sm rounded\" data-v-17d76eca><label for=\"#productVender\" class=\"pb-1\" data-v-17d76eca>Product Vender</label><input type=\"text\" id=\"productVender\" class=\"form-control\" value=\"Adey Basics\" data-v-17d76eca></div><div class=\"product bg-white p-3 mb-3 shadow-sm rounded\" data-v-17d76eca><table class=\"table table-borderless\" data-v-17d76eca><thead data-v-17d76eca><tr class=\"productVariantHeader text-light\" data-v-17d76eca><th scope=\"col\" data-v-17d76eca>#</th><th scope=\"col\" data-v-17d76eca>Name</th><th scope=\"col\" data-v-17d76eca>SKU</th><th scope=\"col\" data-v-17d76eca>Price</th><th scope=\"col\" data-v-17d76eca>Qty</th><th scope=\"col\" data-v-17d76eca><span class=\"visually-hidden\" data-v-17d76eca>Action</span></th></tr></thead><tbody data-v-17d76eca><tr class=\"border rounded\" data-v-17d76eca><th scope=\"row\" data-v-17d76eca>1</th><td data-v-17d76eca>white xl cotten</td><td data-v-17d76eca>100wh-xl-co</td><td data-v-17d76eca>12</td><td data-v-17d76eca>200ETB</td><td class=\"p-0 m-0 pe-2\" data-v-17d76eca><span class=\"edit fs-4 float-end\" data-v-17d76eca><i class=\"far fa-edit\" data-v-17d76eca></i></span><span class=\"times fs-4\" data-v-17d76eca><i class=\"fas fa-times-circle\" data-v-17d76eca></i></span></td></tr><tr class=\"border rounded\" data-v-17d76eca><th scope=\"row\" data-v-17d76eca>2</th><td data-v-17d76eca>white xl cotten</td><td data-v-17d76eca>100wh-xl-co</td><td data-v-17d76eca>12</td><td data-v-17d76eca>200ETB</td><td class=\"p-0 m-0 pe-2\" data-v-17d76eca><span class=\"edit fs-4 float-end\" data-v-17d76eca><i class=\"far fa-edit\" data-v-17d76eca></i></span><span class=\"times fs-4\" data-v-17d76eca><i class=\"fas fa-times-circle\" data-v-17d76eca></i></span></td></tr><tr class=\"border rounded\" data-v-17d76eca><th scope=\"row\" data-v-17d76eca>3</th><td data-v-17d76eca>white xl cotten</td><td data-v-17d76eca>100wh-xl-co</td><td data-v-17d76eca>12</td><td data-v-17d76eca>200ETB</td><td class=\"p-0 m-0 pe-2\" data-v-17d76eca><span class=\"edit fs-4 float-end\" data-v-17d76eca><i class=\"far fa-edit\" data-v-17d76eca></i></span><span class=\"times fs-4\" data-v-17d76eca><i class=\"fas fa-times-circle\" data-v-17d76eca></i></span></td></tr></tbody></table></div><!-- category/subcategory --><div class=\"bg-white p-3  mb-3 shadow-sm rounded d-flex justify-content-between\" data-v-17d76eca><div class=\"form-group me-2\" data-v-17d76eca><label for=\"#productStats\" class=\"p-1\" data-v-17d76eca>Product status</label><select id=\"productStats\" class=\"form-select\" data-v-17d76eca><option value=\"active\" selected data-v-17d76eca>Active</option><option value=\"pending\" data-v-17d76eca>Pending</option></select></div><div class=\"form-group me-2\" data-v-17d76eca><label for=\"#productVisibility\" class=\"p-1\" data-v-17d76eca>Product Visibility</label><select id=\"productVisibility\" class=\"form-select\" data-v-17d76eca><option value=\"nomral\" selected data-v-17d76eca>Normal</option><option value=\"new\" data-v-17d76eca>New</option></select></div></div><!-- product status status --><div class=\"bg-white p-3  mb-3 shadow-sm rounded d-flex justify-content-between\" data-v-17d76eca><div class=\"form-group me-2\" data-v-17d76eca><label for=\"#productStats\" class=\"p-1\" data-v-17d76eca>Product status</label><select id=\"productStats\" class=\"form-select\" data-v-17d76eca><option value=\"active\" selected data-v-17d76eca>Active</option><option value=\"pending\" data-v-17d76eca>Pending</option></select></div><div class=\"form-group me-2\" data-v-17d76eca><label for=\"#productVisibility\" class=\"p-1\" data-v-17d76eca>Product Visibility</label><select id=\"productVisibility\" class=\"form-select\" data-v-17d76eca><option value=\"nomral\" selected data-v-17d76eca>Normal</option><option value=\"new\" data-v-17d76eca>New</option></select></div></div></div>", 1);

(0,vue__WEBPACK_IMPORTED_MODULE_0__.popScopeId)();

function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
    "class": "back-page",
    onClick: _cache[0] || (_cache[0] = function () {
      return $options.backPage && $options.backPage.apply($options, arguments);
    })
  }, _hoisted_3), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_4, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_5, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_6, [_hoisted_7, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_8, [_hoisted_9, _hoisted_10, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    type: "text",
    id: "productName",
    "class": "form-control",
    "onUpdate:modelValue": _cache[1] || (_cache[1] = function ($event) {
      return $data.product.name = $event;
    })
  }, null, 512
  /* NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $data.product.name]])]), _hoisted_11, _hoisted_12, _hoisted_13, _hoisted_14, _hoisted_15]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" second column  "), _hoisted_16])])]);
}

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/admin/catalog/ProductDetail.vue?vue&type=style&index=0&id=17d76eca&scoped=true&lang=css":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/admin/catalog/ProductDetail.vue?vue&type=style&index=0&id=17d76eca&scoped=true&lang=css ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, "\n.edit[data-v-17d76eca]{\r\n    color: #ff9500;\n}\n.times[data-v-17d76eca]{\r\n     color: #ff1e00e7;\n}\r\n/* .edit .fa-plus{\r\n    border: 2px solid #ff9500;\r\n    border-radius: 50%;\r\n    font-size: 20px;\r\n    padding: 2px;\r\n    margin-bottom: 5px;\r\n} */\n.back-page .fas[data-v-17d76eca]{\r\n    color: #ff9500;\r\n    transform: scale(2,1.5);\r\n    cursor: pointer;\n}\n.carousel-control-prev-icon[data-v-17d76eca]{\r\n    color: #000;\n}\n.carousel-control-prev-icon[data-v-17d76eca],\r\n.carousel-control-next-icon[data-v-17d76eca] {\r\n  height: 100px;\r\n  width: 100px;\r\n  /* outline: black; */\r\n  background-size: 100%, 100%;\r\n  border-radius: 50%;\r\n  /* border: 1px solid black; */\r\n  background-image: none;\n}\n.carousel-control-next-icon[data-v-17d76eca]:after\r\n{\r\n  content: '>';\r\n  font-size: 40px;\r\n  color: black;\n}\n.carousel-control-prev-icon[data-v-17d76eca]:after {\r\n  content: '<';\r\n  font-size: 40px;\r\n  color:black;\n}\n.list-group[data-v-17d76eca]{\r\nborder-radius: 0;\n}\n.list-group-item[data-v-17d76eca]{\r\n    border: 1px solid lightgray;\r\n    border-radius: 0.5em;\n}\n.shortDescriptionHeading[data-v-17d76eca]{\r\n    background-color: #ff9500;\r\n    padding: 1.2em;\r\n    border: none !important;\r\n    border-radius: 0;\r\n    border-bottom-left-radius: 0.5em;\r\n    border-bottom-right-radius: 0.5em;\n}\n.productVariantHeader[data-v-17d76eca]{\r\n    background-color: #ff9500;\r\n    border: none !important;\r\n    border-radius: 0;\r\n    border-bottom-left-radius: 0.5em;\r\n    border-bottom-right-radius: 0.5em;\n}\r\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./resources/js/assets/product-detail.jpeg":
/*!*************************************************!*\
  !*** ./resources/js/assets/product-detail.jpeg ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("/images/product-detail.jpeg?f8dc97deef69c46bab80eb713ac91942");

/***/ }),

/***/ "./resources/js/assets/unsp-2.jpg":
/*!****************************************!*\
  !*** ./resources/js/assets/unsp-2.jpg ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("/images/unsp-2.jpg?6757b4e11aea646029e867aa9c71edfb");

/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/admin/catalog/ProductDetail.vue?vue&type=style&index=0&id=17d76eca&scoped=true&lang=css":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/admin/catalog/ProductDetail.vue?vue&type=style&index=0&id=17d76eca&scoped=true&lang=css ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ProductDetail_vue_vue_type_style_index_0_id_17d76eca_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./ProductDetail.vue?vue&type=style&index=0&id=17d76eca&scoped=true&lang=css */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/admin/catalog/ProductDetail.vue?vue&type=style&index=0&id=17d76eca&scoped=true&lang=css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ProductDetail_vue_vue_type_style_index_0_id_17d76eca_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ProductDetail_vue_vue_type_style_index_0_id_17d76eca_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "./resources/js/views/admin/catalog/ProductDetail.vue":
/*!************************************************************!*\
  !*** ./resources/js/views/admin/catalog/ProductDetail.vue ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ProductDetail_vue_vue_type_template_id_17d76eca_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ProductDetail.vue?vue&type=template&id=17d76eca&scoped=true */ "./resources/js/views/admin/catalog/ProductDetail.vue?vue&type=template&id=17d76eca&scoped=true");
/* harmony import */ var _ProductDetail_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ProductDetail.vue?vue&type=script&lang=js */ "./resources/js/views/admin/catalog/ProductDetail.vue?vue&type=script&lang=js");
/* harmony import */ var _ProductDetail_vue_vue_type_style_index_0_id_17d76eca_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ProductDetail.vue?vue&type=style&index=0&id=17d76eca&scoped=true&lang=css */ "./resources/js/views/admin/catalog/ProductDetail.vue?vue&type=style&index=0&id=17d76eca&scoped=true&lang=css");




;
_ProductDetail_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default.render = _ProductDetail_vue_vue_type_template_id_17d76eca_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render
_ProductDetail_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default.__scopeId = "data-v-17d76eca"
/* hot reload */
if (false) {}

_ProductDetail_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default.__file = "resources/js/views/admin/catalog/ProductDetail.vue"

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_ProductDetail_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default);

/***/ }),

/***/ "./resources/js/views/admin/catalog/ProductDetail.vue?vue&type=script&lang=js":
/*!************************************************************************************!*\
  !*** ./resources/js/views/admin/catalog/ProductDetail.vue?vue&type=script&lang=js ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ProductDetail_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__.default)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ProductDetail_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./ProductDetail.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/admin/catalog/ProductDetail.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/views/admin/catalog/ProductDetail.vue?vue&type=template&id=17d76eca&scoped=true":
/*!******************************************************************************************************!*\
  !*** ./resources/js/views/admin/catalog/ProductDetail.vue?vue&type=template&id=17d76eca&scoped=true ***!
  \******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ProductDetail_vue_vue_type_template_id_17d76eca_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ProductDetail_vue_vue_type_template_id_17d76eca_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./ProductDetail.vue?vue&type=template&id=17d76eca&scoped=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/admin/catalog/ProductDetail.vue?vue&type=template&id=17d76eca&scoped=true");


/***/ }),

/***/ "./resources/js/views/admin/catalog/ProductDetail.vue?vue&type=style&index=0&id=17d76eca&scoped=true&lang=css":
/*!********************************************************************************************************************!*\
  !*** ./resources/js/views/admin/catalog/ProductDetail.vue?vue&type=style&index=0&id=17d76eca&scoped=true&lang=css ***!
  \********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ProductDetail_vue_vue_type_style_index_0_id_17d76eca_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader/dist/cjs.js!../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./ProductDetail.vue?vue&type=style&index=0&id=17d76eca&scoped=true&lang=css */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/admin/catalog/ProductDetail.vue?vue&type=style&index=0&id=17d76eca&scoped=true&lang=css");


/***/ })

}]);