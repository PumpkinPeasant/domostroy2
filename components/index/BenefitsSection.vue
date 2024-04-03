<template>
  <section class="benefits-section">
    <div class="benefits-card card-shadow">
      <h3>Преимущества работать с нами</h3>
      <div class="items">
        <div class="item">
          <img class="icon" alt="" :src="Quality">
          <p class="h-capture">Качество</p>
          <p>В работе мы полностью придерживаемся стандартов качества, и осуществляем любые Ваши задумки. </p>
        </div>
        <div class="item">
          <img class="icon" alt="" :src="Contract">
          <p class="h-capture">Договоры</p>
          <p>Договоры заключаются с фиксированной суммой. Подготовим всю рабочую документацию и обоснуем каждый
            потраченный рубль.</p>
        </div>
        <div class="item">
          <img class="icon" alt="" :src="Calendar">
          <p class="h-capture">Сроки</p>
          <p>Мы всегда указываем реальные сроки и придерживаемся их! А также скидываем ежедневные отчеты в
            онлайн-чат.</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
import Quality from '~/assets/icons/quality.svg'
import Contract from '~/assets/icons/contract.svg'
import Calendar from '~/assets/icons/calendar.svg'

</script>

<style scoped lang="scss">
@import "assets/scss/_variables";
@import "assets/scss/_colors";

.benefits-section {
  height: 200px;
  position: relative;

  .benefits-card {
    position: absolute;
    background: $surface;
    display: flex;
    flex-direction: column;
    align-items: center;
    top: -20%;
    left: 11.5em;
    right: 11.5em;
    padding: 2em;

    .items {
      display: flex;

      .item {


        .icon{
          height: 80px;
          width: 80px;
        }
      }
    }
  }
}
</style>