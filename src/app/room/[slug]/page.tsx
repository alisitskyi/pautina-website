import { api } from '@/lib/api';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import RoomPageClient from '@/components/RoomPageClient';

interface Props {
  params: { slug: string };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const quest = await api.quests.getBySlug(params.slug);
  if (!quest) return { title: 'Квест не знайдено | PAUTINA Rooms' };

  return {
    title: `${quest.title} — Квест кімната Одеса | PAUTINA Rooms`,
    description: quest.shortDescription,
    openGraph: {
      title: `${quest.title} | PAUTINA Rooms`,
      description: quest.shortDescription,
      images: [quest.image],
    },
  };
}

export async function generateStaticParams() {
  const quests = await api.quests.getAll();
  return quests.map((quest) => ({
    slug: quest.slug,
  }));
}

export default async function QuestPage({ params }: Props) {
  const quest = await api.quests.getBySlug(params.slug);

  if (!quest) {
    notFound();
  }

  // Fetch schedule
  const schedule = await api.booking.getSchedule(quest.id, new Date().toISOString());

  return <RoomPageClient quest={quest} initialSlots={schedule.slots} />;
}

