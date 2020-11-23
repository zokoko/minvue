// eslint-disable-next-line
 /* eslint-disable */ 
import { createStore } from 'vuex'
import module1 from '../modules/module1'
import module2 from '../modules/module2'

export default createStore({
  state: {
    loadTime:"",
    // url:"https://api.github.com",
    url:'/parameter/query'

  },
  mutations: {
  },
  actions: {
  },
  modules: {
    module1,
    module2
  }
})
