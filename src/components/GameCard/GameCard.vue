<template>
    <div class=" px-4 w-screen h-screen overflow-x-hidden absolute z-50 top-0 left-0 primary-blur">
        <div class="2xl:px-14 2xl:py-8 absolute flex justify-end w-full px-8">
            <CrossBtn
                class="text-6xl text-primary-white"
                @click.native="closeCard" 
            />
        </div>
        <div class=" rounded-lg p-5 max-w-7xl w-full max-h-85vh screen-center overflow-y-auto bg-primary-white scrollbar scrollbar-thumb-primary-orange scrollbar-thin">
            <div class="flex justify-center">
                <a class="text-primary-black text-2xl font-bold underline hover:text-primary-orange" :href="game.game_url" target="_blank">
                    {{ game.title }}
                </a>
            </div>
            <div class="w-full py-5">
                <CardTitle>Description</CardTitle>
                <div class="lg:flex justify-between items-center">
                    <p class=" max-w-xl w-full">{{ game.description }}</p>
                    <img class="h-80 rounded" :src="game.thumbnail" alt="game">
                </div>
            </div>
            <div v-if="game.screenshots.length" class="w-full py-5">
                <CardTitle>Screenshots</CardTitle>
                <ScreenShots :items="game.screenshots"/>
            </div>
            <div class="w-full py-5 lg:flex justify-between items-center">
                <InfoTable 
                    v-if="game.minimum_system_requirements" 
                    :info="game.minimum_system_requirements"
                    title="Minimum system requirements"
                />
                <InfoTable
                    v-if="Object.keys(gameInfo).length"
                    :info="gameInfo"
                    title="Information" 
                />
            </div>
            <div class="w-full py-5">
                <a class="text-primary-white font-semibold text-center p-2 w-full rounded bg-primary-orange block center" :href="game.game_url" target="_blank">
                    Play
                </a>
            </div>
        </div>
    </div>
</template>

<script>
import CrossBtn from '@/ui/CrossBtn/CrossBtn.vue'
import InfoTable from '@/components/GameCard/InfoTable.vue'
import CardTitle from '@/ui/CardTitle/CardTitle.vue'
import ScreenShots from '@/ui/Slider/Slider.vue'

export default {
    props: ['game'],
    components: {
        CrossBtn,
        InfoTable,
        CardTitle,
        ScreenShots
    },
    methods: {
        closeCard() {
            this.$store.commit('game/toggleCard', false)
        }
    },
    computed: {
        gameInfo() {
            if(this.game) {
                return {
                    developer: this.game.developer,
                    platform: this.game.platform,
                    publisher: this.game.publisher,
                    status: this.game.status,
                    genre: this.game.genre
                }
            } else {
                return {}
            }
        }
    }
}
</script>