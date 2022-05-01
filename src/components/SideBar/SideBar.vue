<template>
    <div :class="{ hidden: !isBurger }" class="lg:max-w-300px max-w-xs md:block h-screen py-50px px-5 bg-primary-black  w-full">  
        <Favorites />
    </div>
</template>

<script>
import Favorites from '@/components/SideBar/Favorites.vue'

export default {
    components: {
        Favorites
    },
    props: {
        isBurger: {
            type: Boolean,
            default: false
        }
    }
}
</script>