<script setup lang="ts">
import type { IProps } from './types'
import UIcon from '@/common/components/ui/UIcon/index.vue'

const value = defineModel('value', { type: String })

withDefaults(defineProps<IProps>(), {
  type: 'text',
  disabled: false,
  clearable: false,
})

const clearValue = () => {
  value.value = ''
}
</script>

<template>
  <div class="base-input-wrapper">
    <div
      class="base-input-content"
      :class="[!!errorMessage ? 'base-input-content-validation__error' : '']"
    >
      <slot v-if="$slots.prefix" name="prefix"></slot>
      <input class="base-input" v-model="value" placeholder=" " :disabled="disabled" :type="type" />
      <span class="base-input-placeholder">{{ placeholder }}</span>
      <slot v-if="$slots.suffix" name="suffix"></slot>
      <UIcon v-if="clearable" class="base-input-clear" name="close" @click="clearValue" />
    </div>
    <span v-if="errorMessage" class="base-input-content-error__text">
      {{ errorMessage }}
    </span>
  </div>
</template>

<style scoped lang="scss">
.base-input {
  height: 3.75rem;
  padding: 0.5625rem 1.125rem;
  border: 0px;
  width: 100%;
  border-radius: 0.5rem;

  @include font(400, 1rem, 1.375rem, $dark);

  &::placeholder {
    color: $gray;
  }

  &-content {
    position: relative;
    border-radius: 0.5rem;
    outline: 1px solid $gray;

    &-error__text {
      display: inline-block;
      margin-top: 0.5625rem;
      @include font(400, 0.8125rem, 1.125rem, $red);
    }

    &-validation__error {
      outline: 1px solid $red;
      border-radius: 0.5rem;
    }
  }

  &-placeholder {
    @include font(400, 1rem, 1.375rem, $gray);
    pointer-events: none;
    position: absolute;
    left: 1.125rem;
    top: 50%;
    transform: translateY(-50%);
    transition: 0.2s;
    transition-timing-function: ease;
    transition-timing-function: cubic-bezier(0.25, 0.1, 0.25, 1);
  }

  &-clear {
    position: absolute;
    top: 50%;
    color: $gray;
    right: 1rem;
    font-size: 1.5rem;
    transform: translateY(-50%);
  }

  &:focus {
    padding-top: 1.8125rem;
    outline: 1px solid $light-blue;
    box-shadow: 0px 0px 0px 4px #3fcbff33;
  }

  &:focus + span,
  &:not(:placeholder-shown) + span {
    top: 0.5625rem;
    transform: translateY(0);
    @include font(400, 0.8125rem, 1.125rem, $gray);
  }

  &:not(:placeholder-shown) {
    padding-top: 1.8125rem;
  }
}
</style>
