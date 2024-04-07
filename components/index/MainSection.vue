<template>
  <main>
    <div class="main">
      <h1>Строительство домов <br/>в Северодвинске</h1>
      <p class="h-capture">Дом вашей мечты - в ваших руках! Закажите звонок нашего специалиста,<br/>
        и мы поможем воплотить вашу мечту в реальность.</p>
      <button class="button-primary">
        <a href="https://vk.com/im?media=&sel=-14943073">Связаться с нами</a>
      </button>
      <div class="numbers">
        <div class="number">
          <span class="digits">100<span class="symbol">+</span></span>
          <span class="description">Договоров ежегодно</span>
        </div>
        <div class="number">
          <span class="digits">700<span class="symbol">+</span></span>
          <span class="description">Готовых проектов</span>
        </div>
        <div class="number">
          <span class="digits">16<span class="symbol">+</span></span>
          <span class="description">Лет на рынке</span>
        </div>
      </div>
    </div>
    <img class="roof-img"
         alt="Крыша"
         :src="Roof"
    />
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
  padding-top: $header-height;
  height: 100vh;
  background: radial-gradient(28.75% 30.78% at 102.5% 44.34%, rgba(45, 136, 204, 0.10) 0%, rgba(61, 116, 158, 0.00) 100%), radial-gradient(32.9% 49.24% at 46% 91.68%, rgba(65, 170, 248, 0.10) 0%, rgba(53, 153, 227, 0.00) 100%), radial-gradient(44.23% 42.9% at 0% 94.23%, rgba(45, 136, 204, 0.10) 0%, rgba(61, 116, 158, 0.00) 100%), radial-gradient(36.28% 47.06% at 46.03% 14.1%, rgba(45, 136, 204, 0.10) 0%, rgba(61, 116, 158, 0.00) 100%), #F8FEFE;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  gap: 3em;

  @media (max-width: map-get($grid-breakpoints, lg)) {
    height: unset;
    gap: unset;
    padding-right: 0;
  }
}

.main {
  z-index: 2;
  margin-bottom: 11.5rem;

  p {
    margin-bottom: 30px;
    color: $grey-secondary-darker;
    font-weight: 600;

    @media (max-width: map-get($grid-breakpoints, md)) {
      width: 90%;
    }
  }

  @media (max-width: map-get($grid-breakpoints, lg)) {
    margin-bottom: 0;
  }
}

h1 {
  margin-bottom: 0.6em;
}

.numbers {
  display: flex;
  gap: 3em;
  margin-top: 30px;

  .number {
    display: flex;
    flex-direction: column;
    font-size: 2.66rem;
    font-weight: 700;

    .digits {
      color: $dark-primary;
      letter-spacing: -1.5px;
    }

    .symbol {
      color: $red-accent;
      margin-left: 2px;
    }

    .description{
      color: $grey-secondary;
      font-size: var(--fs-body);
      @media (max-width:  map-get($grid-breakpoints, md)) {

      }
    }

    @media (max-width:  map-get($grid-breakpoints, md)) {
      font-size: 2.33rem;
      flex: 1;
      align-items: center;
      text-align: center;

      &:nth-last-child(1) {
        margin-right: var(--section-y-padding);
      }
    }
  }
}

.roof-img {
  position: absolute;
  bottom: 0;
  right: 0;
  width: auto;
  height: 80%;
  @media (max-width:  map-get($grid-breakpoints, xl)) {
    height: 70%;
  }

  @media (max-width:  map-get($grid-breakpoints, lg)) {
    position: unset;
  }
}
</style>