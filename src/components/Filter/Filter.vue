<template>
    <div class="w-full">
        <div class="w-full max-w-screen-md flex justify-between items- py-50px">
            <WhiteLink v-for="e in filterList" :key="e.id">{{ e.title }}</WhiteLink>
        </div>
    </div>
</template>

<script>
import WhiteLink from '@/ui/WhiteLink/WhiteLink.vue'

export default {
    components: {
        WhiteLink
    },
    computed: {
        filterList() { return this.$store.state?.filter?.sortList }
    }
}
</script>