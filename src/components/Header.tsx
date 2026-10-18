'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X, Phone, Calendar } from 'lucide-react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-brand-dark/95 backdrop-blur-md sticky top-0 z-50 border-b border-white/10">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="flex items-center group">
          <span className="text-2xl font-extrabold tracking-tighter text-white group-hover:text-gray-200 transition-colors">
            PAUTINA<span className="text-brand-red">ROOMS</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex space-x-8 text-sm font-accent uppercase tracking-widest text-gray-300">
          <Link href="/#quests" className="hover:text-brand-red transition-colors">Квести</Link>
          <Link href="/locations" className="hover:text-brand-red transition-colors">Локації</Link>
          <Link href="/birthday" className="hover:text-brand-red transition-colors">Дні народження</Link>
          <Link href="/certificates" className="hover:text-brand-red transition-colors">Сертифікати</Link>
          <Link href="/faq" className="hover:text-brand-red transition-colors">FAQ</Link>
          <Link href="/contacts" className="hover:text-brand-red transition-colors">Контакти</Link>
        </nav>

        {/* Desktop Actions */}
        <div className="hidden sm:flex items-center space-x-6">
          <a 
            href="tel:+380931701444" 
            className="flex items-center gap-2 text-sm font-semibold text-gray-300 hover:text-white transition-colors"
          >
            <Phone className="w-4 h-4 text-brand-red" />
            <span>+38 (093) 170-14-44</span>
          </a>
          <Link
            href="/#quests" 
            className="flex items-center gap-2 bg-brand-red hover:bg-red-700 text-white px-5 py-2.5 rounded-lg text-xs uppercase font-bold tracking-wider transition-all shadow-lg shadow-brand-red/20 active:scale-95"
          >
            <Calendar className="w-3.5 h-3.5" />
            <span>Бронювати</span>
          </Link>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="flex items-center gap-3 lg:hidden">
          <a 
            href="tel:+380931701444" 
            className="p-2 text-brand-red border border-brand-red/30 rounded-lg sm:hidden"
            aria-label="Зателефонувати"
          >
            <Phone className="w-5 h-5" />
          </a>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 text-gray-300 hover:text-white focus:outline-none"
            aria-label="Меню навігації"
          >
            {isOpen ? <X className="w-7 h-7 text-brand-red" /> : <Menu className="w-7 h-7" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {isOpen && (
        <div className="lg:hidden bg-brand-dark/98 border-b border-white/10 px-6 py-6 transition-all duration-300 animate-in fade-in slide-in-from-top-4">
          <nav className="flex flex-col space-y-4 text-base font-accent uppercase tracking-wider">
            <Link 
              href="/#quests" 
              onClick={() => setIsOpen(false)}
              className="py-2 border-b border-white/5 hover:text-brand-red transition-colors"
            >
              🎯 Всі квести
            </Link>
            <Link 
              href="/locations" 
              onClick={() => setIsOpen(false)}
              className="py-2 border-b border-white/5 hover:text-brand-red transition-colors"
            >
              📍 Локації Одеси
            </Link>
            <Link 
              href="/birthday" 
              onClick={() => setIsOpen(false)}
              className="py-2 border-b border-white/5 hover:text-brand-red transition-colors"
            >
              🎂 Дні народження та свята
            </Link>
            <Link 
              href="/certificates" 
              onClick={() => setIsOpen(false)}
              className="py-2 border-b border-white/5 hover:text-brand-red transition-colors"
            >
              🎁 Подарункові сертифікати
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

          <div className="mt-6 pt-6 border-t border-white/10 flex flex-col gap-4">
            <a 
              href="tel:+380931701444" 
              className="flex items-center justify-center gap-3 py-3 border border-white/10 rounded-lg text-sm font-semibold hover:border-brand-red transition-colors"
            >
              <Phone className="w-4 h-4 text-brand-red" />
              <span>+38 (093) 170-14-44</span>
            </a>
            <Link 
              href="/#quests" 
              onClick={() => setIsOpen(false)}
              className="flex items-center justify-center gap-2 bg-brand-red hover:bg-red-700 text-white py-3 rounded-lg text-sm uppercase font-bold tracking-wider text-center"
            >
              <Calendar className="w-4 h-4" />
              <span>Вибрати квест та забронювати</span>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
