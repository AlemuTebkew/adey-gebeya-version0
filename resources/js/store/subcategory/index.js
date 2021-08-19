import axios from 'axios'
export default {
  state: {
    subcategories: []
  },
  getters: {
    subcategories (state) {
      return state.subcategories
    }
  },
  mutations: {
    setSubcategories (state, subcategories) {
      state.subcategories = subcategories
    }
  },
  actions: {
    async fetchSubcategories ({ commit }) {
      try {
        var response = await axios.get('/api/sub_categories')
        if (response.status === 200) {
          commit('setSubcategories', response.data)
        } else {
          console.log('something went wrong with status code' + response.status)
        }
      } catch (e) {
        console.log(e.response)
      }
    },

    // add sub Categories
    async addSubcategory ({ commit, getters }, subCategory) {
      commit('setIsLoading', true)
      try {
        var response = await axios.post('/api/sub_categories', JSON.stringify(subCategory), {
          headers: {
            'Content-Type': 'application/json',
            Accetpt: 'application/json'
          }
        })
        // commit('setIsLoading', !getters.isLoading)
        if (response.status === 200) {
          var previousData = getters.subcategories
          previousData.unshift(response.data)
          commit('setSubcategories', previousData)
        }
      } catch (e) {
        console.log(e)
      } finally {
        commit('setIsLoading', false)
      }
    },
    // update subcategory
    async updateSubCategory (context, editedSubcategoy) {
      try {
        var response = await axios.patch('/api/sub_categories/' + editedSubcategoy.id,
          JSON.stringify(editedSubcategoy),
          {
            headers: {
              'Content-Type': 'application/json',
              // 'X-crf-token': window.App.csrfToken,
              Accept: 'application/json'
            }
          }
        )
        if (response.status === 200) {
          console.log('things goes right, 1 category is updated')
          //   console.log(response.data)
          var previousSubcategory = context.getters.subcategories
          var index = previousSubcategory.findIndex((category) => {
            return editedSubcategoy.id === category.id
          })
          previousSubcategory[index] = response.data
          context.commit('setSubcategories', previousSubcategory)
        } else {
          console.log('things go wrong with status code' + response.status)
        }
      } catch (e) {
        console.log(e)
      }
    },
    async deleteSubcategory ({ commit, getters }, id) {
      try {
        var response = await axios.delete(`/api/sub_categories/${id}`,
          {
            headers: {
              'Content-Type': 'application/json',
              // 'X-crf-token': window.App.csrfToken,
              Accept: 'application/json'
            }
          })
        if (response.status === 202) {
          console.log('things goes right, 1 category is deleted')
          var previousSubcategory = getters.subcategories
          var index = previousSubcategory.findIndex((category) => {
            return (id === category.id)
          })
          previousSubcategory.splice(index, 1)
          console.log('deleted category index' + index)
          commit('setSubcategories', previousSubcategory)
        } else {
          console.log('things go wrong with status code' + response.status)
        }
      } catch (e) {
        console.log(e)
      }
    }
  }
}
