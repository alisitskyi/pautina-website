'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Quest } from '@/types';
import { Users, Clock, MapPin, Sparkles, Calendar } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import { questTranslationsEn } from '@/lib/translations';

interface QuestCatalogProps {
  initialQuests: Quest[];
}

export default function QuestCatalog({ initialQuests }: QuestCatalogProps) {
  const { lang, t } = useLanguage();
  const f = t('filters');
  const c = t('card');

  const [selectedCategory, setSelectedCategory] = useState<string>('ВСІ');
  const [selectedArea, setSelectedArea] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const filterRows = [
    ['ВСІ', 'ХОРРОР', 'МІСТИКА', 'ФЕНТЕЗІ', 'ФАНТАСТИКА'],
    ['ДЕТЕКТИВ', 'ПРИГОДИ', 'НА ДЕНЬ НАРОДЖЕННЯ', 'ДЛЯ ПАРИ', 'ДЛЯ 4+ ЛЮДЕЙ']
  ];

  const filteredQuests = initialQuests.filter((quest) => {
    let matchesCategory = true;
    if (selectedCategory !== 'ВСІ') {
      if (selectedCategory === 'ХОРРОР') {
        matchesCategory = quest.categories.some((cat) => cat.toLowerCase().includes('хоррор'));
      } else if (selectedCategory === 'МІСТИКА') {
        matchesCategory = quest.categories.some((cat) => cat.toLowerCase().includes('містик'));
      } else if (selectedCategory === 'ФЕНТЕЗІ') {
        matchesCategory = quest.categories.some((cat) => cat.toLowerCase().includes('фентез'));
      } else if (selectedCategory === 'ФАНТАСТИКА') {
        matchesCategory =
          quest.categories.some((cat) => cat.toLowerCase().includes('фантаст')) ||
          ['Загублені у космосі', 'ЧУЖІ', 'Мисливці за привидами'].includes(quest.title) ||
          quest.description.toLowerCase().includes('космос') ||
          quest.description.toLowerCase().includes('чужі');
      } else if (selectedCategory === 'ДЕТЕКТИВ') {
        matchesCategory = quest.categories.some((cat) => cat.toLowerCase().includes('детектив'));
      } else if (selectedCategory === 'ПРИГОДИ') {
        matchesCategory =
          quest.categories.some((cat) => cat.toLowerCase().includes('пригод')) ||
          ['ДЖУМАНДЖИ', 'ДЖУНГЛІ', 'ХОББІТ'].includes(quest.title);
      } else if (selectedCategory === 'НА ДЕНЬ НАРОДЖЕННЯ') {
        matchesCategory =
          quest.title.toLowerCase().includes('день народження') ||
          quest.categories.some((cat) => cat.toLowerCase().includes('дітей'));
      } else if (selectedCategory === 'ДЛЯ ПАРИ') {
        matchesCategory = quest.players.min <= 2 && quest.players.max <= 4;
      } else if (selectedCategory === 'ДЛЯ 4+ ЛЮДЕЙ') {
        matchesCategory = quest.players.max >= 5;
      }
    }
    
    const matchesArea =
      selectedArea === 'all' ||
      (selectedArea === 'center' && (quest.location.area?.includes('Центр') || quest.location.address.toLowerCase().includes('торгов') || quest.location.address.toLowerCase().includes('садов') || quest.location.address.toLowerCase().includes('успен'))) ||
      (selectedArea === 'primorsky' && (quest.location.area?.includes('Примор') || quest.location.address.toLowerCase().includes('шевчен') || quest.location.address.toLowerCase().includes('троїц')));

    const enInfo = questTranslationsEn[quest.slug] || questTranslationsEn[quest.id];
    const matchesSearch =
      !searchQuery.trim() ||
      quest.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      quest.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (enInfo && enInfo.title.toLowerCase().includes(searchQuery.toLowerCase()));

    return matchesCategory && matchesArea && matchesSearch;
  });

  return (
    <div>
      {/* Category & Location Filters */}
      <div className="flex flex-col gap-6 mb-10">
        {/* Category Pills (2 rows) */}
        <div className="flex flex-col items-center gap-2.5">
          {filterRows.map((row, rowIdx) => (
            <div key={rowIdx} className="flex flex-wrap justify-center gap-2">
              {row.map((catKey) => {
                const label = (f.categories as Record<string, string>)[catKey] || catKey;
                const isSelected = selectedCategory === catKey;
                return (
                  <button
                    key={catKey}
                    type="button"
                    onClick={() => setSelectedCategory(catKey)}
                    className={`px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all ${
                      isSelected
                        ? 'bg-[#fb7b04] text-white shadow-lg shadow-[#fb7b04]/30 scale-105'
                        : 'bg-neutral-900/90 text-gray-300 hover:text-white hover:bg-neutral-800 border border-white/10'
                    }`}
                  >
                    {label}
                  </button>
                );
              })}
            </div>
          ))}
        </div>

        {/* Search & Area Filter Bar */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-3 bg-[#0c0c0c] p-3 rounded-xl border border-white/10 max-w-4xl mx-auto w-full">
          {/* Search input */}
          <input
            type="text"
            placeholder={f.searchPlaceholder}
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
                <option value="all" className="bg-neutral-900 text-white">
                  {f.allAreas}
                </option>
                <option value="center" className="bg-neutral-900 text-white">
                  {f.center}
                </option>
                <option value="primorsky" className="bg-neutral-900 text-white">
                  {f.primorsky}
                </option>
              </select>
            </div>

            <span className="text-xs text-gray-400 font-mono whitespace-nowrap">
              {filteredQuests.length} {filteredQuests.length === 1 ? f.questSingle : f.questsCount}
            </span>
          </div>
        </div>
      </div>

      {/* Quest Cards Grid (Full Height Poster, Glass Overlay, Equal Height) */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredQuests.map((quest) => {
          const enInfo = questTranslationsEn[quest.slug] || questTranslationsEn[quest.id];
          const displayTitle = lang === 'en' && enInfo?.title ? enInfo.title : quest.title;

          return (
            <a
              key={quest.id}
              href={`/room/${quest.slug}`}
              className="group relative h-[520px] sm:h-[550px] rounded-2xl sm:rounded-3xl overflow-hidden border border-white/10 hover:border-[#fb7b04]/60 transition-all duration-300 shadow-2xl flex flex-col justify-between p-5 sm:p-6 cursor-pointer block bg-[#0a0a0a]"
            >
              {/* Background Image Full Height */}
              <Image
                src={quest.image}
                alt={displayTitle}
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
                  {quest.categories.slice(0, 2).map((cat) => {
                    const catLabel = lang === 'en' && (f.categories as Record<string, string>)[cat.toUpperCase()] 
                      ? (f.categories as Record<string, string>)[cat.toUpperCase()] 
                      : cat;
                    return (
                      <span
                        key={cat}
                        className="text-[10px] sm:text-[11px] uppercase font-extrabold bg-[#fb7b04] text-white px-2.5 py-1 rounded-md tracking-wider shadow-md"
                      >
                        {catLabel}
                      </span>
                    );
                  })}
                </div>

                {/* Badges: NEW & Star Rating */}
                <div className="flex items-center gap-2">
                  {quest.isNew && (
                    <span className="inline-block border-2 border-[#fb7b04] text-[#fb7b04] bg-black/80 font-black text-[10px] uppercase tracking-widest px-2 py-0.5 rounded shadow">
                      {c.newBadge}
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
                {/* Title INSIDE Card (Decreased font size, full title without truncation) */}
                <div className="min-h-[2.75rem] sm:min-h-[3.25rem] flex items-end mb-3">
                  <h3 className="text-base sm:text-lg md:text-xl font-extrabold text-white tracking-wide uppercase leading-snug drop-shadow-md group-hover:text-[#fbefab] transition-colors">
                    {displayTitle}
                  </h3>
                </div>

                {/* Specs Glass Capsule */}
                <div className="flex items-center justify-between py-2 px-3 sm:px-4 bg-black/60 backdrop-blur-md border border-white/10 rounded-full mb-3 text-xs text-gray-200">
                  <div className="flex items-center gap-1.5">
                    <Users className="w-3.5 h-3.5 text-[#fb7b04] shrink-0" />
                    <span className="font-medium whitespace-nowrap">{quest.players.min}-{quest.players.max} {c.players}</span>
                  </div>
                  <span className="text-white/20">•</span>
                  <div className="flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-[#fbefab] shrink-0" />
                    <span className="font-medium whitespace-nowrap">{quest.duration} {c.duration}</span>
                  </div>
                  <span className="text-white/20">•</span>
                  <div className="flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-[#fb7b04] shrink-0" />
                    <span className="font-medium whitespace-nowrap">{quest.ageLimit.replace(/\s*без\s*супроводження\s*дорослих/gi, '').trim()}</span>
                  </div>
                </div>

                {/* Address & Price Row */}
                <div className="flex justify-between items-center mb-3 text-xs px-1">
                  <div className="flex items-center gap-1.5 text-gray-300 truncate max-w-[65%]">
                    <MapPin className="w-3.5 h-3.5 text-[#fb7b04] shrink-0" />
                    <span className="truncate">{quest.location.address}</span>
                  </div>
                  <div className="text-right shrink-0">
                    <span className="text-[10px] text-gray-400 uppercase mr-1">{c.from}</span>
                    <span className="text-base sm:text-lg font-black text-white">
                      {quest.price.min} <span className="text-xs font-normal text-gray-300">{c.currency}</span>
                    </span>
                  </div>
                </div>

                {/* Booking CTA Button */}
                <div className="w-full bg-[#fb7b04] group-hover:bg-[#e06d02] text-white font-extrabold py-3 rounded-xl text-xs sm:text-sm uppercase tracking-wider text-center transition-all shadow-lg shadow-[#fb7b04]/30 flex items-center justify-center gap-2 group-hover:shadow-[0_0_20px_rgba(251,123,4,0.6)] active:scale-95">
                  <Calendar className="w-4 h-4" />
                  <span>{c.bookNow}</span>
                </div>
              </div>
            </a>
          );
        })}
      </div>

      {filteredQuests.length === 0 && (
        <div className="text-center py-20 text-gray-400">
          <p className="text-lg">{f.noQuestsFound}</p>
          <button
            type="button"
            onClick={() => {
              setSelectedCategory('ВСІ');
              setSelectedArea('all');
              setSearchQuery('');
            }}
            className="mt-4 text-[#fb7b04] hover:underline text-sm font-semibold"
          >
            {f.resetFilters}
          </button>
        </div>
      )}
    </div>
  );
}
