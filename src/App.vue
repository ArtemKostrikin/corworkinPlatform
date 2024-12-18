<template>
  <div id="app">
    <h1>Список коворкингов</h1>
    <CoworkingFilter />
    <div class="coworkings">
      <CoworkingCard
        v-for="coworking in filteredCoworkings"
        :key="coworking.id"
        :coworking="coworking"
      />
    </div>
  </div>
</template>

<script>
import { computed, onMounted } from 'vue';
import { useCoworkingStore } from './store/coworkingStore';
import CoworkingCard from './components/CoworkingCard.vue';
import CoworkingFilter from './components/CoworkingFilter.vue';

export default {
  components: { CoworkingCard, CoworkingFilter },
  setup() {
    const coworkingStore = useCoworkingStore();

    onMounted(() => {
      coworkingStore.fetchCoworkings();
    });

    const filteredCoworkings = computed(() =>
      coworkingStore.coworkings.filter((coworking) => {
        // Проверяем, задан ли фильтр
        if (!coworkingStore.filterCity) return true;
        // Сравниваем города
        return coworking.city.toLowerCase() === coworkingStore.filterCity.toLowerCase();
      })
    );

    return { filteredCoworkings };
  },
};
</script>

<style>
#app {
  font-family: Arial, sans-serif;
  text-align: center;
  margin: 0 auto;
  max-width: 800px;
}

.coworkings {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center; /* Центрируем по горизонтали */
  align-items: flex-start; /* Выравниваем сверху */
  margin-top: 20px;
}

h1 {
  margin-bottom: 20px;
}
</style>
