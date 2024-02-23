<script setup lang="ts">
import { useRoute } from "vue-router";
const route = useRoute();
console.log(route)
</script>

<template>
    <component :is="route.meta.layoutComponent">
        <slot />
    </component>
</template>