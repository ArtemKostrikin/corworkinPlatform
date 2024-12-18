<template>
  <div class="coworking-detail">
    <h1>{{ coworking?.name }}</h1>
    <p>{{ coworking?.description }}</p>
    <p>Цена: {{ coworking?.price }}₽/день</p>
    <BookingModal />
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useCoworkingStore } from "@/store/coworkingStore";
import BookingModal from "@/components/BookingModal.vue";

const coworkingStore = useCoworkingStore();
const coworking = ref(null);

onMounted(() => {
  const id = useRoute().params.id;
  coworking.value = coworkingStore.getCoworkingById(id);
});
</script>

<style scoped>
.coworking-detail {
  padding: 20px;
  background: #f4f4f4;
  border-radius: 8px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}
</style>
