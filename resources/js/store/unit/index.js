import axios from 'axios'
export default {
  state: {
    units: []
  },
  getters: {
    getUnits (state) {
      return state.units
    }
  },
  mutations: {
    setUnits (state, units) {
      state.units = units
    }
  },
  actions: {
    async fetchUnits ({ commit }) {
      try {
        var response = await axios.get('/api/units/')
        if (response.status === 200) {
          commit('setUnits', response.data)
        } else {
          console.log('something went wrong with status code' + response.status)
        }
      } catch (e) {
        console.log(e.response)
      }
    },

    // add units
    async addUnit (context, unit) {
      try {
        var response = await axios.post('/api/units', JSON.stringify(unit), {
          headers: {
            'Content-Type': 'application/json',
            Accetpt: 'application/json'
          }
        })

        if (response.status === 200) {
          var previousData = context.getters.getUnits
          previousData.push(response.data)
          context.commit('setUnits', previousData)
        }
      } catch (e) {
        console.log(e)
      }
    },
    // update unit
    async updateUnit (context, editedUnit) {
      try {
        var response = await axios.patch('/api/units/' + editedUnit.id,
          JSON.stringify(editedUnit),
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
          console.log('things goes right, 1 unit is updated')
          //   console.log(response.data)
          var previousUnit = context.getters.getunits
          var index = previousUnit.findIndex((unit) => {
            return editedUnit.id === unit.id
          })
          previousUnit[index] = response.data
          context.commit('setunits', previousUnit)
        } else {
          console.log('things go wrong with status code' + response.status)
        }
      } catch (e) {
        console.log(e)
      }
    },
    async deleteUnit (context, id) {
      try {
        var response = await axios.delete('/api/units/' + id,
          {
            headers: {
              'Content-Type': 'application/json',
              // 'X-crf-token': window.App.csrfToken,
              Accept: 'application/json'
            }
          })
        if (response.status === 202) {
          console.log('things goes right, 1 unit is deleted')
          var previousUnit = context.getters.getunits
          var index = previousUnit.findIndex((unit) => {
            return (id === unit.id)
          })
          previousUnit.splice(index, 1)
          console.log('deleted unit index' + index)
          context.commit('setunits', previousUnit)
        } else {
          console.log('things go wrong with status code' + response.status)
        }
      } catch (e) {
        console.log(e)
      }
    }
  }
}
