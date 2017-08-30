// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import createHistory from 'history/createBrowserHistory'
import config from './config'
import APIHandler from './lib/api'
import store from './store'
import Vuerify from 'vuerify'
import iView from 'iview'
import 'iview/dist/styles/iview.css'
import './less/account.less'
import './less/iview.less'

Vue.use(iView)
Vue.use(Vuerify)

global.browserHistory = createHistory()
global.API = new APIHandler(config)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App },
})
