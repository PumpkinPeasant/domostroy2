<template>
  <section class="benefits-section">
    <div class="benefits-card card-shadow">
      <h3>Преимущества работать с нами</h3>
      <div class="items">
        <div
            v-for="(benefit, index) of benefits"
            :key="index"
            class="item"
        >
          <img
              class="icon"
              :src="benefit.img"
              :alt="benefit.img"
          >
          <div>
            <p class="h-capture">{{ benefit.title }}</p>
            <p class="p-body">{{ benefit.description }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import Quality from '~/assets/icons/quality.svg'
import Contract from '~/assets/icons/contract.svg'
import Calendar from '~/assets/icons/calendar.svg'

const benefits = ref([
  {
    img: Quality,
    title: 'Качество',
    description: 'В работе мы полностью придерживаемся стандартов качества, и осуществляем любые Ваши задумки.'
  },
  {
    img: Contract,
    title: 'Договоры',
    description: 'Договоры заключаются с фиксированной суммой. Подготовим всю рабочую документацию и обоснуем каждый потраченный рубль.'
  },
  {
    img: Calendar,
    title: 'Сроки',
    description: 'Мы всегда указываем реальные сроки и придерживаемся их! А также скидываем ежедневные отчеты в онлайн-чат.'
  }
])

</script>

<style scoped lang="scss">
@import "assets/scss/_variables";
@import "assets/scss/_colors";

.benefits-section {
  display: flex;
  justify-content: center;
  align-items: center;
  height: auto;
  min-height: 100%;

  .benefits-card {
    position: relative;
    background: $surface;
    top: -6em;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 25px 50px;

    @media (max-width: map-get($grid-breakpoints, xl)) {
      padding: 25px 15px;
    }

    @media (max-width: map-get($grid-breakpoints, md)) {
      top: -3em;
    }

    .items {
      display: flex;
      gap: 3em;
      @media (max-width: map-get($grid-breakpoints, md)) {
        flex-direction: column;
        gap: 1.5em;
      }

      .item {
        flex-grow: 1;
        flex-basis: 0;
        @media (max-width: map-get($grid-breakpoints, md)) {
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          align-items: center;
        }

        .icon {
          height: 80px;
          width: 80px;
          margin-bottom: 15px;
          @media (max-width: map-get($grid-breakpoints, md)) {
            margin: 0 15px 0 0;
            height: 50px;
            width: 50px;
          }
        }
      }
    }

    h3 {
      margin-bottom: 0.8em;
      letter-spacing: -0.8px;
    }
  }
}
</style>