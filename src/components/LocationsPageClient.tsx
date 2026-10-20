'use client';

import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { Quest } from '@/types';
import { useLanguage } from '@/context/LanguageContext';
import { questTranslationsEn } from '@/lib/translations';

interface Props {
  initialQuests: Quest[];
}

export default function LocationsPageClient({ initialQuests }: Props) {
  const { language, t } = useLanguage();
  const lp = t('locationsPage');

  const torgovaQuests = initialQuests.filter((q) => q.location.id === 'loc-torgova');
  const shevchenkoQuests = initialQuests.filter((q) => q.location.id === 'loc-shevchenko');

  return (
    <div className="bg-transparent min-h-screen text-white pt-10 pb-24">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-[#fb7b04] text-xs uppercase font-extrabold tracking-widest block mb-2">
            {lp.tag}
          </span>
          <h1 className="text-4xl md:text-6xl font-extrabold font-accent tracking-tight mb-4">
            {lp.title}
          </h1>
          <p className="text-gray-300 text-sm md:text-base leading-relaxed">
            {lp.desc}
          </p>
        </div>

        <div className="space-y-16">
          {/* Location 1: Торгова */}
          <div className="bg-neutral-900 border border-white/10 rounded-3xl p-8 md:p-12 shadow-2xl">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8 pb-6 border-b border-white/10">
              <div>
                <span className="text-[#fb7b04] text-xs uppercase font-extrabold tracking-wider block mb-1">
                  {lp.torgovaArea}
                </span>
                <h2 className="text-3xl font-extrabold font-accent">{lp.torgovaTitle}</h2>
                <p className="text-gray-400 text-xs mt-1">{lp.torgovaLandmark}</p>
              </div>
              <div className="flex gap-4">
                <a 
                  href="https://maps.google.com/?q=Odesa+Torgova+2"
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="bg-white/10 hover:bg-white/20 text-white px-5 py-2.5 rounded-xl text-xs uppercase font-bold tracking-wider"
                >
                  {lp.googleMapBtn}
                </a>
              </div>
            </div>

            <h3 className="text-lg font-bold font-accent mb-6 text-gray-300 uppercase tracking-wider">
              {lp.questsAtLoc}
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {torgovaQuests.map((quest) => {
                const title =
                  language === 'en' && questTranslationsEn[quest.slug]?.title
                    ? questTranslationsEn[quest.slug].title
                    : quest.title;
                const desc =
                  language === 'en' && questTranslationsEn[quest.slug]?.shortDescription
                    ? questTranslationsEn[quest.slug].shortDescription
                    : quest.shortDescription;

                return (
                  <Link 
                    key={quest.id} 
                    href={`/room/${quest.slug}`}
                    className="bg-black/40 border border-white/10 hover:border-[#fb7b04]/50 p-5 rounded-2xl transition-all group flex flex-col justify-between"
                  >
                    <div>
                      <h4 className="text-xl font-bold font-accent text-white group-hover:text-[#fb7b04] mb-2 transition-colors">
                        {title}
                      </h4>
                      <p className="text-xs text-gray-400 mb-4 line-clamp-2">{desc}</p>
                    </div>
                    <div className="flex justify-between items-center text-xs text-gray-400 pt-3 border-t border-white/5">
                      <span>👥 {quest.players.min}-{quest.players.max} {lp.playersLabel}</span>
                      <span className="text-[#fb7b04] font-bold flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                        {lp.bookBtn} <ArrowRight className="w-3 h-3" />
                      </span>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>

          {/* Location 2: Шевченка */}
          <div className="bg-neutral-900 border border-white/10 rounded-3xl p-8 md:p-12 shadow-2xl">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8 pb-6 border-b border-white/10">
              <div>
                <span className="text-brand-gold text-xs uppercase font-extrabold tracking-wider block mb-1">
                  {lp.shevchenkoArea}
                </span>
                <h2 className="text-3xl font-extrabold font-accent">{lp.shevchenkoTitle}</h2>
                <p className="text-gray-400 text-xs mt-1">{lp.shevchenkoLandmark}</p>
              </div>
              <div className="flex gap-4">
                <a 
                  href="https://maps.google.com/?q=Odesa+Shevchenko+4d"
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="bg-white/10 hover:bg-white/20 text-white px-5 py-2.5 rounded-xl text-xs uppercase font-bold tracking-wider"
                >
                  {lp.googleMapBtn}
                </a>
              </div>
            </div>

            <h3 className="text-lg font-bold font-accent mb-6 text-gray-300 uppercase tracking-wider">
              {lp.questsAtLoc}
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {shevchenkoQuests.map((quest) => {
                const title =
                  language === 'en' && questTranslationsEn[quest.slug]?.title
                    ? questTranslationsEn[quest.slug].title
                    : quest.title;
                const desc =
                  language === 'en' && questTranslationsEn[quest.slug]?.shortDescription
                    ? questTranslationsEn[quest.slug].shortDescription
                    : quest.shortDescription;

                return (
                  <Link 
                    key={quest.id} 
                    href={`/room/${quest.slug}`}
                    className="bg-black/40 border border-white/10 hover:border-[#fb7b04]/50 p-5 rounded-2xl transition-all group flex flex-col justify-between"
                  >
                    <div>
                      <h4 className="text-xl font-bold font-accent text-white group-hover:text-[#fb7b04] mb-2 transition-colors">
                        {title}
                      </h4>
                      <p className="text-xs text-gray-400 mb-4 line-clamp-2">{desc}</p>
                    </div>
                    <div className="flex justify-between items-center text-xs text-gray-400 pt-3 border-t border-white/5">
                      <span>👥 {quest.players.min}-{quest.players.max} {lp.playersLabel}</span>
                      <span className="text-[#fb7b04] font-bold flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                        {lp.bookBtn} <ArrowRight className="w-3 h-3" />
                      </span>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
