import { Metadata } from 'next';
import { api } from '@/lib/api';
import LocationsPageClient from '@/components/LocationsPageClient';

export const metadata: Metadata = {
  title: 'Локації квестів в Одесі | PAUTINA Rooms',
  description: 'Локації мережі квест-кімнат PAUTINA: вул. Торгова, 2 (Центр) та пр-т Шевченка, 4д (Приморський). Списком квестів, адреси та контакти.',
};

export default async function LocationsPage() {
  const quests = await api.quests.getAll();

  return <LocationsPageClient initialQuests={quests} />;
}

