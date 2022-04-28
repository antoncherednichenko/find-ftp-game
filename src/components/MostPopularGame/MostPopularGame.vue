<template>
    <div class="container rounded-2xl h-28 bg-primary-black">
        <img :src="game.thumbnail" alt="most popular game avatar">
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