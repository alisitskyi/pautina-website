import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Cake, Sparkles, Users, Gift, Clock, CheckCircle, Phone, ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'День народження та дитячі свята в Одесі | PAUTINA Rooms',
  description: 'Організація яскравих днів народжень та дитячих свят у квест-кімнатах PAUTINA в Одесі. Квести, затишні лаунж-зони, аніматори, торт та піца.',
};

export default function BirthdayPage() {
  const packages = [
    {
      name: '«Стандарт»',
      badge: 'Популярний',
      price: 'від 3 200 грн',
      description: 'Ідеально для невеликої компанії дітей або підлітків.',
      features: [
        '1 квест на вибір (до 6 учасників)',
        '1 година оренди лаунж-зони для частування',
        'Посуд, чай, кава та вода включені',
        'Можливість принести свій торт та піцу',
        'Музичний супровід та привітання'
      ],
      cta: 'Замовити Стандарт'
    },
    {
      name: '«Драйв & Шоу»',
      badge: 'Хіт для дітей',
      price: 'від 5 800 грн',
      description: 'Максимум емоцій з костюмованим ведучим-аніматором.',
      features: [
        '2 квести одночасно або поспіль (до 10-12 осіб)',
        '2 години оренди святкової лаунж-зони',
        'Супровід квесту костюмованим ведучим',
        'Міні-дискотека та конкурси у лаунжі',
        'Фірмовий диплом або подарунок імениннику'
      ],
      cta: 'Замовити Драйв'
    },
    {
      name: '«All Inclusive VIP»',
      badge: 'Свято під ключ',
      price: 'від 9 500 грн',
      description: 'Повна організація свята: батьки просто відпочивають!',
      features: [
        'Квести для всієї компанії (до 15-20 осіб)',
        '3 години повної оренди лаунж-простору',
        'Професійний фотограф на 1 годину',
        'Святковий декор кульками',
        'Персональний координатор свята'
      ],
      cta: 'Замовити VIP'
    }
  ];

  return (
    <div className="bg-brand-dark min-h-screen text-white pt-10 pb-24">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Hero */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-red/20 border border-brand-red/40 text-brand-red text-xs font-bold uppercase tracking-widest mb-4">
            <Cake className="w-4 h-4" /> Незабутнє свято в Одесі
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold font-accent tracking-tight mb-6">
            ДЕНЬ НАРОДЖЕННЯ В <span className="text-brand-red">PAUTINA ROOMS</span>
          </h1>
          <p className="text-gray-300 text-base md:text-lg leading-relaxed">
            Подаруйте імениннику та друзям справжню пригоду! Захопливий квест, затишна зона для святкування, аніматори та яскраві враження, про які говоритимуть весь рік.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          <div className="bg-neutral-900/60 border border-white/10 p-6 rounded-2xl">
            <div className="w-12 h-12 rounded-xl bg-brand-red/20 text-brand-red flex items-center justify-center mb-4">
              <Users className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold font-accent mb-2">Для будь-якої компанії</h3>
            <p className="text-gray-400 text-xs leading-relaxed">
              Приймаємо компанії від 4 до 30 дітей або дорослих одночасно в кількох кімнатах мережі.
            </p>
          </div>
          <div className="bg-neutral-900/60 border border-white/10 p-6 rounded-2xl">
            <div className="w-12 h-12 rounded-xl bg-brand-gold/20 text-brand-gold flex items-center justify-center mb-4">
              <Sparkles className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold font-accent mb-2">Затишні лаунж-зони</h3>
            <p className="text-gray-400 text-xs leading-relaxed">
              Окремі кімнати для відпочинку з диванами, столами, кулером та музикою для святкового торту й піци.
            </p>
          </div>
          <div className="bg-neutral-900/60 border border-white/10 p-6 rounded-2xl">
            <div className="w-12 h-12 rounded-xl bg-brand-red/20 text-brand-red flex items-center justify-center mb-4">
              <Clock className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold font-accent mb-2">Батьки відпочивають</h3>
            <p className="text-gray-400 text-xs leading-relaxed">
              Наші досвідчені аніматори та адміністратори проводять гру від початку до кінця під повним наглядом.
            </p>
          </div>
        </div>

        {/* Packages */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <span className="text-brand-red text-xs uppercase font-extrabold tracking-widest block mb-2">Готові рішення</span>
            <h2 className="text-3xl md:text-4xl font-extrabold font-accent">
              ПАКЕТИ СВЯТКУВАННЯ
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {packages.map((pkg) => (
              <div 
                key={pkg.name} 
                className="bg-neutral-900 border border-white/10 hover:border-brand-red/50 rounded-2xl p-8 flex flex-col justify-between transition-all duration-300 relative shadow-xl"
              >
                <div>
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-xs uppercase font-extrabold bg-brand-red/20 text-brand-red px-3 py-1 rounded-md border border-brand-red/30">
                      {pkg.badge}
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold font-accent mb-2">{pkg.name}</h3>
                  <div className="text-2xl font-extrabold text-white mb-3 text-brand-gold">
                    {pkg.price}
                  </div>
                  <p className="text-gray-400 text-xs mb-6 leading-relaxed">
                    {pkg.description}
                  </p>
                  
                  <ul className="space-y-3 text-xs text-gray-300 mb-8 border-t border-white/10 pt-6">
                    {pkg.features.map((feat, i) => (
                      <li key={i} className="flex items-start gap-2.5">
                        <CheckCircle className="w-4 h-4 text-brand-red shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <a 
                  href="tel:+380931701444" 
                  className="w-full bg-brand-red hover:bg-red-700 text-white font-bold py-3.5 rounded-xl text-center uppercase text-xs tracking-wider transition-all block"
                >
                  {pkg.cta}
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* Quick Consultation Banner */}
        <div className="bg-gradient-to-r from-neutral-900 to-black border border-brand-red/30 rounded-3xl p-8 md:p-12 text-center max-w-4xl mx-auto shadow-2xl">
          <h3 className="text-2xl md:text-3xl font-extrabold font-accent mb-4">
            Потрібна консультація щодо сценарію або розрахунку?
          </h3>
          <p className="text-gray-300 text-sm max-w-xl mx-auto mb-8">
            Зателефонуйте нашому менеджеру свят. Ми підберемо ідеальний квест за віком дітей та розрахуємо точний таймінг свята.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="tel:+380931701444" 
              className="bg-brand-red hover:bg-red-700 text-white px-8 py-3.5 rounded-xl font-bold uppercase text-xs tracking-wider flex items-center justify-center gap-2"
            >
              <Phone className="w-4 h-4" />
              <span>+38 (093) 170-14-44</span>
            </a>
            <Link 
              href="/contacts" 
              className="bg-white/10 hover:bg-white/20 text-white px-8 py-3.5 rounded-xl font-bold uppercase text-xs tracking-wider border border-white/10"
            >
              Локації в Одесі
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
