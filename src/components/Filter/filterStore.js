
const filterStore = {
    namespaced: true,
    state: {
        currentPlatform: 'pc',
        currentSort: 'release-date',
        currentGenre: 'shooter',
        gameList: [],
        genreList: [
            'shooter', 
            'mmorpg',
            'strategy',
            'racing',
            'survival',
            'moba',
            'sports',
            'social',
            'sandbox',
            'open-world',
            'pvp',
            'pve',
            'pixel',
            'voxel',
            'zombie',
            'mmorts',
            'turn-based',
            'first-person',
            'third-Person',
            'top-down',
            'tank',
            'space',
            'sailing',
            'side-scroller',
            'superhero',
            'permadeath',
            'card',
            'battle-royale',
            'mmo',
            'mmofps',
            'mmotps',
            '3d',
            '2d',
            'anime',
            'fantasy',
            'sci-fi',
            'fighting',
            'action-rpg',
            'action',
            'military',
            'martial-arts',
            'flight',
            'low-spec',
            'tower-defense',
            'horror',
        ],
        sortList: [ 
            { id: 'release-date', title: 'Release date'},
            { id: 'popularity', title: 'Popularity'},
            { id: 'alphabetical', title: 'Alphabetical'},
            { id: 'relevance', title: 'Rrelevance'}, 
        ],
        platforms: [
            { id: 'pc', icon: 'fa-solid fa-computer'  },
            { id: 'browser', icon: 'fa-regular fa-window-maximize' },
            { id: 'all', icon: 'fa-regular fa-object-group' }
        ] 
    },
    mutations: {
        setGenre(state, value) { state.currentGenre = value },
        setSort(state, value) { state.currentSort = value },
        setPlatform(state, value) { state.currentPlatform = value },
        setGameList(state, value) { state.gameList = value }
    },
    actions: {
        getGames({ dispatch, commit }, { currentPlatform, currentGenre, currentSort }) {

            return dispatch('API', {
                platform: currentPlatform,
                genre: currentGenre,
                sort: currentSort
            }, { root: true }).then(data => {
                if(data?.data) {
                    commit('setGameList', data.data)
                } else {
                    console.error('Woops')
                }
            })
        }
    }
}

export default filterStore