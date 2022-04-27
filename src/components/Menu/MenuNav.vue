<template>
    <div class="w-50px flex flex-col gap-7">
        <NavIcon
            v-for="e in platforms"
            :key="e.id"
            :isActive="currentPlatform === e.id"
            :icon="e.icon"
            @click.native="choosePlatform(e.id)" 
        />
    </div>
</template>

<script>
import NavIcon from '@/ui/NavIcon/NavIcon.vue'

export default {
    components: { NavIcon },
    data() {
        return {
            
        }
    },
    computed: {
        currentPlatform() { return this.$store.state?.filter?.currentPlatform },
        platforms() { return this.$store.state?.filter?.platforms }
    },
    methods: {
        choosePlatform(id) {
           this.$store.commit('filter/setPlatform', id)
        }
    }
}
</script>