'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Quest } from '@/types';
import { Users, Clock, MapPin, Sparkles, Calendar } from 'lucide-react';

interface QuestCatalogProps {
  initialQuests: Quest[];
}

export default function QuestCatalog({ initialQuests }: QuestCatalogProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>('ВСІ');
  const [selectedArea, setSelectedArea] = useState<string>('Всі райони');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories = [
    'ВСІ',
    'ХОРРОР',
    'МІСТИКА',
    'ФЕНТЕЗІ',
    'ФАНТАСТИКА',
    'ДЕТЕКТИВ',
    'ПРИГОДИ',
    'НА ДЕНЬ НАРОДЖЕННЯ',
    'ДЛЯ ПАРИ',
    'ДЛЯ 4+ ЛЮДЕЙ'
  ];
  const areas = ['Всі райони', 'Центр', 'Приморський'];

  const filteredQuests = initialQuests.filter((quest) => {
    let matchesCategory = true;
    if (selectedCategory !== 'ВСІ') {
      if (selectedCategory === 'ХОРРОР') {
        matchesCategory = quest.categories.some((c) => c.toLowerCase().includes('хоррор'));
      } else if (selectedCategory === 'МІСТИКА') {
        matchesCategory = quest.categories.some((c) => c.toLowerCase().includes('містик'));
      } else if (selectedCategory === 'ФЕНТЕЗІ') {
        matchesCategory = quest.categories.some((c) => c.toLowerCase().includes('фентез'));
      } else if (selectedCategory === 'ФАНТАСТИКА') {
        matchesCategory =
          quest.categories.some((c) => c.toLowerCase().includes('фантаст')) ||
          ['Загублені у космосі', 'ЧУЖІ', 'Мисливці за привидами'].includes(quest.title) ||
          quest.description.toLowerCase().includes('космос') ||
          quest.description.toLowerCase().includes('чужі');
      } else if (selectedCategory === 'ДЕТЕКТИВ') {
        matchesCategory = quest.categories.some((c) => c.toLowerCase().includes('детектив'));
      } else if (selectedCategory === 'ПРИГОДИ') {
        matchesCategory =
          quest.categories.some((c) => c.toLowerCase().includes('пригод')) ||
          ['ДЖУМАНДЖИ', 'ДЖУНГЛІ', 'ХОББІТ'].includes(quest.title);
      } else if (selectedCategory === 'НА ДЕНЬ НАРОДЖЕННЯ') {
        matchesCategory =
          quest.title.toLowerCase().includes('день народження') ||
          quest.categories.some((c) => c.toLowerCase().includes('дітей'));
      } else if (selectedCategory === 'ДЛЯ ПАРИ') {
        matchesCategory = quest.players.min <= 2 && quest.players.max <= 4;
      } else if (selectedCategory === 'ДЛЯ 4+ ЛЮДЕЙ') {
        matchesCategory = quest.players.max >= 5;
      }
    }
    
    const matchesArea =
      selectedArea === 'Всі райони' ||
      quest.location.area === selectedArea ||
      quest.location.address.toLowerCase().includes(selectedArea.toLowerCase());

    const matchesSearch =
      !searchQuery.trim() ||
      quest.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      quest.description.toLowerCase().includes(searchQuery.toLowerCase());

    return matchesCategory && matchesArea && matchesSearch;
  });

  return (
    <div>
      {/* Category & Location Filters */}
      <div className="flex flex-col gap-6 mb-10">
        {/* Category Pills */}
        <div className="flex flex-wrap justify-center gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all ${
                selectedCategory === cat
                  ? 'bg-[#fb7b04] text-white shadow-lg shadow-[#fb7b04]/30 scale-105'
                  : 'bg-neutral-900/90 text-gray-300 hover:text-white hover:bg-neutral-800 border border-white/10'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Search & Area Filter Bar */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-3 bg-[#0c0c0c] p-3 rounded-xl border border-white/10 max-w-4xl mx-auto w-full">
          {/* Search input */}
          <input
            type="text"
            placeholder="Шукати квест за назвою..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full sm:w-auto flex-1 bg-black/60 border border-white/10 rounded-lg px-4 py-2 text-xs text-white outline-none focus:border-[#fbefab]/60 transition-colors"
          />

          <div className="flex items-center gap-3 w-full sm:w-auto justify-between sm:justify-end">
            <div className="flex items-center gap-2 bg-black/60 border border-white/10 rounded-lg px-3 py-2 text-xs text-gray-300">
              <MapPin className="w-3.5 h-3.5 text-[#fb7b04] shrink-0" />
              <select
                value={selectedArea}
                onChange={(e) => setSelectedArea(e.target.value)}
                className="bg-transparent text-white outline-none cursor-pointer"
              >
                {areas.map((loc) => (
                  <option key={loc} value={loc} className="bg-neutral-900 text-white">
                    {loc}
                  </option>
                ))}
              </select>
            </div>

            <span className="text-xs text-gray-400 font-mono whitespace-nowrap">
              {filteredQuests.length} {filteredQuests.length === 1 ? 'квест' : 'квестів'}
            </span>
          </div>
        </div>
      </div>

      {/* Quest Cards Grid (Authentic Pautina Layout: Equal Heights Across All Cards) */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
        {filteredQuests.map((quest) => (
          <a
            key={quest.id}
            href={`/room/${quest.slug}`}
            className="group flex flex-col h-full transition-all duration-300 cursor-pointer"
          >
            {/* Title ABOVE Poster (Equal Height Container) */}
            <div className="h-9 sm:h-10 flex items-center mb-2.5">
              <h3 className="text-xl sm:text-2xl font-bold uppercase tracking-wide text-white group-hover:text-[#fbefab] transition-colors truncate w-full">
                {quest.title}
              </h3>
            </div>

            {/* Poster Image Frame */}
            <div className="relative aspect-[16/11] w-full shrink-0 overflow-hidden rounded-t-xl border border-white/10 bg-[#0d0d0d]">
              <Image
                src={quest.image}
                alt={quest.title}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 420px"
                loading="lazy"
                className="object-cover transition-transform duration-700 group-hover:scale-105 pointer-events-none"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />

              {/* NEW Stamp Badge (Authentic to original screenshot) */}
              {quest.isNew && (
                quest.slug === 'pobeg' || quest.id === '3' ? (
                  /* Orange diagonal NEW badge in top-right */
                  <div className="absolute top-3 right-3 z-10 pointer-events-none">
                    <span className="inline-block border-2 border-[#fb7b04] text-[#fb7b04] bg-black/80 font-black text-xs sm:text-sm uppercase tracking-widest px-2.5 py-0.5 rounded shadow-lg transform rotate-12">
                      NEW
                    </span>
                  </div>
                ) : (
                  /* Red diagonal NEW stamp in bottom-left */
                  <div className="absolute bottom-3 left-3 z-10 pointer-events-none">
                    <span className="inline-block border-2 border-red-600 text-red-500 bg-black/80 font-black text-xs sm:text-sm uppercase tracking-widest px-2 py-0.5 rounded shadow-lg transform -rotate-12">
                      NEW
                    </span>
                  </div>
                )
              )}

              {/* Top Badges: Categories & Star Rating */}
              <div className="absolute top-3 left-3 flex items-center gap-1.5 z-10 pointer-events-none">
                {quest.categories.slice(0, 2).map((cat) => (
                  <span
                    key={cat}
                    className="text-[10px] uppercase font-extrabold bg-black/75 backdrop-blur-md text-gray-200 border border-white/10 px-2 py-0.5 rounded tracking-wider shadow"
                  >
                    {cat}
                  </span>
                ))}
              </div>

              <div className="absolute bottom-3 right-3 z-10 pointer-events-none">
                <span className="text-xs font-bold bg-black/80 backdrop-blur-md px-2 py-0.5 rounded border border-white/10 text-[#fbefab]">
                  {'★'.repeat(quest.difficulty)}
                  <span className="text-gray-600">{'★'.repeat(5 - quest.difficulty)}</span>
                </span>
              </div>
            </div>

            {/* Card Body & CTA (Equalized flex-1 height) */}
            <div className="bg-[#0e0e0e] border-x border-b border-white/10 rounded-b-xl p-4 sm:p-5 flex flex-col flex-1 justify-between group-hover:border-white/20 transition-all shadow-xl">
              {/* Specs Bar (Consistent min-h-[52px]) */}
              <div className="grid grid-cols-3 gap-2 min-h-[52px] items-center py-2 border-t border-b border-white/5 text-xs text-gray-300 mb-3 bg-black/40 rounded-lg px-2">
                <div className="flex items-center gap-1.5 justify-center">
                  <Users className="w-3.5 h-3.5 text-[#fb7b04] shrink-0" />
                  <span className="whitespace-nowrap">{quest.players.min}-{quest.players.max} ос.</span>
                </div>
                <div className="flex items-center gap-1.5 justify-center border-l border-r border-white/10">
                  <Clock className="w-3.5 h-3.5 text-[#fbefab] shrink-0" />
                  <span className="whitespace-nowrap">{quest.duration} хв</span>
                </div>
                <div className="flex items-center gap-1 justify-center text-center">
                  <Sparkles className="w-3.5 h-3.5 text-[#fb7b04] shrink-0" />
                  <span className="text-[11px] leading-tight line-clamp-2">{quest.ageLimit}</span>
                </div>
              </div>

              {/* Address & Price Row (Consistent min-h-[24px]) */}
              <div className="flex justify-between items-center mb-4 text-xs min-h-[24px]">
                <div className="flex items-center gap-1.5 text-gray-400 truncate max-w-[65%]">
                  <MapPin className="w-3.5 h-3.5 text-gray-500 shrink-0" />
                  <span className="truncate">{quest.location.address}</span>
                </div>
                <div className="text-right shrink-0">
                  <span className="text-[10px] text-gray-500 uppercase mr-1">від</span>
                  <span className="text-base font-extrabold text-white">
                    {quest.price.min} <span className="text-xs font-normal text-gray-400">грн</span>
                  </span>
                </div>
              </div>

              {/* Booking CTA Button (Pushed to bottom with mt-auto) */}
              <div className="w-full mt-auto bg-[#fb7b04] group-hover:bg-[#e06d02] text-white font-extrabold py-2.5 sm:py-3 rounded-lg text-xs uppercase tracking-wider text-center transition-all shadow-md shadow-[#fb7b04]/30 flex items-center justify-center gap-2 group-hover:shadow-[0_0_18px_rgba(251,123,4,0.5)] active:scale-95">
                <Calendar className="w-3.5 h-3.5" />
                <span>Забронювати</span>
              </div>
            </div>
          </a>
        ))}
      </div>

      {filteredQuests.length === 0 && (
        <div className="text-center py-20 text-gray-400">
          <p className="text-lg">За обраними фільтрами квестів не знайдено.</p>
          <button
            onClick={() => {
              setSelectedCategory('ВСІ');
              setSelectedArea('Всі райони');
              setSearchQuery('');
            }}
            className="mt-4 text-[#fb7b04] hover:underline text-sm font-semibold"
          >
            Скинути фільтри
          </button>
        </div>
      )}
    </div>
  );
}
