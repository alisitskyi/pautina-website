'use client';

import { useState } from 'react';
import { ChevronDown, HelpCircle, Phone } from 'lucide-react';
import Link from 'next/link';

interface FAQItem {
  q: string;
  a: string;
}

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs: FAQItem[] = [
    {
      q: 'Що таке квест-кімната та як проходить гра?',
      a: 'Квест-кімната — це інтерактивна гра в реальному просторі. Вашу команду зачиняють у тематично оформленій локації (наприклад, у Гоґвортсі чи покинутому підвалі). Ваша мета — розгадувати загадки, знаходити тайники, взаємодіяти з механізмами та виконати головну місію за 60 хвилин.'
    },
    {
      q: 'Чи безпечно грати у квестах? Чи нас замикають по-справжньому?',
      a: 'Абсолютно безпечно! Усі двері обладнані аварійними кнопками миттєвого відкриття дверей, які знеструмлюють магнітні замки в будь-яку секунду. Крім того, оператор безперервно спостерігає за грою через камери та мікрофони і завжди готовий прийти на допомогу.'
    },
    {
      q: 'Що робити, якщо ми не можемо розгадати загадку?',
      a: 'У кожній кімнаті є зв’язок з оператором (через рацію або мікрофон). Ви завжди можете попросити натяк або підказку. Кількість підказок необмежена — наша мета, щоб ви отримали задоволення від гри!'
    },
    {
      q: 'Чи страшно у квестах жанру «Хоррор»?',
      a: 'Рівень страху залежить від обраного квесту та формату. Наприклад, у квесті «Дзвінок» або «Пила» присутня гнітюча атмосфера, світлозвукові ефекти, а за бажанням — актори. Перед грою адміністратор обов’язково уточнить бажаний рівень контакту: лайт (без контакту), медіум чи хард.'
    },
    {
      q: 'З якого віку можна грати дітям?',
      a: 'Для дітей у нас є адаптовані сімейні квести (наприклад, «Скарби Чорної Бороди» від 6 років, «Гаррі Поттер» від 8 років). Діти віком до 12 років можуть грати у супроводі дорослого або нашого костюмованого аніматора.'
    },
    {
      q: 'Як забронювати та оплатити гру?',
      a: 'Ви обираєте квест та зручний час на нашому сайті або за телефоном. Оплата здійснюється безпосередньо на локації перед початком сеансу — готівкою або банківською карткою.'
    },
    {
      q: 'Що одягати на квест?',
      a: 'Рекомендуємо зручний повсякденний одяг та взуття на низькому ходу (кросівки або кеди). Уникайте високих підборів та вечірніх суконь, оскільки в деяких квестах доведеться присідати, проходити через таємні лази чи рухатися.'
    },
    {
      q: 'Чи можна перенести або скасувати бронь?',
      a: 'Так, але просимо попередити нас щонайменше за 3 години до початку сеансу, щоб ми могли відкрити слот для інших охочих команд.'
    }
  ];

  return (
    <div className="bg-brand-dark min-h-screen text-white pt-10 pb-24">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-red/20 border border-brand-red/40 text-brand-red text-xs font-bold uppercase tracking-widest mb-4">
            <HelpCircle className="w-4 h-4" /> Довідка та правила
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold font-accent tracking-tight mb-4">
            ЧАСТІ <span className="text-brand-red">ЗАПИТАННЯ</span>
          </h1>
          <p className="text-gray-300 text-sm md:text-base leading-relaxed">
            Усе, що потрібно знати перед першим візитом до квест-кімнат PAUTINA в Одесі.
          </p>
        </div>

        {/* Accordion */}
        <div className="space-y-4 mb-16">
          {faqs.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div 
                key={index}
                className="bg-neutral-900 border border-white/10 rounded-2xl overflow-hidden transition-all duration-300"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full text-left p-6 flex justify-between items-center gap-4 focus:outline-none"
                >
                  <span className="font-bold text-base sm:text-lg text-white font-accent">
                    {item.q}
                  </span>
                  <ChevronDown className={`w-5 h-5 text-brand-red shrink-0 transition-transform duration-300 ${
                    isOpen ? 'rotate-180' : ''
                  }`} />
                </button>
                {isOpen && (
                  <div className="px-6 pb-6 text-sm text-gray-300 leading-relaxed border-t border-white/5 pt-4">
                    {item.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Still have questions banner */}
        <div className="bg-neutral-950 border border-white/10 rounded-3xl p-8 text-center max-w-2xl mx-auto shadow-2xl">
          <h3 className="text-2xl font-bold font-accent mb-2">Залишилися запитання?</h3>
          <p className="text-gray-400 text-xs mb-6">
            Зателефонуйте нам — наш адміністратор залюбки розповість усі нюанси та підбере гру саме для вас!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="tel:+380931701444" 
              className="bg-brand-red hover:bg-[#e06d02] text-white font-bold px-8 py-3 rounded-xl uppercase text-xs tracking-wider flex items-center justify-center gap-2"
            >
              <Phone className="w-4 h-4" />
              <span>+38 (093) 170-14-44</span>
            </a>
            <Link 
              href="/#quests" 
              className="bg-white/10 hover:bg-white/20 text-white font-bold px-8 py-3 rounded-xl uppercase text-xs tracking-wider border border-white/10"
            >
              Перейти до квестів
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
