<template>
  <section>
    <h2>Контакты</h2>
    <div class="map_wrapper">
      <yandex-map/>
      <div class="card card-shadow">
        <div class="card-contact">
          <h2 class="main-title">Наш офис</h2>
          <div class="card_element">
            <img src="@/assets/icons/contact/map.svg" alt="map">
            <div class="link">
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
            <p><a class="contact_section link" href="tel:+7 (911) 563-43-75">+7 (911) 563-43-75</a></p>
          </div>
          <div class="card_element">
            <img src="@/assets/icons/contact/phone.svg" alt="map">
            <p><a class="contact_section link" href="tel:+7 (953) 262 75 84">+7 (953) 262 75 84</a></p>
          </div>
        </div>
        <p class="h-capture">Cоциальные сети</p>
        <div class="icons">
          <media-icon
              width="40"
              alt="vk"
              :src="VK"
              href="https://vk.com/domostroi_29"
          />
          <media-icon
              width="40"
              alt="telegram"
              :src="Telegram"
              href="https://t.me/domostroi29"
          />
        </div>
      </div>
    </div>

  </section>
</template>

<script setup>
import YandexMap from "~/components/index/ContactsSection/YandexMap.vue";
import MediaIcon from "~/components/index/UI/MediaIcon.vue";
import Telegram from "~/assets/icons/telegram.svg";
import VK from "~/assets/icons/vk.svg";

</script>

<style scoped lang="scss">
@import "assets/scss/_colors";
@import "assets/scss/_variables";

section {
  padding: 0;

  h2 {
    padding: 0 var(--section-y-padding);
    margin-bottom: 16px;
  }
}

.map_wrapper {
  position: relative;
}

.card {
  position: absolute;
  max-width: 390px;
  width: 100%;
  background-color: white;
  padding: 30px 35px;
  display: flex;
  flex-direction: column;
  right: var(--section-y-padding);
  top: 50%;
  transform: translateY(-50%);

  @media (max-width: 900px) {
    position: relative;
    width: unset;
    max-width: unset;
    transform: unset;
    top: -3em;
    right: unset;
    margin: 0 var(--section-y-padding);
    padding: 16px 20px;
  }

  .card-contact {
    margin-bottom: 1em;
  }
}

.main-title {
  margin-bottom: 15px;
  padding: 0;
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

    @media (max-width: 900px) {
      width: 18px;
      margin-right: 8px;
    }
  }

  p {
    font-size: var(--fs-body);
    color: $dark-primary;
  }
}

.icons {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  gap: 20px;
  @media (max-width: 900px) {
    justify-content: flex-start;
    gap: 10px;

    .icon{
      width: 35px;
    }
  }
}
</style>