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
          <nuxt-img width="8" height="13" src="/icons/chevron.svg" alt="Иконка стрелки вправо"/>
        </button>
      </a>
    </div>
    <div class="cards-container">
      <div
          v-for="(project, index) of projects"
          :key="index"
          class="card"
      >
        <!--          TODO: Добавить ширину и высоту-->
        <nuxt-img  width="" height="" :src="project.image" :alt="project.alt"/>
        <div class="card-info">
          <div class="card-info_title">
            <div class="card-info_element">
              <nuxt-img width="18" height="24" src="/icons/projects/location.svg" alt="Иконка указателя локации"/>
              <p class="p-body">{{ project.location }}</p>
            </div>
          </div>
          <div class="card-info_item">
            <div class="card-info_element">
              <nuxt-img width="24" height="18" src="/icons/projects/bed.svg" alt="Иконка кровати" />
              <p class="card-info_text p-body">{{ project.rooms }}</p>
            </div>
            <div class="card-info_element">
              <nuxt-img width="27" height="14" src="/icons/projects/arrow-left-right.svg" alt="Иконка стрелки влево-вправо"/>
              <p class="card-info_text p-body">{{ project.size }}</p>
            </div>
            <div class="card-info_element">
              <nuxt-img width="22" height="22" src="/icons/projects/arrow-expand-all.svg" alt="Иконка расширить"/>
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
import {ref} from 'vue'

const projects = ref([
  {
    image: '/images/projects/project3.png',
    location: 'СНТ Строитель',
    rooms: '3 комнаты',
    size: '8x10 м',
    square: '80 м²',
    price: '2 300 000 ₽',
    alt: 'Одноэтажный дом 80 кв.м в СНТ Строитель'
  },
  {
    image: '/images/projects/project2.png',
    location: 'СНТ Беломор',
    rooms: '4 комнаты',
    size: '6x8 м',
    square: '96 м²',
    price: '2 800 000 ₽',
    alt: 'Двухэтажный дом 96 кв.м в СНТ Беломор'
  },
  {
    image: '/images/projects/project1.png',
    location: 'СНТ Поморочка',
    rooms: '6 комнат',
    size: '8x11 м',
    square: '88+55 м²',
    price: '3 300 000 ₽',
    alt: 'Одноэтажный дом 88+55 кв.м в СНТ Поморочка'
  },
])
</script>

<style scoped lang="scss">
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
  background: var(--clr-neutral-800);
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
      background: var(--clr-neutral-100);
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
          color: var(--clr-neutral-600);
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
  color: var(--clr-neutral-500);
  font-weight: normal;
  font-size: 16px;
}
</style>