const filterStore = {
    namespaced: true,
    state: {
        ganreList: [
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
        ] 
    },
    mutations: {

    },
    actions: {

    }
}

export default filterStore