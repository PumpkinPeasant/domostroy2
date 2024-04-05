<script setup lang="ts">
const props = defineProps({
  href: {type: String, required: true},
  src: {type: Object, required: true},
  alt: {type: String, required: true},
  width: {type: String, default: '32'}
});
</script>

<template>
  <div class="icon">
    <a :href="href" class="icon-link" target="_blank">
      <img
          :width="width"
          :src="src"
          :alt="alt">
    </a>
  </div>
</template>

<style scoped lang="scss">
.icon {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: end;

  .icon-link {
    transform-origin: center center;
    transition: transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);

    &:hover, &:active {
      transform: scale(1.2);
    }
  }
}
</style>