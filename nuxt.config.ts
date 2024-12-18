import { defineNuxtConfig } from 'nuxt/config';

export default defineNuxtConfig({
  // Подключаем модули
  modules: [
    '@nuxtjs/tailwindcss', // Tailwind CSS
    '@pinia/nuxt',         // Pinia для состояния
  ],

  // Настройки TypeScript
  typescript: {
    shim: false, // Отключаем shim для упрощения работы с типами
    strict: true, // Включаем строгую типизацию
  },

  // Настройка приложения
  app: {
    head: {
      title: 'Coworking Platform', // Заголовок страницы
      meta: [
        { name: 'description', content: 'Платформа для поиска коворкингов' },
      ],
    },
  },

  // Tailwind CSS конфигурация (если требуется)

});
