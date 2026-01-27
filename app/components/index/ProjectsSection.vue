<template>
  <section>
    <div class="section-header">
      <h2>Наши проекты</h2>
      <p class="section-header_description heading-description">Наша компания специализируется на строительстве домов,
        бань, беседок и
        хозяйственных строений. Наша команда
        мастеров готова воплотить любой проект в жизнь, независимо от его сложности.</p>
      <a href="https://vk.com/domctroy" target="_blank">
        <button class="button-primary">
          Все проекты
          <img src="@/assets/icons/chevron.svg" alt="chevron">
        </button>
      </a>
    </div>
    <div class="cards-container">
      <div
          v-for="(project, index) of projects"
          :key="index"
          class="card"
      >
        <img :src="project.image" :alt="project.image">
        <div class="card-info">
          <div class="card-info_title">
            <div class="card-info_element">
              <img src="@/assets/icons/projects/location.svg" alt="location">
              <p class="p-body">{{ project.location }}</p>
            </div>
          </div>
          <div class="card-info_item">
            <div class="card-info_element">
              <img src="@/assets/icons/projects/bed.svg" alt="bed">
              <p class="card-info_text p-body">{{ project.rooms }}</p>
            </div>
            <div class="card-info_element">
              <img src="@/assets/icons/projects/arrow-left-right.svg" alt="arrow-left-right">
              <p class="card-info_text p-body">{{ project.size }}</p>
            </div>
            <div class="card-info_element">
              <img src="@/assets/icons/projects/arrow-expand-all.svg" alt="arrow-expand-all">
              <p class="card-info_text p-body">{{ project.square }}</p>
            </div>
          </div>
          <div class="card-info_action">
            <a href="https://vk.com/im?media=&sel=-14943073" target="_blank">
              <button class="button-primary">
                Подробнее
              </button>
            </a>
            <p>от {{ project.price }} <span class="price_star">*</span></p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import Project1 from '@/assets/images/projects/project1.png'
import Project2 from '@/assets/images/projects/project2.png'
import Project3 from '@/assets/images/projects/project3.png'

import {ref} from 'vue'

const projects = ref([
  {
    image: Project3,
    location: 'СНТ Строитель',
    rooms: '3 комнаты',
    size: '8x10 м',
    square: '80 м²',
    price: '2 300 000 ₽'
  },
  {
    image: Project2,
    location: 'СНТ Беломор',
    rooms: '4 комнаты',
    size: '6x8 м',
    square: '96 м²',
    price: '2 800 000 ₽'
  },
  {
    image: Project1,
    location: 'СНТ Поморочка',
    rooms: '6 комнат',
    size: '8x11 м',
    square: '88+55 м²',
    price: '3 300 000 ₽'
  },
])
</script>

<style scoped lang="scss">
@import "assets/scss/_colors";
@import "assets/scss/_variables";

section {
  position: relative;
}

section::after {
  content: "";
  z-index: -1;
  position: absolute;
  top: 65%;
  bottom: 0;
  left: 0;
  right: 0;
  background: $dark-primary;
}

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
  align-items: center;
  @media (max-width: 1300px) {
    flex-direction: column;
    align-items: center;
  }

  .card {
    flex-grow: 1;
    flex-basis: 0;
    box-shadow: 0 11px 44px 16px rgba(14, 48, 114, .05);

    @media (max-width: 1300px) {
      max-width: 400px;
    }

    img {
      object-fit: cover;
    }

    .card-info {
      background: $surface;
      padding: 15px 20px;

      .card-info_title {
        margin-bottom: 13px;
      }

      .card-info_element {
        display: flex;
        flex-direction: row;
        align-items: center;

        img {
          margin-right: 5px;
        }

        .card-info_text {
          color: $grey-secondary-darker;
        }
      }

      .card-info_item {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        margin-bottom: 25px;
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
}
.price_star {
  color: #77797D;
  font-weight: normal;
  font-size: 16px;
}
</style>