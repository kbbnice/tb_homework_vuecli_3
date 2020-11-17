import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'element-ui/lib/theme-chalk/index.css';
import axios from 'axios'
import Mock from "mockjs"


import './assets/less/index.less'

Vue.config.productionTip = false

Vue.prototype.$axios = axios

Vue.prototype.Mock = Mock

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
