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
  const [selectedCategory, setSelectedCategory] = useState<string>('Всі');
  const [selectedArea, setSelectedArea] = useState<string>('Всі райони');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories = ['Всі', 'Хоррор', 'Містика', 'Фентезі', 'Детектив', 'Для дітей', 'Пригоди'];
  const areas = ['Всі райони', 'Центр', 'Приморський'];

  const filteredQuests = initialQuests.filter((quest) => {
    const matchesCategory =
      selectedCategory === 'Всі' || quest.categories.includes(selectedCategory);
    
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

      {/* Quest Cards Grid (Authentic Pautina Layout: Title ABOVE poster + Option 1 CTA) */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredQuests.map((quest) => (
          <a
            key={quest.id}
            href={`/room/${quest.slug}`}
            className="group flex flex-col transition-all duration-300 cursor-pointer block"
          >
            {/* Title ABOVE Poster (Authentic Pautina Style) */}
            <h3 className="text-xl sm:text-2xl font-bold uppercase tracking-wide text-white mb-2.5 group-hover:text-[#fbefab] transition-colors truncate">
              {quest.title}
            </h3>

            {/* Poster Image Frame */}
            <div className="relative aspect-[16/11] w-full overflow-hidden rounded-t-xl border border-white/10 bg-[#0d0d0d]">
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

            {/* Card Body & CTA (Option 1 with specs, address, price, and full-width CTA) */}
            <div className="bg-[#0e0e0e] border-x border-b border-white/10 rounded-b-xl p-4 sm:p-5 flex flex-col justify-between group-hover:border-white/20 transition-all shadow-xl">
              {/* Specs Bar */}
              <div className="grid grid-cols-3 gap-2 py-2.5 border-t border-b border-white/5 text-xs text-gray-300 mb-3 bg-black/40 rounded-lg px-2">
                <div className="flex items-center gap-1.5 justify-center">
                  <Users className="w-3.5 h-3.5 text-[#fb7b04]" />
                  <span>{quest.players.min}-{quest.players.max} ос.</span>
                </div>
                <div className="flex items-center gap-1.5 justify-center border-l border-r border-white/10">
                  <Clock className="w-3.5 h-3.5 text-[#fbefab]" />
                  <span>{quest.duration} хв</span>
                </div>
                <div className="flex items-center gap-1.5 justify-center">
                  <Sparkles className="w-3.5 h-3.5 text-[#fb7b04]" />
                  <span>{quest.ageLimit}</span>
                </div>
              </div>

              {/* Address & Price Row */}
              <div className="flex justify-between items-center mb-3 text-xs">
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

              {/* Booking CTA Button (Option 1) */}
              <div className="w-full bg-[#fb7b04] group-hover:bg-[#e06d02] text-white font-extrabold py-2.5 sm:py-3 rounded-lg text-xs uppercase tracking-wider text-center transition-all shadow-md shadow-[#fb7b04]/30 flex items-center justify-center gap-2 group-hover:shadow-[0_0_18px_rgba(251,123,4,0.5)] active:scale-95">
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
              setSelectedCategory('Всі');
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
