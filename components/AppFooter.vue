<template>
  <footer>
    <section class="footer-info">
      <NuxtLink to="#projects" class="text">Проекты</NuxtLink>
      <NuxtLink to="#mortgage" class="text">Ипотека</NuxtLink>
      <NuxtLink to="#services" class="text">Виды работ</NuxtLink>
      <NuxtLink to="#contacts" class="text">Контакты</NuxtLink>
      <p class="text">Написать нам: <a href="mailto:domostroi@lenta.ru" class="email">domostroi@lenta.ru</a></p>
      <NuxtLink class="text"></NuxtLink>
      <div>
        <a href="https://t.me/domostroi29">
          <img src="@/assets/icons/telegram.svg" alt="telegram">
        </a>
      </div>
      <div>
        <a href="https://vk.com/domostroi_29">
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

<style scoped>
.footer-info {
  display: grid;
  grid-template-columns: 1fr 1fr 3fr 1fr;
  grid-template-rows: repeat(2, auto);
  gap: 20px;
  grid-auto-flow: column;
  margin-bottom: 40px;
  align-items: center;
}
.text{
  font-size: 16px;
  color: #77797D;
  text-align: center;
}
.email{
  color: #282A2E;
}
.footer-logo{
  height:50px;
  background-color: #282A2E;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}
</style>