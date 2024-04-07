<template>
  <client-only>
    <yandex-map
        style="padding: 0 !important"
        :controls="controls"
        zoom="16"
        :coordinates="coordinates"
    >
      <yandex-marker marker-id="1" :coordinates="coordinates">
        <div class="marker"/>
      </yandex-marker>
    </yandex-map>
  </client-only>
</template>
<script setup>
import {YandexMap, YandexMarker} from 'vue-yandex-maps'

const coordinates = [64.557177, 39.859165];
const controls = ["zoomControl", "geolocationControl"];

</script>

<style lang="scss">
@import "assets/scss/_colors";
@import "assets/scss/_variables";

.yandex-container {
  height: 75vh;
}
</style>