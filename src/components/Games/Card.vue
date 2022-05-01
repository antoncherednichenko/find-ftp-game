<template>
    <button @click="getGame" @mouseover="bottomValue = '-115px'" @mouseleave.stop="bottomValue = '0px'" class="relative overflow-hidden">
        <StarBtn
            @click.stop.native="addGameToFavorite"
            :active="isFavorite"
            class="text-4xl absolute top-5 right-3" 
        />
        <img class=" rounded-md" :src="game.thumbnail" alt="image">
        <div :style="{ transform: `translateY(${bottomValue})` }" class="absolute transition-bottom w-full bg-primary-grey rounded-t-lg text-primary-white font-semibold py-4">
            <h4 class="text-lg w-full text-center">{{ game.title }}</h4>
            <div class=" font-normal text-xs flex flex-col items-center gap-1">
                <span class=" inline-block"><span class="opacity-30">Platform:</span> {{ game.platform }}</span>
                <span class=" inline-block"><span class="opacity-30">Genre:</span> {{ game.genre }}</span>
                <span class=" inline-block"><span class="opacity-30">Release date:</span> {{ game.release_date | dateParser }}</span>
            </div>
        </div>
    </button>
</template>

<script>
import StarBtn from '@/ui/StarBtn/StarBtn.vue'

export default {
    props: {
        game: {
            type: Object
        }
    },
    components: {
        StarBtn
    },
    data() {
        return {
            bottomValue: '0px'
        }
    },
    computed: {
        favorits() { return this.$store.state?.game?.favoriteGamesList },
        isFavorite() { return this.favorits.some(e => e.id === this.game.id) },
    },
    methods: {
        addGameToFavorite() {
            if(!this.isFavorite) {
                this.$store.commit('game/addFavoriteGame', this.game)
            } else {
                this.$store.commit('game/removeFavoriteGame', this.game)
            }
        },
        getGame() {
            this.$store.dispatch('game/getGameById', this.game.id)
        }
    }
}
</script>