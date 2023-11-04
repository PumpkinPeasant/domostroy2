<template>
  <header>
    <div class="header__logo">
      <a href="#">
        <img :src="Logo" alt="Домострой лого"/>
        <span>Домострой</span>
      </a>
    </div>
    <nav class="header__menu">
      <ul role="list" class="header__menu-container">
        <li class="header__menu-item"><a href="#">Проекты</a></li>
        <li class="header__menu-item"><a href="#">Ипотека</a></li>
        <li class="header__menu-item"><a href="#">Виды работ</a></li>
        <li class="header__menu-item"><a href="#">Контакты</a></li>
      </ul>
    </nav>
    <i></i>
    <i></i>
    <button class="button-primary">Обратная связь</button>
  </header>
</template>

<script lang="ts" setup>
import Logo from '~/assets/images/logo.svg'

</script>

<style scoped lang="scss">
@import "assets/scss/_variables";

header {
  z-index: 1;
  position: fixed;
  height: $header-width-desktop;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: -webkit-fill-available;

  .header__logo a{
    display: flex;
    gap: 8px;
    align-items: center;
    font-size: 20px;
    font-weight: 700;
  }

  .header__menu {
    &-container {
      display: flex;
      gap: 44px;

      li {
        cursor: pointer;
      }
    }
  }
}

</style>