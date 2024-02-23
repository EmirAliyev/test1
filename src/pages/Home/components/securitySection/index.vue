<template>
  <div class="security">
    <h1 class="security-title">Защита вашего телефона</h1>
    <p class="security-sub-title">Полная защита от любых повреждений за 9 рублей в день</p>
    <img class="security-img" src="@/common/assets/img/sofa.png" />
  </div>
</template>

<style scoped lang="scss">
.security {
  padding: 1.125rem;
  min-height: 24.25rem;

  &-img {
    width: 97%;
  }
  
  &-title {
    max-width: 15.125rem;
    @include font(700, 1.75rem, 1.75rem);
    margin-bottom: 1.125rem;
    font-family: 'StandardCTStencil-Bold';
  }
  &-sub-title {
    max-width: 20.875rem;
  }
}
</style>
