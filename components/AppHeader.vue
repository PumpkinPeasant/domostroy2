<template>
  <header :class="navClass">
    <div class="header__logo">
      <NuxtLink to="/">
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
            :class="{active: router.currentRoute.value.hash === link.to}">
          {{ link.pageTitle }}
        </NuxtLink>
      </ul>
    </nav>

    <a class="contact_section" href="tel:+7 (911) 563-43-75">
      <img src="../assets/icons/phone-white.svg" alt="phone">
      +7 (911) 563-43-75
    </a>
  </header>
</template>

<script setup lang="ts">
import {ref} from 'vue'
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

const navClass = ref('')

onMounted(() => {
  {
    window.addEventListener("scroll", handleScroll);
  }
})

onBeforeUnmount(() => {
  {
    window.removeEventListener("scroll", handleScroll);
  }
})

function handleScroll(event) {
  if (event && window.scrollY > 0) {
    navClass.value = "nav-scrolled";
  } else {
    navClass.value = "";
  }
}
</script>

<style scoped lang="scss">
@import "assets/scss/_variables";

header {
  width: 100%;
  background-color: transparent;
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: space-between;
  transition: 0.6s;
  z-index: 1;

  padding-top: 4rem;
  padding-bottom: 4rem;

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

.toggleButton {
  display: none;
}

.nav-scrolled {
  padding-top: 2rem;
  padding-bottom: 2rem;
  background-color: #FEFEFF;
}

.contact_section {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 12px 30px;
  background-color: black;
  color: white;
  font-size: 16px;

  img {
    margin-right: 10px;
  }
}
</style>
