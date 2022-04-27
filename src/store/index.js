import axios from 'axios'
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
    API(_, queryParams) {
      return axios({
        method: 'POST',
        baseURL: `https://www.freetogame.com/api/${queryParams}`
      }).catch(err => {
        console.error(err)
      })
    }
  },
  modules: {
    filter: filterStore
  }
})
