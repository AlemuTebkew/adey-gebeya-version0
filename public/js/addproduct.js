"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["addproduct"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/admin/catalog/AddProduct.vue?vue&type=script&lang=js":
/*!*************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/admin/catalog/AddProduct.vue?vue&type=script&lang=js ***!
  \*************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return {
      showProductVariant: false,
      productOptions: [{
        name: '',
        value: ''
      }],
      // productVariant: [
      // ],
      finalProductOption: [],
      variationListArray: [],
      categoryId: null,
      // for drag and drop
      isDraging: false
    };
  },
  computed: {
    categories: function categories() {
      return this.$store.getters.categories;
    },
    subcategories: function subcategories() {
      return this.$store.getters.subcategories;
    },
    units: function units() {
      return this.$store.getters.getUnits;
    },
    visibilityStatuses: function visibilityStatuses() {
      return this.$store.getters.productVisibilityStatus;
    },
    productStatuses: function productStatuses() {
      return this.$store.getters.productStatus;
    },
    vendors: function vendors() {
      return this.$store.getters.vendors;
    },
    isLoading: function isLoading() {
      return this.$store.getters.isLoading;
    }
  },
  methods: {
    addProductOption: function addProductOption(index) {
      if (index === this.productOptions.length - 1) {
        this.productOptions.push({
          name: '',
          value: ''
        });
      }
    },
    getCategoryBasedSubcategories: function getCategoryBasedSubcategories(categoryId) {
      var subcategories = this.subcategories.filter(function (subcategory) {
        return parseInt(subcategory.category_id) === parseInt(categoryId);
      });
      return subcategories;
    },
    addFinalProductOption: function addFinalProductOption(productOptions) {
      var _this = this;

      this.finalProductOption = [];
      productOptions.forEach(function (option) {
        if (option !== null && option.name.trim().length !== 0 && option.value.trim().length !== 0) {
          _this.finalProductOption.push({
            name: option.name,
            value: option.value.split(',').filter(function (val) {
              if (val.trim().length !== 0) {
                return val;
              }
            })
          });
        }
      });
      this.createVariation();
    },
    createVariation: function createVariation() {
      //   this.finalProductOption[0].value
      var cartesianProduct = function cartesianProduct() {
        for (var _len = arguments.length, arr = new Array(_len), _key = 0; _key < _len; _key++) {
          arr[_key] = arguments[_key];
        }

        return arr.reduce(function (acc, val) {
          return acc.map(function (el) {
            return val.map(function (element) {
              return el.concat([element]);
            });
          }).reduce(function (acc, val) {
            return acc.concat(val);
          }, []);
        }, [[]]);
      };

      var variationList = [];
      var variationValues = [];

      for (var i = 0; i < this.finalProductOption.length; i++) {
        variationValues[i] = this.finalProductOption[i].value;
      }

      variationList = cartesianProduct.apply(void 0, variationValues);
      this.makeVariationTable(variationList);
    },
    makeVariationTable: function makeVariationTable(variationList) {
      this.variationListArray = [];

      for (var i = 0; i < variationList.length; i++) {
        this.variationListArray.push({
          id: i,
          variant: variationList[i],
          price: '',
          sku: this.optionName(variationList[i]),
          qty: 0,
          images: []
        });
      }
    },
    optionName: function optionName(variantNames) {
      var variantSubNames = '';
      variantNames.forEach(function (item, index) {
        if (index === 0) {
          variantSubNames += item.trim().substr(0, 2);
        } else {
          variantSubNames += '-' + item.trim().substr(0, 2);
        }
      });
      return variantSubNames;
    },
    // handle drag and drop
    onDragEnter: function onDragEnter(e) {
      e.preventDefault();
      this.isDraging = true;
    },
    onDragLeave: function onDragLeave(e) {
      e.preventDefault();
      this.isDraging = false;
    },
    //   handle product images
    handleFiles: function handleFiles(e, variationId) {
      var inputImages = e.target.files || e.dataTransfer.files || this.$refs.dropedImages.files;
      console.log(inputImages);
      var uploadedImages = [];
      inputImages.forEach(function (item) {
        uploadedImages.push(item);
        console.log('from item');
        console.log(item);
      }); //   find index

      var variationIndex = this.variationListArray.findIndex(function (item) {
        return item.id === variationId;
      });
      this.variationListArray[variationIndex].images = uploadedImages; //   console.log(this.variationListArray[variationId].images);

      this.isDraging = false;
    },
    // delete variation id
    deleteVariant: function deleteVariant(variationId) {
      this.variationListArray = this.variationListArray.filter(function (item) {
        return item.id !== variationId;
      });
    },
    getNumberOfImages: function getNumberOfImages(variationId) {
      //  console.log(variationId);
      var imagesLength = this.variationListArray.find(function (item) {
        return item.id === variationId;
      }).images.length;
      return imagesLength === 0 ? 'Add images' : imagesLength + 'images added'; // return 'Add image';
    },
    addProduct: function addProduct() {
      var _this2 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {
        var shortDescription, formData, i, j;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                shortDescription = ''; //    for (let i = 0; i < 5; i++) {

                shortDescription = _this2.$refs.shortDescription1.value + '`' + _this2.$refs.shortDescription2.value + '`' + _this2.$refs.shortDescription3.value + '`' + _this2.$refs.shortDescription4.value + _this2.$refs.shortDescription5.value; //    }

                formData = new FormData();
                formData.append('has_variant', _this2.showProductVariant);
                formData.append('name', _this2.$refs.name.value);
                formData.append('description', _this2.$refs.description.value);
                formData.append('short_description', shortDescription);
                formData.append('price', _this2.$refs.price.value);
                formData.append('sku', _this2.$refs.sku.value);
                formData.append('production_date', _this2.$refs.productionDate.value);
                formData.append('expired_date', _this2.$refs.expireDate.value);
                formData.append('qty', _this2.$refs.qty.value);

                for (i = 0; i < _this2.finalProductOption.length; i++) {
                  formData.append("options[".concat(i, "][name]"), _this2.finalProductOption[i].name);

                  for (j = 0; j < _this2.finalProductOption[i].value.length; j++) {
                    formData.append("options[".concat(i, "][values][").concat(j, "]"), _this2.finalProductOption[i].value[j]);
                  }
                } // forEach loop for variationListArray


                _this2.variationListArray.forEach(function (variationItem, index) {
                  formData.append("variations[".concat(index, "][id]"), variationItem.id);
                  formData.append("variations[".concat(index, "][price]"), variationItem.price);
                  formData.append("variations[".concat(index, "][sku]"), variationItem.sku);
                  formData.append("variations[".concat(index, "][qty]"), variationItem.qty); //   forEach loop for variationItem.variant

                  variationItem.variant.forEach(function (variantValue, i) {
                    formData.append("variations[".concat(index, "][variant][").concat(i, "]"), variantValue);
                  });
                  variationItem.images.forEach(function (image, i) {
                    formData.append("variations[".concat(index, "][images][").concat(i, "]"), image);
                  });
                });

                formData.append('product_status_id', _this2.$refs.status.value);
                formData.append('product_visiblity_status_id', _this2.$refs.visibilityStatus.value);
                formData.append('category_id', _this2.$refs.category.value);
                formData.append('sub_category_id', _this2.$refs.subcategory.value);
                formData.append('vendor_id', _this2.$refs.vendor.value);
                formData.append('brand', _this2.$refs.brand.value);
                formData.append('manufacturer', _this2.$refs.manufacturer.value);
                formData.append('unit_id', _this2.$refs.unit.value); //   var tags=this.$refs.tags;
                //   tags=tags.split(",")
                //   tags=tags.filter(val=>{
                //       if(val.length !==0)
                //          return val
                //   });

                formData.append('tags', _this2.$refs.tags.value);

                _this2.$store.dispatch('addProduct', formData);

              case 24:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    }
  } //  watch:{
  //      productOptions(newValue, oldValue){
  //         console.log(newValue);
  //         console.log(oldValue);
  //      }
  //  }

});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/admin/catalog/AddProduct.vue?vue&type=template&id=2f285fa3&scoped=true":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/admin/catalog/AddProduct.vue?vue&type=template&id=2f285fa3&scoped=true ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");


(0,vue__WEBPACK_IMPORTED_MODULE_0__.pushScopeId)("data-v-2f285fa3");

var _hoisted_1 = {
  "class": "mx-3"
};

var _hoisted_2 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("nav", {
  "class": ""
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "fw-bold fs-5"
}, " Add Product")], -1
/* HOISTED */
);

