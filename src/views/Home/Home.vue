<template>
    <Content />
</template>

<script>
import Content from '@/components/Content/Content.vue'

export default {
    components: {
        Content
    },
    computed: {
        currentPlatform() { return this.$store.state?.filter?.currentPlatform },
        currentGenre() { return this.$store.state?.filter?.currentGenre },
        currentSort() { return this.$store.state?.filter?.currentSort }
    },
    methods: {
        getGames() {
            this.$store.dispatch('game/getGames', {
                currentPlatform: this.currentPlatform,
                currentGenre: this.currentGenre,
                currentSort: this.currentSort
            })
        }
    },
    watch: {
        currentPlatform() { this.getGames() },
        currentGenre() { this.getGames() },
        currentSort() { this.getGames() }
    },
    mounted() { 
        this.getGames()
        this.$store.dispatch('game/getAllGames') 
    }
}
</script>