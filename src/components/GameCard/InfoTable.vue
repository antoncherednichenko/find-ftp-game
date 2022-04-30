<template>
    <table class="w-1/2">
        <tbody v-if="keys">
            <tr><td colspan="2"><CardTitle>{{ title }}</CardTitle></td></tr>
            <tr v-for="(k, i) in keys" :key="i">
                <td class="font-bold p-1">{{ k | capitalizeFirsLetter }}:</td>
                <td class="p-1">{{ info[k] }}</td>
            </tr>
        </tbody>
    </table>
</template>

<script>
import CardTitle from '@/ui/CardTitle/CardTitle.vue'

export default {
    components: {
        CardTitle
    },
    props: {
        info: {
            type: Object
        },
        title: {
            type: String
        }
    },
    computed: {
        keys() {
            if(this.info) {
                return Object.keys(this.info)
            } else {
                return []
            }
        }
    }
}
</script>