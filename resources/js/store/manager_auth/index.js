export default {
  state: {
    manager: null,
    isManagerAuth: false,
    isManagerVerified: false
  },
  getters: {
    manager (state) {
      return state.manager
    },
    isManagerAuth (state) {
      return state.isManagerAuth
    },
    isManagerVerified (state) {
      return state.isManagerVerified
    }
  },
  mutations: {
    setManager (state, manager) {
      state.manager = manager
    },
    setIsManagerAuth (state, isManagerAuth) {
      state.manager = isManagerAuth
    },
    setIsManagerVerified (state, isManagerVerified) {
      state.manager = isManagerVerified
    }
  },
  actions: {
    updateManager ({ commit }, manager) {
      commit('setManager', manager)
    },
    updateIsManagerAuth ({ commit }, isManagerAuth) {
      commit('setIsManagerAuth', isManagerAuth)
    },
    updateIsManagerVerified ({ commit }, isManagerVerified) {
      commit('setIsManagerVerified', isManagerVerified)
    }

  }
}
