<template>
    <div class="w-50px flex flex-col gap-7">
        <NavIcon
            v-for="i in icons"
            :key="i.id"
            :isActive="i.isActive"
            :icon="i.icon"
            @click.native="iconSwitcher(i.id)" 
        />
    </div>
</template>

<script>
import NavIcon from '@/ui/NavIcon/NavIcon.vue'

export default {
    components: { NavIcon },
    data() {
        return {
            icons: [
                { id: 'pc', icon: 'fa-solid fa-computer', isActive: true  },
                { id: 'browser', icon: 'fa-regular fa-window-maximize', isActive: false  },
                { id: 'all', icon: 'fa-regular fa-object-group', isActive: false  }
            ]
        }
    },
    methods: {
        iconSwitcher(id) {
            this.icons = this.icons.map(icon => {
                if(icon.id === id) {
                    return { ...icon, isActive: true }
                } else {
                    return { ...icon, isActive: false }
                }
            })
        }
    }
}
</script>