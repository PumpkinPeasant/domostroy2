<template>
  <div class="overlay">
    <div class="logo">
      <img :src="Logo" alt="Домострой лого"/>
      <span>Домострой</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import Logo from '~/assets/images/logo.svg'
import gsap from "gsap";

const enableScroll = () => {
  document.body.style.overflowY = 'auto';
};

onMounted(() => {
  gsap.to(".overlay .logo", 2, {
    opacity: 0,
    top: '40%',
    ease: 'expo.inOut'
  })
  gsap.to(".overlay", 2, {
    delay: 2,
    top: '-100%',
    opacity: 0,
    y: -60,
  })
  setTimeout(()=>{
    enableScroll()
  },2000)
})
</script>

<style scoped lang="scss">
@import "assets/scss/_variables";

.overlay {
  z-index: 1005;
  position: fixed;
  width: 100%;
  height: 100%;
  background: linear-gradient(to top, rgba(173, 232, 246, 0.3), rgba(255, 255, 255, 0)), #fff;
  top: 0;

  .logo {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 36px;
    font-weight: bolder;
    display: flex;
    align-items: center;

    img {
      width: 70px;
      margin-right: 16px;

      @media (max-width: map-get($grid-breakpoints, md)) {
        width: 55px;
        margin-right: 8px;
      }
    }

    @media (max-width: map-get($grid-breakpoints, md)) {
      font-size: 26px;
    }
  }
}
</style>