<template>
    <div v-if="game" class="rounded-2xl w-full p-5 bg-primary-black">
        <div class="flex justify-between items-center">
            <div>
                <h2 class="text-primary-white text-4xl font-semibold max-w-md">
                    {{ game.title }}
                </h2>
                <p class="text-primary-white text-2xl max-w-md py-5 opacity-30">
                    {{ game.short_description }}
                </p>
                <div class="py-5">
                    <a class=" btn-primary" :href="game.game_url" target="_blank">Play now</a>
                </div>
                <div class="text-primary-white py-5">
                    <p><span class="opacity-30">Genre:</span> {{ game.genre }}</p>
                    <p><span class="opacity-30">Platform:</span> {{ game.platform }}</p>
                    <p><span class="opacity-30">Release date:</span> {{ game.release_date | dateParser }}</p>
                </div>
            </div>
            <img @click="getGame(game.id)" class="block h-80 rounded-lg border-solid border border-primary-white border-opacity-30 cursor-pointer" :src="game.thumbnail" alt="most popular game avatar">
        </div>
    </div>
</template>

<script>
export default {
    computed: {
        currentPlatform() { return this.$store.state?.filter?.currentPlatform },
        currentGenre() { return this.$store.state?.filter?.currentGenre },
        game() { return this.$store.state?.game?.mostPopularGame }
    },
    methods: {
        getGame(id) {
            this.$store.dispatch('game/getGameById', id)
        },
        getPopularGame() {
            this.$store.dispatch('game/getMostPopularGame', {
                currentPlatform: this.currentPlatform,
                currentGenre: this.currentGenre
            })
        }
    },
    watch: {
        currentPlatform() { this.getPopularGame() },
        currentGenre() { this.getPopularGame() }
    },
    mounted() {
        this.getPopularGame()
    }
}
</script>