<script setup lang="ts">
import subscribeForm from '@/pages/Subscribe/components/subscribeForm/index.vue'
import statusCard from '@/common/components/shared/cards/statusCard/index.vue'
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const isAdmitted = ref(false)
const isError = ref(false)
const router = useRouter()
const handleStatus = (status: boolean) => {
  if (status) {
    isAdmitted.value = true
    isError.value = status
    return
  }
  isAdmitted.value = true
}

const goToPage = (pathName: string) => {
  router.push({ name: pathName })
}
</script>

<template>
  <subscribeForm @update-status="handleStatus" v-if="!isAdmitted" />
  <statusCard
    class="response-status"
    status="success"
    v-if="isAdmitted && !isError"
    @update="goToPage('home')"
  >
    <h1 class="status-title__success status-title">Поздравляем, теперь ваш телефон защищен</h1>
    <template #buttonText>Перейти в личный кабинет</template>
  </statusCard>
  <statusCard
    class="response-status"
    status="error"
    v-else-if="isAdmitted && isError"
    @update="goToPage('home')"
  >
    <h1 class="status-title__error status-title">Что-то пошло не так</h1>
    <template #buttonText>Вернуться назад</template>
  </statusCard>
</template>

<style scoped lang="scss">
.status-title {
  text-align: center;

  &__success {
    width: 16.75rem;
  }
}

.response-status {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}
</style>
