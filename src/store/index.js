import Vue from 'vue'
import Vuex from 'vuex'

import filterStore from '../components/Filter/filterStore'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    filter: filterStore
  }
})
