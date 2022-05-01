<template>
    <div class=" flex flex-col max-w-130-px w-full py-50px gap-28 items-center">
        <div>
            <Burger @click.native="toggleMenu" class="lg:hidden block" />
            <div v-if="isBurger" class="w-screen h-screen flex flex-col gap-2 items-center primary-blur absolute screen-center z-30 p-2">
                <div class="w-full flex overflow-y-hidden justify-end px-3 py-2"><CrossBtn @click.native="toggleMenu" class=" text-3xl text-primary-white" /></div>
                <VFilter :isBurger="true" class="z-40" />
                <SideBar :isBurger="true" />
            </div>
        </div>
        <MenuNav />
    </div>
</template>

<script>
import Burger from '@/ui/Burger/Burger.vue'
import MenuNav from '@/components/Menu/MenuNav.vue'
import SideBar  from '@/components/SideBar/SideBar.vue'
import Filter  from '@/components/Filter/Filter.vue'
import CrossBtn from '@/ui/CrossBtn/CrossBtn.vue'

export default {
    components: {
        Burger,
        MenuNav,
        SideBar,
        VFilter: Filter,
        CrossBtn
    },
    data() {
        return {
            isBurger: false
        }
    },
    methods: {
        toggleMenu() {
            this.isBurger = !this.isBurger
        }
    }
}
</script>

<style>

</style>