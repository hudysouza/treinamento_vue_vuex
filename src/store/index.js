import Vue from 'vue'
import Vuex from 'vuex'
import pessoa from './pessoa'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    pessoas: pessoa
  }
})
