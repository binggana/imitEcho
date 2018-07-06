import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/page/index'
import Detail from '@/page/playDetail'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path:'/detail/:id',
      name:'Detail',
      component:Detail
    },
    {
      path:'*',
      redirect:'/'
    }
  ]
})
