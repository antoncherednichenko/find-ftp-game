<template>
    <div class="w-full relative">
        <button @click="showList" class="text-primary-white text-lg cursor-pointer">
            {{ currentValue }}
            <i 
                :class="{ 'text-primary-orange': isListVisible, 'text-primary-white': !isListVisible }" 
                class="fa-solid fa-dice-d6"
            ></i>
        </button>
        <ul v-if="isListVisible" class="absolute h-56 overflow-y-auto w-56 bg-primary-white rounded">
            <li 
                @click="chooseGenre(e)" 
                class="w-full p-1 text-lg hover-select text-center cursor-pointer" 
                v-for="(e, i) in valueList" 
                :key="i + e"
            >{{ e }}</li>
        </ul>
    </div>
</template>

<script>
export default {
    props: {
        current: { type: String },
        valueList: { type: Array }
    },
    data() {
        return {
            currentValue: this.valueList[0] || 'Genre',
            isListVisible: false
        }
    },
    methods: {
        showList() {
            this.isListVisible = !this.isListVisible
        },
        chooseGenre(genre) {
            this.$store.commit('filter/setGenre', genre)
            this.currentValue = genre
            this.isListVisible = false
        }
    }
}
</script>