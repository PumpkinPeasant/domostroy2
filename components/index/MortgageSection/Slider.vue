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
  cursor: pointer;
  line-height: 48px;
  text-align: center;
  text-indent: -2px;
  transition: all 0.2s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    height: 20px;
    color: #fff;
  }

  &:hover {
    background: white;
    color: #fff;
    transform: scale(1.2);

    svg{
      color: black;
    }
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
  padding-left: 2px;
  svg{
    transform: rotate(180deg);
  }
}

.prev {
  left: 0;
  top: 50%;
  margin-right: auto;
  margin-left: 25px;
  text-indent: 2px;
  padding-right: 3px;
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