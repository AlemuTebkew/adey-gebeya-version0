import axios from 'axios'
export default {
  state: {
    orders: []
  },
  getters: {
    orders (state) {
      return state.orders
    }
  },
  mutations: {
    setOrders (state, orders) {
      state.orders = orders
    }
  },
  actions: {
    async fetchOrders ({ commit }) {
      try {
        var response = await axios.get('/api/orders')
        if (response.status === 200) {
          commit('setOrders', response.data)
        } else {
          console.log('something went wrong with status code' + response.status)
        }
      } catch (e) {
        console.log(e.response)
      }
    },

    // update order
    async updateReviews (context, editedOrder) {
      try {
        var response = await axios.patch('/api/orders/' + editedOrder.id,
          JSON.stringify(editedOrder),
          {
            headers: {
              'Content-Type': 'application/json',
              // 'X-crf-token': window.App.csrfToken,
              Accept: 'application/json'
            }
          }
        )
        if (response.status === 200) {
          console.log('things goes right, 1 order is updated')
          //   console.log(response.data)
          var previousData = context.getters.orders
          var index = previousData.findIndex((order) => {
            return editedOrder.id === order.id
          })
          previousData[index] = response.data
          context.commit('setOrders', previousData)
        } else {
          console.log('things go wrong with status code' + response.status)
        }
      } catch (e) {
        console.log(e)
      }
    }
  }
}
