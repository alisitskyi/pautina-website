'use client';

import { useState } from 'react';
import { ChevronDown, HelpCircle, Phone } from 'lucide-react';
import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';

interface FAQItem {
  q: string;
  a: string;
}

export default function FAQPage() {
  const { language, t } = useLanguage();
  const f = t('faqPage');
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqsUa: FAQItem[] = [
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

  const faqsEn: FAQItem[] = [
    {
      q: 'What is an escape room and how does the game work?',
      a: 'An escape room is an interactive real-life adventure game. Your team enters a themed space (such as Hogwarts or an ancient crypt). Your objective is to unravel clues, uncover secret compartments, operate intriguing mechanisms, and fulfill the main story mission within 60 minutes.'
    },
    {
      q: 'Is it safe to play? Are we truly locked in?',
      a: 'Completely safe! All doors are equipped with emergency exit buttons that instantly unlock magnetic doors at any second. Moreover, our operator continuously monitors the gameplay through cameras and microphones and is always ready to assist.'
    },
    {
      q: 'What if we get stuck on a puzzle?',
      a: 'Every room is equipped with direct communication to the operator (via radio or intercom). You can ask for a hint or clue at any time. Clues are unlimited — our main priority is for you to have fun!'
    },
    {
      q: 'How scary are Horror escape rooms?',
      a: 'The fear level depends on the chosen quest and performance mode. In rooms like "The Ring" or "Saw", you will experience a suspenseful atmosphere, sound effects, and live actors upon request. Before the game, our host will confirm your preferred contact intensity: Light (no contact), Medium, or Hard.'
    },
    {
      q: 'What is the minimum age for kids?',
      a: 'We feature family-friendly scenarios suited for young questers (e.g. "Blackbeard’s Treasures" from age 6, "Harry Potter" from age 8). Children under 12 can play when accompanied by an adult or our costumed party host.'
    },
    {
      q: 'How do we book and pay for a session?',
      a: 'Choose your preferred quest and time slot on our website or call us directly. Payment takes place at the venue right before your game begins — in cash or by credit card.'
    },
    {
      q: 'What should we wear to an escape room?',
      a: 'We recommend casual, comfortable clothes and flat shoes (sneakers or trainers). We suggest avoiding high heels and evening gowns, as some puzzles may involve kneeling, crawling through secret passages, or light physical movement.'
    },
    {
      q: 'Can we reschedule or cancel our booking?',
      a: 'Yes, please let us know at least 3 hours before your scheduled session so we can make the slot available to other awaiting groups.'
    }
  ];

  const faqs = language === 'en' ? faqsEn : faqsUa;

  return (
    <div className="bg-transparent min-h-screen text-white pt-10 pb-24">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#fb7b04]/20 border border-[#fb7b04]/40 text-[#fb7b04] text-xs font-bold uppercase tracking-widest mb-4">
            <HelpCircle className="w-4 h-4" /> {f.tag}
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold font-accent tracking-tight mb-4">
            {f.title}
          </h1>
          <p className="text-gray-300 text-sm md:text-base leading-relaxed">
            {f.desc}
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
                  className="w-full text-left p-6 flex justify-between items-center gap-4 focus:outline-none cursor-pointer"
                >
                  <span className="font-bold text-base sm:text-lg text-white font-accent">
                    {item.q}
                  </span>
                  <ChevronDown className={`w-5 h-5 text-[#fb7b04] shrink-0 transition-transform duration-300 ${
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
          <h3 className="text-2xl font-bold font-accent mb-2">{f.stillHaveQuestions}</h3>
          <p className="text-gray-400 text-xs mb-6">
            {f.callUs}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="tel:+380931701444" 
              className="bg-[#fb7b04] hover:bg-[#e06d02] text-white font-bold px-8 py-3 rounded-xl uppercase text-xs tracking-wider flex items-center justify-center gap-2 cursor-pointer shadow-md shadow-[#fb7b04]/20"
            >
              <Phone className="w-4 h-4" />
              <span>+38 (093) 170-14-44</span>
            </a>
            <Link 
              href="/#quests" 
              className="bg-white/10 hover:bg-white/20 text-white font-bold px-8 py-3 rounded-xl uppercase text-xs tracking-wider border border-white/10 cursor-pointer"
            >
              {language === 'en' ? 'Explore Escape Rooms' : 'Перейти до квестів'}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
