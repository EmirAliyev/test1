<script setup lang="ts">
import appLayout from './common/layouts/appLayout.vue'
</script>

<template>
  <appLayout>
    <RouterView v-slot="{ Component, route }">
      <div :key="route.name">
        <component :is="Component"></component>
      </div>
    </RouterView>
  </appLayout>
</template>
