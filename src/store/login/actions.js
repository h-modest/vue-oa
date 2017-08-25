const mutations = {
  loginRemote(state) {
    state.access_token = state.access_token + 5
  },
}

const actions =  {
  loginRemote: ({ commit }) => commit('loginRemote'),
}

export {
  mutations,
  actions
}
