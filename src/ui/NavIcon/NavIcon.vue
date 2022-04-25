<template>
    <button 
            :class="{ 'bg-primary-grey': !isActive, 'bg-primary-orange': isActive }" 
            class="w-50px h-50px rounded-xl flex justify-center items-center cursor-pointer text-primary-white"
        >
        <i :class="icon"></i>
    </button>
</template>

<script>
export default {
    props: {
        icon: {
            type: String,
            required: true,
            default: 'fa-regular fa-alien-8bit'
        },
        isActive: {
            type: Boolean,
            required: false,
            default: false
        }
    }
}
</script>
