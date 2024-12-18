<!-- components/BookingModal.vue -->
<template>
  <div class="modal" v-if="isOpen">
    <div class="modal-content">
      <h2>Бронирование</h2>
      <form @submit.prevent="handleBooking">
        <label for="date">Дата бронирования:</label>
        <input v-model="bookingDate" type="date" id="date" required />
        <button type="submit">Забронировать</button>
      </form>
      <button @click="closeModal">Закрыть</button>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const isOpen = ref(false)
const bookingDate = ref('')

const openModal = () => { isOpen.value = true }
const closeModal = () => { isOpen.value = false }

const handleBooking = () => {
  // Логика бронирования
  alert(`Коворкинг забронирован на ${bookingDate.value}`)
  closeModal()
}
</script>

<style scoped>
.modal {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal-content {
  background: white;
  padding: 20px;
  border-radius: 8px;
}
</style>
