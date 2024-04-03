<template>
  <section>
    <div class="section-header">
      <h2>Наши проекты</h2>
      <p class="section-header_description">Наша компания специализируется на строительстве домов, бань, беседок и
        хозяйственных строений. Наша команда
        мастеров готова воплотить любой проект в жизнь, независимо от его сложности.</p>
      <button class="button-primary">
        Все проекты
        <img src="@/assets/icons/chevron.svg" alt="chevron">
      </button>
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
              <p class="card-info_text">{{ project.rooms }}</p>
            </div>
            <div class="card-info_element">
              <img src="@/assets/icons/projects/arrow-left-right.svg" alt="arrow-left-right">
              <p class="card-info_text">{{ project.size }}</p>
            </div>
            <div class="card-info_element">
              <img src="@/assets/icons/projects/arrow-expand-all.svg" alt="arrow-expand-all">
              <p class="card-info_text">{{ project.square }}</p>
            </div>
          </div>
          <div class="card-info_action">
            <button class="button-primary">
              Подробнее
            </button>
            <p>от {{ project.price }} </p>
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
    image: Project1,
    location: 'СНТ Уйма',
    rooms: '2 спальни',
    size: '10x8 м',
    square: '90 м²',
    price: '3 400 000 ₽'
  },
  {
    image: Project2,
    location: 'СНТ Уйма',
    rooms: '2 спальни',
    size: '10x8 м',
    square: '90 м²',
    price: '3 400 000 ₽'
  },
  {
    image: Project3,
    location: 'СНТ Уйма',
    rooms: '2 спальни',
    size: '10x8 м',
    square: '90 м²',
    price: '3 400 000 ₽'
  }
])
</script>

<style scoped lang="scss">

.section-header {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 50px;
  align-items: center;
  margin-bottom: 25px;

  h2 {
    white-space: nowrap;
  }

  p {
    color: #77797DFF;
    font-size: 17px;
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
  .card {
    flex-grow: 1;
    flex-basis: 0;

    img {
      object-fit: cover;
    }

    .card-info {
      padding: 15px 20px;

      .card-info_title {
        margin-bottom: 13px;
      }

      .card-info_element {
        display: flex;
        flex-direction: row;
        align-items: center;

        img {
          margin-right: 10px;
        }

        .card-info_text {
          font-size: 16px;
          color: #535558;
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

</style>