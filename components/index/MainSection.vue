<template>
  <main>
    <h1>Строительство домов <br/>в Северодвинске</h1>
    <p class="h-capture">Дом вашей мечты - в ваших руках! Закажите звонок нашего специалиста,<br/>
      и мы поможем воплотить вашу мечту в реальность.</p>
    <button class="button-primary">
      Заказать звонок
    </button>
    <div class="numbers">
      <div class="number">
        <span class="digits h3">100<span class="symbol">+</span></span>
        <span>Договоров ежегодно</span>
      </div>
      <div class="number">
        <span class="digits h3">700<span class="symbol">+</span></span>
        <span>Готовых проектов</span>
      </div>
      <div class="number">
        <span class="digits h3">16<span class="symbol">+</span></span>
        <span>Лет на рынке</span>
      </div>
    </div>
    <img class="roof-img"
         alt="Крыша"
         :src="Roof">
  </main>
</template>

<script lang="ts" setup>
import Roof from '~/assets/images/roof.png'

</script>

<style scoped lang="scss">
@import "assets/scss/_variables";
@import "assets/scss/_colors";

main {
  position: relative;
  padding-top: $header-width-desktop;
  height: calc(100vh - $header-width-desktop);
  background: radial-gradient(28.75% 30.78% at 102.5% 44.34%, rgba(45, 136, 204, 0.10) 0%, rgba(61, 116, 158, 0.00) 100%), radial-gradient(32.9% 49.24% at 46% 91.68%, rgba(65, 170, 248, 0.10) 0%, rgba(53, 153, 227, 0.00) 100%), radial-gradient(44.23% 42.9% at 0% 94.23%, rgba(45, 136, 204, 0.10) 0%, rgba(61, 116, 158, 0.00) 100%), radial-gradient(36.28% 47.06% at 46.03% 14.1%, rgba(45, 136, 204, 0.10) 0%, rgba(61, 116, 158, 0.00) 100%), #F8FEFE;
  display: flex;
  flex-direction: column;
  gap: 3em;
}

h1 {
  margin-top: $header-width-desktop;
}

.numbers {
  display: flex;
  gap: 3em;
  .number {
    display: flex;
    flex-direction: column;

    .digits {
      color: $dark-primary;
    }

    .symbol {
      color: $red-accent;
    }
  }
}

.roof-img {
  position: absolute;
  bottom: 0;
  right: 0;
  width: auto;
  height: 80%;
}
</style>