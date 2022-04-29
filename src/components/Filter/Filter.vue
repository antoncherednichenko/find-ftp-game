<template>
    <div class="w-full sticky z-10 top-0 bg-primary-grey">
        <div class="w-full max-w-screen-md flex justify-between items-center f-p">
            <WhiteLink 
                @click.native="toggleSort(e.id)" 
                v-for="e in filterList" 
                :key="e.id"
                :active="currentSort === e.id"
            >{{ e.title }}</WhiteLink>
            <div class="max-w-150px w-full">
                <UiSelect
                    :current="'Genre'" 
                    :valueList="genreList"
                />
            </div>
        </div>
    </div>
</template>

<script>
import WhiteLink from '@/ui/WhiteLink/WhiteLink.vue'
import UiSelect from '@/ui/Select/UiSelect.vue'

export default {
    components: {
        WhiteLink,
        UiSelect
    },
    computed: {
        filterList() { return this.$store.state?.filter?.sortList },
        genreList() { return this.$store.state?.filter?.genreList },
        currentSort() { return this.$store.state?.filter?.currentSort }
    },
    methods: {
        toggleSort(id) {
            this.$store.commit('filter/setSort', id)
        }
    }
}
</script>