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
    mounted() {
        this.$store.dispatch('filter/getGames', {
            currentPlatform: this.currentPlatform,
            currentGenre: this.currentGenre,
            currentSort: this.currentSort
        })
    }
}
</script>