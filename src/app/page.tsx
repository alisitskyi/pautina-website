import { api } from '@/lib/api';
import Link from 'next/link';
import Image from 'next/image';
import QuestCatalog from '@/components/QuestCatalog';
import { Sparkles, Trophy, ShieldCheck, HeartHandshake, MapPin, Phone, Clock, ArrowRight } from 'lucide-react';

export default async function HomePage() {
  const quests = await api.quests.getAll();

  return (
    <div className="flex flex-col bg-brand-dark min-h-screen text-white">
      {/* Hero Section */}
      <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden">
        {/* Dark radial glow and gradient */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-brand-red/15 via-black/70 to-brand-dark z-10" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-transparent to-brand-dark z-10" />
        
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-40 mix-blend-luminosity scale-105"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1514533450685-4493e01d1fdc?auto=format&fit=crop&w=1920&q=80')`,
          }} 
        />
        
        <div className="relative z-20 text-center px-4 max-w-5xl mx-auto py-20">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-red/20 border border-brand-red/40 text-brand-red text-xs font-bold uppercase tracking-widest mb-6 backdrop-blur-md">
            <Sparkles className="w-3.5 h-3.5" /> Найбільша мережа квестів в Одесі
          </div>

          <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold mb-6 font-accent tracking-tighter leading-none">
            АНТУРАЖНІ ТА АТМОСФЕРНІ <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-red via-red-500 to-amber-500">
              КВЕСТ КІМНАТИ ОДЕСИ
            </span>
          </h1>

          <p className="text-base sm:text-xl max-w-2xl mx-auto mb-10 text-gray-300 leading-relaxed font-light">
            Пориньте у світ загадок, містики та пригод. Реалістичні декорації, живі актори, високотехнологічні механізми без жодних нудних замків.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link 
              href="#quests" 
              className="w-full sm:w-auto bg-brand-red hover:bg-red-700 text-white px-8 py-4 rounded-xl font-bold uppercase tracking-widest transition-all shadow-xl shadow-brand-red/30 active:scale-95 text-center flex items-center justify-center gap-2"
            >
              <span>Вибрати квест</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link 
              href="/birthday" 
              className="w-full sm:w-auto bg-white/10 hover:bg-white/20 text-white border border-white/20 backdrop-blur-md px-8 py-4 rounded-xl font-bold uppercase tracking-widest transition-all text-center"
            >
              Дні народження
            </Link>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 max-w-4xl mx-auto border-t border-white/10 pt-8">
            <div>
              <span className="block text-3xl font-extrabold text-brand-red font-accent">30+</span>
              <span className="text-xs text-gray-400 uppercase tracking-wider">Квестів у мережі</span>
            </div>
            <div>
              <span className="block text-3xl font-extrabold text-brand-gold font-accent">50 000+</span>
              <span className="text-xs text-gray-400 uppercase tracking-wider">Гравців пройшли</span>
            </div>
            <div>
              <span className="block text-3xl font-extrabold text-white font-accent">2</span>
              <span className="text-xs text-gray-400 uppercase tracking-wider">Локації в центрі</span>
            </div>
            <div>
              <span className="block text-3xl font-extrabold text-brand-red font-accent">4.9 ★</span>
              <span className="text-xs text-gray-400 uppercase tracking-wider">Рейтинг за відгуками</span>
            </div>
          </div>
        </div>
      </section>

      {/* Quests Catalog Section */}
      <section id="quests" className="py-24 bg-brand-dark border-t border-white/5 scroll-mt-10">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-brand-red text-xs uppercase font-extrabold tracking-widest block mb-2">Каталог пригод</span>
            <h2 className="text-3xl md:text-5xl font-extrabold font-accent tracking-tight">
              ОБЕРІТЬ СВІЙ <span className="text-brand-red">КВЕСТ</span>
            </h2>
            <p className="text-gray-400 text-sm mt-3">
              Обирайте за жанром, кількістю гравців або локацією в Одесі
            </p>
          </div>

          {/* Interactive Catalog with Filter */}
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
                <Link
                  href="/birthday"
                  className="bg-brand-red hover:bg-red-700 text-white px-7 py-3.5 rounded-xl font-bold uppercase text-xs tracking-wider transition-all"
                >
                  Дізнатися деталі та ціни
                </Link>
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
                <Link
                  href="/certificates"
                  className="bg-brand-gold hover:bg-amber-600 text-black font-extrabold px-8 py-3.5 rounded-xl text-xs uppercase tracking-wider transition-all"
                >
                  Замовити сертифікат
                </Link>
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
