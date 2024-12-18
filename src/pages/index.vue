<template>
  <div>
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
import { useCoworkingStore } from '../store/coworkingStore';
import CoworkingCard from '../components/CoworkingCard.vue';
import CoworkingFilter from '../components/CoworkingFilter.vue';

export default {
  components: { CoworkingCard, CoworkingFilter },
  setup() {
    const coworkingStore = useCoworkingStore();

    onMounted(() => {
      coworkingStore.fetchCoworkings();
    });

    const filteredCoworkings = computed(() =>
      coworkingStore.coworkings.filter((coworking) => {
        if (!coworkingStore.filterCity) return true;
        return coworking.city === coworkingStore.filterCity;
      })
    );

    return { filteredCoworkings };
  },
};
</script>

<style scoped>
.coworkings {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
  margin-top: 20px;
}
</style>
