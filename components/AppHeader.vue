<template>
  <header>
    <div class="header__logo">
      <NuxtLink to="#top">
        <img :src="Logo" alt="Домострой лого"/>
        <span>Домострой</span>
      </NuxtLink>
    </div>
    <nav class="header__menu">
      <ul class="header__menu-container">
        <NuxtLink
            v-for="link of links"
            :key="link.to"
            :to="link.to"
            class="header__menu-item"
            :class="{active: router.currentRoute.value.hash === link.to}"
        >
          {{ link.pageTitle }}
        </NuxtLink>
      </ul>
    </nav>
    <button class="button-primary">Обратная связь</button>
  </header>
</template>

<script setup>
import Logo from '~/assets/images/logo.svg'

const router = useRouter();
const links = ref([
  {
    pageTitle: "Проекты",
    to: "#projects",
  },
  {
    pageTitle: "Ипотека",
    to: "#mortgage",
  },
  {
    pageTitle: "Виды работ",
    to: "#services",
  },
  {
    pageTitle: "Контакты",
    to: "#contacts",
  }
]);


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
  background-color: #F8FEFE;

  .header__logo a {
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
    }

    &-item {
      cursor: pointer;
      font-size: 16px;
      color: #77797D;
    }
  }

  .active {
    color: #282A2E;
  }

}

</style>