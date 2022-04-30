<template>
    <div>
        <carousel 
            :per-page="1"
            :adjustableHeight="true"
            :centerMode="true"
            :paginationEnabled="true"
        >
            <slide v-for="s in items" :key="s.id">
                <img :src="s.image" alt="game scene screenshot">
            </slide>
        </carousel>
    </div>
</template>

<script>

export default {
    props: {
        items: {
            type: Array
        }
    }
}
</script>
