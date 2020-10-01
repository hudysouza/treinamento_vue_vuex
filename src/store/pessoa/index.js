import actions from './actions'
import getters from './getters'
import mutations from './mutations'

export default {
  state: {
    pessoa: {
      firstname: '',
      lastName: '',
      email: ''
    },
    pessoas: []
  },
  actions: actions,
  getters: getters,
  mutattions: mutations
}
