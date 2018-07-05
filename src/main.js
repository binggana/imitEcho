// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
//全局公共css和js
import '@/assets/common.css'
import '../static/adaption.js'

//引用mint-ui
import Mint from 'mint-ui'
import 'mint-ui/lib/style.css'
Vue.use(Mint)
//引用axios并挂载到vue上
import Axios from 'axios'
Vue.prototype.$axios=Axios

//引入全局组件title
import setTitle from '@/components/title'
Vue.component('setTitle',setTitle)

//引入vuex
import store from '@/vuex/store'

//引用全局过滤器
import mFilters from '@/filters/custom'
import { SSL_OP_MICROSOFT_BIG_SSLV3_BUFFER } from 'constants';
Object.keys(mFilters).forEach((key)=>{
  Vue.filter(key,mFilters[key]);
})

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  components: { App },
  template: '<App/>'
})
