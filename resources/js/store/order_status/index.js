import axios from 'axios'
export default {
  state: {
    orderStatuses: []
  },
  getters: {
    orderStatuses (state) {
      return state.orderStatuses
    }
  },
  mutations: {
    setOrderStatuses (state, orderStatuses) {
      state.orderStatuses = orderStatuses
    }
  },
  actions: {
    async fetchOrderStatuses ({ commit }) {
      try {
        var response = await axios.get('/api/order_status')
        if (response.status === 200) {
          commit('setOrderStatuses', response.data)
        } else {
          console.log('something went wrong with status code' + response.status)
        }
      } catch (e) {
        console.log(e.response)
      }
    },

    // add orderStatuses
    async addOrderStatus (context, orderStatus) {
      try {
        var response = await axios.post('/api/order_status', JSON.stringify(orderStatus), {
          headers: {
            'Content-Type': 'application/json',
            Accetpt: 'application/json'
          }
        })

        if (response.status === 200) {
          var previousData = context.getters.orderStatuses
          previousData.unshift(response.data)
          context.commit('setOrderStatuses', previousData)
        }
      } catch (e) {
        console.log(e)
      }
    },
    // update orderStatus
    async updateOrderStatus (context, editedOrderStatus) {
      try {
        var response = await axios.patch('/api/order_status/' + editedOrderStatus.id,
          JSON.stringify(editedOrderStatus),
          {
            headers: {
              'Content-Type': 'application/json',
              // 'X-crf-token': window.App.csrfToken,
              Accept: 'application/json'
            }
          }
        )
        if (response.status === 200) {
          console.log('things goes right, 1 orderStatus is updated')
          //   console.log(response.data)
          var previousData = context.getters.orderStatuses
          var index = previousData.findIndex((orderStatus) => {
            return editedOrderStatus.id === orderStatus.id
          })
          previousData[index] = response.data
          context.commit('setOrderStatuses', previousData)
        } else {
          console.log('things go wrong with status code' + response.status)
        }
      } catch (e) {
        console.log(e)
      }
    },
    async deleteOrderStatus ({ commit, getters }, id) {
      try {
        var response = await axios.delete(`/api/order_status/${id}`,
          {
            headers: {
              'Content-Type': 'application/json',
              // 'X-crf-token': window.App.csrfToken,
              Accept: 'application/json'
            }
          })
        if (response.status === 202) {
          console.log('things goes right, 1 orderStatus is deleted')
          var previousData = getters.orderStatuses
          var index = previousData.findIndex((orderStatus) => {
            return (id === orderStatus.id)
          })
          previousData.splice(index, 1)
          console.log('deleted orderStatus index' + index)
          commit('setOrderStatuses', previousData)
        } else {
          console.log('things go wrong with status code' + response.status)
        }
      } catch (e) {
        console.log(e)
      }
    }
  }
}
