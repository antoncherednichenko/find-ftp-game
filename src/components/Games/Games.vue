<template>
    <div class=" py-6">
        <div class=" max-w-7xl">
            <MostPopularGame :game="gameList[0]"/>
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