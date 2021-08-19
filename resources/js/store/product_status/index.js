import axios from 'axios'
export default {
  state: {
    productStatus: []
  },
  getters: {
    productStatus (state) {
      return state.productStatus
    }
  },
  mutations: {
    setProductStatus (state, productStatus) {
      state.productStatus = productStatus
    }
  },
  actions: {
    async fetchProductStatus (context) {
      try {
        context.dispatch('toggleIsLoading', true)
        var response = await axios.get('/api/product_status/')
        if (response.status === 200) {
          context.commit('setProductStatus', response.data)
        } else {
          console.log('something went wrong with status code' + response.data)
        }
      } catch (e) {
        console.log(e.response)
      } finally {
        context.dispatch('toggleIsLoading', false)
      }
    },

    // add ProductStatus
    async addProductStatus (context, productStatus) {
      try {
        this.$store.dispatch('toggleIsLoading', true)
        var response = await axios.post('/api/product_status', JSON.stringify(productStatus), {
          headers: {
            'Content-Type': 'application/json',
            Accetpt: 'application/json'
          }
        })

        if (response.status === 200) {
          var previousData = context.getters.productStatus
          previousData.push(response.data)
          context.commit('setProductStatus', previousData)
        }
      } catch (e) {
        console.log(e)
      } finally {
        context.dispatch('toggleIsLoading', false)
      }
    },
    // update productStatus
    async updateProductStatus (context, editedStatus) {
      try {
        context.dispatch('toggleIsLoading', true)
        var response = await axios.patch('/api/product_status/' + editedStatus.id,
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
          console.log('things goes right, 1 productStatus is updated')
          //   console.log(response.data)
          var previousData = context.getters.productStatus
          var index = previousData.findIndex((productStatus) => {
            return editedStatus.id === productStatus.id
          })
          previousData[index] = response.data
          context.commit('setProductStatus', previousData)
        } else {
          console.log('things go wrong with status code' + response.status)
        }
      } catch (e) {
        console.log(e)
      } finally {
        context.dispatch('toggleIsLoading', false)
      }
    },
    async deleteProductStatus (context, id) {
      try {
        context.dispatch('toggleIsLoading', true)
        var response = await axios.delete(`/api/product_status/${id}`,
          {
            headers: {
              'Content-Type': 'application/json',
              // 'X-crf-token': window.App.csrfToken,
              Accept: 'application/json'
            }
          })
        if (response.status === 202) {
          console.log('things goes right, 1 productStatus is deleted')
          var previousData = context.getters.productStatus
          var index = previousData.findIndex((productStatus) => {
            return (id === productStatus.id)
          })
          previousData.splice(index, 1)
          console.log('deleted previous index' + index)
          context.commit('setProductStatus', previousData)
        } else {
          console.log('things go wrong with status code' + response.status)
        }
      } catch (e) {
        console.log(e)
      } finally {
        context.dispatch('toggleIsLoading', false)
      }
    }
  }
}
