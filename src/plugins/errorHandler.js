// plugins/errorHandler.js

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.provide("errorHandler", (error) => {
    console.error("Global Error Handler:", error);
    // Можно сделать здесь дополнительные действия: отправка ошибок на сервер, отображение уведомлений и т.д.
  });
});
