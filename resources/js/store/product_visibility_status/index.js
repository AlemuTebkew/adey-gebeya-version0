import axios from 'axios'
export default {
  state: {
    productVisibilityStatus: []
  },
  getters: {
    productVisibilityStatus (state) {
      return state.productVisibilityStatus
    }
  },
  mutations: {
    setProductVisibilityStatus (state, productVisibilityStatus) {
      state.productVisibilityStatus = productVisibilityStatus
    }
  },
  actions: {
    async fetchProductVisibilityStatus ({ commit }) {
      try {
        var response = await axios.get('/api/product_visiblity_statuses')
        if (response.status === 200) {
          commit('setProductVisibilityStatus', response.data)
        } else {
          console.log('something went wrong with status code' + response.data)
        }
      } catch (e) {
        console.log(e.response)
      }
    },

    // add ProductVisibilityStatus
    async addProductVisibilityStatus (context, productVisibilityStatus) {
      try {
        var response = await axios.post('/api/product_visiblity_statuses', JSON.stringify(productVisibilityStatus), {
          headers: {
            'Content-Type': 'application/json',
            Accetpt: 'application/json'
          }
        })

        if (response.status === 200) {
          var previousData = context.getters.productVisibilityStatus
          previousData.push(response.data)
          context.commit('setProductVisibilityStatus', previousData)
        }
      } catch (e) {
        console.log(e)
      }
    },
    // update productVisibilityStatus
    async updateProductVisibilityStatus (context, editedStatus) {
      try {
        var response = await axios.patch('/api/product_visiblity_statuses/' + editedStatus.id,
          JSON.stringify(editedStatus),
          {
            headers: {
              'Content-Type': 'application/json',
              // 'X-crf-token': window.App.csrfToken,
              Accept: 'application/json'
            }
          }
        )
        // console.log('edited data' + editedUnit.first_name + editedUnit.last_name + editedUnit.email)
        if (response.status === 200) {
          console.log('things goes right, 1 productVisibilityStatus is updated')
          //   console.log(response.data)
          var previousData = context.getters.productVisibilityStatus
          var index = previousData.findIndex((productVisibilityStatus) => {
            return editedStatus.id === productVisibilityStatus.id
          })
          previousData[index] = response.data
          context.commit('setProductVisibilityStatus', previousData)
        } else {
          console.log('things go wrong with status code' + response.status)
        }
      } catch (e) {
        console.log(e)
      }
    },
    async deleteProductVisibilityStatus (context, id) {
      try {
        var response = await axios.delete(`/api/product_visiblity_statuses/${id}`,
          {
            headers: {
              'Content-Type': 'application/json',
              // 'X-crf-token': window.App.csrfToken,
              Accept: 'application/json'
            }
          })
        if (response.status === 202) {
          console.log('things goes right, 1 productVisibilityStatus is deleted')
          var previousData = context.getters.productVisibilityStatus
          var index = previousData.findIndex((productVisibilityStatus) => {
            return (id === productVisibilityStatus.id)
          })
          previousData.splice(index, 1)
          console.log('deleted previous index' + index)
          context.commit('setProductVisibilityStatus', previousData)
        } else {
          console.log('things go wrong with status code' + response.status)
        }
      } catch (e) {
        console.log(e)
      }
    }
  }
}
