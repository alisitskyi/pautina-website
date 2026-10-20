'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Quest, Slot } from '@/types';
import BookingSection from '@/components/BookingSection';
import { ShieldCheck, ChevronRight, MapPin } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import { translations, questTranslationsEn } from '@/lib/translations';

interface Props {
  quest: Quest;
  initialSlots: Slot[];
}

export default function RoomPageClient({ quest, initialSlots }: Props) {
  const { language, t } = useLanguage();
  const roomT = t('roomPage');
  const cardT = t('card');
  const filterT = t('filters');

  const displayTitle =
    language === 'en' && questTranslationsEn[quest.slug]?.title
      ? questTranslationsEn[quest.slug].title
      : quest.title;

  const displayDescription =
    language === 'en' && questTranslationsEn[quest.slug]?.description
      ? questTranslationsEn[quest.slug].description
      : quest.description;

  // Clean age limit (remove "без супроводження дорослих")
  const cleanAge = quest.ageLimit.replace(/\s*без\s*супроводження\s*дорослих/gi, '').trim();

  const areaLabel =
    quest.location.area === 'Центр'
      ? filterT.center
      : quest.location.area === 'Приморський'
      ? filterT.primorsky
      : quest.location.area;

  return (
    <div className="bg-transparent pt-8 pb-24 text-white min-h-screen">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Breadcrumbs */}
        <nav className="flex items-center gap-2 text-xs text-gray-400 mb-8 uppercase tracking-widest font-semibold">
          <Link href="/" className="hover:text-[#fb7b04] transition-colors">
            {roomT.home}
          </Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <Link href="/#quests" className="hover:text-[#fb7b04] transition-colors">
            {roomT.quests}
          </Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <span className="text-[#fb7b04] truncate">{displayTitle}</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mb-16">
          {/* Left Column: Media & Highlights (5 cols) */}
          <div className="lg:col-span-5">
            <div className="relative h-[340px] sm:h-[450px] rounded-2xl overflow-hidden mb-6 border border-white/10 shadow-2xl">
              <Image 
                src={quest.image} 
                alt={displayTitle} 
                fill 
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30" />
              
              {/* Categories */}
              <div className="absolute top-4 left-4 flex flex-wrap gap-2">
                {quest.categories.map((cat) => {
                  const translatedCat =
                    translations[language].filters.categories[
                      cat as keyof typeof translations['ua']['filters']['categories']
                    ] || cat;
                  return (
                    <span 
                      key={cat} 
                      className="bg-[#fb7b04] text-white text-[11px] font-extrabold px-3 py-1 rounded-md uppercase tracking-wider shadow"
                    >
                      {translatedCat}
                    </span>
                  );
                })}
              </div>

              {/* Location Badge */}
              <div className="absolute bottom-4 left-4 right-4 flex items-center gap-2 bg-black/60 backdrop-blur-md px-3.5 py-2 rounded-xl border border-white/10 text-xs text-gray-300">
                <MapPin className="w-4 h-4 text-[#fb7b04] shrink-0" />
                <span className="font-semibold">
                  {quest.location.address} ({areaLabel})
                </span>
              </div>
            </div>

            {/* Quick Specs Grid */}
            <div className="grid grid-cols-4 gap-2.5 mb-6">
              <div className="bg-neutral-900 border border-white/5 p-3.5 rounded-xl text-center">
                <span className="block text-gray-400 text-[10px] uppercase font-bold mb-1">
                  {roomT.difficulty}
                </span>
                <span className="text-brand-gold font-bold text-xs">
                  {'★'.repeat(quest.difficulty)}
                </span>
              </div>
              <div className="bg-neutral-900 border border-white/5 p-3.5 rounded-xl text-center">
                <span className="block text-gray-400 text-[10px] uppercase font-bold mb-1">
                  {roomT.players}
                </span>
                <span className="font-bold text-xs">
                  {quest.players.min}-{quest.players.max} {cardT.players}
                </span>
              </div>
              <div className="bg-neutral-900 border border-white/5 p-3.5 rounded-xl text-center">
                <span className="block text-gray-400 text-[10px] uppercase font-bold mb-1">
                  {roomT.duration}
                </span>
                <span className="font-bold text-xs">
                  {quest.duration} {cardT.duration}
                </span>
              </div>
              <div className="bg-neutral-900 border border-white/5 p-3.5 rounded-xl text-center">
                <span className="block text-gray-400 text-[10px] uppercase font-bold mb-1">
                  {roomT.age}
                </span>
                <span className="font-bold text-xs text-[#fb7b04]">{cleanAge}</span>
              </div>
            </div>

            {/* Security & Rules Banner */}
            <div className="bg-neutral-900/50 border border-white/5 p-5 rounded-2xl text-xs text-gray-400 space-y-2">
              <div className="flex items-center gap-2 text-white font-bold uppercase text-[11px] mb-1">
                <ShieldCheck className="w-4 h-4 text-green-500" />
                <span>{roomT.safetyTitle}</span>
              </div>
              <p>{roomT.safety1}</p>
              <p>{roomT.safety2}</p>
              <p>{roomT.safety3}</p>
            </div>
          </div>

          {/* Right Column: Title, Description & Interactive Booking (7 cols) */}
          <div className="lg:col-span-7 flex flex-col justify-between">
            <div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-6 font-accent uppercase leading-tight tracking-tight">
                {displayTitle}
              </h1>
              
              <div className="text-gray-300 text-sm sm:text-base leading-relaxed mb-8 bg-neutral-900/30 p-5 rounded-2xl border border-white/5">
                <p className="mb-3">{displayDescription}</p>
                <p className="text-gray-400 text-xs italic">
                  {roomT.suitableFor}
                </p>
              </div>
            </div>

            {/* Interactive Booking Section */}
            <BookingSection quest={quest} initialSlots={initialSlots} />
          </div>
        </div>
      </div>
    </div>
  );
}
