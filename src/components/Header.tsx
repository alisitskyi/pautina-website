'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X, Phone, Calendar } from 'lucide-react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-brand-dark/95 backdrop-blur-md sticky top-0 z-50 border-b border-white/10">
      <div className="container mx-auto px-4 py-3.5 flex justify-between items-center gap-4">
        {/* Logo */}
        <Link href="/" className="flex items-center shrink-0 group">
          <span className="text-xl sm:text-2xl font-extrabold tracking-tighter text-white group-hover:text-gray-200 transition-colors">
            PAUTINA<span className="text-brand-red">ROOMS</span>
          </span>
        </Link>

        {/* Desktop Navigation (visible on xl screens: >= 1280px to guarantee no squishing) */}
        <nav className="hidden xl:flex items-center space-x-6 2xl:space-x-8 text-xs font-accent uppercase tracking-wider text-gray-300 font-semibold shrink-0">
          <Link href="/#quests" className="hover:text-brand-red transition-colors whitespace-nowrap py-1">
            Квести
          </Link>
          <Link href="/locations" className="hover:text-brand-red transition-colors whitespace-nowrap py-1">
            Локації
          </Link>
          <Link href="/birthday" className="hover:text-brand-red transition-colors whitespace-nowrap py-1">
            Дні народження
          </Link>
          <Link href="/certificates" className="hover:text-brand-red transition-colors whitespace-nowrap py-1">
            Сертифікати
          </Link>
          <Link href="/faq" className="hover:text-brand-red transition-colors whitespace-nowrap py-1">
            FAQ
          </Link>
          <Link href="/contacts" className="hover:text-brand-red transition-colors whitespace-nowrap py-1">
            Контакти
          </Link>
        </nav>

        {/* Desktop / Tablet Actions */}
        <div className="flex items-center gap-3 sm:gap-4 shrink-0">
          {/* Phone (hidden on tiny screens, always nowrap) */}
          <a 
            href="tel:+380931701444" 
            className="hidden md:flex items-center gap-2 text-xs sm:text-sm font-bold text-gray-200 hover:text-white transition-colors whitespace-nowrap"
          >
            <Phone className="w-3.5 h-3.5 text-brand-red shrink-0" />
            <span className="font-mono">+38 (093) 170-14-44</span>
          </a>

          {/* Quick Call Icon button for mobile */}
          <a 
            href="tel:+380931701444" 
            className="md:hidden p-2 text-brand-red border border-brand-red/30 rounded-lg hover:bg-brand-red/10 transition-colors"
            aria-label="Зателефонувати"
          >
            <Phone className="w-4 h-4" />
          </a>

          {/* Booking CTA button */}
          <Link
            href="/#quests" 
            className="flex items-center gap-2 bg-brand-red hover:bg-red-700 text-white px-4 sm:px-5 py-2 sm:py-2.5 rounded-lg text-[11px] sm:text-xs uppercase font-extrabold tracking-wider transition-all shadow-md shadow-brand-red/20 active:scale-95 whitespace-nowrap shrink-0"
          >
            <Calendar className="w-3.5 h-3.5 shrink-0" />
            <span>Бронювати</span>
          </Link>

          {/* Hamburger Button for screens < xl */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="xl:hidden p-2 text-gray-300 hover:text-white focus:outline-none rounded-lg hover:bg-white/5 transition-colors"
            aria-label="Меню навігації"
          >
            {isOpen ? <X className="w-6 h-6 text-brand-red" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile / Tablet Drawer Menu */}
      {isOpen && (
        <div className="xl:hidden bg-neutral-950/98 border-b border-white/10 px-6 py-6 transition-all duration-300 animate-in fade-in slide-in-from-top-4 backdrop-blur-xl">
          <nav className="flex flex-col space-y-3.5 text-sm font-accent uppercase tracking-wider font-semibold">
            <Link 
              href="/#quests" 
              onClick={() => setIsOpen(false)}
              className="py-2 border-b border-white/5 hover:text-brand-red transition-colors flex items-center justify-between"
            >
              <span>🎯 Всі квести</span>
              <span className="text-xs text-gray-500">6 квестів</span>
            </Link>
            <Link 
              href="/locations" 
              onClick={() => setIsOpen(false)}
              className="py-2 border-b border-white/5 hover:text-brand-red transition-colors flex items-center justify-between"
            >
              <span>📍 Локації Одеси</span>
              <span className="text-xs text-gray-500">Торгова / Шевченка</span>
            </Link>
            <Link 
              href="/birthday" 
              onClick={() => setIsOpen(false)}
              className="py-2 border-b border-white/5 hover:text-brand-red transition-colors flex items-center justify-between"
            >
              <span>🎂 Дні народження та свята</span>
              <span className="text-xs text-brand-gold">Свято під ключ</span>
            </Link>
            <Link 
              href="/certificates" 
              onClick={() => setIsOpen(false)}
              className="py-2 border-b border-white/5 hover:text-brand-red transition-colors flex items-center justify-between"
            >
              <span>🎁 Подарункові сертифікати</span>
              <span className="text-xs text-gray-500">від 1000 грн</span>
            </Link>
            <Link 
              href="/faq" 
              onClick={() => setIsOpen(false)}
              className="py-2 border-b border-white/5 hover:text-brand-red transition-colors"
            >
              ❓ Часті запитання (FAQ)
            </Link>
            <Link 
              href="/contacts" 
              onClick={() => setIsOpen(false)}
              className="py-2 border-b border-white/5 hover:text-brand-red transition-colors"
            >
              📞 Контакти
            </Link>
          </nav>

          <div className="mt-6 pt-6 border-t border-white/10 flex flex-col sm:flex-row gap-3">
            <a 
              href="tel:+380931701444" 
              className="flex-1 flex items-center justify-center gap-2.5 py-3 border border-white/15 rounded-xl text-xs font-bold hover:border-brand-red transition-colors whitespace-nowrap"
            >
              <Phone className="w-4 h-4 text-brand-red" />
              <span>+38 (093) 170-14-44</span>
            </a>
            <Link 
              href="/#quests" 
              onClick={() => setIsOpen(false)}
              className="flex-1 flex items-center justify-center gap-2 bg-brand-red hover:bg-red-700 text-white py-3 rounded-xl text-xs uppercase font-extrabold tracking-wider text-center whitespace-nowrap shadow-md shadow-brand-red/30"
            >
              <Calendar className="w-4 h-4" />
              <span>Обрати сеанс</span>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
