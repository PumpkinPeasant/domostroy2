<template>
  <footer>
    <section class="footer-info">
      <NuxtLink to="#projects" class="text link">Проекты</NuxtLink>
      <NuxtLink to="#mortgage" class="text link">Ипотека</NuxtLink>
      <NuxtLink to="#services" class="text link">Виды работ</NuxtLink>
      <NuxtLink to="#contacts" class="text link">Контакты</NuxtLink>
      <p class="text">Написать нам: <a href="mailto:domostroi@lenta.ru" class="email link">domostroi@lenta.ru</a></p>
      <NuxtLink class="text"></NuxtLink>
      <media-icon
          alt="vk"
          :src="VK"
          href="https://vk.com/domostroi_29"/>
      <media-icon
          alt="telegram"
          :src="Telegram"
          href="https://t.me/domostroi29"/>
    </section>
    <section class="footer-logo">
      <img src="@/assets/icons/footer-logo.svg" alt="">
    </section>
  </footer>
</template>

<script setup>

import Telegram from "~/assets/icons/telegram.svg";
import VK from "~/assets/icons/vk.svg";
import MediaIcon from "~/components/index/UI/MediaIcon.vue";
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
</style>