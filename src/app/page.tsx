import { api } from '@/lib/api';
import HomePageClient from '@/components/HomePageClient';

export default async function HomePage() {
  const quests = await api.quests.getAll();

  return <HomePageClient initialQuests={quests} />;
}

