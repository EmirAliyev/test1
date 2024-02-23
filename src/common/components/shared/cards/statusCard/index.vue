<script setup lang="ts">
import type { IProps } from './types'
import { computed } from 'vue'
import UButton from '@/common/components/ui/UButton/index.vue'

const emit = defineEmits(['update'])
const props = withDefaults(defineProps<IProps>(), {
  status: 'error',
})

const imgs = {
  success: new URL('@/common/assets/img/pandaSuccess.png', import.meta.url),
  error: new URL('@/common/assets/img/pandaError.png', import.meta.url),
}

const imgSrc = computed((): string => {
  return imgs[props.status].toString()
})

const handleUpdate = () => {
  emit('update')
}
</script>

<template>
  <div class="status">
    <slot></slot>
    <img class="status-img" :src="imgSrc" />
    <UButton v-if="!$slots.trigger" @click="handleUpdate"><slot name="buttonText"></slot></UButton>
    <slot name="trigger"></slot>
  </div>
</template>

<style scoped lang="scss">
.status {
  padding: 0 1.125rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1.6875rem;
  @include font(600, 1.5rem, 1.75rem, $dark);

  &-img {
    width: 38.5%;
  }
}
</style>
