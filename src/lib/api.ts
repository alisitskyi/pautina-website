import { Quest, DaySchedule } from '../types';

// This is the abstraction layer for the API.
// It can be later connected to the legacy DB or a new CMS without changing the frontend.

const BASE_URL = process.env.NEXT_PUBLIC_API_URL || '';

const mockQuests: Quest[] = [
  {
    id: '1',
    slug: 'harry-potter-secret-chamber',
    title: 'Гаррі і Таємна Кімната',
    description: 'Ви опиняєтеся у стінах легендарної школи магії та чаклунства. Таємну кімнату знову відкрито, і над Гоґвортсом нависла смертельна небезпека. Вам доведеться розгадати загадки стародавніх чаклунів, зварити магічне зілля, знайти меч Ґрифіндору та подолати Василіска, перш ніж час вичерпається.',
    shortDescription: 'Пориньте у світ магії Гоґвортсу, розгадайте стародавні таємниці та врятуйте школу від темних сил.',
    image: 'https://images.unsplash.com/photo-1551269901-5c5e14c25df7?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1551269901-5c5e14c25df7?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=800&q=80'
    ],
    difficulty: 3,
    players: { min: 2, max: 6 },
    duration: 60,
    ageLimit: '8+',
    price: { min: 1000, currency: 'UAH' },
    location: {
      id: 'loc-torgova',
      address: 'вул. Торгова, 2',
      area: 'Центр',
      mapLink: 'https://maps.google.com/?q=Odesa+Torgova+2'
    },
    categories: ['Фентезі', 'Для дітей', 'Сімейний']
  },
  {
    id: '2',
    slug: 'the-ring-curse',
    title: 'Дзвінок: Прокляття Самари',
    description: 'Випадково знайдена стара відеокасета без назви, дивний телефонний дзвінок і шепіт у слухавці: "Вам залишилося сім днів... або 60 хвилин". Чи вистачить вам сміливості переступити поріг покинутого будинку, дізнатися правду про трагедію Самари Морган та розірвати коло прокляття?',
    shortDescription: 'Легендарний містичний хоррор з елементами перформансу. Чи зумієте ви перебороти свій страх?',
    image: 'https://images.unsplash.com/photo-1509248961158-e54f6934749c?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1509248961158-e54f6934749c?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=800&q=80'
    ],
    difficulty: 4,
    players: { min: 2, max: 5 },
    duration: 60,
    ageLimit: '14+',
    price: { min: 1200, currency: 'UAH' },
    location: {
      id: 'loc-torgova',
      address: 'вул. Торгова, 2',
      area: 'Центр',
      mapLink: 'https://maps.google.com/?q=Odesa+Torgova+2'
    },
    categories: ['Хоррор', 'Містика', 'Перформанс']
  },
  {
    id: '3',
    slug: 'saw-survival-game',
    title: 'Пила: Фінальна Гра',
    description: 'Ви прокидаєтеся у темному холодному підвалі, прикуті ланцюгами до іржавих труб. Голос на старій аудіокасеті повідомляє правила: Конструктор приготував для вас випробування на ціну життя. Тільки командна робота, холоднокровність і жертва допоможуть вибратися живими.',
    shortDescription: 'Атмосферний трилер за мотивами культового фільму. Випробування на витримку і логіку.',
    image: 'https://images.unsplash.com/photo-1514533450685-4493e01d1fdc?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1514533450685-4493e01d1fdc?auto=format&fit=crop&w=800&q=80'
    ],
    difficulty: 5,
    players: { min: 2, max: 6 },
    duration: 60,
    ageLimit: '16+',
    price: { min: 1200, currency: 'UAH' },
    location: {
      id: 'loc-shevchenko',
      address: 'пр-т Шевченка, 4д',
      area: 'Приморський',
      mapLink: 'https://maps.google.com/?q=Odesa+Shevchenko+4d'
    },
    categories: ['Хоррор', 'Трилер', 'Квест-пастка']
  },
  {
    id: '4',
    slug: 'blackbeard-treasure',
    title: 'Скарби Чорної Бороди',
    description: 'Трюм піратського галеона, запах пороху та солоного вітру. Капітан зійшов на берег усього на одну годину, заховавши карту незліченних скарбів у своїй каюті. Знайдіть приховані шифри, оминіть пастки та вкрадіть золото легендарного корсара до того, як команда повернеться.',
    shortDescription: 'Весела та захоплива піратська пригода для всієї родини, друзів та дитячих свят.',
    image: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1200&q=80',
    gallery: [],
    difficulty: 2,
    players: { min: 2, max: 7 },
    duration: 60,
    ageLimit: '6+',
    price: { min: 900, currency: 'UAH' },
    location: {
      id: 'loc-torgova',
      address: 'вул. Торгова, 2',
      area: 'Центр',
      mapLink: 'https://maps.google.com/?q=Odesa+Torgova+2'
    },
    categories: ['Пригоди', 'Для дітей', 'Сімейний']
  },
  {
    id: '5',
    slug: 'asylum-escape',
    title: 'Втеча з Психлікарні',
    description: 'Закрита психіатрична лікарня суворого режиму, де головний лікар проводить таємні експерименти над пацієнтами. Вас зачинили у палаті, але один із санітарів залишив підказки для втечі під час перезмінки. У вас рівно 60 хвилин, щоб повернути собі свободу.',
    shortDescription: 'Напружений психологічний детектив зі складними механічними та логічними головоломками.',
    image: 'https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?auto=format&fit=crop&w=1200&q=80',
    gallery: [],
    difficulty: 4,
    players: { min: 2, max: 6 },
    duration: 60,
    ageLimit: '14+',
    price: { min: 1100, currency: 'UAH' },
    location: {
      id: 'loc-shevchenko',
      address: 'пр-т Шевченка, 4д',
      area: 'Приморський',
      mapLink: 'https://maps.google.com/?q=Odesa+Shevchenko+4d'
    },
    categories: ['Трилер', 'Детектив', 'Екшн']
  },
  {
    id: '6',
    slug: 'sherlock-holmes-robbery',
    title: 'Шерлок: Пограбування в Лондоні',
    description: 'Вікторіанський Лондон, 1895 рік. З королівського сховища викрадено безцінний діамант, і всі підозри вказують на професора Моріарті. Ви — помічники Шерлока Холмса на Бейкер-стріт 221b. Використовуйте дедукцію, щоб викрити злочинця до того, як він покине країну.',
    shortDescription: 'Класичний антуражний квест для шанувальників логічних задач, дедукції та атмосфери старої Англії.',
    image: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=1200&q=80',
    gallery: [],
    difficulty: 3,
    players: { min: 2, max: 5 },
    duration: 60,
    ageLimit: '10+',
    price: { min: 1000, currency: 'UAH' },
    location: {
      id: 'loc-shevchenko',
      address: 'пр-т Шевченка, 4д',
      area: 'Приморський',
      mapLink: 'https://maps.google.com/?q=Odesa+Shevchenko+4d'
    },
    categories: ['Детектив', 'Логіка', 'Атмосферний']
  }
];

export const api = {
  quests: {
    getAll: async (): Promise<Quest[]> => {
      return mockQuests;
    },
    getBySlug: async (slug: string): Promise<Quest | null> => {
      return mockQuests.find(q => q.slug === slug) || null;
    },
    getByCategory: async (category: string): Promise<Quest[]> => {
      return mockQuests.filter(q => q.categories.includes(category));
    },
    getByLocation: async (locationId: string): Promise<Quest[]> => {
      return mockQuests.filter(q => q.location.id === locationId);
    }
  },
  booking: {
    getSchedule: async (questId: string, date: string): Promise<DaySchedule> => {
      // Dynamic slots generation for the selected quest & date
      const quest = mockQuests.find(q => q.id === questId);
      const basePrice = quest?.price.min || 1000;

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
      // In future: forward to legacy DB or CRM / Telegram bot webhook
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
      return { success: true, bookingId: `P-${Date.now().toString().slice(-6)}` };
    }
  }
};