var _hoisted_3 = {
  "class": " mt-4 position-relative  pb-lg-5"
};
var _hoisted_4 = {
  "class": "row"
};
var _hoisted_5 = {
  "class": "col-lg-8"
};
var _hoisted_6 = {
  "class": "shadow-sm rounded mb-3 bg-white p-4 "
};
var _hoisted_7 = {
  "class": "form-group"
};

var _hoisted_8 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "for": "#productName"
}, "Product Name", -1
/* HOISTED */
);

var _hoisted_9 = {
  type: "text",
  "class": "form-control",
  ref: "name",
  id: "productName"
};
var _hoisted_10 = {
  "class": "form-group"
};

var _hoisted_11 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "for": "#productDescription"
}, "Description", -1
/* HOISTED */
);

var _hoisted_12 = {
  "class": "form-control",
  rows: "5",
  ref: "description",
  id: "productDescription",
  placeholder: "Describe the product"
};
var _hoisted_13 = {
  "class": "form-group"
};

var _hoisted_14 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "for": "#shortDescription1"
}, "Short Descriptin", -1
/* HOISTED */
);

var _hoisted_15 = {
  type: "text",
  "class": "form-control mb-2",
  ref: "shortDescription1",
  id: "shortDescription1",
  placeholder: "description one"
};
var _hoisted_16 = {
  type: "text",
  "class": "form-control mb-2",
  ref: "shortDescription2",
  id: "shortDescription2",
  placeholder: "description two"
};
var _hoisted_17 = {
  type: "text",
  "class": "form-control mb-2",
  ref: "shortDescription3",
  id: "shortDescription3",
  placeholder: "description three"
};
var _hoisted_18 = {
  type: "text",
  "class": "form-control mb-2",
  ref: "shortDescription4",
  id: "shortDescription4",
  placeholder: "description four"
};
var _hoisted_19 = {
  type: "text",
  "class": "form-control mb-2",
  ref: "shortDescription5",
  id: "shortDescription5",
  placeholder: "description five"
};
var _hoisted_20 = {
  "class": "shadow-sm rounded bg-white mb-3 p-4"
};
var _hoisted_21 = {
  "class": "form-group"
};

