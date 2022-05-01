<template>
    <div class=" py-4 overflow-y-auto max-h-85vh w-full bg-primary-grey rounded-lg flex flex-col items-center scrollbar scrollbar-thumb-primary-orange scrollbar-thin">
        <h3 class="text-primary-white text-center text-xl font-semibold underline">Favorit games</h3>
        <div v-if="list.length" class="py-5 flex flex-col items-center gap-4 px-2">
            <Card v-for="g in list" :key="g.id" :game="g" />
        </div>
        <div v-else class="text-center text-primary-white p-4 opacity-50">
            Game list is empty
        </div>
    </div>
</template>

<script>
import Card from '@/components/Games/Card.vue'

export default {
    components: {
        Card
    },
    computed: {
        list() { return this.$store.state?.game?.favoriteGamesList }
    }
}
</script>