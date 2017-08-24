import Vue from 'vue'
import Router from 'vue-router'
import App from '@/App'

Vue.use(Router)

export default new Router({
  linkActiveClass:'active',
  mode: 'history',
  routes: [
    {
      path: '/',
      component: App
    },
  ]
})
