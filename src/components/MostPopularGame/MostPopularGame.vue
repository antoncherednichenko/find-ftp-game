<template>
    <div class="rounded-2xl w-full p-5 bg-primary-black">
        <div class="flex justify-between">
            <div>
                <h2 class="text-primary-white text-4xl font-semibold">
                    {{ game.title }}
                </h2>
                <p class="text-primary-white text-2xl py-5 opacity-30">
                    {{ game.short_description }}
                </p>
                <div class="py-5">
                    <a class=" btn-primary" :href="game.game_url" target="_blank">Play now</a>
                </div>
                <div class="text-primary-white py-5">
                    <p><span class="opacity-30">Genre:</span> {{ game.genre }}</p>
                    <p><span class="opacity-30">Platform:</span> {{ game.platform }}</p>
                    <p><span class="opacity-30">Release date:</span> {{ game.release_date | dateParser }}</p>
                </div>
            </div>
            <img class="block h-80 rounded-lg border-solid border border-primary-white border-opacity-30 cursor-pointer" :src="game.thumbnail" alt="most popular game avatar">
        </div>
    </div>
</template>

<script>
export default {
    props: ['game'],
    computed: {
        bgImage() { return `bg-[url(${this.game.thumbnail})]` }
    },
    mounted() {
        console.log(this.game)
    }
}
</script>