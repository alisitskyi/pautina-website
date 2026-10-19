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

      {/* Quest Cards Grid (Full Height Poster, Glass Overlay, Equal Height) */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredQuests.map((quest) => (
          <a
            key={quest.id}
            href={`/room/${quest.slug}`}
            className="group relative h-[520px] sm:h-[540px] rounded-2xl sm:rounded-3xl overflow-hidden border border-white/10 hover:border-[#fb7b04]/60 transition-all duration-300 shadow-2xl flex flex-col justify-between p-5 sm:p-6 cursor-pointer block bg-[#0a0a0a]"
          >
            {/* Background Image Full Height */}
            <Image
              src={quest.image}
              alt={quest.title}
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 420px"
              loading="lazy"
              className="object-cover transition-transform duration-700 group-hover:scale-105 pointer-events-none"
            />
            {/* Gradient Overlay for Legibility */}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/55 to-black/30 pointer-events-none" />

            {/* Top Bar Badges */}
            <div className="relative z-10 flex justify-between items-start pointer-events-none w-full">
              {/* Category Pills */}
              <div className="flex flex-wrap gap-1.5 max-w-[65%]">
                {quest.categories.slice(0, 2).map((cat) => (
                  <span
                    key={cat}
                    className="text-[10px] sm:text-[11px] uppercase font-extrabold bg-[#b3181d] text-white px-2.5 py-1 rounded-md tracking-wider shadow-md"
                  >
                    {cat}
                  </span>
                ))}
              </div>

              {/* Badges: NEW & Star Rating */}
              <div className="flex items-center gap-2">
                {quest.isNew && (
                  <span className="inline-block border-2 border-[#fb7b04] text-[#fb7b04] bg-black/80 font-black text-[10px] uppercase tracking-widest px-2 py-0.5 rounded shadow">
                    NEW
                  </span>
                )}
                <span className="text-xs font-bold bg-black/70 backdrop-blur-md px-2.5 py-1 rounded-md border border-white/10 text-[#fbefab]">
                  {'★'.repeat(quest.difficulty)}
                  <span className="text-gray-600">{'★'.repeat(5 - quest.difficulty)}</span>
                </span>
              </div>
            </div>

            {/* Bottom Content Area: Title IN card, Specs, Address/Price & Booking Button */}
            <div className="relative z-10 w-full pointer-events-none mt-auto">
              {/* Title INSIDE Card (No description) */}
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-wide uppercase mb-3 drop-shadow-md group-hover:text-[#fbefab] transition-colors line-clamp-1">
                {quest.title}
              </h3>

              {/* Specs Glass Capsule */}
              <div className="flex items-center justify-between py-2 px-3 sm:px-4 bg-black/60 backdrop-blur-md border border-white/10 rounded-full mb-3 text-xs text-gray-200">
                <div className="flex items-center gap-1.5">
                  <Users className="w-3.5 h-3.5 text-[#fb7b04] shrink-0" />
                  <span className="font-medium whitespace-nowrap">{quest.players.min}-{quest.players.max} ос.</span>
                </div>
                <span className="text-white/20">•</span>
                <div className="flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-[#fbefab] shrink-0" />
                  <span className="font-medium whitespace-nowrap">{quest.duration} хв</span>
                </div>
                <span className="text-white/20">•</span>
                <div className="flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-[#fb7b04] shrink-0" />
                  <span className="font-medium whitespace-nowrap">{quest.ageLimit}</span>
                </div>
              </div>

              {/* Address & Price Row */}
              <div className="flex justify-between items-center mb-3 text-xs px-1">
                <div className="flex items-center gap-1.5 text-gray-300 truncate max-w-[65%]">
                  <MapPin className="w-3.5 h-3.5 text-[#fb7b04] shrink-0" />
                  <span className="truncate">{quest.location.address}</span>
                </div>
                <div className="text-right shrink-0">
                  <span className="text-[10px] text-gray-400 uppercase mr-1">від</span>
                  <span className="text-base sm:text-lg font-black text-white">
                    {quest.price.min} <span className="text-xs font-normal text-gray-300">грн</span>
                  </span>
                </div>
              </div>

              {/* Booking CTA Button (Option 1 with brand orange #fb7b04) */}
              <div className="w-full bg-[#fb7b04] group-hover:bg-[#e06d02] text-white font-extrabold py-3 rounded-xl text-xs sm:text-sm uppercase tracking-wider text-center transition-all shadow-lg shadow-[#fb7b04]/30 flex items-center justify-center gap-2 group-hover:shadow-[0_0_20px_rgba(251,123,4,0.6)] active:scale-95">
                <Calendar className="w-4 h-4" />
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
