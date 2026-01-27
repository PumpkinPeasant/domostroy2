<template>
  <section>
    <h2>Контакты</h2>
    <div class="map_wrapper">
      <yandex-map/>
      <div class="card card-shadow">
        <div class="card-contact">
          <h2 class="main-title">Наш офис</h2>
          <div class="card_element">
            <nuxt-img width="25" height="36" src="/icons/contact/map.svg" alt="Иконка указателя"/>
            <div class="link">
              <p>г. Северодвинск,</p>
              <p>Архангельское шоссе, 29К3, этаж 2</p>
            </div>
          </div>
          <div class="card_element">
            <nuxt-img width="25" height="18" src="/icons/contact/mail.svg" alt="Иконка почты"/>
            <p><a href="mailto:domostroi@lenta.ru" class="email link">domostroi@lenta.ru</a></p>
          </div>
          <div class="card_element">
            <nuxt-img width="25" height="25" src="/icons/contact/phone.svg" alt="Иконка телефона"/>
            <p><a class="contact_section link" href="tel:+7 (911) 563-43-75">+7 (911) 563-43-75</a></p>
          </div>
          <div class="card_element">
            <nuxt-img width="25" height="25" src="/icons/contact/phone.svg" alt="Иконка телефона"/>
            <p><a class="contact_section link" href="tel:+7 (953) 262 75 84">+7 (953) 262 75 84</a></p>
          </div>
        </div>
        <p class="h-capture">Cоциальные сети</p>
        <div class="icons">
          <media-icon
              width="40"
              alt="Иконка VK"
              src="/icons/vk.svg"
              href="https://vk.com/domostroi_29"
          />
          <media-icon
              width="40"
              alt="Иконка Telegram"
              src="/icons/telegram.svg"
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

    .icon {
      width: 35px;
    }
  }
}
</style>