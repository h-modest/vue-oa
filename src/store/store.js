import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  count: 0,
  info: null
}

const mutations = {
  increment(state) {
    var data = {
      name: 'hxq',
      sex: 0
    };
    API.post('product', data )
    .then(info => {
      console.log('1', info);
    })
    state.count = state.count + 5
  },
  decrement(state) {
    state.count = state.count -3
  }
}

const actions =  {
  increment: ({ commit }) => commit('increment'),
  decrement: ({ commit }) => commit('decrement')
}

const getters = {
  count: state => state.count
}

export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters
})
