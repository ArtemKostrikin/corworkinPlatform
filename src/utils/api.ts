// api/coworkingApi.ts

interface Coworking {
  id: number
  name: string
  city: string
  price: number
}

export const fetchCoworkings = async (): Promise<Coworking[]> => {
  try {
    const response = await fetch("/api/coworkings"); // Запрос к реальному API
    if (!response.ok) {
      // Более подробная обработка ошибок
      const errorText = await response.text(); // Получаем текст ошибки с сервера
      throw new Error(`Failed to fetch coworkings: ${response.status} ${errorText}`);
    }
    return await response.json(); // Возвращаем данные
  } catch (error) {
    console.error("Error fetching coworkings:", error);
    // Можно либо вернуть пустой массив, либо пробросить ошибку, чтобы обработать её в другом месте
    return []; // или можно выбросить ошибку throw error;
  }
};
