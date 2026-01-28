<template>
  <client-only>
    <yandex-map
        style="padding: 0 !important"
        :controls="controls"
        :zoom="16"
        :coordinates="coordinates"
        :behaviors="behaviors"
    >
      <yandex-marker marker-id="1" :coordinates="coordinates">
        <div class="marker"/>
      </yandex-marker>
    </yandex-map>
  </client-only>
</template>
<script setup lang="ts">
import {YandexMap, YandexMarker} from 'vue-yandex-maps'
import type { BehaviorType } from '@yandex/ymaps3-types';

const coordinates = [64.577881, 39.869418];
const controls = ["zoomControl", "geolocationControl"];
const behaviors = ref<BehaviorType[]>(['drag', 'pinchZoom', 'dblClick', 'oneFingerZoom', 'pinchZoom']);

</script>

<style lang="scss">
.yandex-container {
  height: 75vh;

  @media (max-width: 992px) {
    height: 50vh;
  }
}
</style>