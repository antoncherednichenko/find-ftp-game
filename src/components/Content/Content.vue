<template>
    <div class=" w-full bg-primary-grey rounded-l-40px min-h-screen">
        <div class=" px-7 overflow-y-auto min-h-screen">
            <VFilter />
        </div>
    </div>
</template>

<script>
import Filter from '@/components/Filter/Filter.vue'

export default {
    components: {
        VFilter: Filter
    }
}
</script>