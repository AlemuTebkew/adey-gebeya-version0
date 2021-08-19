import axios from 'axios'
export default {
  state: {
    vendors: []
  },
  getters: {
    vendors (state) {
      return state.vendors
    }
  },
  mutations: {
    setVendors (state, vendors) {
      state.vendors = vendors
    }
  },
  actions: {
    async fetchVendors ({ commit }) {
      try {
        var response = await axios.get('/api/vendors')
        if (response.status === 200) {
          commit('setVendors', response.data)
        } else {
          console.log('something went wrong with status code' + response.status)
        }
      } catch (e) {
        console.log(e.response)
      }
    },

    // add vendor
    async addVendor ({ commit, getters }, vendor) {
      commit('setIsLoading', true)
      try {
        var response = await axios.post('/api/vendors', JSON.stringify(vendor), {
          headers: {
            'Content-Type': 'application/json',
            Accetpt: 'application/json'
          }
        })
        // commit('setIsLoading', !getters.isLoading)
        if (response.status === 200) {
          var previousData = getters.vendors
          previousData.unshift(response.data)
          commit('setVendors', previousData)
        }
      } catch (e) {
        console.log(e)
      } finally {
        commit('setIsLoading', false)
      }
    },
    // update vendor
    async updateVendor (context, vendor) {
      try {
        var response = await axios.patch('/api/vendors/' + vendor.id,
          JSON.stringify(vendor),
          {
            headers: {
              'Content-Type': 'application/json',
              // 'X-crf-token': window.App.csrfToken,
              Accept: 'application/json'
            }
          }
        )
        if (response.status === 200) {
          console.log('things goes right, 1 vendor is updated')
          //   console.log(response.data)
          var previousData = context.getters.vendors
          var index = previousData.findIndex((item) => {
            return vendor.id === item.id
          })
          previousData[index] = response.data
          context.commit('setVendors', previousData)
        } else {
          console.log('things go wrong with status code' + response.status)
        }
      } catch (e) {
        console.log(e)
      }
    },
    async deleteVendor ({ commit, getters }, id) {
      try {
        var response = await axios.delete(`/api/vendors/${id}`,
          {
            headers: {
              'Content-Type': 'application/json',
              // 'X-crf-token': window.App.csrfToken,
              Accept: 'application/json'
            }
          })
        if (response.status === 202) {
          console.log('things goes right, 1 vendor is deleted')
          var previousData = getters.vendors
          var index = previousData.findIndex((item) => {
            return (id === item.id)
          })
          previousData.splice(index, 1)
          console.log('deleted category index' + index)
          commit('setVendors', previousData)
        } else {
          console.log('things go wrong with status code' + response.status)
        }
      } catch (e) {
        console.log(e)
      }
    }
  }
}
