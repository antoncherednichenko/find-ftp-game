<template>
    <li class="text-primary-black w-full py-2 px-4 hover-item flex justify-between items-center">
        <span>{{ game.title }}</span>
        <StarBtn @click.stop.native="addGameToFavorite" :active="isFavorite"/>
    </li>
</template>

<script>
import StarBtn from '@/ui/StarBtn/StarBtn.vue'

export default {
    props: ['game'],
    components: {
        StarBtn
    },
    computed: {
        favorits() { return this.$store.state?.game?.favoriteGamesList },
        isFavorite() { return this.favorits.some(e => e.id === this.game.id) },
    },
    methods: {
        addGameToFavorite() {
            if(!this.isFavorite) {
                this.$store.commit('game/addFavoriteGame', this.game)
            } else {
                this.$store.commit('game/removeFavoriteGame', this.game)
            }
        },
    }
}
</script>