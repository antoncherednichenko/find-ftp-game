<template>
    <button :class="{ 'text-primary-orange': active, 'text-primary-white': !active }" class="text-lg hover-underline">
        <slot />
    </button>
</template>

<script>
export default {
    props: ['active']
}
</script>