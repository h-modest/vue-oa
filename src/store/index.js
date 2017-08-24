import Vue from 'vue'
import Vuex from 'vuex'
import counter from './counter'
import cart from './cart'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    counter,
    cart
  }
})

export default store
