<template>
  <section class="mortgage">
    <h2 class="block">Ипотека на строительство дома</h2>
    <slider :slides="slides"/>
  </section>
</template>

<script lang="ts" setup>
import Slider from "./MortgageSection/Slider.vue";

const slides = [
  {
    id: 1,
    img: "/images/mortgage/mortgage1.png",
    alt: "Ипотека в Россельхозбанке",
    href: 'https://svoe-selo.ru/partners/obshhestvo-s-ogranichennoj-otvetstvennostyu-sistema-2/house-projects'
  },
  {
    id: 2,
    img: "/images/mortgage/mortgage2.png",
    alt: "Ипотека в Сбербанке",
    href: 'http://www.sberbank.ru/ru/person/credits/home/building'
  },
  {
    id: 3,
    img: "/images/mortgage/mortgage3.png",
    alt: "Ипотека в Почтабанке",
    href: 'https://www.pochtabank.ru/service/mortgage/ipoteka_na_stroitelstvo_doma'

  },
]
</script>

<style scoped lang="scss">
h2 {
  color: var(--clr-neutral-100);
  margin-bottom: 20px;
}

.mortgage {
  background-color: var(--clr-neutral-800);
  position: relative;
  padding: 20px 0;
}
</style>