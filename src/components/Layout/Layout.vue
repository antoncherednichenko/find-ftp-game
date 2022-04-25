<template>
  <div class="bg-primary-black w-screen h-screen">
        <div class="container flex flex-row w-full">
            <Menu />
            <div class="w-full">
                <slot></slot>
            </div>
        </div>
  </div>
</template>

<script>
import Menu from '@/components/Menu/Menu.vue'

export default {
    components: {
        Menu
    }
}
</script>
