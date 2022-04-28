import axios from 'axios'
import Vue from 'vue'
import Vuex from 'vuex'

import filterStore from '../components/Filter/filterStore'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    axios: {
      api: 'https://free-to-play-games-database.p.rapidapi.com/api/games',
      key: '419f2615d3mshb6cca02a149278bp19b951jsnc2c6ce05cb7e',
      host: 'free-to-play-games-database.p.rapidapi.com'
    }
  },
  mutations: {
  },
  actions: {
    API({state}, queryParams) {
      const { platform, genre, sort } = queryParams
      const { api, host, key } = state.axios
      
      return axios.request({
        method: 'GET',
        baseURL: api,
        headers: {
          'X-RapidAPI-Host': host,
          'X-RapidAPI-Key': key
        },
        params: {
          platform,
          category: genre,
          'sort-by': sort
        }
      }).catch(err => {
        console.error(err)
      })
    }
  },
  modules: {
    filter: filterStore
  }
})
