import axios from 'axios'
import Vue from 'vue'
import Vuex from 'vuex'
import { set } from 'lodash'

import filterStore from '../components/Filter/filterStore'
import gameStore from './gameStore'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    axios: {
      api: 'https://free-to-play-games-database.p.rapidapi.com/api/',
      key: '419f2615d3mshb6cca02a149278bp19b951jsnc2c6ce05cb7e',
      host: 'free-to-play-games-database.p.rapidapi.com'
    }
  },
  mutations: {
    setObjectValue(state, { path, value }) {
      set(state, path, value)
    }
  },
  actions: {
    API({state}, params) {
      const { api, host, key } = state.axios
      const isID = !!Object.keys(params).find(e => e === 'id')
      const end = isID ? 'game' : 'games'
      
      return axios.request({
        method: 'GET',
        baseURL: api + end,
        headers: {
          'X-RapidAPI-Host': host,
          'X-RapidAPI-Key': key
        },
        params
      }).catch(err => {
        console.error(err)
      })
    }
  },
  modules: {
    filter: filterStore,
    game: gameStore
  }
})
