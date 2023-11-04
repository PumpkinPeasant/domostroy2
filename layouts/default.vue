<template>
<div>
  <app-header/>
  <slot/>
  <app-footer/>
</div>
</template>

<script>
import AppHeader from "../components/AppHeader.vue";
export default {
  name: "default",
  components: {AppHeader}
}
</script>

<style scoped>

</style>