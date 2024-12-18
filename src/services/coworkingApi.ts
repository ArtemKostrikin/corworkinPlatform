export interface Coworking {
  id: number;
  name: string;
  city: string;
  price: number;
}

export const fetchCoworkings = async (): Promise<Coworking[]> => {
  try {
    const response = await fetch('/api/coworkings');
    if (!response.ok) {
      throw new Error('Failed to fetch coworkings');
    }
    return await response.json();
  } catch (error) {
    console.error('Error fetching coworkings:', error);
    return [];
  }
};
