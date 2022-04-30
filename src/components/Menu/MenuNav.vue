<template>
    <div class="w-50px flex flex-col gap-7">
        <div class="pb-10">
            <Search />
        </div>
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
import Search from '@/components/Search/Search.vue'

export default {
    components: { NavIcon, Search },
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