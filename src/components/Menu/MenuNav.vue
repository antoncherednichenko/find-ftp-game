<template>
    <div class="w-50px flex flex-col gap-7">
        <button @click="iconSwitcher('all')">dss</button>
        <NavIcon
            v-for="i in icons"
            :key="i.id"
            :icon="i.icon"
            :isActive="i.isActive"
            @click="iconSwitcher(i.id)" 
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
                { id: 'pc', icon: 'fa-regular fa-computer', isActive: true  },
                { id: 'browser', icon: 'fa-regular fa-browsers', isActive: false  },
                { id: 'all', icon: 'fa-regular fa-object-union', isActive: false  }
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
            console.log(this.icons)
        }
    }
}
</script>