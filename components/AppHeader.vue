<template>
  <header :class="navClass">
    <div class="header__logo">
      <NuxtLink to="/">
        <img :src="Logo" alt="Домострой лого"/>
        <span>Домострой</span>
      </NuxtLink>
    </div>
    <nav v-if="!mobileSize" class="header__menu">
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
    <a v-if="!mobileSize" class="contact_section button-primary" href="tel:+7 (911) 563-43-75">
      <img src="../assets/icons/phone-white.svg" alt="phone">
      +7 (911) 563-43-75
    </a>
    <div
        v-if="mobileSize"
        @click="toggleMenu"
        class="menu"
        style="cursor: pointer">
      <img src="@/assets/icons/header/menu.svg" alt="menu">
    </div>
  </header>
  <Transition :duration="550" name="nested">
    <div
        v-if="openMenuFlag"
        class="sidebar">
      <div class="sidebar-header">
        <div class="header__logo">
          <NuxtLink to="/">
            <img :src="Logo" alt="Домострой лого"/>
            <span>Домострой</span>
          </NuxtLink>
        </div>
        <div class="menu_icon" @click="toggleMenu">
          <arrow/>
        </div>
      </div>
      <NuxtLink
          v-for="link of links"
          @click="toggleMenu"
          :key="link.to"
          :to="link.to"
          class="sidebar_menu"
          :class="{active: router.currentRoute.value.hash === link.to}"
      >
        {{ link.pageTitle }}
      </NuxtLink>
    </div>
  </Transition>

</template>

<script setup lang="ts">
import {ref, watch} from 'vue'
import Logo from '~/assets/images/logo.svg'
import Arrow from "~/components/index/UI/Arrow.vue";

const router = useRouter();
const mobileSize = ref(true)
const openMenuFlag = ref(false)
const navClass = ref('')

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


onMounted(() => {
  window.addEventListener("scroll", handleScroll);
  window.scrollY > 0 ? navClass.value = "nav-scrolled" : ''
  window.addEventListener("resize", handleWidth);
  handleWidth()
})

onBeforeUnmount(() => {
  window.removeEventListener("scroll", handleScroll);
})

function handleScroll(event) {
  if (event && window.scrollY > 0) {
    navClass.value = "nav-scrolled";
  } else {
    navClass.value = "";
  }
}

function toggleMenu() {
  openMenuFlag.value = !openMenuFlag.value
  const body = document.querySelector('body')
  if (openMenuFlag.value) {
    body.style.overflow = "hidden"
  } else {
    body.style.overflow = "auto"
  }
}

function handleWidth() {
  let width = window.innerWidth
  mobileSize.value = width < 1000;
}
</script>

<style scoped lang="scss">
@import "assets/scss/_variables";
@import "assets/scss/_colors";

header {
  width: 100%;
  background-color: transparent;
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: space-between;
  transition: 0.6s;
  z-index: 3;

  padding-top: 4rem;
  padding-bottom: 4rem;

  .header__menu {
    &-container {
      display: flex;
      gap: 44px;
    }

    &-item {
      cursor: pointer;
      font-size: 16px;
      color: $grey-secondary;
      transition: font-weight 0.2s ease;

      &:hover, &:active {
        color: $dark-primary;
      }
    }
  }

  .active {
    color: $dark-primary;
    font-weight: 600;
  }

  @media (max-width: map-get($grid-breakpoints, md)) {
    padding-top: 3rem;
    padding-bottom: 3rem;
  }
}

.header__logo a {
  display: flex;
  gap: 8px;
  align-items: center;
  font-size: 20px;
  font-weight: 700;
}

.toggleButton {
  display: none;
}

.nav-scrolled {
  padding-top: 2rem;
  padding-bottom: 2rem;
  background-color: $background;

  @media (max-width: map-get($grid-breakpoints, md)) {
    padding-top: 1.25rem;
    padding-bottom: 1.25rem;
  }
}

.contact_section {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 12px 30px;
  font-size: 16px;

  img {
    margin-right: 10px;
  }
}

.menu {
  transition: transform 0.2s ease;
}

.menu:active {
  transform: translateY(2px);
}

.sidebar {
  position: fixed;
  z-index: 100000;
  padding: 30px 25px;
  display: flex;
  height: 100vh;
  flex-direction: column;
  right: 0;
  top: 0;
  left: 0;
  background: $white;

  .sidebar-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
}

.menu_icon {
  cursor: pointer;

  svg {
    color: #282A2E;
    height: 20px;
  }
}

.sidebar_menu {
  color: $dark-primary;
  font-size: 19px;
  margin: 15px 0;
  text-align: center;
  display: flex;
  flex-direction: column;
}

.nested-enter-active, .nested-leave-active {
  transition: all 0.3s ease-in-out;
}

.nested-leave-active {
  transition-delay: 0.25s;
}

.nested-enter-from,
.nested-leave-to {
  transform: translateX(30px);
  opacity: 0;
}

.nested-enter-active .inner,
.nested-leave-active .inner {
  transition: all 0.3s ease-in-out;
}

.nested-enter-active .inner {
  transition-delay: 0.25s;
}

.nested-enter-from .inner,
.nested-leave-to .inner {
  transform: translateX(30px);
  opacity: 0.001;
}
</style>
