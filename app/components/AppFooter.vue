<template>
  <footer>
    <section class="footer-info">
      <NuxtLink to="#projects" class="text link footer-info_element">Проекты</NuxtLink>
      <NuxtLink to="#mortgage" class="text link footer-info_element">Ипотека</NuxtLink>
      <NuxtLink to="#services" class="text link footer-info_element">Виды работы</NuxtLink>
      <NuxtLink to="#contacts" class="text link footer-info_element">Контакты</NuxtLink>
      <p class="text footer-info_element">Написать нам: <a href="mailto:domostroi@lenta.ru" class="email link">domostroi@lenta.ru</a>
      </p>
      <div></div>
      <media-icon
          class="footer-info_element"
          alt="vk"
          :src="VK"
          href="https://vk.com/domostroi_29"/>
      <media-icon
          class="footer-info_element"
          alt="telegram"
          :src="Telegram"
          href="https://t.me/domostroi29"/>
    </section>
    <section>
     <div class="price_star">* Информация на сайте не является публичной офертой</div>
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
.footer-info {
  display: grid;
  grid-template-columns: 1fr 1fr 2fr 1fr;
  grid-template-rows: repeat(2, auto);
  gap: 20px;
  grid-auto-flow: column;
  margin: 20px 0;
  align-items: center;
}

@media (max-width: 900px) {
  .footer-info {
    grid-template-columns: 1fr 1fr 1.5fr 1fr;
    grid-template-rows: repeat(3, auto);
    grid-auto-flow: row;
    gap: 5px;
    grid-row-gap: 20px;
    text-align: center;
    margin: 10px 0;
  }
  .footer-info_element:nth-child(5) {
    text-align: center;
    grid-column: span 4;
  }
  .footer-info_element:nth-child(8) {
    display: none;
  }
  .footer-info_element:nth-child(7) {
    display: none;
  }
}

.text {
  font-size: 16px;
  color: #77797DFF;
}

.email {
  color: #282A2EFF;
}

.footer-logo {
  height: 40px;
  background-color: #282A2EFF;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
}
.price_star {
  color: #77797D;
  font-weight: normal;
  font-size: 12px;
  text-align: center;
}
</style>