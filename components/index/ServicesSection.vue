<template>
  <section>
    <div class="section-header">
      <h2>Виды работ</h2>
      <p class="section-header_description heading-description">Мы предоставляем полный спектр услуг по отделочным
        работам: кровля,
        реставрация и обновление фасадов, установка заборов, а также установка сантехники и монтаж полов и потолков.</p>
      <a href="https://vk.com/im?media=&sel=-14943073" target="_blank">
        <button class="button-primary">
          Все виды работ
          <img src="@/assets/icons/chevron.svg" alt="chevron">
        </button>
      </a>
    </div>
    <div class="cards-container">
      <div
          v-for="(service, index) of services"
          :key="index"
          class="card"
      >
        <div>
          <img :src="service.image" :alt="service.image">
          <div class="card-info">
            <div class="card-info_title">
              <p>{{ service.title }}</p>
            </div>
            <div class="card-info_description">
              <p class="p-body">{{ service.description }}</p>
            </div>
          </div>
        </div>
        <div class="card-info_action">
          <a href="https://vk.com/im?media=&sel=-14943073" target="_blank">
            <button class="button-secondary">
              Подробнее
            </button>
          </a>
          <p>{{ service.price }} <span class="price_star">*</span></p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import {ref} from "vue";
import Facade from '@/assets/images/services/facade.png'
import Fence from '@/assets/images/services/fence.png'
import Roofs from '@/assets/images/services/roofs.png'

const services = ref([
  {
    title: "Установка заборов",
    image: Fence,
    description: "Основное наше направление по установке заборов, это бюджетный сегмент, заборы, которые может позволить себе каждый, не в ущерб качеству и долговечности.",
    price: 'от 1 700₽/пог.м'
  },
  {
    title: "Обновление фасадов",
    image: Facade,
    description: "Монтаж любых видов кровли, сотрудничаем с крупнейшими магазинам, что позволяет сделать покупку максимально выгодной.",
    price: 'от 400₽/м²'
  },
  {
    title: "Кровельные работы",
    image: Roofs,
    description: "Мы производим монтаж любых видов кровли и сотрудничаем с крупнейшими магазинам, что позволяет сделать покупку максимально выгодной.",
    price: 'от 450₽/м²'
  },
])
</script>

<style scoped lang="scss">
@import "assets/scss/_colors";
@import "assets/scss/_variables";

.section-header {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 50px;
  align-items: center;
  margin-bottom: 25px;

  @media (max-width: map-get($grid-breakpoints, lg)) {
    display: grid;
    grid-template-columns: 1fr auto;
    grid-auto-rows: auto auto;
    gap: 1em;
  }


  h2 {
    white-space: nowrap;
  }

  p {
    @media (max-width: map-get($grid-breakpoints, lg)) {
      grid-row: 2/3;
      grid-column: 1/3;
    }
  }

  button {
    white-space: nowrap;
    display: flex;
    flex-direction: row;
    align-items: center;

    img {
      margin-left: 15px;
      margin-top: 2px;
    }
  }
}

.cards-container {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 40px;
  @media (max-width: map-get($grid-breakpoints, xl)) {
    flex-direction: column;
    align-items: center;
  }

  .card {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    flex-grow: 1;
    flex-basis: 0;
    @media (max-width: 1300px) {
      max-width: 400px;
    }
    img {
    }

    .card-info {
      padding: 15px 0;
      display: flex;
      flex-direction: column;
      justify-content: space-between;

      .card-info_title {
        margin-bottom: 10px;

        p {
          font-size: 18px;
          font-weight: bold;
        }
      }

      .card-info_description {
        p {
          color: $grey-secondary-darker;
          margin-bottom: 1em;
        }
      }
    }

    .card-info_action {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;

      p {
        font-size: 20px;
        color: black;
        font-weight: bold;
      }
    }
  }
}
.price_star {
  color: #77797D;
  font-weight: normal;
  font-size: 16px;
}
</style>