
import axios from 'axios'

export default {
  async fetchProducts ({ commit, dispatch }) {
    try {
      dispatch('toggleIsLoading', true)
      const response = await axios.get('/api/products')
      if (response.status === 200) {
        commit('setProducts', response.data)
      } else {
        console.log('something went wrong check it please' + response.status)
      }
    } catch (e) {
      console(e)
    } finally {
      dispatch('toggleIsLoading', false)
    }

    // .then(response => {
    //   if (response.status === 200) {
    //     context.commit('setProducts', response.data)
    //   }
    // })
    // .catch(e => {
    //   console.log(e)
    // })
  },
  async addProducts (context, product) {
    try {
      context.dispatch('toggleIsLoading', true)
      const response = await axios.post('/api/products', product, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      })
      if (response.status === 200) {
        var previousProducts = context.getters.products
        previousProducts.unshift(response.data)
        context.commit('setproductss', previousProducts)
        console.log('successfuly accomplished')
      } else { console.log('things went wrong status' + response.status) }
    } catch (e) {
      console.log(e)
    } finally {
      context.dispatch('toggleIsLoading', false)
    }
  },

  async updateProuduct (context, editedProduct) {
    try {
      var response = await axios.patch('/api/products/' + editedProduct.id,
        JSON.stringify(editedProduct), {
          headers: {
            'Content-Type': 'application/json',
            // 'X-crf-token': window.App.csrfToken,
            Accept: 'application/json'
          }
        }
      )
      // console.log('edited data' + editedProduct.first_name + editedProduct.last_name + editedProduct.email)
      if (response.status === 200) {
        console.log('things goes right, 1 product is updated')
        console.log(response.data)
        var previousProducts = context.getters.products
        var index = previousProducts.findIndex((product) => {
          return editedProduct.id === product.id
        })
        previousProducts[index] = response.data
        context.commit('setproducts', previousProducts)
      } else {
        console.log('things go wrong with status code' + response.status)
      }
    } catch (e) {
      console.log(e)
    }
  },
  async deleteProduct (context, id) {
    console.log(context)
    try {
      var response = await axios.delete(`/api/products/${id}`, {
        headers: {
          'Content-Type': 'application/json',
          // 'X-crf-token': window.App.csrfToken,
          Accept: 'application/json'
        }
      })
      if (response.status === 200) {
        console.log('things goes right, 1 product is deleted')
        var previousProducts = context.getters.products
        var index = previousProducts.findIndex((product) => {
          return (id === product.id)
        })
        previousProducts.splice(index, 1)
        console.log('deleted product index' + index)
        context.commit('setProducts', previousProducts)
      } else {
        console.log('things go wrong with status code' + response.status)
      }
    } catch (e) {
      console.log(e)
    }
  }
}
