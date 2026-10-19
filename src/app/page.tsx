import { api } from '@/lib/api';
import QuestCatalog from '@/components/QuestCatalog';
import { MapPin, Phone } from 'lucide-react';
import Image from 'next/image';

export default async function HomePage() {
  const quests = await api.quests.getAll();

  return (
    <div className="flex flex-col bg-[#000000] min-h-screen text-white">
      {/* ================= Authentic Hero / Intro Section (pautina-rooms.com) ================= */}
      <section className="bg-[#000000] pt-6 sm:pt-8 pb-2 text-center">
        <div className="container mx-auto px-4 max-w-5xl">
          {/* Subtitle with Underline */}
          <div className="mb-4">
            <h2 className="text-[#fb7b04] text-sm sm:text-base md:text-lg font-bold tracking-wide inline-block border-b border-[#fb7b04]/80 pb-0.5">
              Квест кімнати Одеси від PAUTINArooms!
            </h2>
          </div>

          {/* Description Paragraph */}
          <p className="text-gray-300 text-xs sm:text-sm md:text-[14px] leading-relaxed tracking-wide font-normal max-w-3xl mx-auto mb-6 sm:mb-8">
            Антуражні та атмосферні квест кімнати від PAUTINArooms! Більш 30 різноманітних квестів на різні сюжети.
          </p>

          {/* Title: КВЕСТИ */}
          <div className="mb-6 sm:mb-8">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-widest uppercase">
              КВЕСТИ
            </h1>
          </div>
        </div>
      </section>

      {/* ================= Quests Catalog Section ================= */}
      <section id="quests" className="pb-24 bg-[#000000]">
        <div className="container mx-auto px-4 max-w-7xl">
          <QuestCatalog initialQuests={quests} />
        </div>
      </section>

      {/* Birthday & Corporate Promo Section */}
      <section className="py-20 bg-gradient-to-r from-neutral-900 via-neutral-950 to-neutral-900 border-t border-b border-white/10 relative overflow-hidden">
        <div className="container mx-auto px-4 max-w-7xl relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-brand-gold text-xs font-bold uppercase tracking-widest block mb-3">
                Свято «під ключ»
              </span>
              <h2 className="text-3xl md:text-5xl font-extrabold font-accent tracking-tight mb-6">
                ДНІ НАРОДЖЕННЯ ТА КОРПОРАТИВИ В <span className="text-brand-red">PAUTINA</span>
              </h2>
              <p className="text-gray-300 text-sm md:text-base leading-relaxed mb-6">
                Шукаєте незабутній формат свята для дітей чи дорослих? Ми організуємо все: захопливі квести, затишні банкетні лаунж-зони для частування торта і піци, ведучих, аніматорів та привітання.
              </p>
              <ul className="space-y-3 text-sm text-gray-300 mb-8">
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-brand-red" />
                  Лаунж-кімнати для святкування та чаювання після гри
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-brand-red" />
                  Спеціальні дитячі адаптовані сценарії з аніматором-ведучим
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-brand-red" />
                  Одночасне проходження для великих компаній до 30 осіб
                </li>
              </ul>
              <div className="flex flex-wrap gap-4">
                <a
                  href="/birthday"
                  className="bg-brand-red hover:bg-[#e06d02] text-white px-7 py-3.5 rounded-xl font-bold uppercase text-xs tracking-wider transition-all cursor-pointer"
                >
                  Дізнатися деталі та ціни
                </a>
                <a
                  href="tel:+380931701444"
                  className="border border-white/20 hover:border-white text-white px-7 py-3.5 rounded-xl font-bold uppercase text-xs tracking-wider transition-all flex items-center gap-2"
                >
                  <Phone className="w-4 h-4 text-brand-red" />
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
      <section className="py-20 bg-brand-dark">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="bg-gradient-to-r from-neutral-900 to-black border border-brand-gold/30 rounded-3xl p-8 md:p-14 relative overflow-hidden shadow-2xl">
            <div className="max-w-2xl relative z-10">
              <span className="text-brand-gold text-xs uppercase font-extrabold tracking-widest block mb-3">
                Найкращий подарунок
              </span>
              <h2 className="text-3xl md:text-4xl font-extrabold font-accent mb-4 tracking-tight">
                ПОДАРУНКОВІ СЕРТИФІКАТИ НА КВЕСТ
              </h2>
              <p className="text-gray-300 text-sm leading-relaxed mb-8">
                Даруйте емоції замість речей! Електронні та преміальні пластикові сертифікати діють на будь-який квест мережі протягом 6 місяців.
              </p>
              <div className="flex flex-wrap gap-4">
                <a
                  href="/certificates"
                  className="bg-brand-gold hover:bg-amber-600 text-black font-extrabold px-8 py-3.5 rounded-xl text-xs uppercase tracking-wider transition-all cursor-pointer"
                >
                  Замовити сертифікат
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Locations Section */}
      <section id="locations" className="py-20 bg-neutral-950 border-t border-white/10">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-brand-red text-xs uppercase font-extrabold tracking-widest block mb-2">Локації Одеси</span>
            <h2 className="text-3xl md:text-5xl font-extrabold font-accent">
              ДЕ НАС <span className="text-brand-red">ЗНАЙТИ</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Location 1 */}
            <div className="bg-brand-gray/40 border border-white/10 rounded-2xl p-8">
              <div className="flex items-center gap-3 mb-4">
                <MapPin className="w-6 h-6 text-brand-red" />
                <h3 className="text-2xl font-bold font-accent">Локація «Центр»</h3>
              </div>
              <p className="text-gray-300 text-sm mb-4">📍 м. Одеса, вул. Торгова, 2</p>
              <p className="text-xs text-gray-400 mb-6">
                Квести: Гаррі і Таємна Кімната, Дзвінок, Скарби Чорної Бороди, Лаунж-зона для свят.
              </p>
              <div className="flex flex-wrap gap-4 text-xs">
                <a 
                  href="https://maps.google.com/?q=Odesa+Torgova+2" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-brand-red hover:underline font-bold"
                >
                  Відкрити на карті Google →
                </a>
              </div>
            </div>

            {/* Location 2 */}
            <div className="bg-brand-gray/40 border border-white/10 rounded-2xl p-8">
              <div className="flex items-center gap-3 mb-4">
                <MapPin className="w-6 h-6 text-brand-red" />
                <h3 className="text-2xl font-bold font-accent">Локація «Приморський»</h3>
              </div>
              <p className="text-gray-300 text-sm mb-4">📍 м. Одеса, пр-т Шевченка, 4д</p>
              <p className="text-xs text-gray-400 mb-6">
                Квести: Пила: Фінальна Гра, Втеча з Психлікарні, Шерлок Холмс.
              </p>
              <div className="flex flex-wrap gap-4 text-xs">
                <a 
                  href="https://maps.google.com/?q=Odesa+Shevchenko+4d" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-brand-red hover:underline font-bold"
                >
                  Відкрити на карті Google →
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
