<template>
  <div class="fade" :data-fade="toggleMenu"></div>
  <header class="header" :class="[isScrolled && 'header-scrolled']">
    <div class="container">
      <div class="nav-wrapper">
        <a class="nav-logo | d-flex align-center" href="#">
          <NuxtImg
              class="logo"
              src="/images/logo.svg"
              height="40"
              alt="Логотип Домострой"
              preload
              fetchPriority="high"/>
          <span>Домострой</span>
        </a>
        <nav aria-label="Primary"
             :data-visible="toggleMenu"
             class="primary-navigation"
             id="primary-navigation">
          <ul class="nav-list" role="list">
            <li v-for="(item, index) in navItems" :key="index">
              <nuxt-link :to="item.href" @click="toggleMenu = false">
                {{ item.title }}
              </nuxt-link>
            </li>
          </ul>
        </nav>
        <div class="header-actions | d-flex align-center">
          <a class="phone-number | d-flex align-center" style="--flex-gap: .5rem" href="tel:+79115634375">
            <nuxt-img height="20" width="20" src="/icons/phone-white.svg" alt="Иконка телефона"/>
            <span>+7 (911) 563-43-75</span>
          </a>
          <div class="nav-button | d-flex justify-center align-center" @click="toggle()" style="padding: var(--size-200)">
            <NuxtImg class="user-select-none" :src="toggleMenu ? '/icons/chevron.svg' : '/icons/menu.svg'"
                     alt="Меню"
                     height="24" width="24"
                     preload
                     fetchPriority="high"/>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
const navItems = [
  {
    title: "Проекты",
    href: "#projects",
  },
  {
    title: "Ипотека",
    href: "#mortgage",
  },
  {
    title: "Виды работ",
    href: "#services",
  },
  {
    title: "Контакты",
    href: "#contacts",
  }
]

const toggleMenu = ref(false)
const isScrolled = ref(false)

let toggle = () => {
  toggleMenu.value = !toggleMenu.value
}

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
})

onBeforeUnmount(() => {
  window.removeEventListener("scroll", handleScroll);
})

function handleScroll() {
  isScrolled.value = window.scrollY > 80
}
</script>

<style scoped>
.header {
  z-index: 3;
  position: fixed;
  width: 100%;

  transition: background-color 0.6s ease;
}

.container {
  --section-padding-block: 3rem;
  transition: padding-block 0.6s ease;
}

.header-scrolled {
  background: white;
}

.header-scrolled > .container {
  --section-padding-block: 1.5rem;
}

.nav-wrapper {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.nav-logo {
  gap: 8px;
  font-size: 20px;
  font-weight: 700;
}

.nav-list {
  display: flex;
  gap: clamp(var(--size-400), 5vw, var(--size-600));
  font-size: var(--fs-nav);
  color: var(--clr-neutral-500);
}

.nav-list li a:hover,
.nav-list li a:focus {
  color: var(--clr-neutral-900);
}

.phone-number {
  background-color: var(--clr-neutral-800);
  color: var(--clr-neutral-100);
  padding-block: var(--size-200);
  padding-inline: var(--size-600);
}

.phone-number:hover,
.phone-number:focus {

}

.nav-button {
  display: none;
  cursor: pointer;
}

.header-actions {
  --flex-gap: var(--size-200)
}

@media (max-width: 90em) {
  .nav-list {
    gap: clamp(var(--size-200), 1vw, var(--size-400));
  }

  .header-actions {
    margin-left: var(--size-200);
  }
}

@media (max-width: 50em) {
  .container {
    --section-padding-block: 1rem;
  }

  .nav-logo{
    z-index: 2;
  }

  .nav-logo span{
    display: none;
  }

  .primary-navigation {
    position: fixed;
    top: 0; left: 0; right: 0;
    padding-block: 85px var(--size-400);
    background: var(--clr-neutral-100);
    border-radius: var(--size-100);
    box-shadow: 0 0 0.75em rgba(0, 0, 0, 0.05);
    visibility: hidden;
    opacity: 0;
    transform: translateY(-10%);
    transition: opacity 0.3s ease, transform 0.3s ease;
  }

  .primary-navigation[data-visible=true] {
    visibility: visible;
    opacity: 1;
    transform: translateY(0);
  }

  .fade {
    position: fixed;
    inset: 0;
    z-index: -1;
    background: linear-gradient(rgba(0, 0, 0, 0), rgba(10, 19, 35, 0.8));
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  .fade[data-fade=true] {
    opacity: 1;
    z-index: 2;
  }

  .nav-list {
    display: grid;
    gap: 0;
    text-align: center;
    font-weight: var(--fw-bold);
  }

  .nav-list li a {
    padding-block: var(--size-300);
    display: block;
    width: 100%;
  }

  .phone-number {
    z-index: 2;

    padding-inline: var(--size-400);
  }

  .nav-button {
    z-index: 2;

    display: unset;
  }

  .header-actions {
    --flex-gap: 0;
  }
}
</style>
