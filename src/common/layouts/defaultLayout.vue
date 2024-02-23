<script setup lang="ts">
import LayoutHeader from '@/common/layouts/components/header.vue'
</script>

<template>
  <div class="wrapper">
    <LayoutHeader />
    <RouterView />
  </div>
</template>

<style scoped lang="scss">
.wrapper {
  width: 100%;
  height: 100%;
}

.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 1.125rem;
  height: 3.0625rem;

  &-wrapper {
    position: relative;
    height: 2rem;
  }

  &-title {
    @include font(600, 1.25rem, 1.25rem);
    font-family: 'Roboto Slab';
  }
  &-sub-title {
    position: absolute;
    bottom: 0;
    right: 0;
    @include font(400, 0.375rem, 0.4375rem);
  }

  &-icon {
    color: $dark;
    font-size: 1.6875rem;
  }
}
</style>