var _hoisted_22 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "for": "#price"
}, "Price", -1
/* HOISTED */
);

var _hoisted_23 = {
  type: "number",
  "class": "form-control",
  rows: "5",
  ref: "price",
  id: "price",
  placeholder: "price"
};
var _hoisted_24 = {
  "class": "form-group"
};

var _hoisted_25 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "for": "#skuId"
}, "SKU(stock keeping unit)", -1
/* HOISTED */
);

var _hoisted_26 = {
  type: "text",
  "class": "form-control",
  ref: "sku",
  id: "skuId"
};
var _hoisted_27 = {
  "class": "date d-flex border"
};
var _hoisted_28 = {
  "class": "form-group col-5 mx-3 py-2"
};

var _hoisted_29 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "for": "#productiondate"
}, "Production date", -1
/* HOISTED */
);

var _hoisted_30 = {
  type: "date",
  "class": "form-control",
  ref: "productionDate",
  id: "productiondate"
};
var _hoisted_31 = {
  "class": "form-group col-5 mx-3 py-2"
};

var _hoisted_32 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "for": "#expireDate"
}, "Expire date", -1
/* HOISTED */
);

var _hoisted_33 = {
  type: "date",
  "class": "form-control",
  ref: "expireDate",
  id: "expireDate"
};
var _hoisted_34 = {
  "class": "form-group mt-2"
};

var _hoisted_35 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "for": "#quantity"
}, "Quantity", -1
/* HOISTED */
);

var _hoisted_36 = {
  type: "number",
  "class": "form-control",
  rows: "5",
  ref: "qty",
  id: "quantity",
  placeholder: "0"
};
var _hoisted_37 = {
  "class": "shadow-sm rounded bg-white mb-3 p-4"
};
var _hoisted_38 = {
  "class": "form-check border"
};

var _hoisted_39 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "my-2"
}, "variants", -1
/* HOISTED */
);

var _hoisted_40 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "class": "form-check-label ms-2 my-2 mb-1",
  "for": "#productVariants"
}, " is the product have varianties", -1
/* HOISTED */
);

var _hoisted_41 = {
  "class": "productOption border p-2"
};

