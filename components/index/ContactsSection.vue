<template>
  <section>
    <h2>Контакты</h2>
    <div class="map_wrapper">
      <yandex-map/>
      <div class="card">
        <div class="card-contact">
          <p class="main-title">Наш офис</p>
          <div class="card_element">
            <img src="@/assets/icons/contact/map.svg" alt="map">
            <div>
              <p>г. Северодвинск,</p>
              <p>ул. Железнодоражная 54а, офис 5</p>
            </div>
          </div>
          <div class="card_element">
            <img src="@/assets/icons/contact/mail.svg" alt="map">
            <p><a href="mailto:domostroi@lenta.ru" class="email link">domostroi@lenta.ru</a></p>
          </div>
          <div class="card_element">
            <img src="@/assets/icons/contact/phone.svg" alt="map">
            <p><a class="contact_section" href="tel:+7 (911) 563-43-75">+7 (911) 563-43-75</a></p>
          </div>
          <div class="card_element">
            <img src="@/assets/icons/contact/phone.svg" alt="map">
            <p><a class="contact_section" href="tel:+7 (953) 262 75 84">+7 (953) 262 75 84</a></p>
          </div>
        </div>
        <p class="title">Или напишите в социальные сети</p>
        <div class="icons">
          <div class="icon">
            <a href="https://t.me/domostroi29" class="icon-link">
              <img src="@/assets/icons/telegram.svg" alt="telegram">
            </a>
          </div>
          <div class="icon">
            <a href="https://vk.com/domostroi_29" class="icon-link">
              <img src="@/assets/icons/vk.svg" alt="vk">
            </a>
          </div>
        </div>
      </div>
    </div>

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
@import "assets/scss/_colors";

section {
  padding: 0;

  h2 {
    padding: 0 2.8em;
  }
}

.map_wrapper {
  position: relative;
}

.card {
  position: absolute;
  right: 0;
  top: 18%;
  width: 420px;
  background-color: white;
  padding: 30px 35px;
  display: flex;
  flex-direction: column;
  margin: 0 50px 30px 0;

  .card-contact {
    margin-bottom: 25px;
  }
}

.main-title {
  font-size: 35px;
  margin-bottom: 15px;
}

.title {
  font-size: 20px;
  margin-bottom: 15px;
}

.card_element {
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 18px;

  img {
    margin-right: 15px;
    width: 25px;
  }

  p {
    font-size: 16px;
    color: $dark-primary;
  }
}

.icons {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  gap: 20px;
}
</style>