// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import vuex from 'vuex'
//全局公共css和js
import '@/assets/common.css'
import '../static/adaption.js'

//引用mint-ui
import Mint from 'mint-ui'
import 'mint-ui/lib/style.css'
Vue.use(Mint)
Vue.use(vuex)


Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
