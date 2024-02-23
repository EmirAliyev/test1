<script setup lang="ts">
import type { IProps } from './types'

defineProps<IProps>()
</script>

<template>
  <svg
    class="base-icon"
    xmlns="http://www.w3.org/2000/svg"
  >
    <use :href="`../../icons/icon-sprite.svg#${name}`" />
  </svg>
</template>

<style lang="scss" scoped>
.base-icon {
  display: inline-block;
  height: 1em;
  width: 1em;
  flex-shrink: 0;
  fill: currentColor;
  stroke: currentColor;
  stroke-width: 0;
}
</style>
