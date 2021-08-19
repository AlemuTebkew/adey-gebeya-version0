import axios from 'axios'
export default {
  state: {
    categories: []
  },
  getters: {
    categories (state) {
      return state.categories
    }
  },
  mutations: {
    setCategories (state, categories) {
      state.categories = categories
    }
  },
  actions: {
    async fetchCategories ({ commit }) {
      try {
        var response = await axios.get('/api/categories')
        if (response.status === 200) {
          commit('setCategories', response.data)
        } else {
          console.log('something went wrong with status code' + response.status)
        }
      } catch (e) {
        console.log(e.response)
      }
    },

    // add Categories
    async addCategory (context, category) {
      try {
        var response = await axios.post('/api/categories', category, {
          headers: {
            'Content-Type': 'multipart/form-data',
            Accetpt: 'application/json'
          }
        })

        if (response.status === 200) {
          var previousData = context.getters.categories
          previousData.push(response.data)
          context.commit('setCategories', previousData)
        }
      } catch (e) {
        console.log(e)
      }
    },
    // update category
    async updateCategory (context, editedCategory) {
      const formData = new FormData()
      Object.entries(editedCategory).forEach(([key, value]) => {
        formData.append(key, value)
      })
      console.log('update category', formData)
      try {
        var response = await axios.put('/api/categories/' + editedCategory.id,
          editedCategory, {
            'Content-Type': 'multipart/form-data',
            Accetpt: 'application/json'
          }
        )
        // console.log('edited data' + editedCategory.first_name + editedCategory.last_name + editedCategory.email)
        if (response.status === 200) {
          console.log('things goes right, 1 category is updated')
          //   console.log(response.data)
          var previousCategory = context.getters.categories
          var index = previousCategory.findIndex((category) => {
            return editedCategory.id === category.id
          })
          previousCategory[index] = response.data
          context.commit('setCategories', previousCategory)
        } else {
          console.log('things go wrong with status code' + response.status)
        }
      } catch (e) {
        console.log(e)
      }
    },
    async deleteCategory (context, id) {
      try {
        var response = await axios.delete(`/api/categories/${id}`, {
          headers: {
            'Content-Type': 'application/json',
            // 'X-crf-token': window.App.csrfToken,
            Accept: 'application/json'
          }
        })
        if (response.status === 202) {
          console.log('things goes right, 1 category is deleted')
          var previousCategory = context.getters.categories
          var index = previousCategory.findIndex((category) => {
            return (id === category.id)
          })
          previousCategory.splice(index, 1)
          console.log('deleted category index' + index)
          context.commit('setCategories', previousCategory)
        } else {
          console.log('things go wrong with status code' + response.status)
        }
      } catch (e) {
        console.log(e)
      }
    }
  }
}
