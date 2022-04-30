<template>
    <div class="h-screen py-50px px-5 bg-primary-black max-w-md w-full">  
        <Favorites />
    </div>
</template>

<script>
import Favorites from '@/components/SideBar/Favorites.vue'

export default {
    components: {
        Favorites
    }
}
</script>