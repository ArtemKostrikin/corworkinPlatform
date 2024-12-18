<template>
  <div class="coworking-card">
    <h2>{{ coworking.name }}</h2>
    <p><strong>Город:</strong> {{ coworking.city }}</p>
    <p><strong>Цена:</strong> {{ coworking.price }}₽</p>
  </div>
</template>

<script>
export default {
  props: {
    coworking: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style scoped>
.coworking-card {
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 15px;
  background-color: #f9f9f9;
  width: 200px; /* Фиксированная ширина для одинаковых карточек */
  text-align: left;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}

.coworking-card h2 {
  font-size: 18px;
  margin-bottom: 10px;
}

.coworking-card p {
  margin: 5px 0;
  font-size: 14px;
}
</style>
