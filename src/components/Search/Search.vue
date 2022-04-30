<template>
    <div>
        <NavIcon @click.native="getInput" icon="fa-solid fa-magnifying-glass"/>
    </div>
</template>

<script>
import NavIcon from '@/ui/NavIcon/NavIcon.vue'

export default {
    components: {
        NavIcon
    },
    computed: {
        allGames() { return this.$store.state?.game?.allGames }
    }, 
    methods: {
        getInput() {
            
        }
    }
}
</script>