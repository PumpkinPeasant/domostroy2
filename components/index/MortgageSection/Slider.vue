<template>
  <div class="slider">
    <div class="slides">
      <div
          v-for="(slide, index) in slides"
          v-show="slide.id == active"
          :key="index">
        <a :href="slide.href" target="_blank">
          <img :src="slide.img" :alt="slide.alt"/>
        </a>
      </div>
    </div>
    <ul class="dots">
      <li
          v-for="(dot, index) in slides"
          :class="{ active: ++index === active }"
          @click="jump(index)">
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">

const props = defineProps({
  slides: {type: Object, required: true},
});

let active = defineModel();

function jump(index) {
  active.value = index
}
</script>

<style scoped lang="scss">
$primary: #221e21;

.slider {
  position: relative;
  display: flex;
  flex-direction: column;
}

.slides {
  font-size: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;

  @media (min-width: 600px) {
    font-size: 80px;
  }

  @media (min-width: 900px) {
    font-size: 140px;
  }

  .animated {
    transition: all 400ms;
    position: absolute;
    transform: translate(-50%, -50%);
  }

  .slide-in {
    opacity: 0;
    transform: translate(-40%, -50%);
  }

  .slide-in-active {
    transition-delay: 150ms;
  }

  .slide-out {
    opacity: 1;
  }

  .slide-out-active {
    opacity: 0;
    transform: translate(-60%, -50%);
  }
}

.dots {
  text-align: center;
  padding: 16px;

  li {
    width: 6px;
    height: 6px;
    border-radius: 3px;
    background: white;
    opacity: 0.2;
    display: inline-block;
    margin: 0 3px;
    cursor: pointer;
    transition: opacity 0.4s ease-in-out, width 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);

    &.active {
      width: 22px;
      opacity: 1;
    }
  }
}
</style>