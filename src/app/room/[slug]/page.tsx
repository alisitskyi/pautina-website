import { api } from '@/lib/api';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import BookingSection from '@/components/BookingSection';
import { Users, Clock, Sparkles, MapPin, ShieldCheck, ChevronRight } from 'lucide-react';

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

  return (
    <div className="bg-brand-dark pt-8 pb-24 text-white min-h-screen">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Breadcrumbs */}
        <nav className="flex items-center gap-2 text-xs text-gray-400 mb-8 uppercase tracking-widest font-semibold">
          <Link href="/" className="hover:text-brand-red transition-colors">Головна</Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <Link href="/#quests" className="hover:text-brand-red transition-colors">Квести</Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <span className="text-brand-red truncate">{quest.title}</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mb-16">
          {/* Left Column: Media & Highlights (5 cols) */}
          <div className="lg:col-span-5">
            <div className="relative h-[340px] sm:h-[450px] rounded-2xl overflow-hidden mb-6 border border-white/10 shadow-2xl">
              <Image 
                src={quest.image} 
                alt={quest.title} 
                fill 
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30" />
              
              {/* Categories */}
              <div className="absolute top-4 left-4 flex flex-wrap gap-2">
                {quest.categories.map(cat => (
                  <span key={cat} className="bg-brand-red text-white text-[11px] font-extrabold px-3 py-1 rounded-md uppercase tracking-wider shadow">
                    {cat}
                  </span>
                ))}
              </div>

              {/* Location Badge */}
              <div className="absolute bottom-4 left-4 right-4 flex items-center gap-2 bg-black/60 backdrop-blur-md px-3.5 py-2 rounded-xl border border-white/10 text-xs text-gray-300">
                <MapPin className="w-4 h-4 text-brand-red shrink-0" />
                <span className="font-semibold">{quest.location.address} ({quest.location.area})</span>
              </div>
            </div>

            {/* Quick Specs Grid */}
            <div className="grid grid-cols-4 gap-2.5 mb-6">
              <div className="bg-neutral-900 border border-white/5 p-3.5 rounded-xl text-center">
                <span className="block text-gray-400 text-[10px] uppercase font-bold mb-1">Складність</span>
                <span className="text-brand-gold font-bold text-xs">
                  {'★'.repeat(quest.difficulty)}
                </span>
              </div>
              <div className="bg-neutral-900 border border-white/5 p-3.5 rounded-xl text-center">
                <span className="block text-gray-400 text-[10px] uppercase font-bold mb-1">Гравці</span>
                <span className="font-bold text-xs">{quest.players.min}-{quest.players.max} ос.</span>
              </div>
              <div className="bg-neutral-900 border border-white/5 p-3.5 rounded-xl text-center">
                <span className="block text-gray-400 text-[10px] uppercase font-bold mb-1">Час</span>
                <span className="font-bold text-xs">{quest.duration} хв</span>
              </div>
              <div className="bg-neutral-900 border border-white/5 p-3.5 rounded-xl text-center">
                <span className="block text-gray-400 text-[10px] uppercase font-bold mb-1">Вік</span>
                <span className="font-bold text-xs text-brand-red">{quest.ageLimit}</span>
              </div>
            </div>

            {/* Security & Rules Banner */}
            <div className="bg-neutral-900/50 border border-white/5 p-5 rounded-2xl text-xs text-gray-400 space-y-2">
              <div className="flex items-center gap-2 text-white font-bold uppercase text-[11px] mb-1">
                <ShieldCheck className="w-4 h-4 text-green-500" />
                <span>Безпека та комфорт:</span>
              </div>
              <p>• Усі кімнати обладнані кнопками екстреного відкриття дверей.</p>
              <p>• Оператор веде відеонагляд і завжди готовий дати підказку.</p>
              <p>• Не вимагає спеціального фізичного одягу чи підготовки.</p>
            </div>
          </div>

          {/* Right Column: Title, Description & Interactive Booking (7 cols) */}
          <div className="lg:col-span-7 flex flex-col justify-between">
            <div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-6 font-accent uppercase leading-tight tracking-tight">
                {quest.title}
              </h1>
              
              <div className="text-gray-300 text-sm sm:text-base leading-relaxed mb-8 bg-neutral-900/30 p-5 rounded-2xl border border-white/5">
                <p className="mb-3">{quest.description}</p>
                <p className="text-gray-400 text-xs italic">
                  Чудово підходить для компаній друзів, сімейного відпочинку або святкування дня народження.
                </p>
              </div>
            </div>

            {/* Interactive Booking Section */}
            <BookingSection quest={quest} initialSlots={schedule.slots} />
          </div>
        </div>
      </div>
    </div>
  );
}
