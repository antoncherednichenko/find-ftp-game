<template>
  <div class="bg-primary-black w-screen h-screen">
        <div class="container between">
            <Menu />
            <div>
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