var _hoisted_42 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "fw-bold"
}, "Options", -1
/* HOISTED */
);

var _hoisted_43 = {
  "class": "form-group col-md-3 mx-3 py-2"
};
var _hoisted_44 = {
  "for": "#option"
};
var _hoisted_45 = ["onUpdate:modelValue"];
var _hoisted_46 = {
  "class": "form-group col-md-7 mx-3 py-2"
};

var _hoisted_47 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", null, null, -1
/* HOISTED */
);

var _hoisted_48 = ["onUpdate:modelValue", "onClick"];
var _hoisted_49 = {
  "class": "table-responsive"
};
var _hoisted_50 = {
  "class": "table table-striped mt-2 "
};

var _hoisted_51 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("thead", null, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tr", null, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
  scope: "col",
  style: {
    "width": "5%"
  }
}, "No"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
  scope: "col",
  style: {
    "width": "15%"
  }
}, "Price"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
  scope: "col",
  style: {
    "width": "15%"
  }
}, "Qty"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
  scope: "col",
  style: {
    "width": "20%"
  }
}, "SKU"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
  scope: "col",
  style: {
    "width": "30%"
  }
}, "Images"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
  scope: "col",
  style: {
    "width": "5%"
  }
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": ""
}, "Action")])])], -1
/* HOISTED */
);

var _hoisted_52 = {
  scope: "row"
};
var _hoisted_53 = ["onUpdate:modelValue"];
var _hoisted_54 = ["onUpdate:modelValue"];
var _hoisted_55 = ["value"];
var _hoisted_56 = ["onDrop", "onChange"];
var _hoisted_57 = ["for"];
var _hoisted_58 = ["id"];

var _hoisted_59 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "small"
}, "Drag and drop here", -1
/* HOISTED */
);

var _hoisted_60 = {
  "class": "actions"
};
var _hoisted_61 = ["onClick"];

var _hoisted_62 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  "class": "fas fa-trash px-2 text-dark"
}, null, -1
/* HOISTED */
);

var _hoisted_63 = [_hoisted_62];
var _hoisted_64 = {
  "class": "col-lg-4 ml-lg-4"
};
var _hoisted_65 = {
  "class": "shadow-sm rounded bg-white mb-3 p-4"
};
var _hoisted_66 = {
  "class": "form-group"
};

var _hoisted_67 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "for": "#productStatus"
}, "Product Status", -1
/* HOISTED */
);

var _hoisted_68 = {
  "class": "form-select",
  ref: "status",
  id: "productStatus",
  "aria-label": "product status"
};
var _hoisted_69 = ["value"];

var _hoisted_70 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("small", null, "This product is visible to the customer.", -1
/* HOISTED */
);

var _hoisted_71 = {
  "class": "form-group"
};

var _hoisted_72 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "for": "#productVisibilityStatus"
}, "Product Visibility Status", -1
/* HOISTED */
);

var _hoisted_73 = {
  "class": "form-select",
  ref: "visibilityStatus",
  id: "productVisibilityStatus",
  "aria-label": "product visibility status"
};
var _hoisted_74 = ["value"];

var _hoisted_75 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("small", null, "It can't be shown as a featured", -1
/* HOISTED */
);

var _hoisted_76 = {
  "class": "form-group"
};

var _hoisted_77 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "for": "#productCollection"
}, "Category", -1
/* HOISTED */
);

var _hoisted_78 = ["value"];

var _hoisted_79 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("small", null, "products category", -1
/* HOISTED */
);

var _hoisted_80 = {
  key: 0,
  "class": "form-group"
};

var _hoisted_81 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "for": "#productsubCategory"
}, "Sub Category", -1
/* HOISTED */
);

var _hoisted_82 = {
  "class": "form-select",
  ref: "subcategory",
  id: "productsubCategory",
  "aria-label": "product sub collections"
};
var _hoisted_83 = ["value"];

var _hoisted_84 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("small", null, "products sub category", -1
/* HOISTED */
);

var _hoisted_85 = {
  "class": "shadow-sm rounded bg-white mb-3 p-4"
};
var _hoisted_86 = {
  "class": "form-group"
};

var _hoisted_87 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "for": "#productTags"
}, "Product Tags", -1
/* HOISTED */
);

var _hoisted_88 = {
  type: "text",
  "class": "form-control",
  ref: "tags",
  id: "productTags"
};

