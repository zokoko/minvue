export default {
  namespaced: true,
  state: {
    msg: '哈哈哈哈哈哈哈哈哈哈哈',
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
