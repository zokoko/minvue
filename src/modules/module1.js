export default {
  namespaced: true,
  state: {
    count: 1
  },
  mutations: {
    add: function (state) {
      state.count++
    }
  },
  actions: {
    add: function ({ commit }) {
      commit('add')
    }
  }
}
