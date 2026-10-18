import { NextResponse } from 'next/server';
import { api } from '@/lib/api';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const category = searchParams.get('category');
  const location = searchParams.get('location');

  let quests = await api.quests.getAll();

  if (category && category !== 'Всі') {
    quests = quests.filter((q) => q.categories.includes(category));
  }

  if (location && location !== 'Всі локації') {
    quests = quests.filter((q) => q.location.id === location || q.location.address.includes(location));
  }

  return NextResponse.json({
    success: true,
    count: quests.length,
    data: quests,
  });
}
