import { NextResponse } from 'next/server';
import { api } from '@/lib/api';

interface Params {
  params: {
    slug: string;
  };
}

export async function GET(request: Request, { params }: Params) {
  const quest = await api.quests.getBySlug(params.slug);

  if (!quest) {
    return NextResponse.json(
      { success: false, error: 'Квест не знайдено' },
      { status: 404 }
    );
  }

  return NextResponse.json({
    success: true,
    data: quest,
  });
}
