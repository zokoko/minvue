import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Axios from 'axios'
import VueAxios from 'vue-axios'
// eslint-disable-next-line
/* eslint-disable */
// main.js
require('./mock');

createApp(App)
  .use(store)
  .use(router)
  .use({ VueAxios, Axios })
  .mount('#app')
