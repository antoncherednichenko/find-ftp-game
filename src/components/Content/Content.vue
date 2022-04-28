<template>
    <div class=" w-full bg-primary-grey rounded-l-40px min-h-screen">
        <div class=" px-7 overflow-y-auto min-h-screen">
            <VFilter />
            <Games v-if="isGames" />
        </div>
    </div>
</template>

<script>
import Filter from '@/components/Filter/Filter.vue'
import Games from '@/components/Games/Games.vue'

export default {
    components: {
        VFilter: Filter,
        Games
    },
    computed: {
        isGames() { return this.$store.state?.filter?.gameList?.length > 0 }
    }
}
</script>