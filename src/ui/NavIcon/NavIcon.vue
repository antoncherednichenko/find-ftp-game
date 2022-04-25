<template>
    <button 
            :class="{ 'bg-primary-grey': !isActive, 'bg-primary-orange': isActive }" 
            class="w-50px h-50px rounded-xl flex justify-center items-center cursor-pointer text-primary-white"
        >
        <i class=" text-2xl" :class="icon"></i>
    </button>
</template>

<script>
export default {
    props: {
        icon: {
            type: String,
            required: false,
            default: ''
        },
        isActive: {
            type: Boolean,
            required: false,
            default: false
        }
    }
}
</script>
