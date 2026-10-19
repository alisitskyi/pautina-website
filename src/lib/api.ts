import { Quest, DaySchedule } from '../types';
import rawQuests from './pautina_all_quests.json';

const BASE_URL = process.env.NEXT_PUBLIC_API_URL || '';

// Type-cast the imported JSON
const questsList: Quest[] = (rawQuests as any[]).map((q) => ({
  id: q.id,
  slug: q.slug,
  title: q.title,
  description: q.description,
  shortDescription: q.shortDescription,
  image: q.image,
  gallery: q.gallery || [q.image],
  difficulty: q.difficulty as 1 | 2 | 3 | 4 | 5,
  players: q.players,
  duration: q.duration || 60,
  ageLimit: (q.ageLimit || '12+').replace(/\s*без\s+.*$/i, '').replace('12/+', '12+').trim(),
  price: q.price || { min: 1400, currency: 'UAH' },
  location: q.location,
  categories: q.categories || ['Пригоди'],
  isNew: q.isNew ?? (q.slug === 'hogvarts' || q.slug === 'pobeg' || q.id === '1' || q.id === '3')
}));

export const api = {
  quests: {
    getAll: async (): Promise<Quest[]> => {
      return questsList;
    },
    getBySlug: async (slug: string): Promise<Quest | null> => {
      const lower = slug.toLowerCase();
      const found = questsList.find(
        (q) => q.slug.toLowerCase() === lower || (q as any).legacySlug?.toLowerCase() === lower
      );
      return found || null;
    },
    getByCategory: async (category: string): Promise<Quest[]> => {
      if (category === 'Всі') return questsList;
      return questsList.filter((q) => q.categories.includes(category));
    },
    getByLocation: async (locationId: string): Promise<Quest[]> => {
      return questsList.filter((q) => q.location.id === locationId);
    }
  },
  booking: {
    getSchedule: async (questId: string, date: string): Promise<DaySchedule> => {
      const quest = questsList.find((q) => q.id === questId);
      const basePrice = quest?.price.min || 1400;

      return {
        date,
        slots: [
          { id: '1', time: '10:00', price: basePrice, isAvailable: true },
          { id: '2', time: '11:30', price: basePrice, isAvailable: true },
          { id: '3', time: '13:00', price: basePrice + 100, isAvailable: false },
          { id: '4', time: '14:30', price: basePrice + 100, isAvailable: true },
          { id: '5', time: '16:00', price: basePrice + 200, isAvailable: true },
          { id: '6', time: '17:30', price: basePrice + 200, isAvailable: false },
          { id: '7', time: '19:00', price: basePrice + 300, isAvailable: true },
          { id: '8', time: '20:30', price: basePrice + 300, isAvailable: true },
          { id: '9', time: '22:00', price: basePrice + 300, isAvailable: true }
        ]
      };
    },
    createBooking: async (bookingData: {
      questId: string;
      slotId: string;
      date: string;
      time: string;
      name: string;
      phone: string;
      playersCount: number;
      comment?: string;
    }) => {
      if (BASE_URL) {
        try {
          const response = await fetch(`${BASE_URL}/api/booking`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(bookingData),
          });
          return response.json();
        } catch (e) {
          console.warn('Backend API unavailable, using mock response');
        }
      }
      return { success: true, bookingId: `PR-${Date.now().toString().slice(-6)}` };
    }
  }
};
