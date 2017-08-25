import Vue from 'vue'
import Router from 'vue-router'
import Oa from '@/components/oa/routers/Oa'
import Account from './account/account'

Vue.use(Router)

export default new Router({
  linkActiveClass:'active',
  mode: 'history',
  routes: [
    {
      path: '/',
      component: Oa
    },
    Account
  ]
})
