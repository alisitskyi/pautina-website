'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Users, Clock, Sparkles, MapPin, Calendar, ArrowRight } from 'lucide-react';

export default function PreviewPatternsPage() {
  const [selectedPattern, setSelectedPattern] = useState<'1' | '2' | '3' | 'split'>('1');
  const [opacity, setOpacity] = useState<number>(15);
  const [scale, setScale] = useState<number>(300);
  const [blendMode, setBlendMode] = useState<'screen' | 'normal'>('screen');

  const getPatternUrl = (id: '1' | '2' | '3') => {
    if (id === '3') return '/images/web-pattern-3.svg';
    return `/images/web-pattern-${id}.png`;
  };

  return (
    <div className="min-h-screen bg-[#000000] text-white relative overflow-hidden">
      {/* Floating Control Bar */}
      <div className="fixed top-24 left-1/2 -translate-x-1/2 z-50 bg-[#121212]/95 backdrop-blur-xl border border-white/20 px-5 py-3 rounded-2xl shadow-2xl flex flex-wrap items-center gap-3 text-xs max-w-[96vw]">
        {/* Pattern Selector */}
        <div className="flex items-center gap-2">
          <span className="text-[#fb7b04] font-black uppercase tracking-wider text-[11px] whitespace-nowrap">
            Варіант:
          </span>
          <div className="flex bg-black/70 p-1 rounded-xl border border-white/10 gap-1 flex-wrap">
            <button
              onClick={() => setSelectedPattern('3')}
              className={`px-3 py-1.5 rounded-lg font-bold transition-all ${
                selectedPattern === '3'
                  ? 'bg-[#fb7b04] text-white shadow-md'
                  : 'text-gray-300 hover:text-white'
              }`}
            >
              ⭐ 3. Вектор (Vector pautina.svg)
            </button>
            <button
              onClick={() => setSelectedPattern('1')}
              className={`px-3 py-1.5 rounded-lg font-bold transition-all ${
                selectedPattern === '1'
                  ? 'bg-[#fb7b04] text-white shadow-md'
                  : 'text-gray-300 hover:text-white'
              }`}
            >
              1. Фото 1 (Полігональна)
            </button>
            <button
              onClick={() => setSelectedPattern('2')}
              className={`px-3 py-1.5 rounded-lg font-bold transition-all ${
                selectedPattern === '2'
                  ? 'bg-[#fb7b04] text-white shadow-md'
                  : 'text-gray-300 hover:text-white'
              }`}
            >
              2. Фото 2 (Радіальні кола)
            </button>
            <button
              onClick={() => setSelectedPattern('split')}
              className={`px-3 py-1.5 rounded-lg font-bold transition-all ${
                selectedPattern === 'split'
                  ? 'bg-[#fb7b04] text-white shadow-md'
                  : 'text-gray-300 hover:text-white'
              }`}
            >
              ⚡ Спліт (Фото vs Вектор)
            </button>
          </div>
        </div>

        {/* Opacity Slider */}
        <div className="flex items-center gap-2 pl-3 border-l border-white/10">
          <span className="text-gray-400 font-semibold text-[11px]">Видимість:</span>
          <input
            type="range"
            min="5"
            max="100"
            value={opacity}
            onChange={(e) => setOpacity(Number(e.target.value))}
            className="w-20 accent-[#fb7b04] cursor-pointer"
          />
          <span className="text-white font-mono font-bold w-9 text-[11px]">{opacity}%</span>
        </div>

        {/* Scale Slider */}
        <div className="flex items-center gap-2 pl-3 border-l border-white/10">
          <span className="text-gray-400 font-semibold text-[11px]">Масштаб:</span>
          <input
            type="range"
            min="300"
            max="1000"
            step="50"
            value={scale}
            onChange={(e) => setScale(Number(e.target.value))}
            className="w-20 accent-[#fb7b04] cursor-pointer"
          />
          <span className="text-white font-mono font-bold w-12 text-[11px]">{scale}px</span>
        </div>

        {/* Blend mode */}
        <div className="flex items-center gap-1.5 pl-3 border-l border-white/10">
          <button
            onClick={() => setBlendMode(blendMode === 'screen' ? 'normal' : 'screen')}
            className={`px-2.5 py-1 rounded-lg text-[10px] font-bold border transition-colors ${
              blendMode === 'screen'
                ? 'border-[#fb7b04] bg-[#fb7b04]/20 text-[#fb7b04]'
                : 'border-white/20 text-gray-300'
            }`}
          >
            {blendMode === 'screen' ? '✨ Screen (чисті нитки)' : 'Normal'}
          </button>
        </div>
      </div>

      {/* Background Layer (Single or Split) */}
      {selectedPattern === 'split' ? (
        <div 
          className="fixed inset-0 pointer-events-none z-0 flex transition-opacity duration-300"
          style={{ opacity: opacity / 100, mixBlendMode: blendMode }}
        >
          {/* Left half: Pattern 1 */}
          <div 
            className="flex-1 h-full relative border-r border-[#fb7b04]"
            style={{
              backgroundImage: "url('/images/web-pattern-1.png')",
              backgroundSize: `${scale}px`,
              backgroundRepeat: 'repeat',
            }}
          >
            <div className="absolute top-40 left-6 bg-black/90 px-3.5 py-1.5 rounded-lg border border-[#fb7b04]/40 text-xs font-bold text-[#fb7b04] shadow-lg">
              ← Варіант 1 (Фото 1)
            </div>
          </div>
          {/* Right half: Pattern 3 (Vector) */}
          <div 
            className="flex-1 h-full relative"
            style={{
              backgroundImage: "url('/images/web-pattern-3.svg')",
              backgroundSize: `${scale}px`,
              backgroundRepeat: 'repeat',
            }}
          >
            <div className="absolute top-40 right-6 bg-black/90 px-3.5 py-1.5 rounded-lg border border-[#fb7b04]/40 text-xs font-bold text-[#fb7b04] shadow-lg">
              Варіант 3 (Вектор SVG) →
            </div>
          </div>
        </div>
      ) : (
        <div
          className="fixed inset-0 pointer-events-none z-0 transition-all duration-300"
          style={{
            backgroundImage: `url('${getPatternUrl(selectedPattern)}')`,
            backgroundSize: `${scale}px`,
            backgroundRepeat: 'repeat',
            opacity: opacity / 100,
            mixBlendMode: selectedPattern === '3' ? 'normal' : blendMode,
          }}
        />
      )}

      {/* Ambient center backglow */}
      <div 
        className="fixed top-1/4 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] pointer-events-none z-0"
        style={{
          background: 'radial-gradient(ellipse at center, rgba(251, 123, 4, 0.08) 0%, transparent 70%)',
        }}
      />

      {/* ================= WEBSITE FOREGROUND CONTENT ================= */}
      <div className="relative z-10 pt-36 pb-28 max-w-7xl mx-auto px-4 sm:px-6">

        {/* Hero Section */}
        <section className="pt-6 sm:pt-8 pb-4 text-center">
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="mb-4">
              <h2 className="text-[#fb7b04] text-sm sm:text-base md:text-lg font-bold tracking-wide inline-block border-b border-[#fb7b04]/80 pb-0.5">
                Квест кімнати Одеси від PAUTINArooms!
              </h2>
            </div>

            <p className="text-gray-300 text-xs sm:text-sm md:text-[14px] leading-relaxed tracking-wide font-normal max-w-3xl mx-auto mb-6 sm:mb-8">
              Антуражні та атмосферні квест кімнати від PAUTINArooms! Більш 30 різноманітних квестів на різні сюжети.
            </p>

            <div className="mb-6 sm:mb-8">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-widest uppercase">
                КВЕСТИ
              </h1>
            </div>

            {/* 2 Rows of Filters */}
            <div className="flex flex-col items-center gap-2.5 mb-10">
              <div className="flex flex-wrap justify-center gap-2">
                <span className="px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider bg-[#fb7b04] text-white shadow-lg shadow-[#fb7b04]/30 scale-105">
                  ВСІ
                </span>
                <span className="px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider bg-neutral-900/90 text-gray-300 border border-white/10">
                  ХОРРОР
                </span>
                <span className="px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider bg-neutral-900/90 text-gray-300 border border-white/10">
                  МІСТИКА
                </span>
                <span className="px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider bg-neutral-900/90 text-gray-300 border border-white/10">
                  ФЕНТЕЗІ
                </span>
                <span className="px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider bg-neutral-900/90 text-gray-300 border border-white/10">
                  ФАНТАСТИКА
                </span>
              </div>
              <div className="flex flex-wrap justify-center gap-2">
                <span className="px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider bg-neutral-900/90 text-gray-300 border border-white/10">
                  ДЕТЕКТИВ
                </span>
                <span className="px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider bg-neutral-900/90 text-gray-300 border border-white/10">
                  ПРИГОДИ
                </span>
                <span className="px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider bg-neutral-900/90 text-gray-300 border border-white/10">
                  НА ДЕНЬ НАРОДЖЕННЯ
                </span>
                <span className="px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider bg-neutral-900/90 text-gray-300 border border-white/10">
                  ДЛЯ ПАРИ
                </span>
                <span className="px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider bg-neutral-900/90 text-gray-300 border border-white/10">
                  ДЛЯ 4+ ЛЮДЕЙ
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* 3 Real Quest Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          
          {/* Card 1: Дракула */}
          <div className="group relative h-[520px] sm:h-[550px] rounded-2xl sm:rounded-3xl overflow-hidden border border-white/10 hover:border-[#fb7b04]/60 transition-all duration-300 shadow-2xl flex flex-col justify-between p-5 sm:p-6 cursor-pointer bg-[#0a0a0a]">
            <Image
              src="/images/quests/dracula.jpg"
              alt="ДРАКУЛА"
              fill
              sizes="(max-width: 640px) 100vw, 420px"
              className="object-cover transition-transform duration-700 group-hover:scale-105 pointer-events-none"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/55 to-black/30 pointer-events-none" />

            <div className="relative z-10 flex justify-between items-start pointer-events-none w-full">
              <div className="flex flex-wrap gap-1.5 max-w-[65%]">
                <span className="text-[10px] sm:text-[11px] uppercase font-extrabold bg-[#fb7b04] text-white px-2.5 py-1 rounded-md tracking-wider shadow-md">
                  ХОРРОР
                </span>
                <span className="text-[10px] sm:text-[11px] uppercase font-extrabold bg-[#fb7b04] text-white px-2.5 py-1 rounded-md tracking-wider shadow-md">
                  МІСТИКА
                </span>
              </div>
              <span className="text-xs font-bold bg-black/70 backdrop-blur-md px-2.5 py-1 rounded-md border border-white/10 text-[#fbefab]">
                ★★★★★
              </span>
            </div>

            <div className="relative z-10 w-full pointer-events-none mt-auto">
              <div className="min-h-[2.75rem] sm:min-h-[3.25rem] flex items-end mb-3">
                <h3 className="text-base sm:text-lg md:text-xl font-extrabold text-white tracking-wide uppercase leading-snug drop-shadow-md group-hover:text-[#fbefab] transition-colors">
                  ДРАКУЛА
                </h3>
              </div>

              <div className="flex items-center justify-between py-2 px-3 sm:px-4 bg-black/60 backdrop-blur-md border border-white/10 rounded-full mb-3 text-xs text-gray-200">
                <div className="flex items-center gap-1.5">
                  <Users className="w-3.5 h-3.5 text-[#fb7b04] shrink-0" />
                  <span className="font-medium whitespace-nowrap">2-6 ос.</span>
                </div>
                <span className="text-white/20">•</span>
                <div className="flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-[#fbefab] shrink-0" />
                  <span className="font-medium whitespace-nowrap">60 хв</span>
                </div>
                <span className="text-white/20">•</span>
                <div className="flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-[#fb7b04] shrink-0" />
                  <span className="font-medium whitespace-nowrap">12+</span>
                </div>
              </div>

              <div className="flex justify-between items-center mb-3 text-xs px-1">
                <div className="flex items-center gap-1.5 text-gray-300 truncate max-w-[65%]">
                  <MapPin className="w-3.5 h-3.5 text-[#fb7b04] shrink-0" />
                  <span className="truncate">вул. Успенська, 101</span>
                </div>
                <div className="text-right shrink-0">
                  <span className="text-[10px] text-gray-400 uppercase mr-1">від</span>
                  <span className="text-base sm:text-lg font-black text-white">
                    1600 <span className="text-xs font-normal text-gray-300">грн</span>
                  </span>
                </div>
              </div>

              <div className="w-full bg-[#fb7b04] group-hover:bg-[#e06d02] text-white font-extrabold py-3 rounded-xl text-xs sm:text-sm uppercase tracking-wider text-center transition-all shadow-lg shadow-[#fb7b04]/30 flex items-center justify-center gap-2 group-hover:shadow-[0_0_20px_rgba(251,123,4,0.6)] active:scale-95">
                <Calendar className="w-4 h-4" />
                <span>Забронювати</span>
              </div>
            </div>
          </div>

          {/* Card 2: Готель Гогвортс */}
          <div className="group relative h-[520px] sm:h-[550px] rounded-2xl sm:rounded-3xl overflow-hidden border border-white/10 hover:border-[#fb7b04]/60 transition-all duration-300 shadow-2xl flex flex-col justify-between p-5 sm:p-6 cursor-pointer bg-[#0a0a0a]">
            <Image
              src="/images/quests/hogvarts.jpg"
              alt="ГОТЕЛЬ ГОҐВОРТС"
              fill
              sizes="(max-width: 640px) 100vw, 420px"
              className="object-cover transition-transform duration-700 group-hover:scale-105 pointer-events-none"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/55 to-black/30 pointer-events-none" />

            <div className="relative z-10 flex justify-between items-start pointer-events-none w-full">
              <div className="flex flex-wrap gap-1.5 max-w-[65%]">
                <span className="text-[10px] sm:text-[11px] uppercase font-extrabold bg-[#fb7b04] text-white px-2.5 py-1 rounded-md tracking-wider shadow-md">
                  ФЕНТЕЗІ
                </span>
                <span className="text-[10px] sm:text-[11px] uppercase font-extrabold bg-[#fb7b04] text-white px-2.5 py-1 rounded-md tracking-wider shadow-md">
                  ПРИГОДИ
                </span>
              </div>
              <span className="text-xs font-bold bg-black/70 backdrop-blur-md px-2.5 py-1 rounded-md border border-white/10 text-[#fbefab]">
                ★★★★★
              </span>
            </div>

            <div className="relative z-10 w-full pointer-events-none mt-auto">
              <div className="min-h-[2.75rem] sm:min-h-[3.25rem] flex items-end mb-3">
                <h3 className="text-base sm:text-lg md:text-xl font-extrabold text-white tracking-wide uppercase leading-snug drop-shadow-md group-hover:text-[#fbefab] transition-colors">
                  ГОТЕЛЬ ГОҐВОРТС
                </h3>
              </div>

              <div className="flex items-center justify-between py-2 px-3 sm:px-4 bg-black/60 backdrop-blur-md border border-white/10 rounded-full mb-3 text-xs text-gray-200">
                <div className="flex items-center gap-1.5">
                  <Users className="w-3.5 h-3.5 text-[#fb7b04] shrink-0" />
                  <span className="font-medium whitespace-nowrap">2-6 ос.</span>
                </div>
                <span className="text-white/20">•</span>
                <div className="flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-[#fbefab] shrink-0" />
                  <span className="font-medium whitespace-nowrap">60 хв</span>
                </div>
                <span className="text-white/20">•</span>
                <div className="flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-[#fb7b04] shrink-0" />
                  <span className="font-medium whitespace-nowrap">10+</span>
                </div>
              </div>

              <div className="flex justify-between items-center mb-3 text-xs px-1">
                <div className="flex items-center gap-1.5 text-gray-300 truncate max-w-[65%]">
                  <MapPin className="w-3.5 h-3.5 text-[#fb7b04] shrink-0" />
                  <span className="truncate">вул. Торгова, 2</span>
                </div>
                <div className="text-right shrink-0">
                  <span className="text-[10px] text-gray-400 uppercase mr-1">від</span>
                  <span className="text-base sm:text-lg font-black text-white">
                    1400 <span className="text-xs font-normal text-gray-300">грн</span>
                  </span>
                </div>
              </div>

              <div className="w-full bg-[#fb7b04] group-hover:bg-[#e06d02] text-white font-extrabold py-3 rounded-xl text-xs sm:text-sm uppercase tracking-wider text-center transition-all shadow-lg shadow-[#fb7b04]/30 flex items-center justify-center gap-2 group-hover:shadow-[0_0_20px_rgba(251,123,4,0.6)] active:scale-95">
                <Calendar className="w-4 h-4" />
                <span>Забронювати</span>
              </div>
            </div>
          </div>

          {/* Card 3: Пила: Фінальна гра */}
          <div className="group relative h-[520px] sm:h-[550px] rounded-2xl sm:rounded-3xl overflow-hidden border border-white/10 hover:border-[#fb7b04]/60 transition-all duration-300 shadow-2xl flex flex-col justify-between p-5 sm:p-6 cursor-pointer bg-[#0a0a0a]">
            <Image
              src="/images/quests/pila.jpg"
              alt="ПИЛА: ФІНАЛЬНА ГРА"
              fill
              sizes="(max-width: 640px) 100vw, 420px"
              className="object-cover transition-transform duration-700 group-hover:scale-105 pointer-events-none"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/55 to-black/30 pointer-events-none" />

            <div className="relative z-10 flex justify-between items-start pointer-events-none w-full">
              <div className="flex flex-wrap gap-1.5 max-w-[65%]">
                <span className="text-[10px] sm:text-[11px] uppercase font-extrabold bg-[#fb7b04] text-white px-2.5 py-1 rounded-md tracking-wider shadow-md">
                  ХОРРОР
                </span>
                <span className="text-[10px] sm:text-[11px] uppercase font-extrabold bg-[#fb7b04] text-white px-2.5 py-1 rounded-md tracking-wider shadow-md">
                  ДЕТЕКТИВ
                </span>
              </div>
              <span className="text-xs font-bold bg-black/70 backdrop-blur-md px-2.5 py-1 rounded-md border border-white/10 text-[#fbefab]">
                ★★★★★
              </span>
            </div>

            <div className="relative z-10 w-full pointer-events-none mt-auto">
              <div className="min-h-[2.75rem] sm:min-h-[3.25rem] flex items-end mb-3">
                <h3 className="text-base sm:text-lg md:text-xl font-extrabold text-white tracking-wide uppercase leading-snug drop-shadow-md group-hover:text-[#fbefab] transition-colors">
                  ПИЛА: ФІНАЛЬНА ГРА
                </h3>
              </div>

              <div className="flex items-center justify-between py-2 px-3 sm:px-4 bg-black/60 backdrop-blur-md border border-white/10 rounded-full mb-3 text-xs text-gray-200">
                <div className="flex items-center gap-1.5">
                  <Users className="w-3.5 h-3.5 text-[#fb7b04] shrink-0" />
                  <span className="font-medium whitespace-nowrap">2-5 ос.</span>
                </div>
                <span className="text-white/20">•</span>
                <div className="flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-[#fbefab] shrink-0" />
                  <span className="font-medium whitespace-nowrap">60 хв</span>
                </div>
                <span className="text-white/20">•</span>
                <div className="flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-[#fb7b04] shrink-0" />
                  <span className="font-medium whitespace-nowrap">16+</span>
                </div>
              </div>

              <div className="flex justify-between items-center mb-3 text-xs px-1">
                <div className="flex items-center gap-1.5 text-gray-300 truncate max-w-[65%]">
                  <MapPin className="w-3.5 h-3.5 text-[#fb7b04] shrink-0" />
                  <span className="truncate">пр-т Шевченка, 4д</span>
                </div>
                <div className="text-right shrink-0">
                  <span className="text-[10px] text-gray-400 uppercase mr-1">від</span>
                  <span className="text-base sm:text-lg font-black text-white">
                    1500 <span className="text-xs font-normal text-gray-300">грн</span>
                  </span>
                </div>
              </div>

              <div className="w-full bg-[#fb7b04] group-hover:bg-[#e06d02] text-white font-extrabold py-3 rounded-xl text-xs sm:text-sm uppercase tracking-wider text-center transition-all shadow-lg shadow-[#fb7b04]/30 flex items-center justify-center gap-2 group-hover:shadow-[0_0_20px_rgba(251,123,4,0.6)] active:scale-95">
                <Calendar className="w-4 h-4" />
                <span>Забронювати</span>
              </div>
            </div>
          </div>

        </div>

        {/* Informative Comparison Summary */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div 
            onClick={() => setSelectedPattern('3')}
            className={`cursor-pointer p-6 rounded-3xl border transition-all ${
              selectedPattern === '3'
                ? 'bg-neutral-900 border-[#fb7b04] shadow-xl shadow-[#fb7b04]/20 ring-1 ring-[#fb7b04]'
                : 'bg-neutral-950/80 border-white/10 hover:border-white/30'
            }`}
          >
            <div className="flex justify-between items-center mb-3">
              <span className="text-[#fb7b04] font-black text-xs uppercase tracking-widest flex items-center gap-1.5">
                <span>⭐</span> Варіант 3 (Вектор SVG)
              </span>
              <span className="text-[10px] bg-[#fb7b04]/20 border border-[#fb7b04]/40 px-2 py-0.5 rounded text-[#fbefab] font-bold">
                Вектор 100%
              </span>
            </div>
            <h3 className="text-lg sm:text-xl font-extrabold mb-2">Векторна павутина (з файлу)</h3>
            <p className="text-gray-400 text-xs sm:text-sm leading-relaxed mb-4">
              Оригінальний вектор із файлу <code className="text-[#fb7b04] text-[11px]">Vector pautina.svg</code>. 100% точність ліній, ідеальна чіткість без розмиття на Retina/4K екранах.
            </p>
            <button className="w-full bg-[#fb7b04] hover:bg-[#e06d02] text-white text-xs font-bold uppercase tracking-wider px-4 py-2.5 rounded-xl transition-all">
              {selectedPattern === '3' ? '✓ Зараз активно' : 'Увімкнути на весь екран'}
            </button>
          </div>

          <div 
            onClick={() => setSelectedPattern('1')}
            className={`cursor-pointer p-6 rounded-3xl border transition-all ${
              selectedPattern === '1'
                ? 'bg-neutral-900 border-[#fb7b04] shadow-xl shadow-[#fb7b04]/20 ring-1 ring-[#fb7b04]'
                : 'bg-neutral-950/80 border-white/10 hover:border-white/30'
            }`}
          >
            <div className="flex justify-between items-center mb-3">
              <span className="text-[#fb7b04] font-black text-xs uppercase tracking-widest">
                Варіант 1 (з фото 1)
              </span>
              <span className="text-[10px] bg-white/10 px-2 py-0.5 rounded text-gray-300">
                529 × 848 px
              </span>
            </div>
            <h3 className="text-lg sm:text-xl font-extrabold mb-2">Полігональна розбита павутина</h3>
            <p className="text-gray-400 text-xs sm:text-sm leading-relaxed mb-4">
              Асиметричні ламані грані з осередками круглих павутинок у вузлах. Виглядає як тріщини у старовинній готичній кладці.
            </p>
            <button className="w-full bg-[#fb7b04] hover:bg-[#e06d02] text-white text-xs font-bold uppercase tracking-wider px-4 py-2.5 rounded-xl transition-all">
              {selectedPattern === '1' ? '✓ Зараз активно' : 'Увімкнути на весь екран'}
            </button>
          </div>

          <div 
            onClick={() => setSelectedPattern('2')}
            className={`cursor-pointer p-6 rounded-3xl border transition-all ${
              selectedPattern === '2'
                ? 'bg-neutral-900 border-[#fb7b04] shadow-xl shadow-[#fb7b04]/20 ring-1 ring-[#fb7b04]'
                : 'bg-neutral-950/80 border-white/10 hover:border-white/30'
            }`}
          >
            <div className="flex justify-between items-center mb-3">
              <span className="text-[#fb7b04] font-black text-xs uppercase tracking-widest">
                Варіант 2 (з фото 2)
              </span>
              <span className="text-[10px] bg-white/10 px-2 py-0.5 rounded text-gray-300">
                528 × 849 px
              </span>
            </div>
            <h3 className="text-lg sm:text-xl font-extrabold mb-2">Переплетені радіальні кола</h3>
            <p className="text-gray-400 text-xs sm:text-sm leading-relaxed mb-4">
              Класична густа мережа з концентричних шовкових кіл, що розходяться з кількох епіцентрів і перехрещуються нитками.
            </p>
            <button className="w-full bg-[#fb7b04] hover:bg-[#e06d02] text-white text-xs font-bold uppercase tracking-wider px-4 py-2.5 rounded-xl transition-all">
              {selectedPattern === '2' ? '✓ Зараз активно' : 'Увімкнути на весь екран'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
