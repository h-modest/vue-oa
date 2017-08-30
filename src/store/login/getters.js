import { mutations, actions } from './actions'

const state = {
  access_token: 0,
}

const getters = {
  access_token: state => state.access_token,
}

const login = {
  state,
  mutations,
  actions,
  getters
}

export default login
