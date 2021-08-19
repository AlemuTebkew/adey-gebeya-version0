import axios from 'axios'
export default {
  state: {
    roles: []
  },
  getters: {
    roles (state) {
      return state.roles
    }
  },
  mutations: {
    setRoles (state, roles) {
      state.roles = roles
    }
  },
  actions: {
    async fetchRoles ({ commit }) {
      try {
        var response = await axios.get('/api/roles/')
        if (response.status === 200) {
          commit('setRoles', response.data)
        } else {
          console.log('something went wrong with status code' + response.status)
        }
      } catch (e) {
        console.log(e.response)
      }
    },

    // add role
    async addRole (context, role) {
      try {
        var response = await axios.post('/api/roles/', JSON.stringify(role), {
          headers: {
            'Content-Type': 'application/json',
            Accetpt: 'application/json'
          }
        })

        if (response.status === 200) {
          var previousData = context.getters.roles
          previousData.push(response.data)
          context.commit('setRoles', previousData)
        }
      } catch (e) {
        console.log(e)
      }
    },
    // update role
    async updateRole (context, editedRole) {
      try {
        var response = await axios.patch('/api/roles/' + editedRole.id,
          JSON.stringify(editedRole),
          {
            headers: {
              'Content-Type': 'application/json',
              // 'X-crf-token': window.App.csrfToken,
              Accept: 'application/json'
            }
          }
        )
        if (response.status === 200) {
          console.log('things goes right, 1 role is updated')
          //   console.log(response.data)
          var previousData = context.getters.roles
          var index = previousData.findIndex((role) => {
            return editedRole.id === role.id
          })
          previousData[index] = response.data
          context.commit('setRoles', previousData)
        } else {
          console.log('things go wrong with status code' + response.status)
        }
      } catch (e) {
        console.log(e)
      }
    },
    async deleteRole (context, id) {
      try {
        var response = await axios.delete('/api/roles/' + id,
          {
            headers: {
              'Content-Type': 'application/json',
              // 'X-crf-token': window.App.csrfToken,
              Accept: 'application/json'
            }
          })
        if (response.status === 200) {
          console.log('things goes right, 1 role is deleted')
          var previousData = context.getters.roles
          var index = previousData.findIndex((role) => {
            return (id === role.id)
          })
          previousData.splice(index, 1)
          console.log('deleted role index' + index)
          context.commit('setRoles', previousData)
        } else {
          console.log('things go wrong with status code' + response.status)
        }
      } catch (e) {
        console.log(e)
      }
    }
  }
}
