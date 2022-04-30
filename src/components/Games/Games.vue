<template>
    <div class=" py-6">
        <div class="max-w-7xl center">
            <MostPopularGame />
        </div>
        <div class="max-w-7xl center">
            <GameList :list="gameList" />
        </div>
        <GameCard
            v-if="isCard"
            :game="currentGame" 
        />
    </div>
</template>

<script>
import MostPopularGame from '@/components/MostPopularGame/MostPopularGame.vue'
import GameCard from '@/components/GameCard/GameCard.vue'
import GameList from '@/components/Games/GameList.vue'

export default {
    components: {
        MostPopularGame,
        GameCard,
        GameList
    },
    computed: {
        gameList() { return this.$store.state?.game?.gameList },
        isCard() { return this.$store.state?.game?.isCard },
        currentGame() { return this.$store.state?.game?.currentGame }
    }
}
</script>