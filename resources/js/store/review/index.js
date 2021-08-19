import axios from 'axios'
export default {
  state: {
    reviews: []
  },
  getters: {
    reviews (state) {
      return state.reviews
    }
  },
  mutations: {
    setReviews (state, reviews) {
      state.reviews = reviews
    }
  },
  actions: {
    async fetchReviews ({ commit }) {
      try {
        var response = await axios.get('/api/reviews')
        if (response.status === 200) {
          commit('setReviews', response.data)
        } else {
          console.log('something went wrong with status code' + response.status)
        }
      } catch (e) {
        console.log(e.response)
      }
    },

    // add reviews
    async addReviews (context, review) {
      try {
        var response = await axios.post('/api/reviews', JSON.stringify(review), {
          headers: {
            'Content-Type': 'application/json',
            Accetpt: 'application/json'
          }
        })

        if (response.status === 200) {
          var previousData = context.getters.reviews
          previousData.unshift(response.data)
          context.commit('setReviews', previousData)
        }
      } catch (e) {
        console.log(e)
      }
    },
    // update review
    async updateReviews (context, editedReview) {
      try {
        var response = await axios.patch('/api/reviews/' + editedReview.id,
          JSON.stringify(editedReview),
          {
            headers: {
              'Content-Type': 'application/json',
              // 'X-crf-token': window.App.csrfToken,
              Accept: 'application/json'
            }
          }
        )
        if (response.status === 200) {
          console.log('things goes right, 1 review is updated')
          //   console.log(response.data)
          var previousReview = context.getters.reviews
          var index = previousReview.findIndex((review) => {
            return editedReview.id === review.id
          })
          previousReview[index] = response.data
          context.commit('setReviews', previousReview)
        } else {
          console.log('things go wrong with status code' + response.status)
        }
      } catch (e) {
        console.log(e)
      }
    },
    async deleteReview ({ commit, getters }, id) {
      try {
        var response = await axios.delete(`/api/reviews/${id}`,
          {
            headers: {
              'Content-Type': 'application/json',
              // 'X-crf-token': window.App.csrfToken,
              Accept: 'application/json'
            }
          })
        if (response.status === 202) {
          console.log('things goes right, 1 review is deleted')
          var previousReview = getters.reviews
          var index = previousReview.findIndex((review) => {
            return (id === review.id)
          })
          previousReview.splice(index, 1)
          console.log('deleted review index' + index)
          commit('setReviews', previousReview)
        } else {
          console.log('things go wrong with status code' + response.status)
        }
      } catch (e) {
        console.log(e)
      }
    }
  }
}
