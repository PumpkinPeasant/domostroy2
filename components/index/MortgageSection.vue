<template>
  <section>
    <h2>Ипотека на строительство дома</h2>
    <slider
        :slides="slides"
        v-model="active"/>
    <span
        @click="move(-1)"
        class="prev">
      <img :src="ChevronLeft" alt=""/>
    </span>
    <span
        @click="move(1)"
        class="next">
      <img :src="ChevronRight" alt=""/>
    </span>
  </section>
</template>

<script lang="ts" setup>
import Slider from "./MortgageSection/Slider.vue";
import {ref} from "vue";
import Mortgage1 from "assets/images/mortgage1.png";
import Mortgage2 from "assets/images/mortgage2.png";
import Mortgage3 from "assets/images/mortgage3.png";
import ChevronLeft from "assets/icons/mortgage/chevron-left.svg";
import ChevronRight from "assets/icons/mortgage/chevron-right.svg";

const slides = [
  {
    id: 1,
    img: Mortgage1,
    alt: "Ипотека в Россельхозбанке"
  },
  {
    id: 2,
    img: Mortgage2,
    alt: "Ипотека в Почтабанке"
  },
  {
    id: 3,
    img: Mortgage3,
    alt: "Ипотека в Сбербанке"
  },
]
const active = ref(1)

function move(amount) {
  let newActive
  const newIndex = active.value + amount
  if (newIndex > slides.length) newActive = 1
  if (newIndex === 0) newActive = slides.length
  active.value = newActive || newIndex
}
</script>

<style scoped lang="scss">
@import "assets/scss/_colors";

h2 {
  color: $white;
}

section {
  background-color: $dark-primary;
  position: relative;
}


.prev,
.next {
  position: absolute;
  width: 50px;
  height: 50px;
  border: 2px solid white;
  border-radius: 50%;
  cursor: pointer;
  line-height: 48px;
  text-align: center;
  text-indent: -2px;
  transition: all 0.2s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  display: flex;
  align-items: center;
  justify-content: center;

  img{
    height: 20px;
  }

  &:hover {
    background: white;
    color: #fff;
    transform: scale(1.2);
  }

  &:active {
    transform: translate(0, 3px) scale(1.2);
  }
}

.next {
  right: 0;
  top: 50%;
  margin-left: auto;
  margin-right: 25px;
  text-indent: 2px;
}

.prev {
  left: 0;
  top: 50%;
  margin-right: auto;
  margin-left: 25px;
  text-indent: 2px;
}
</style>