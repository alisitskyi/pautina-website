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
      <div className="flex flex-col gap-6 mb-12">
        {/* Category Pills */}
        <div className="flex flex-wrap justify-center gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all ${
                selectedCategory === cat
                  ? 'bg-brand-red text-white shadow-lg shadow-brand-red/30 scale-105'
                  : 'bg-white/5 text-gray-400 hover:text-white hover:bg-white/10'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Search & Area Filter Bar */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 bg-neutral-900/60 p-3 rounded-2xl border border-white/10 max-w-4xl mx-auto w-full">
          {/* Search input */}
          <input
            type="text"
            placeholder="Шукати квест за назвою..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full sm:w-auto flex-1 bg-black/50 border border-white/10 rounded-xl px-4 py-2 text-xs text-white outline-none focus:border-brand-red"
          />

          <div className="flex items-center gap-3 w-full sm:w-auto justify-between sm:justify-end">
            <div className="flex items-center gap-2 bg-black/50 border border-white/10 rounded-xl px-3 py-2 text-xs text-gray-300">
              <MapPin className="w-3.5 h-3.5 text-brand-red shrink-0" />
              <select
                value={selectedArea}
                onChange={(e) => setSelectedArea(e.target.value)}
                className="bg-transparent text-white outline-none cursor-pointer"
              >
                {areas.map((loc) => (
                  <option key={loc} value={loc} className="bg-brand-dark text-white">
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

      {/* Quest Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredQuests.map((quest) => (
          <a
            key={quest.id}
            href={`/room/${quest.slug}`}
            className="group relative min-h-[480px] overflow-hidden rounded-2xl border border-white/10 hover:border-brand-red/60 transition-all duration-300 shadow-2xl flex flex-col justify-end bg-brand-gray/30 cursor-pointer block"
          >
            {/* Background Image */}
            <Image
              src={quest.image}
              alt={quest.title}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-cover transition-transform duration-700 group-hover:scale-105 pointer-events-none"
            />
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent opacity-90 group-hover:opacity-95 transition-opacity pointer-events-none" />

            {/* Top Badges */}
            <div className="absolute top-4 left-4 right-4 flex justify-between items-start z-10 pointer-events-none">
              <div className="flex flex-wrap gap-1.5">
                {quest.categories.slice(0, 2).map((cat) => (
                  <span
                    key={cat}
                    className="text-[10px] uppercase font-extrabold bg-brand-red text-white px-2.5 py-1 rounded-md tracking-wider shadow"
                  >
                    {cat}
                  </span>
                ))}
              </div>
              <span className="text-xs font-bold bg-black/60 backdrop-blur-md px-2.5 py-1 rounded-md border border-white/10 text-brand-gold">
                {'★'.repeat(quest.difficulty)}
                <span className="text-gray-600">{'★'.repeat(5 - quest.difficulty)}</span>
              </span>
            </div>

            {/* Card Content */}
            <div className="relative z-10 p-6 w-full pointer-events-none">
              <h3 className="text-2xl font-extrabold mb-2 text-white group-hover:text-brand-red transition-colors font-accent tracking-wide line-clamp-1">
                {quest.title}
              </h3>
              <p className="text-gray-300 text-xs mb-4 line-clamp-2 leading-relaxed">
                {quest.shortDescription}
              </p>

              {/* Specs Bar */}
              <div className="grid grid-cols-3 gap-2 py-3 border-t border-b border-white/10 text-xs text-gray-300 mb-4 bg-black/40 backdrop-blur-sm rounded-lg px-2">
                <div className="flex items-center gap-1.5 justify-center">
                  <Users className="w-3.5 h-3.5 text-brand-red" />
                  <span>{quest.players.min}-{quest.players.max} ос.</span>
                </div>
                <div className="flex items-center gap-1.5 justify-center border-l border-r border-white/10">
                  <Clock className="w-3.5 h-3.5 text-brand-gold" />
                  <span>{quest.duration} хв</span>
                </div>
                <div className="flex items-center gap-1.5 justify-center">
                  <Sparkles className="w-3.5 h-3.5 text-brand-red" />
                  <span>{quest.ageLimit}</span>
                </div>
              </div>

              {/* Bottom Row */}
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-1.5 text-xs text-gray-400 truncate max-w-[65%]">
                  <MapPin className="w-3.5 h-3.5 text-gray-400 shrink-0" />
                  <span className="truncate">{quest.location.address}</span>
                </div>
                <div className="text-right shrink-0">
                  <span className="text-[10px] text-gray-400 block uppercase">від</span>
                  <span className="text-base font-extrabold text-white">
                    {quest.price.min} <span className="text-xs font-normal text-gray-400">грн</span>
                  </span>
                </div>
              </div>

              {/* Booking CTA Button */}
              <div className="w-full mt-3.5 bg-brand-red group-hover:bg-red-700 text-white font-extrabold py-2.5 sm:py-3 rounded-xl text-xs uppercase tracking-wider text-center transition-all shadow-md shadow-brand-red/30 flex items-center justify-center gap-2 group-hover:brightness-110 active:scale-95">
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
            className="mt-4 text-brand-red hover:underline text-sm font-semibold"
          >
            Скинути фільтри
          </button>
        </div>
      )}
    </div>
  );
}
