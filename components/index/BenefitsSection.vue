<template>
  <div class="benefits-section">
    <h3>Преимущества работать с нами</h3>
    <div>
      <div>
        <i></i>
        <span>Качество</span>
        <span>В работе мы полностью придерживаемся стандартов качества, и осуществляем любые Ваши задумки. </span>
      </div>
      <div>
        <i></i>
        <span>Договоры</span>
        <span>Договоры заключаются с фиксированной суммой. Подготовим всю рабочую документацию и обоснуем каждый потраченный рубль.</span>
      </div>
      <div>
        <i></i>
        <span>Сроки</span>
        <span>Мы всегда указываем реальные сроки и придерживаемся их! А также скидываем ежедневные отчеты в онлайн-чат.</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "BenefitsSection"
}
</script>

<style scoped lang="scss">
@import "assets/scss/_variables";

.benefits-section{
  margin: $section-padding-desktop;
}
</style>