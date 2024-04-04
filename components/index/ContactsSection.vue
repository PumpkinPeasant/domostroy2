<template>
  <section>
    <h2>Контакты</h2>
    <yandex-map/>
  </section>
</template>

<script>
import YandexMap from "~/components/index/ContactsSection/YandexMap.vue";

export default {
  name: "ContactsSection",
  components: {YandexMap}
}
</script>

<style scoped lang="scss">
section {
  padding: 0;
}

</style>