var _hoisted_89 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("small", null, "use comma(,) to separate. /#tag1,#tag2/", -1
/* HOISTED */
);

var _hoisted_90 = {
  "class": "form-group"
};

var _hoisted_91 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "for": "#vender"
}, "Vendor", -1
/* HOISTED */
);

var _hoisted_92 = {
  "class": "form-select",
  ref: "vendor",
  id: "vender",
  "aria-label": "product vender"
};
var _hoisted_93 = ["textContent", "value"];
var _hoisted_94 = {
  "class": "form-group"
};

var _hoisted_95 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "for": "#productBrand"
}, "Product Brand", -1
/* HOISTED */
);

var _hoisted_96 = {
  type: "text",
  "class": "form-control",
  ref: "brand",
  id: "productBrand"
};
var _hoisted_97 = {
  "class": "form-group"
};

var _hoisted_98 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "for": "#productBrand"
}, "Manufacturer", -1
/* HOISTED */
);

var _hoisted_99 = {
  type: "text",
  "class": "form-control",
  ref: "manufacturer",
  id: "productManufacturer"
};
var _hoisted_100 = {
  "class": "form-group"
};

var _hoisted_101 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "for": "#productUnit"
}, "Prodcut Unit", -1
/* HOISTED */
);

var _hoisted_102 = {
  "class": "form-select",
  ref: "unit",
  id: "productUnit",
  "aria-label": "product unit"
};
var _hoisted_103 = ["value"];
var _hoisted_104 = {
  "class": "d-flex justify-content-between mt-5"
};
var _hoisted_105 = ["disabled"];

(0,vue__WEBPACK_IMPORTED_MODULE_0__.popScopeId)();

