<template>
    <div class=" flex flex-col max-w-130-px w-full py-50px gap-28 items-center">
        <Burger />
        <MenuNav />
    </div>
</template>

<script>
import Burger from '@/ui/Burger/Burger.vue'
import MenuNav from '@/components/Menu/MenuNav.vue'

export default {
    components: {
        Burger,
        MenuNav
    }
}
</script>

<style>

</style>