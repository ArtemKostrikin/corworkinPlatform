import { defineStore } from 'pinia';

// Интерфейс для объекта коворкинга
interface Coworking {
  id: number;
  name: string;
  city: string;
  price: number;
}

// Интерфейс для состояния
interface CoworkingState {
  coworkings: Coworking[];
  filterCity: string;
}

export const useCoworkingStore = defineStore('coworking', {
  state: (): CoworkingState => ({
    coworkings: [],
    filterCity: '', // Выбранный город
  }),

  actions: {
    async fetchCoworkings(): Promise<void> {
      // Моковые данные
      this.coworkings = [
        { id: 1, name: 'Coworking 1', city: 'Москва', price: 500 },
        { id: 2, name: 'Coworking 2', city: 'Санкт-Петербург', price: 700 },
      ];
    },

    setFilterCity(city: string): void {
      this.filterCity = city;
    },
  },

  getters: {
    filteredCoworkings: (state): Coworking[] => {
      if (!state.filterCity) return state.coworkings;
      return state.coworkings.filter(
        (coworking) =>
          coworking.city.toLowerCase() === state.filterCity.toLowerCase()
      );
    },
  },
});
