<template>
    <div class=" py-6">
        <div class=" max-w-7xl">
            <MostPopularGame />
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

export default {
    components: {
        MostPopularGame,
        GameCard
    },
    computed: {
        gameList() { return this.$store.state?.game?.gameList },
        isCard() { return this.$store.state?.game?.isCard },
        currentGame() { return this.$store.state?.game?.currentGame }
    }
}
</script>