<template>
    <div class="w-full">
        <MostPopularGame :game="gameList[0]"/>
        <div class="container">
            
        </div>
    </div>
</template>

<script>
import MostPopularGame from '@/components/MostPopularGame/MostPopularGame.vue'

export default {
    components: {
        MostPopularGame
    },
    computed: {
        gameList() { return this.$store.state?.filter?.gameList }
    }
}
</script>