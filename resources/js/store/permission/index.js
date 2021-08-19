import axios from 'axios'
export default {
  state: {
    permissions: []
  },
  getters: {
    permissions (state) {
      return state.permissions
    }
  },
  mutations: {
    setPermissions (state, permissions) {
      state.permissions = permissions
    }
  },
  actions: {
    async fetchPermissions ({ commit }) {
      try {
        var response = await axios.get('/api/permissions/')
        if (response.status === 200) {
          commit('setPermissions', response.data)
        } else {
          console.log('something went wrong with status code' + response.status)
        }
      } catch (e) {
        console.log(e.response)
      }
    },

    // add permission
    async addPermission (context, permission) {
      try {
        var response = await axios.post('/api/permissions/', JSON.stringify(permission), {
          headers: {
            'Content-Type': 'application/json',
            Accetpt: 'application/json'
          }
        })

        if (response.status === 200) {
          var previousData = context.getters.permissions
          previousData.push(response.data)
          context.commit('setPermissions', previousData)
        }
      } catch (e) {
        console.log(e)
      }
    },
    // update permission
    async updatePermission (context, editedPermission) {
      try {
        var response = await axios.patch('/api/permissions/' + editedPermission.id,
          JSON.stringify(editedPermission),
          {
            headers: {
              'Content-Type': 'application/json',
              // 'X-crf-token': window.App.csrfToken,
              Accept: 'application/json'
            }
          }
        )
        if (response.status === 200) {
          console.log('things goes right, 1 permission is updated')
          //   console.log(response.data)
          var previousData = context.getters.permissions
          var index = previousData.findIndex((permission) => {
            return editedPermission.id === permission.id
          })
          previousData[index] = response.data
          context.commit('setPermissions', previousData)
        } else {
          console.log('things go wrong with status code' + response.status)
        }
      } catch (e) {
        console.log(e)
      }
    },
    async deletePermission (context, id) {
      try {
        var response = await axios.delete('/api/permissions/' + id,
          {
            headers: {
              'Content-Type': 'application/json',
              // 'X-crf-token': window.App.csrfToken,
              Accept: 'application/json'
            }
          })
        if (response.status === 202) {
          console.log('things goes right, 1 permission is deleted')
          var previousData = context.getters.permissions
          var index = previousData.findIndex((permission) => {
            return (id === permission.id)
          })
          previousData.splice(index, 1)
          console.log('deleted permission index' + index)
          context.commit('setPermissions', previousData)
        } else {
          console.log('things go wrong with status code' + response.status)
        }
      } catch (e) {
        console.log(e)
      }
    }
  }
}
