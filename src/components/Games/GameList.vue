<template>
    <div class="max-w-7xl center flex flex-wrap gap-5 py-50px justify-center">
        <Card
            v-for="g in list" :key="g.id"
            :game="g"
        />
    </div>
</template>

<script>
import Card from '@/components/Games/Card.vue'

export default {
    props: ['list'],
    components: {
        Card
    }
}
</script>