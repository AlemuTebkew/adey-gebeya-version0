import actions from './action'
import mutations from './mutations'
import getters from './getters'
var employeeState = {
  //  namespaced:true,
  state: {
    employees: []
  },
  getters,
  mutations,
  actions

}
export default employeeState
