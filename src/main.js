// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import createHistory from 'history/createBrowserHistory'
import config from './config'
import APIHandler from './lib/api'
import store from './store'

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
