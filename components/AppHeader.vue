<template>
  <header>
    <div>

    </div>
    <div>
      <ul>
        <li>Проекты</li>
        <li>Ипотека</li>
        <li>Виды работ</li>
        <li>Контакты</li>
      </ul>
    </div>
    <icon></icon>
    <icon></icon>
    <button>Обратная связь</button>
  </header>
</template>

<script>
export default {
  name: "AppHeader"
}
</script>

<style scoped lang="scss">
@import "assets/scss/_variables";

header {
  position: fixed;
  width: 100%;
  height: $header-width-desktop;
}
</style>