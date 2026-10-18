import { Metadata } from 'next';
import Link from 'next/link';
import { api } from '@/lib/api';
import { MapPin, Phone, Clock, ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Локації квестів в Одесі | PAUTINA Rooms',
  description: 'Локації мережі квест-кімнат PAUTINA: вул. Торгова, 2 (Центр) та пр-т Шевченка, 4д (Приморський). Списком квестів, адреси та контакти.',
};

export default async function LocationsPage() {
  const quests = await api.quests.getAll();
  const torgovaQuests = quests.filter(q => q.location.id === 'loc-torgova');
  const shevchenkoQuests = quests.filter(q => q.location.id === 'loc-shevchenko');

  return (
    <div className="bg-brand-dark min-h-screen text-white pt-10 pb-24">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-brand-red text-xs uppercase font-extrabold tracking-widest block mb-2">Наші філії</span>
          <h1 className="text-4xl md:text-6xl font-extrabold font-accent tracking-tight mb-4">
            ЛОКАЦІЇ В <span className="text-brand-red">ОДЕСІ</span>
          </h1>
          <p className="text-gray-300 text-sm md:text-base leading-relaxed">
            2 атмосферні локації у зручних районах міста з власними зонами відпочинку та паркінгом.
          </p>
        </div>

        <div className="space-y-16">
          {/* Location 1: Торгова */}
          <div className="bg-neutral-900 border border-white/10 rounded-3xl p-8 md:p-12 shadow-2xl">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8 pb-6 border-b border-white/10">
              <div>
                <span className="text-brand-red text-xs uppercase font-extrabold tracking-wider block mb-1">Центральний район</span>
                <h2 className="text-3xl font-extrabold font-accent">м. Одеса, вул. Торгова, 2</h2>
                <p className="text-gray-400 text-xs mt-1">Орієнтир: бульвар Жванецького / Новий ринок</p>
              </div>
              <div className="flex gap-4">
                <a 
                  href="https://maps.google.com/?q=Odesa+Torgova+2"
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="bg-white/10 hover:bg-white/20 text-white px-5 py-2.5 rounded-xl text-xs uppercase font-bold tracking-wider"
                >
                  Карта Google ↗
                </a>
              </div>
            </div>

            <h3 className="text-lg font-bold font-accent mb-6 text-gray-300 uppercase tracking-wider">
              Квести на цій локації:
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {torgovaQuests.map(quest => (
                <Link 
                  key={quest.id} 
                  href={`/room/${quest.slug}`}
                  className="bg-black/40 border border-white/10 hover:border-brand-red/50 p-5 rounded-2xl transition-all group"
                >
                  <h4 className="text-xl font-bold font-accent text-white group-hover:text-brand-red mb-2 transition-colors">
                    {quest.title}
                  </h4>
                  <p className="text-xs text-gray-400 mb-4 line-clamp-2">{quest.shortDescription}</p>
                  <div className="flex justify-between items-center text-xs text-gray-400 pt-3 border-t border-white/5">
                    <span>👥 {quest.players.min}-{quest.players.max} гравців</span>
                    <span className="text-brand-red font-bold flex items-center gap-1">
                      Забронювати <ArrowRight className="w-3 h-3" />
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* Location 2: Шевченка */}
          <div className="bg-neutral-900 border border-white/10 rounded-3xl p-8 md:p-12 shadow-2xl">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8 pb-6 border-b border-white/10">
              <div>
                <span className="text-brand-gold text-xs uppercase font-extrabold tracking-wider block mb-1">Приморський район</span>
                <h2 className="text-3xl font-extrabold font-accent">м. Одеса, пр-т Шевченка, 4д</h2>
                <p className="text-gray-400 text-xs mt-1">Орієнтир: парк Перемоги / Політех</p>
              </div>
              <div className="flex gap-4">
                <a 
                  href="https://maps.google.com/?q=Odesa+Shevchenko+4d"
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="bg-white/10 hover:bg-white/20 text-white px-5 py-2.5 rounded-xl text-xs uppercase font-bold tracking-wider"
                >
                  Карта Google ↗
                </a>
              </div>
            </div>

            <h3 className="text-lg font-bold font-accent mb-6 text-gray-300 uppercase tracking-wider">
              Квести на цій локації:
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {shevchenkoQuests.map(quest => (
                <Link 
                  key={quest.id} 
                  href={`/room/${quest.slug}`}
                  className="bg-black/40 border border-white/10 hover:border-brand-red/50 p-5 rounded-2xl transition-all group"
                >
                  <h4 className="text-xl font-bold font-accent text-white group-hover:text-brand-red mb-2 transition-colors">
                    {quest.title}
                  </h4>
                  <p className="text-xs text-gray-400 mb-4 line-clamp-2">{quest.shortDescription}</p>
                  <div className="flex justify-between items-center text-xs text-gray-400 pt-3 border-t border-white/5">
                    <span>👥 {quest.players.min}-{quest.players.max} гравців</span>
                    <span className="text-brand-red font-bold flex items-center gap-1">
                      Забронювати <ArrowRight className="w-3 h-3" />
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
