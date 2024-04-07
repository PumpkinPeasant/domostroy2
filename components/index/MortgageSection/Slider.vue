<template>
  <div class="slider">
    <div class="slides block">
      <div
          v-for="(slide, index) in slides"
          v-show="slide.id == active"
          :key="index">
        <a :href="slide.href" target="_blank">
          <img :src="slide.img" :alt="slide.alt"/>
        </a>
      </div>
    </div>
    <span
        @click="move(-1)"
        class="prev">
      <arrow/>
    </span>
    <span
        @click="move(1)"
        class="next">
       <arrow/>
    </span>
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
import Arrow from "~/components/index/UI/Arrow.vue";

const props = defineProps({
  slides: {type: Object, required: true},
});


const active = ref(1)
function jump(index) {
  active.value = index
}

function move(amount) {
  let newActive
  const newIndex = active.value + amount
  if (newIndex > props.slides.length) newActive = 1
  if (newIndex === 0) newActive = props.slides.length
  active.value = newActive || newIndex
}
</script>

<style scoped lang="scss">
@import "assets/scss/_colors";
@import "assets/scss/_variables";
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


.prev,
.next {
  position: absolute;
  width: 45px;
  height: 45px;
  border: 2px solid white;
  border-radius: 50%;
  top: 50%;
  cursor: pointer;
  line-height: 48px;
  text-align: center;
  text-indent: -2px;
  transition: all 0.2s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  transform-origin: center center;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: map-get($grid-breakpoints, lg)) {
    background: white;
    width: 30px;
    height: 30px;
  }

  @media (max-width: map-get($grid-breakpoints, sm)) {
    width: 25px;
    height: 25px;
    top: 45%;
  }

  svg {
    height: 20px;
    color: #fff;

    @media (max-width: map-get($grid-breakpoints, lg)) {
      color: black;
    }

    @media (max-width: map-get($grid-breakpoints, sm)) {
      height: 15px;
    }
  }

  &:hover, &:active {
    background: white;
    color: #fff;

    svg{
      color: black;
    }
  }
}

.next {
  right: 0;
  transform: translateY(-50%) translateX(50%);
  margin-left: auto;
  margin-right: calc(var(--section-y-padding) / 2);
  text-indent: 2px;
  padding-left: 2px;

  @media (max-width: map-get($grid-breakpoints, md)) {
    transform: translateY(-50%);
    margin-right: 10px;
  }

  &:hover, &:active {
    transform: translateY(-50%) scale(1.2) translateX(50%);

    @media (max-width: map-get($grid-breakpoints, md)) {
      transform: translateY(-50%) scale(1.2);
    }
  }

  svg{
    transform: rotate(180deg);
  }
}

.prev {
  left: 0;
  transform: translateY(-50%) translateX(-50%);
  margin-right: auto;
  margin-left: calc(var(--section-y-padding) / 2);;
  text-indent: 2px;
  padding-right: 3px;

  @media (max-width: map-get($grid-breakpoints, md)) {
    transform: translateY(-50%);
    margin-left: 10px;
  }

  &:hover, &:active {
    transform: translateY(-50%) scale(1.2) translateX(-50%);

    @media (max-width: map-get($grid-breakpoints, md)) {
      transform: translateY(-50%) scale(1.2);
    }
  }
}

.dots {
  text-align: center;
  padding-top: 20px;

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