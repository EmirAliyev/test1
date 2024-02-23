<script setup lang="ts">
import { useRouter } from 'vue-router'
import UButton from '@/common/components/ui/UButton/index.vue'

const router = useRouter()

const subscribe = (): void => {
  router.push({ name: 'subscribe' })
}
</script>

<template>
  <div class="subscribe">
    <h1 class="subscribe-title">Полная защита от любых повреждений за 9 рублей в день</h1>
    <ul class="subscribe-list">
      <li class="subscribe-list__item">– Разбился экран</li>
      <li class="subscribe-list__item">– Залили водой</li>
      <li class="subscribe-list__item">– Треснул корпус</li>
      <li class="subscribe-list__item">– Сломался от замыкания</li>
    </ul>
    <UButton class="subscribe-button" theme="light" @click="subscribe">Подключить</UButton>
    <img class="subscribe-background" src="@/common/assets/img/subscribe_back.png" />
    <div>
      <span class="subscribe-info"
        >Нажимая кнопку «Подключить»,<br />
        вы соглашаетесь с условиями оферты
      </span>
    </div>
  </div>
</template>

<style scoped lang="scss">
.subscribe {
  padding: 1.6875rem 1.3125rem;
  min-height: 28.1875rem;
  background: $dark;
  position: relative;

  &-button {
    margin: 0 auto;
    margin-bottom: 0.5625rem;
  }

  &-title {
    max-width: 20.8125rem;
    margin-bottom: 1.125rem;
    @include font(400, 1.75rem, 2.25rem, $white);
  }

  &-list {
    @include font(400, 1rem, 1.375rem, $white);
    margin-bottom: 1.6875rem;
  }

  &-info {
    display: block;
    margin: 0 auto;
    width: 13.875rem;
    text-align: center;
    margin-bottom: 1.125rem;
    @include font(400, 0.8125rem, 1.375rem, $dark-gray);
  }

  &-background {
    width: 100%;
    position: absolute;
    bottom: 0;
    left: 0;
  }
}
</style>
