
const gameStore = {
    namespaced: true,
    
    state: {
        gameList: [],
        currentGame: null,
        isCard: false,
        mostPopularGame: null
    },
    mutations: {
        toggleCard(state, value) { state.isCard = value }
    },
    actions: {
        getGames({ dispatch, commit }, { currentPlatform, currentGenre, currentSort }) {

            return dispatch('API', {
                platform: currentPlatform,
                category: currentGenre,
                'sort-by': currentSort
            }, { root: true }).then(data => {
                if(data?.data) {
                    commit('setObjectValue', { path: 'game.gameList', value: data.data }, { root: true })
                } else {
                    console.error('Woops')
                }
            })
        },
        getMostPopularGame({ dispatch, commit }, { currentPlatform, currentGenre }) {

            return dispatch('API', {
                platform: currentPlatform,
                category: currentGenre,
                'sort-by': 'popularity'
            }, { root: true }).then(data => {
                if(data?.data) {
                    commit('setObjectValue', { path: 'game.mostPopularGame', value: data.data[0] }, { root: true })
                } else {
                    console.error('Woops')
                }
            })
        },
        getGameById({ dispatch, commit }, id) {

            return dispatch('API', { id }, { root: true })
                .then(data => {
                    if(data?.data) {
                        commit('setObjectValue', { path: 'game.currentGame', value: data?.data }, { root: true })
                        commit('toggleCard', true)
                    } else {
                        console.error('Woops')
                    }
                })
        }
    }
}

export default gameStore