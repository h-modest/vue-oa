import * as getters from './getters'
import * as actions from './actions'
import * as mutations from './mutations'

const counter = {
  state: {
    count: 0,
    info: null
  },
  mutations,
  actions,
  getters
}

export default counter
