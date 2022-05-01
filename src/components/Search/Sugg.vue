<template>
    <ul v-if="resultList.length" class="absolute w-full top-12 left-0 bg-primary-white rounded-md max-h-80 overflow-y-auto scrollbar scrollbar-thumb-primary-orange scrollbar-thin">
        <SuggItem
            v-for="g in resultList"
            :key="g.id"
            :game="g" 
            @click.native="getGame(g.id)"
        />
    </ul>
</template>

<script>
import SuggItem from '@/components/Search/SuggItem.vue'

export default {
    props: ['resultList'],
    components: {
        SuggItem
    },
    methods: {
        getGame(id) {
            this.$store.dispatch('game/getGameById', id)
        }
    }
}
</script>

<style>

</style>