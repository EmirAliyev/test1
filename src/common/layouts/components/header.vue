<script setup lang="ts">
import UIcon from '@/common/components/ui/UIcon/index.vue'
import { useRouter } from 'vue-router'
const router = useRouter()

const goHome = () => {
  router.push({ name: 'home' })
}
</script>

<template>
  <header class="header">
    <div class="header-wrapper">
      <h1 class="header-title" @click="goHome">Simple Trade</h1>
      <span class="header-sub-title">Портал честных цен</span>
    </div>
    <UIcon class="header-icon" name="user" />
  </header>
</template>

<style scoped lang="scss">
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