function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_1, [_hoisted_2, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" navbar end  "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" form begin "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("form", {
    onSubmit: _cache[7] || (_cache[7] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)(function () {
      return $options.addProduct && $options.addProduct.apply($options, arguments);
    }, ["prevent"])),
    "class": "position-relative"
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_3, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_4, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_5, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_6, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_7, [_hoisted_8, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", _hoisted_9, null, 512
  /* NEED_PATCH */
  )]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_10, [_hoisted_11, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("textarea", _hoisted_12, null, 512
  /* NEED_PATCH */
  )]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_13, [_hoisted_14, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", _hoisted_15, null, 512
  /* NEED_PATCH */
  ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", _hoisted_16, null, 512
  /* NEED_PATCH */
  ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", _hoisted_17, null, 512
  /* NEED_PATCH */
  ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", _hoisted_18, null, 512
  /* NEED_PATCH */
  ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", _hoisted_19, null, 512
  /* NEED_PATCH */
  )])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_20, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" price "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_21, [_hoisted_22, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", _hoisted_23, null, 512
  /* NEED_PATCH */
  )]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" sku "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_24, [_hoisted_25, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", _hoisted_26, null, 512
  /* NEED_PATCH */
  )]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" production and expire date "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_27, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_28, [_hoisted_29, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", _hoisted_30, null, 512
  /* NEED_PATCH */
  )]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_31, [_hoisted_32, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", _hoisted_33, null, 512
  /* NEED_PATCH */
  )])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" quantity "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_34, [_hoisted_35, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", _hoisted_36, null, 512
  /* NEED_PATCH */
  )])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_37, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" checkbox product variant"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_38, [_hoisted_39, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    "class": "form-check-input ms-2 mt-2",
    type: "checkbox",
    value: "",
    "onUpdate:modelValue": _cache[0] || (_cache[0] = function ($event) {
      return $data.showProductVariant = $event;
    }),
    id: "productVariants"
  }, null, 512
  /* NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelCheckbox, $data.showProductVariant]]), _hoisted_40]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" product options  "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_41, [_hoisted_42, ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($data.productOptions, function (productOption, index) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", {
      "class": "option d-flex",
      key: index
    }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_43, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", _hoisted_44, "Option " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(index + 1), 1
    /* TEXT */
    ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
      type: "text",
      "class": "form-control",
      "onUpdate:modelValue": function onUpdateModelValue($event) {
        return productOption.name = $event;
      },
      id: "option"
    }, null, 8
    /* PROPS */
    , _hoisted_45), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, productOption.name]])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_46, [_hoisted_47, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
      type: "text",
      "class": "form-control",
      multiple: "",
      "onUpdate:modelValue": function onUpdateModelValue($event) {
        return productOption.value = $event;
      },
      onClick: function onClick($event) {
        return $options.addProductOption(index);
      },
      onBlur: _cache[1] || (_cache[1] = function ($event) {
        return $options.addFinalProductOption($data.productOptions);
      }),
      id: "optionValue"
    }, null, 40
    /* PROPS, HYDRATE_EVENTS */
    , _hoisted_48), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, productOption.value]])])]);
  }), 128
  /* KEYED_FRAGMENT */
  )), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" product options end  "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" table "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_49, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("table", _hoisted_50, [_hoisted_51, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tbody", null, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($data.variationListArray, function (variation, index) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("tr", {
      key: variation.id
    }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" <th scope=\"row\">{{optionName(variation.variant)}}</th> "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", _hoisted_52, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(index + 1), 1
    /* TEXT */
    ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
      type: "number",
      "onUpdate:modelValue": function onUpdateModelValue($event) {
        return $data.variationListArray[index].price = $event;
      },
      "class": "input-group"
    }, null, 8
    /* PROPS */
    , _hoisted_53), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $data.variationListArray[index].price]])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
      type: "number",
      "onUpdate:modelValue": function onUpdateModelValue($event) {
        return $data.variationListArray[index].qty = $event;
      },
      "class": "input-group"
    }, null, 8
    /* PROPS */
    , _hoisted_54), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $data.variationListArray[index].qty]])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
      type: "text",
      "class": "input-group",
      value: $options.optionName(variation.variant),
      readonly: ""
    }, null, 8
    /* PROPS */
    , _hoisted_55)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
      "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["upload-image text-center p-2", {
        draging: $data.isDraging
      }]),
      onDragenter: _cache[2] || (_cache[2] = function () {
        return $options.onDragEnter && $options.onDragEnter.apply($options, arguments);
      }),
      onDragleave: _cache[3] || (_cache[3] = function () {
        return $options.onDragLeave && $options.onDragLeave.apply($options, arguments);
      }),
      onDragover: _cache[4] || (_cache[4] = function () {
        return $options.onDragEnter && $options.onDragEnter.apply($options, arguments);
      }),
      onDrop: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)(function ($event) {
        return $options.handleFiles($event, variation.id);
      }, ["prevent"]),
      onChange: function onChange($event) {
        return $options.handleFiles($event, variation.id);
      }
    }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
      "for": variation.id
    }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($options.getNumberOfImages(variation.id)), 9
    /* TEXT, PROPS */
    , _hoisted_57), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
      type: "file",
      name: "",
      accept: "image/png, image/gif, image/jpeg, image/jpg",
      id: variation.id,
      multiple: "",
      ref: "dropedImages"
    }, null, 8
    /* PROPS */
    , _hoisted_58), _hoisted_59], 42
    /* CLASS, PROPS, HYDRATE_EVENTS */
    , _hoisted_56)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_60, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
      type: "button",
      onClick: function onClick($event) {
        return $options.deleteVariant(variation.id);
      },
      "class": "btn"
    }, _hoisted_63, 8
    /* PROPS */
    , _hoisted_61)])])]);
  }), 128
  /* KEYED_FRAGMENT */
  ))])])])], 512
  /* NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vShow, $data.showProductVariant]]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" product option end  ")])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_64, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_65, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_66, [_hoisted_67, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("select", _hoisted_68, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($options.productStatuses, function (productStatus) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("option", {
      value: productStatus.id,
      key: productStatus.id
    }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(productStatus.name), 9
    /* TEXT, PROPS */
    , _hoisted_69);
  }), 128
  /* KEYED_FRAGMENT */
  ))], 512
  /* NEED_PATCH */
  ), _hoisted_70]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_71, [_hoisted_72, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("select", _hoisted_73, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($options.visibilityStatuses, function (visibilityStatus) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("option", {
      value: visibilityStatus.id,
      key: visibilityStatus.id
    }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(visibilityStatus.name), 9
    /* TEXT, PROPS */
    , _hoisted_74);
  }), 128
  /* KEYED_FRAGMENT */
  ))], 512
  /* NEED_PATCH */
  ), _hoisted_75]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_76, [_hoisted_77, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("select", {
    "class": "form-select",
    ref: "category",
    "onUpdate:modelValue": _cache[5] || (_cache[5] = function ($event) {
      return $data.categoryId = $event;
    }),
    id: "productCollection",
    "aria-label": "product collections"
  }, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($options.categories, function (category) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("option", {
      key: category.id,
      value: category.id
    }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(category.name), 9
    /* TEXT, PROPS */
    , _hoisted_78);
  }), 128
  /* KEYED_FRAGMENT */
  ))], 512
  /* NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelSelect, $data.categoryId]]), _hoisted_79]), $data.categoryId ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_80, [_hoisted_81, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("select", _hoisted_82, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($options.getCategoryBasedSubcategories($data.categoryId), function (subcategory) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("option", {
      key: subcategory.id,
      value: subcategory.id
    }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(subcategory.name), 9
    /* TEXT, PROPS */
    , _hoisted_83);
  }), 128
  /* KEYED_FRAGMENT */
  ))], 512
  /* NEED_PATCH */
  ), _hoisted_84])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_85, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_86, [_hoisted_87, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", _hoisted_88, null, 512
  /* NEED_PATCH */
  ), _hoisted_89]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_90, [_hoisted_91, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("select", _hoisted_92, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($options.vendors, function (vendor) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("option", {
      textContent: (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(vendor.campany_name),
      value: vendor.id,
      key: vendor.id
    }, null, 8
    /* PROPS */
    , _hoisted_93);
  }), 128
  /* KEYED_FRAGMENT */
  ))], 512
  /* NEED_PATCH */
  )]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_94, [_hoisted_95, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", _hoisted_96, null, 512
  /* NEED_PATCH */
  )]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_97, [_hoisted_98, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", _hoisted_99, null, 512
  /* NEED_PATCH */
  )]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_100, [_hoisted_101, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("select", _hoisted_102, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($options.units, function (unit) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("option", {
      key: unit.id,
      value: unit.id
    }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(unit.name), 9
    /* TEXT, PROPS */
    , _hoisted_103);
  }), 128
  /* KEYED_FRAGMENT */
  ))], 512
  /* NEED_PATCH */
  )])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" submit button begin"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_104, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    "class": "btn btn-light btnCancel  mt-5",
    onClick: _cache[6] || (_cache[6] = function () {
      return _ctx.cancel && _ctx.cancel.apply(_ctx, arguments);
    }),
    type: "cancel"
  }, "Cancel"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    disabled: $options.isLoading,
    "class": "btn btnSave  text-light  mt-5",
    type: "submit"
  }, "Save ", 8
  /* PROPS */
  , _hoisted_105)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" submit button end  ")])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" <span>\r\n      <i class=\"fas fa-minus-circle\" @click=\"remove(k)\" v-show=\"k || ( !k && inputs.length > 1)\">Remove</i>\r\n      <i class=\"fas fa-plus-circle\" @click=\"add(k)\" v-show=\"k == inputs.length-1\">Add fields</i>\r\n    </span> ")])], 32
  /* HYDRATE_EVENTS */
  )]);
}

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/admin/catalog/AddProduct.vue?vue&type=style&index=0&id=2f285fa3&scoped=true&lang=css":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/admin/catalog/AddProduct.vue?vue&type=style&index=0&id=2f285fa3&scoped=true&lang=css ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, "\n.form-group[data-v-2f285fa3]{\r\n    margin-bottom: 20px;\r\n    cursor: pointer !important;\n}\n.draging[data-v-2f285fa3]{\r\n    background-color: darkgray;\n}\r\n\r\n/* input.form-control:focus */\r\n/* ,input[type=text]:focus */\r\n /* {\r\n  border:  3px solid lightgray !important;\r\n  border-radius: 5px;\r\n  outline: none !important;\r\n\r\n}  */\n.btnSave[data-v-2f285fa3]{\r\n  background-color: #ff9500;\r\n  width:7em;\n}\n.btnCancel[data-v-2f285fa3]{\r\n  width: 7em;\n}\n.upload-image[data-v-2f285fa3]{\r\n    border:2px dashed darkgray;\r\n    padding: 2px, 5px;\n}\n.upload-image input[data-v-2f285fa3]{\r\n    width: 0;\n}\n.upload-image label[data-v-2f285fa3]{\r\n    border: 2px solid darkgray;\r\n    border-radius: 5px;\r\n    padding: 2px 5px;\r\n    cursor: pointer;\n}\n.cancel[data-v-2f285fa3]{\r\n  width: 7em;\n}\n.save[data-v-2f285fa3]{\r\n  width: 7em;\n}\n.loading[data-v-2f285fa3]{\r\n    /* position: absolute !important;\r\n    z-index: 1000000 !important;\r\n    width: 100% !important;\r\n    text-align: center;\r\n    height: 100% !important;\r\n    top: 0;\r\n    bottom: 0;  */\n}\n.form-group label[data-v-2f285fa3]{\r\n  margin-bottom: 5px;\n}\r\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/admin/catalog/AddProduct.vue?vue&type=style&index=0&id=2f285fa3&scoped=true&lang=css":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/admin/catalog/AddProduct.vue?vue&type=style&index=0&id=2f285fa3&scoped=true&lang=css ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_AddProduct_vue_vue_type_style_index_0_id_2f285fa3_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./AddProduct.vue?vue&type=style&index=0&id=2f285fa3&scoped=true&lang=css */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/admin/catalog/AddProduct.vue?vue&type=style&index=0&id=2f285fa3&scoped=true&lang=css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_AddProduct_vue_vue_type_style_index_0_id_2f285fa3_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_AddProduct_vue_vue_type_style_index_0_id_2f285fa3_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "./resources/js/views/admin/catalog/AddProduct.vue":
/*!*********************************************************!*\
  !*** ./resources/js/views/admin/catalog/AddProduct.vue ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _AddProduct_vue_vue_type_template_id_2f285fa3_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AddProduct.vue?vue&type=template&id=2f285fa3&scoped=true */ "./resources/js/views/admin/catalog/AddProduct.vue?vue&type=template&id=2f285fa3&scoped=true");
