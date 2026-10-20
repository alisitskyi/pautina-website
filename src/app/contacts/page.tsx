'use client';

import { useState } from 'react';
import { MapPin, Phone, Clock, Send, CheckCircle2 } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

export default function ContactsPage() {
  const { t } = useLanguage();
  const c = t('contactsPage');

  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="bg-transparent min-h-screen text-white pt-10 pb-24">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-[#fb7b04] text-xs uppercase font-extrabold tracking-widest block mb-2">
            {c.tag}
          </span>
          <h1 className="text-4xl md:text-6xl font-extrabold font-accent tracking-tight mb-4">
            {c.title}
          </h1>
          <p className="text-gray-300 text-sm md:text-base leading-relaxed">
            {c.desc}
          </p>
        </div>

        {/* 2 Locations Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {/* Location 1 */}
          <div className="bg-neutral-900 border border-white/10 rounded-3xl p-8 flex flex-col justify-between shadow-2xl">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#fb7b04]/20 text-[#fb7b04] text-xs font-bold uppercase tracking-wider mb-4 border border-[#fb7b04]/30">
                {c.loc1Badge}
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold font-accent mb-4">
                {c.loc1Addr}
              </h2>
              <p className="text-gray-400 text-xs mb-6 leading-relaxed">
                {c.loc1Desc}
              </p>

              <div className="space-y-3 text-sm text-gray-300 mb-8 border-t border-b border-white/10 py-6">
                <div className="flex items-center gap-3">
                  <Phone className="w-4 h-4 text-[#fb7b04]" />
                  <a href="tel:+380931701444" className="hover:text-[#fb7b04] font-bold">
                    +38 (093) 170-14-44
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <Clock className="w-4 h-4 text-brand-gold" />
                  <span>{c.loc1Schedule}</span>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="w-4 h-4 text-[#fb7b04]" />
                  <span>{c.loc1Quests}</span>
                </div>
              </div>
            </div>

            <a
              href="https://maps.google.com/?q=Odesa+Torgova+2"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full bg-white/10 hover:bg-white/20 text-white font-bold py-3.5 rounded-xl text-center uppercase text-xs tracking-wider transition-all block border border-white/15"
            >
              {c.googleMapBtn}
            </a>
          </div>

          {/* Location 2 */}
          <div className="bg-neutral-900 border border-white/10 rounded-3xl p-8 flex flex-col justify-between shadow-2xl">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-brand-gold/20 text-brand-gold text-xs font-bold uppercase tracking-wider mb-4 border border-brand-gold/30">
                {c.loc2Badge}
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold font-accent mb-4">
                {c.loc2Addr}
              </h2>
              <p className="text-gray-400 text-xs mb-6 leading-relaxed">
                {c.loc2Desc}
              </p>

              <div className="space-y-3 text-sm text-gray-300 mb-8 border-t border-b border-white/10 py-6">
                <div className="flex items-center gap-3">
                  <Phone className="w-4 h-4 text-[#fb7b04]" />
                  <a href="tel:+380931701444" className="hover:text-[#fb7b04] font-bold">
                    +38 (093) 170-14-44
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <Clock className="w-4 h-4 text-brand-gold" />
                  <span>{c.loc2Schedule}</span>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="w-4 h-4 text-[#fb7b04]" />
                  <span>{c.loc2Quests}</span>
                </div>
              </div>
            </div>

            <a
              href="https://maps.google.com/?q=Odesa+Shevchenko+4d"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full bg-white/10 hover:bg-white/20 text-white font-bold py-3.5 rounded-xl text-center uppercase text-xs tracking-wider transition-all block border border-white/15"
            >
              {c.googleMapBtn}
            </a>
          </div>
        </div>

        {/* Quick Message Form */}
        <div className="bg-neutral-950 border border-white/10 rounded-3xl p-8 md:p-12 max-w-3xl mx-auto shadow-2xl">
          {submitted ? (
            <div className="text-center py-6">
              <CheckCircle2 className="w-14 h-14 text-green-500 mx-auto mb-4" />
              <h3 className="text-2xl font-bold font-accent mb-2">{c.sentSuccess}</h3>
            </div>
          ) : (
            <>
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold font-accent mb-2">{c.formTitle}</h3>
                <p className="text-gray-400 text-xs">
                  {c.formDesc}
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder={c.namePlaceholder}
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full bg-black/60 border border-white/15 rounded-xl px-4 py-3 text-xs text-white outline-none focus:border-[#fb7b04]"
                  />
                  <input
                    type="tel"
                    placeholder={c.phonePlaceholder}
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full bg-black/60 border border-white/15 rounded-xl px-4 py-3 text-xs text-white outline-none focus:border-[#fb7b04] font-mono"
                  />
                </div>
                <textarea
                  rows={4}
                  placeholder={c.messagePlaceholder}
                  required
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full bg-black/60 border border-white/15 rounded-xl px-4 py-3 text-xs text-white outline-none focus:border-[#fb7b04] resize-none"
                />
                <button
                  type="submit"
                  className="w-full bg-[#fb7b04] hover:bg-[#e06d02] text-white font-bold py-3.5 rounded-xl uppercase text-xs tracking-wider transition-all flex items-center justify-center gap-2 cursor-pointer shadow-lg shadow-[#fb7b04]/20"
                >
                  <Send className="w-4 h-4" />
                  <span>{c.sendBtn}</span>
                </button>
              </form>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
