import { createStore } from 'vuex'
import axios from 'axios'
import employees from './employee/index'
import units from './unit/index'
import categorys from './category/index'
import products from './product/index'
import productStatus from './product_status/index'
import productVisiblityStatus from './product_visibility_status/index'
import reviews from './review/index'
import subCategory from './subcategory/index'
import vendor from './vendor/index'
import order from './order/index'
import orderStatus from './order_status/index'
import permission from './permission/index'
import role from './role/index'
import managerAuth from './manager_auth'
axios.defaults.baseURL = 'http://192.168.1.7:8000/'

export default createStore({
  modules: {
    employees,
    units,
    categorys,
    products,
    subCategory,
    productStatus,
    productVisiblityStatus,
    reviews,
    vendor,
    order,
    orderStatus,
    permission,
    role,
    managerAuth

  },

  state: {
    isLoading: false
  },
  getters: {
    isLoading (state) {
      return state.isLoading
    }
  },
  mutations: {
    setIsLoading (state, isLoading) {
      state.isLoading = isLoading
    }
  },
  actions: {
    toggleIsLoading ({ commit }, value) {
      commit('setIsLoading', value)
    }
  }

})