/* harmony import */ var _AddProduct_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AddProduct.vue?vue&type=script&lang=js */ "./resources/js/views/admin/catalog/AddProduct.vue?vue&type=script&lang=js");
/* harmony import */ var _AddProduct_vue_vue_type_style_index_0_id_2f285fa3_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./AddProduct.vue?vue&type=style&index=0&id=2f285fa3&scoped=true&lang=css */ "./resources/js/views/admin/catalog/AddProduct.vue?vue&type=style&index=0&id=2f285fa3&scoped=true&lang=css");




;
_AddProduct_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default.render = _AddProduct_vue_vue_type_template_id_2f285fa3_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render
_AddProduct_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default.__scopeId = "data-v-2f285fa3"
/* hot reload */
if (false) {}

_AddProduct_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default.__file = "resources/js/views/admin/catalog/AddProduct.vue"

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_AddProduct_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default);

/***/ }),

/***/ "./resources/js/views/admin/catalog/AddProduct.vue?vue&type=script&lang=js":
/*!*********************************************************************************!*\
  !*** ./resources/js/views/admin/catalog/AddProduct.vue?vue&type=script&lang=js ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_AddProduct_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__.default)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_AddProduct_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./AddProduct.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/admin/catalog/AddProduct.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/views/admin/catalog/AddProduct.vue?vue&type=template&id=2f285fa3&scoped=true":
/*!***************************************************************************************************!*\
  !*** ./resources/js/views/admin/catalog/AddProduct.vue?vue&type=template&id=2f285fa3&scoped=true ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_AddProduct_vue_vue_type_template_id_2f285fa3_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_AddProduct_vue_vue_type_template_id_2f285fa3_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./AddProduct.vue?vue&type=template&id=2f285fa3&scoped=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/admin/catalog/AddProduct.vue?vue&type=template&id=2f285fa3&scoped=true");


/***/ }),

/***/ "./resources/js/views/admin/catalog/AddProduct.vue?vue&type=style&index=0&id=2f285fa3&scoped=true&lang=css":
/*!*****************************************************************************************************************!*\
  !*** ./resources/js/views/admin/catalog/AddProduct.vue?vue&type=style&index=0&id=2f285fa3&scoped=true&lang=css ***!
  \*****************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_AddProduct_vue_vue_type_style_index_0_id_2f285fa3_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader/dist/cjs.js!../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./AddProduct.vue?vue&type=style&index=0&id=2f285fa3&scoped=true&lang=css */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/admin/catalog/AddProduct.vue?vue&type=style&index=0&id=2f285fa3&scoped=true&lang=css");


/***/ })

}]);