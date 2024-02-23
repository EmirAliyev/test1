<script setup lang="ts">
import type { IProps } from './types'

withDefaults(defineProps<IProps>(), {
  theme: 'dark',
  disabled: false,
  type: 'button',
})
</script>

<template>
  <button
    :class="[theme === 'light' ? 'base-button-light' : '']"
    :disabled="disabled"
    class="base-button"
    :type="type"
  >
    <slot></slot>
  </button>
</template>

<style scoped lang="scss">
.base-button {
  display: flex;
  align-items: center;
  justify-content: center;
  width: max-content;
  padding: 0.8125rem 2.1875rem;
  border-radius: 1.5rem;
  background: $dark;
  border: 0px;
  @include font(700, 1rem, 1.375rem, $white);

  &-light {
    background: $white;
    color: $dark;
  }
}
</style>
