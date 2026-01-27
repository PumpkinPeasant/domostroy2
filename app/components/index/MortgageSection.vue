<template>
  <section class="mortgage">
    <h2 class="block">Ипотека на строительство дома</h2>
    <slider :slides="slides"/>
  </section>
</template>

<script lang="ts" setup>
import Slider from "./MortgageSection/Slider.vue";
import {ref} from "vue";
import Mortgage1 from "assets/images/mortgage1.png";
import Mortgage2 from "assets/images/mortgage2.png";
import Mortgage3 from "assets/images/mortgage3.png";

const slides = [
  {
    id: 1,
    img: Mortgage1,
    alt: "Ипотека в Россельхозбанке",
    href: 'https://svoe-selo.ru/partners/obshhestvo-s-ogranichennoj-otvetstvennostyu-sistema-2/house-projects'
  },
  {
    id: 2,
    img: Mortgage2,
    alt: "Ипотека в Сбербанке",
    href: 'http://www.sberbank.ru/ru/person/credits/home/building'
  },
  {
    id: 3,
    img: Mortgage3,
    alt: "Ипотека в Почтабанке",
    href: 'https://www.pochtabank.ru/service/mortgage/ipoteka_na_stroitelstvo_doma'

  },
]
</script>

<style scoped lang="scss">
@import "assets/scss/_colors";

h2 {
  color: $white;
  margin-bottom: 20px;
}

.mortgage {
  background-color: $dark-primary;
  position: relative;
  padding: 20px 0;
}
</style>