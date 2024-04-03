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
          <p class="h-capture">{{ benefit.title }}</p>
          <p class="p-body">{{ benefit.description }}</p>
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
  height: 300px;
  position: relative;

  .benefits-card {
    position: absolute;
    background: $surface;
    display: flex;
    flex-direction: column;
    align-items: center;
    top: -25%;
    left: 11.5em;
    right: 11.5em;
    padding: 25px 50px;
    border-radius: 5px;

    .items {
      display: flex;
      gap: 3em;

      .item {
        flex-grow: 1;
        flex-basis: 0;
        .icon {
          height: 80px;
          width: 80px;
          margin-bottom: 15px;
        }
      }
    }

    h3 {
      margin-bottom: 0.8em;
      letter-spacing: 1px;
    }
  }
}
</style>