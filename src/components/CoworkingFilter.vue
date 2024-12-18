<template>
  <div class="coworking-filter">
    <label for="city">Фильтр по городу:</label>
    <select id="city" v-model="filterCity" @change="applyFilter">
      <option value="">Все города</option>
      <option value="Москва">Москва</option>
      <option value="Санкт-Петербург">Санкт-Петербург</option>
    </select>
  </div>
</template>

<script>
import { useCoworkingStore } from '../store/coworkingStore';

export default {
  setup() {
    const coworkingStore = useCoworkingStore();

    const applyFilter = () => {
      coworkingStore.setFilterCity(coworkingStore.filterCity);
    };

    return {
      filterCity: coworkingStore.filterCity,
      applyFilter,
    };
  },
};
</script>

<style scoped>
.coworking-filter {
  margin-bottom: 20px;
}

label {
  margin-right: 10px;
  font-weight: bold;
}

select {
  padding: 5px;
  font-size: 14px;
}
</style>
