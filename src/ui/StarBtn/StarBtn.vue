<template>
    <button>
        <i :class="starStyle" class="fa-star text-primary-orange hover-scale"></i>
    </button>
</template>

<script>
export default {
    props: ['active'],
    computed: {
        starStyle() {
            return {
                'fa-regular': !this.active,
                'fa-solid': this.active,
            }
        }
    }

}
</script>