<template>
    <div class=" w-full bg-primary-grey rounded-l-40px min-h-screen flex">
        <div class=" px-7 w-full overflow-y-auto h-screen">
            <VFilter />
            <Games v-if="isGames" />
        </div>
        <SideBar />
    </div>
</template>

<script>
import Filter from '@/components/Filter/Filter.vue'
import Games from '@/components/Games/Games.vue'
import SideBar from '@/components/SideBar/SideBar.vue'

export default {
    components: {
        VFilter: Filter,
        Games,
        SideBar
    },
    computed: {
        isGames() { return this.$store.state?.game?.gameList?.length > 0 }
    }
}
</script>