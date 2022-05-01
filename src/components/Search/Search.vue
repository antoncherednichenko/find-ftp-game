<template>
    <div 
        @click="currentWidth = '350px'"
        :style="{ width: currentWidth }"
        :class="dynamicStyle" 
        class=" transition-w relative z-20 h-50px rounded-xl flex items-center cursor-pointer text-primary-white"
    >
        <input @input="search" v-model.trim="subStr" v-if="currentWidth === '350px'" class="bg-primary-grey px-2 rounded-lg text-primary-white w-85%" type="text">
        <i @click.stop="toggle" :class="{ 'fa-magnifying-glass': currentWidth === '50px', 'fa-xmark': currentWidth === '350px' }" class="text-2xl fa-solid"></i>
        <Sugg
            v-if="resultList.length"
            :resultList="resultList" 
        />
    </div>
</template>

<script>
import Sugg from '@/components/Search/Sugg.vue'

export default {
    components: {
        Sugg
    },
    data() {
        return {
            currentWidth: '50px',
            subStr: '',
            resultList: []
        }
    },
    computed: {
        allGames() { return this.$store.state?.game?.allGames },
        favorits() { return this.$store.state?.game?.favoriteGamesList },
        isFavorite() { return this.favorits.some(e => e.id === this.game.id) },
        dynamicStyle() {
            return {
                'bg-primary-grey': this.currentWidth === '50px',
                'justify-center': this.currentWidth === '50px',
                'bg-primary-black': this.currentWidth === '350px',
                'justify-between': this.currentWidth === '350px',
                'px-3': this.currentWidth === '350px'
            }
        }
    }, 
    methods: {
        toggle() {
            if(this.currentWidth === '350px') {
                this.currentWidth = '50px'
                this.subStr = ''
                this.resultList = []
            } else {
                this.currentWidth = '350px'
            }
        }, 
        search() {
            this.resultList = this.allGames.filter(g => g.title.toLowerCase().includes(this.subStr.toLowerCase()))
        }
    }
}
</script>