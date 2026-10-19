'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X, Phone, Facebook, Instagram } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const { lang, setLang, t } = useLanguage();
  const nav = t('nav');

  return (
    <header className="sticky top-0 z-50 shadow-2xl">
      {/* ================= PREVIEW BANNER ================= */}
      <div className="bg-[#141414] border-b border-[#fb7b04]/50 py-2 px-4 text-center text-xs shadow-md">
        <div className="container mx-auto flex items-center justify-center gap-2.5 flex-wrap">
          <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-[#fb7b04] text-white text-[10px] font-black uppercase tracking-wider shadow-sm">
            ⭐ Варіант 3 (Вектор)
          </span>
          <span className="font-semibold text-gray-200">
            Векторну павутину з файлу <code className="text-[#fbefab] font-mono font-bold">Vector pautina.svg</code> додано до прев&apos;ю!
          </span>
          <Link 
            href="/preview-patterns" 
            className="inline-flex items-center gap-1 bg-[#fb7b04]/20 hover:bg-[#fb7b04] border border-[#fb7b04]/60 text-white font-bold px-3 py-0.5 rounded-lg text-[11px] transition-all hover:scale-105 ml-1"
          >
            Відкрити прев&apos;ю фонів →
          </Link>
        </div>
      </div>

      {/* ================= TIER 1: Top Bar (Authentic Pautina) ================= */}
      <div className="bg-[#000000] border-b border-white/5 py-2.5 px-4 sm:px-6">
        <div className="container mx-auto flex justify-between items-center gap-4 max-w-7xl">
          {/* Logo & Phones */}
          <div className="flex items-center gap-6 sm:gap-8 flex-wrap">
            <Link href="/" className="font-extrabold text-base sm:text-lg tracking-widest text-white hover:text-[#fbefab] transition-colors shrink-0">
              PAUTINA
            </Link>

            {/* 3 Phone Numbers from original site */}
            <div className="hidden md:flex items-center gap-6 text-[13px] text-gray-300 font-sans tracking-wide">
              <a 
                href="tel:+380732152623" 
                className="hover:text-[#fb7b04] transition-colors whitespace-nowrap"
              >
                +380732152623
              </a>
              <a 
                href="tel:+380989351270" 
                className="hover:text-[#fb7b04] transition-colors whitespace-nowrap"
              >
                +380989351270
              </a>
              <a 
                href="tel:+380997350009" 
                className="hover:text-[#fb7b04] transition-colors whitespace-nowrap"
              >
                +380997350009
              </a>
            </div>
          </div>

          {/* Right: Language Switcher, Social icons & Mobile Call */}
          <div className="flex items-center gap-3.5 shrink-0">
            {/* Language Switcher (UA / EN) */}
            <div className="flex items-center bg-white/10 rounded-full p-0.5 border border-white/10 text-[11px] font-bold">
              <button
                type="button"
                onClick={() => setLang('ua')}
                className={`px-2 py-0.5 rounded-full transition-all ${
                  lang === 'ua'
                    ? 'bg-[#fb7b04] text-white shadow-sm'
                    : 'text-gray-400 hover:text-white'
                }`}
                aria-label="Українська мова"
              >
                UA
              </button>
              <button
                type="button"
                onClick={() => setLang('en')}
                className={`px-2 py-0.5 rounded-full transition-all ${
                  lang === 'en'
                    ? 'bg-[#fb7b04] text-white shadow-sm'
                    : 'text-gray-400 hover:text-white'
                }`}
                aria-label="English language"
              >
                EN
              </button>
            </div>

            {/* Mobile quick call */}
            <a 
              href="tel:+380732152623" 
              className="md:hidden flex items-center gap-1.5 text-xs text-[#fb7b04] font-mono font-bold"
              aria-label="Зателефонувати"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>+380732152623</span>
            </a>

            {/* Social Icons (Facebook & Instagram from original) */}
            <a 
              href="https://www.facebook.com/pautinarooms/" 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="Facebook PAUTINA"
              className="text-gray-400 hover:text-white hover:scale-110 transition-all p-1"
            >
              <Facebook className="w-4 h-4 fill-current" />
            </a>
            <a 
              href="https://www.instagram.com/pautinarooms/" 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="Instagram PAUTINA"
              className="text-gray-400 hover:text-white hover:scale-110 transition-all p-1"
            >
              <Instagram className="w-4 h-4" />
            </a>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-1.5 text-gray-300 hover:text-white rounded-lg focus:outline-none ml-1"
              aria-label="Меню"
            >
              {isOpen ? <X className="w-5 h-5 text-[#fbefab]" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* ================= TIER 2: Main Navigation Bar ================= */}
      <nav 
        className="hidden lg:block border-b border-white/10 backdrop-blur-md"
        style={{
          background: 'linear-gradient(to bottom, rgba(16, 16, 3, 0.96) 0%, rgba(16, 16, 3, 0.85) 65%, rgba(30, 30, 30, 0.6) 100%)',
        }}
      >
        <div className="container mx-auto px-4 max-w-7xl flex items-center justify-center py-2.5">
          <ul className="flex items-center space-x-6 xl:space-x-8 text-[13px] xl:text-[14px] text-gray-200 font-normal">
            <li>
              <a 
                href="/#quests" 
                className="hover:text-[#fbefab] hover:underline underline-offset-8 transition-colors whitespace-nowrap"
              >
                {nav.rooms}
              </a>
            </li>
            <li>
              <a 
                href="/#quests" 
                className="hover:text-[#fbefab] hover:underline underline-offset-8 transition-colors whitespace-nowrap"
              >
                {nav.gallery}
              </a>
            </li>
            <li>
              <a 
                href="/birthday" 
                className="hover:text-[#fbefab] hover:underline underline-offset-8 transition-colors whitespace-nowrap"
              >
                {nav.birthday}
              </a>
            </li>
            <li>
              <a 
                href="/certificates" 
                className="hover:text-[#fbefab] hover:underline underline-offset-8 transition-colors whitespace-nowrap"
              >
                {nav.certificates}
              </a>
            </li>
            <li>
              <a 
                href="/faq" 
                className="hover:text-[#fbefab] hover:underline underline-offset-8 transition-colors whitespace-nowrap"
              >
                {nav.faq}
              </a>
            </li>
            <li>
              <a 
                href="/locations" 
                className="hover:text-[#fbefab] hover:underline underline-offset-8 transition-colors whitespace-nowrap"
              >
                {nav.outdoor}
              </a>
            </li>
            <li>
              <a 
                href="/contacts" 
                className="hover:text-[#fbefab] hover:underline underline-offset-8 transition-colors whitespace-nowrap"
              >
                {nav.contacts}
              </a>
            </li>
          </ul>
        </div>
      </nav>

      {/* ================= Mobile / Tablet Drawer Menu ================= */}
      {isOpen && (
        <div className="lg:hidden bg-[#0d0d0d] border-b border-white/10 px-6 py-6 transition-all duration-300 animate-in fade-in slide-in-from-top-4 backdrop-blur-xl">
          {/* Mobile Language Switcher */}
          <div className="flex items-center justify-between pb-4 mb-4 border-b border-white/10">
            <span className="text-xs uppercase text-gray-400 font-semibold tracking-wider">Мова / Language:</span>
            <div className="flex items-center bg-white/10 rounded-full p-0.5 border border-white/10 text-xs font-bold">
              <button
                type="button"
                onClick={() => setLang('ua')}
                className={`px-3 py-1 rounded-full transition-all ${
                  lang === 'ua'
                    ? 'bg-[#fb7b04] text-white shadow-sm'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                UA
              </button>
              <button
                type="button"
                onClick={() => setLang('en')}
                className={`px-3 py-1 rounded-full transition-all ${
                  lang === 'en'
                    ? 'bg-[#fb7b04] text-white shadow-sm'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                EN
              </button>
            </div>
          </div>

          <nav className="flex flex-col space-y-3.5 text-sm uppercase tracking-wider font-semibold">
            <a 
              href="/#quests" 
              onClick={() => setIsOpen(false)}
              className="py-2 border-b border-white/5 hover:text-[#fbefab] transition-colors flex items-center justify-between"
            >
              <span>🗝️ {nav.rooms}</span>
              <span className="text-xs text-gray-500 font-mono">{nav.allQuestsCount}</span>
            </a>
            <a 
              href="/#quests" 
              onClick={() => setIsOpen(false)}
              className="py-2 border-b border-white/5 hover:text-[#fbefab] transition-colors"
            >
              🖼️ {nav.gallery}
            </a>
            <a 
              href="/birthday" 
              onClick={() => setIsOpen(false)}
              className="py-2 border-b border-white/5 hover:text-[#fbefab] transition-colors flex items-center justify-between"
            >
              <span>🎂 {nav.birthday}</span>
              <span className="text-xs text-[#fbefab]">{nav.turnkeyParty}</span>
            </a>
            <a 
              href="/certificates" 
              onClick={() => setIsOpen(false)}
              className="py-2 border-b border-white/5 hover:text-[#fbefab] transition-colors flex items-center justify-between"
            >
              <span>🎁 {nav.certificates}</span>
              <span className="text-xs text-gray-500">{nav.fromPrice}</span>
            </a>
            <a 
              href="/faq" 
              onClick={() => setIsOpen(false)}
              className="py-2 border-b border-white/5 hover:text-[#fbefab] transition-colors"
            >
              ❓ {nav.faq}
            </a>
            <a 
              href="/locations" 
              onClick={() => setIsOpen(false)}
              className="py-2 border-b border-white/5 hover:text-[#fbefab] transition-colors flex items-center justify-between"
            >
              <span>🚶 {nav.outdoor}</span>
              <span className="text-xs text-gray-500">{nav.locationsSubtitle}</span>
            </a>
            <a 
              href="/contacts" 
              onClick={() => setIsOpen(false)}
              className="py-2 border-b border-white/5 hover:text-[#fbefab] transition-colors"
            >
              📞 {nav.contacts}
            </a>
          </nav>

          {/* Quick Contact Phones in Drawer */}
          <div className="mt-6 pt-5 border-t border-white/10 space-y-2 text-xs font-mono">
            <div className="text-gray-400 uppercase text-[10px] tracking-wider mb-2">{nav.bookingPhones}</div>
            <a href="tel:+380732152623" className="block text-gray-200 hover:text-[#fb7b04]">📞 +38 (073) 215-26-23</a>
            <a href="tel:+380989351270" className="block text-gray-200 hover:text-[#fb7b04]">📞 +38 (098) 935-12-70</a>
            <a href="tel:+380997350009" className="block text-gray-200 hover:text-[#fb7b04]">📞 +38 (099) 735-00-09</a>
          </div>
        </div>
      )}
    </header>
  );
}
