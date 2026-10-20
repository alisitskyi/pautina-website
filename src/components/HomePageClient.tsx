'use client';

import QuestCatalog from '@/components/QuestCatalog';
import { MapPin, Phone } from 'lucide-react';
import Image from 'next/image';
import { Quest } from '@/types';
import { useLanguage } from '@/context/LanguageContext';

interface Props {
  initialQuests: Quest[];
}

export default function HomePageClient({ initialQuests }: Props) {
  const { t } = useLanguage();
  const hero = t('hero');
  const promo = t('homePromo');

  return (
    <div className="flex flex-col bg-transparent min-h-screen text-white">
      {/* ================= Authentic Hero / Intro Section ================= */}
      <section className="bg-transparent pt-6 sm:pt-8 pb-2 text-center">
        <div className="container mx-auto px-4 max-w-5xl">
          {/* Subtitle with Underline */}
          <div className="mb-4">
            <h2 className="text-[#fb7b04] text-sm sm:text-base md:text-lg font-bold tracking-wide inline-block border-b border-[#fb7b04]/80 pb-0.5">
              {hero.subtitle}
            </h2>
          </div>

          {/* Description Paragraph */}
          <p className="text-gray-300 text-xs sm:text-sm md:text-[14px] leading-relaxed tracking-wide font-normal max-w-3xl mx-auto mb-6 sm:mb-8">
            {hero.description}
          </p>

          {/* Title: КВЕСТИ / QUESTS */}
          <div className="mb-6 sm:mb-8">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-widest uppercase">
              {hero.questsTitle}
            </h1>
          </div>
        </div>
      </section>

      {/* ================= Quests Catalog Section ================= */}
      <section id="quests" className="pb-24 bg-transparent">
        <div className="container mx-auto px-4 max-w-7xl">
          <QuestCatalog initialQuests={initialQuests} />
        </div>
      </section>

      {/* Birthday & Corporate Promo Section */}
      <section className="py-20 bg-gradient-to-r from-neutral-900 via-neutral-950 to-neutral-900 border-t border-b border-white/10 relative overflow-hidden">
        <div className="container mx-auto px-4 max-w-7xl relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-[#fb7b04] text-xs font-bold uppercase tracking-widest block mb-3">
                {promo.birthdayTag}
              </span>
              <h2 className="text-3xl md:text-5xl font-extrabold font-accent tracking-tight mb-6">
                {promo.birthdayTitle}
              </h2>
              <p className="text-gray-300 text-sm md:text-base leading-relaxed mb-6">
                {promo.birthdayDesc}
              </p>
              <ul className="space-y-3 text-sm text-gray-300 mb-8">
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-[#fb7b04]" />
                  {promo.birthdayPoint1}
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-[#fb7b04]" />
                  {promo.birthdayPoint2}
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-[#fb7b04]" />
                  {promo.birthdayPoint3}
                </li>
              </ul>
              <div className="flex flex-wrap gap-4">
                <a
                  href="/birthday"
                  className="bg-[#fb7b04] hover:bg-[#e06d02] text-white px-7 py-3.5 rounded-xl font-bold uppercase text-xs tracking-wider transition-all cursor-pointer"
                >
                  {promo.birthdayBtn}
                </a>
                <a
                  href="tel:+380931701444"
                  className="border border-white/20 hover:border-white text-white px-7 py-3.5 rounded-xl font-bold uppercase text-xs tracking-wider transition-all flex items-center gap-2"
                >
                  <Phone className="w-4 h-4 text-[#fb7b04]" />
                  +38 (093) 170-14-44
                </a>
              </div>
            </div>
            <div className="relative h-[360px] md:h-[420px] rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1530103862676-de8c9debad1d?auto=format&fit=crop&w=1000&q=80"
                alt="Дні народження в PAUTINA Rooms"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
            </div>
          </div>
        </div>
      </section>

      {/* Gift Certificates Banner */}
      <section className="py-20 bg-transparent">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="bg-gradient-to-r from-neutral-900 to-black border border-[#fb7b04]/30 rounded-3xl p-8 md:p-14 relative overflow-hidden shadow-2xl">
            <div className="max-w-2xl relative z-10">
              <span className="text-[#fb7b04] text-xs uppercase font-extrabold tracking-widest block mb-3">
                {promo.certTag}
              </span>
              <h2 className="text-3xl md:text-4xl font-extrabold font-accent mb-4 tracking-tight">
                {promo.certTitle}
              </h2>
              <p className="text-gray-300 text-sm leading-relaxed mb-8">
                {promo.certDesc}
              </p>
              <div className="flex flex-wrap gap-4">
                <a
                  href="/certificates"
                  className="bg-[#fb7b04] hover:bg-[#e06d02] text-white font-extrabold px-8 py-3.5 rounded-xl text-xs uppercase tracking-wider transition-all cursor-pointer shadow-lg shadow-[#fb7b04]/20"
                >
                  {promo.certBtn}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Locations Section */}
      <section id="locations" className="py-20 bg-black/40 backdrop-blur-sm border-t border-white/10">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-[#fb7b04] text-xs uppercase font-extrabold tracking-widest block mb-2">{promo.locTag}</span>
            <h2 className="text-3xl md:text-5xl font-extrabold font-accent">
              {promo.locTitle}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Location 1 */}
            <div className="bg-brand-gray/40 border border-white/10 rounded-2xl p-8">
              <div className="flex items-center gap-3 mb-4">
                <MapPin className="w-6 h-6 text-[#fb7b04]" />
                <h3 className="text-2xl font-bold font-accent">{promo.locCenter}</h3>
              </div>
              <p className="text-gray-300 text-sm mb-4">📍 {promo.locCenterAddr}</p>
              <p className="text-xs text-gray-400 mb-6">
                {promo.locCenterQuests}
              </p>
              <div className="flex flex-wrap gap-4 text-xs">
                <a 
                  href="https://maps.google.com/?q=Odesa+Torgova+2" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-[#fb7b04] hover:underline font-bold"
                >
                  {promo.openMap}
                </a>
              </div>
            </div>

            {/* Location 2 */}
            <div className="bg-brand-gray/40 border border-white/10 rounded-2xl p-8">
              <div className="flex items-center gap-3 mb-4">
                <MapPin className="w-6 h-6 text-[#fb7b04]" />
                <h3 className="text-2xl font-bold font-accent">{promo.locPrim}</h3>
              </div>
              <p className="text-gray-300 text-sm mb-4">📍 {promo.locPrimAddr}</p>
              <p className="text-xs text-gray-400 mb-6">
                {promo.locPrimQuests}
              </p>
              <div className="flex flex-wrap gap-4 text-xs">
                <a 
                  href="https://maps.google.com/?q=Odesa+Shevchenko+4d" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-[#fb7b04] hover:underline font-bold"
                >
                  {promo.openMap}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
