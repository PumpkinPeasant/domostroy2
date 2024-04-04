import { defineNuxtPlugin } from '#app'
import Ymaps from 'vue-yandex-maps'


const settings = {
    apiKey: '004dbda2-6983-41ec-83be-7b74f8f7e68d', // Индивидуальный ключ API
    lang: 'ru_RU', // Используемый язык
    // coordorder: 'latlong', // Порядок задания географических координат
    // debug: false, // Режим отладки
    // version: '2.1' // Версия Я.Карт
}
export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.vueApp.use(Ymaps, settings)
});