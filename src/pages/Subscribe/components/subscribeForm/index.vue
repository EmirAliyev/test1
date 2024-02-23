<script setup lang="ts">
import UInput from '@/common/components/ui/UInput/index.vue'
import UButton from '@/common/components/ui/UButton/index.vue'
import UIcon from '@/common/components/ui/UIcon/index.vue'
import { useVuelidate } from '@vuelidate/core'
import { helpers } from '@vuelidate/validators'
import { TestAPI } from '@/api'
import { reactive, computed } from 'vue'
import type { IRules } from './types'

const emit = defineEmits(['updateStatus'])

const subscribeForm = reactive({
  name: '',
  email: '',
  phone: '',
})
const subscribe = async () => {
  const isCorrect = await v$.value.$validate()
  if (!isCorrect) {
    return
  }

  const data = await TestAPI.postTest(subscribeForm)
  if (data.status === 'error') {
    emit('updateStatus', true)
    return
  }

  emit('updateStatus', false)
  v$.value.$reset()
}

const rules: IRules = computed(() => {
  return {
    rulesForm: {
      name: {
        required: helpers.withMessage(
          () => 'Поле не заполнено',
          () => subscribeForm.name.trim().length > 0
        ),
      },

      email: {
        required: helpers.withMessage(
          () => 'Введите корректный email-адрес',

          () => /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/.test(subscribeForm.email)
        ),
      },
      phone: {
        required: helpers.withMessage(
          () => 'Введите российский формат номера',
          () => /^7[0-9]{10}$/.test(subscribeForm.phone.split(' ').join(''))
        ),
      },
    },
  }
})
const v$ = useVuelidate(rules, subscribeForm)
</script>
<template>
  <form class="form" @submit.prevent>
    <h1 class="form-title">Для активации подписки заполните форму</h1>
    <div class="inputs">
      <UInput
        v-model:value="subscribeForm.name"
        :error-message="v$.rulesForm?.name?.$errors[0]?.$message"
        placeholder="Ваше имя"
        clearable
      />
      <UInput
        v-model:value="subscribeForm.email"
        :error-message="v$.rulesForm?.email?.$errors[0]?.$message"
        placeholder="Email"
        clearable
      ></UInput>
      <UInput
        v-model:value="subscribeForm.phone"
        :error-message="v$.rulesForm?.phone?.$errors[0]?.$message"
        placeholder="Номер телефона"
        clearable
      />
    </div>
    <UButton class="form-button" @click="subscribe">Подключить</UButton>
  </form>
</template>

<style scoped lang="scss">
.form {
  padding: 1.6875rem 1.125rem;

  &-title {
    @include font(600, 1.5rem, 1.5rem);
    margin-bottom: 1.125rem;
  }

  &-button {
    margin: 0 auto;
  }
}
.inputs {
  display: flex;
  flex-direction: column;
  gap: 0.5625rem;
  margin-bottom: 1.6875rem;
}
</style>
