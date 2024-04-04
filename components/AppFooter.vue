<template>
  <footer>
    <section class="footer-info">
      <NuxtLink to="#projects" class="text link">Проекты</NuxtLink>
      <NuxtLink to="#mortgage" class="text link">Ипотека</NuxtLink>
      <NuxtLink to="#services" class="text link">Виды работ</NuxtLink>
      <NuxtLink to="#contacts" class="text link">Контакты</NuxtLink>
      <p class="text">Написать нам: <a href="mailto:domostroi@lenta.ru" class="email link">domostroi@lenta.ru</a></p>
      <NuxtLink class="text"></NuxtLink>
      <div class="icon">
        <a href="https://t.me/domostroi29" class="icon-link">
          <img src="@/assets/icons/telegram.svg" alt="telegram">
        </a>
      </div>
      <div class="icon">
        <a href="https://vk.com/domostroi_29" class="icon-link">
          <img src="@/assets/icons/vk.svg" alt="vk">
        </a>
      </div>
    </section>
    <section class="footer-logo">
      <img src="@/assets/icons/footer-logo.svg" alt="">
    </section>
  </footer>
</template>

<script setup>

</script>

<style scoped lang="scss">
@import "assets/scss/_colors";

.footer-info {
  display: grid;
  grid-template-columns: 1fr 1fr 2fr 1fr;
  grid-template-rows: repeat(2, auto);
  gap: 20px;
  grid-auto-flow: column;
  margin-bottom: 40px;
  align-items: center;
}

.text {
  font-size: 16px;
  color: $grey-secondary;
}

.link {
  &:hover, &:active {
    color: $dark-primary;
    font-weight: 600;
  }
}

.email {
  color: $dark-primary;
}

.footer-logo {
  height: 40px;
  background-color: $dark-primary;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}

.icon {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: end;

  .icon-link {
    transform-origin: center center;
    transition: transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);

    &:hover, &:active {
      transform: scale(1.2);
    }
  }
}
</style>