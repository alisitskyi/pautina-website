'use client';

import { useState } from 'react';
import { Gift, Sparkles, CheckCircle2, Clock, Truck, ShieldCheck, Phone } from 'lucide-react';

export default function CertificatesPage() {
  const [certType, setCertType] = useState<'electronic' | 'physical'>('electronic');
  const [denomination, setDenomination] = useState<number>(1500);
  const [customAmount, setCustomAmount] = useState<string>('');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('+380');
  const [recipient, setRecipient] = useState('');
  const [deliveryAddress, setDeliveryAddress] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);

  const presetAmounts = [1000, 1500, 2000, 3000];
  const finalAmount = customAmount ? parseInt(customAmount, 10) || denomination : denomination;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSuccess(true);
  };

  return (
    <div className="bg-brand-dark min-h-screen text-white pt-10 pb-24">
      <div className="container mx-auto px-4 max-w-5xl">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-gold/20 border border-brand-gold/40 text-brand-gold text-xs font-bold uppercase tracking-widest mb-4">
            <Gift className="w-4 h-4" /> Подаруйте живі емоції
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold font-accent tracking-tight mb-4">
            ПОДАРУНКОВІ <span className="text-brand-red">СЕРТИФІКАТИ</span>
          </h1>
          <p className="text-gray-300 text-sm md:text-base leading-relaxed">
            Найкращий подарунок на день народження, свято чи для колеги. Сертифікат діє на будь-який квест мережі PAUTINA в Одесі протягом 6 місяців.
          </p>
        </div>

        {/* Format Selector Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {/* Electronic */}
          <div 
            onClick={() => setCertType('electronic')}
            className={`cursor-pointer p-6 rounded-2xl border transition-all ${
              certType === 'electronic'
                ? 'bg-neutral-900 border-brand-red shadow-lg shadow-brand-red/10'
                : 'bg-neutral-950/60 border-white/10 hover:border-white/20'
            }`}
          >
            <div className="flex justify-between items-start mb-4">
              <span className="text-2xl font-bold font-accent">📧 Електронний сертифікат</span>
              <span className={`w-5 h-5 rounded-full border flex items-center justify-center ${
                certType === 'electronic' ? 'border-brand-red bg-brand-red' : 'border-gray-500'
              }`}>
                {certType === 'electronic' && <div className="w-2 h-2 rounded-full bg-white" />}
              </span>
            </div>
            <p className="text-gray-400 text-xs mb-4 leading-relaxed">
              Миттєве надсилання красивого PDF-сертифіката з персональним кодом на Viber, Telegram або Email за 5 хвилин.
            </p>
            <span className="text-xs font-semibold text-brand-gold">⚡ Швидко та без очікування</span>
          </div>

          {/* Physical Box */}
          <div 
            onClick={() => setCertType('physical')}
            className={`cursor-pointer p-6 rounded-2xl border transition-all ${
              certType === 'physical'
                ? 'bg-neutral-900 border-brand-red shadow-lg shadow-brand-red/10'
                : 'bg-neutral-950/60 border-white/10 hover:border-white/20'
            }`}
          >
            <div className="flex justify-between items-start mb-4">
              <span className="text-2xl font-bold font-accent">🎁 Фірмовий бокс</span>
              <span className={`w-5 h-5 rounded-full border flex items-center justify-center ${
                certType === 'physical' ? 'border-brand-red bg-brand-red' : 'border-gray-500'
              }`}>
                {certType === 'physical' && <div className="w-2 h-2 rounded-full bg-white" />}
              </span>
            </div>
            <p className="text-gray-400 text-xs mb-4 leading-relaxed">
              Пластикова картка преміум-дизайну у стильній матовій чорній коробці з червоною стрічкою. Самовивіз або Нова Пошта.
            </p>
            <span className="text-xs font-semibold text-brand-gold">📦 Готовий стильний презент</span>
          </div>
        </div>

        {/* Order Form Container */}
        <div className="bg-neutral-900 border border-white/10 rounded-3xl p-6 sm:p-10 max-w-3xl mx-auto shadow-2xl">
          {isSuccess ? (
            <div className="text-center py-8">
              <CheckCircle2 className="w-16 h-16 text-green-500 mx-auto mb-4" />
              <h3 className="text-3xl font-extrabold font-accent mb-2">Замовлення прийнято!</h3>
              <p className="text-gray-300 text-sm mb-6 max-w-md mx-auto">
                Дякуємо! Ми зв’яжемося з вами найближчим часом за номером <span className="font-bold text-white">{phone}</span> для підтвердження деталей сертифіката на суму <span className="font-bold text-brand-gold">{finalAmount} грн</span>.
              </p>
              <button 
                onClick={() => setIsSuccess(false)}
                className="bg-brand-red hover:bg-red-700 text-white px-8 py-3 rounded-xl uppercase text-xs font-bold tracking-wider"
              >
                Оформити ще один
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Denomination Choice */}
              <div>
                <label className="block text-xs uppercase font-extrabold text-gray-300 mb-3 tracking-wider">
                  Оберіть номінал сертифіката:
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-3">
                  {presetAmounts.map((amt) => (
                    <button
                      key={amt}
                      type="button"
                      onClick={() => {
                        setDenomination(amt);
                        setCustomAmount('');
                      }}
                      className={`py-3 rounded-xl text-center font-extrabold text-sm transition-all border ${
                        denomination === amt && !customAmount
                          ? 'bg-brand-red border-brand-red text-white shadow-lg shadow-brand-red/20'
                          : 'bg-black/40 border-white/10 text-gray-300 hover:border-white/30'
                      }`}
                    >
                      {amt} грн
                    </button>
                  ))}
                </div>
                <div className="mt-2">
                  <input
                    type="number"
                    placeholder="Або введіть іншу суму (від 500 грн)"
                    value={customAmount}
                    onChange={(e) => setCustomAmount(e.target.value)}
                    className="w-full bg-black/50 border border-white/15 rounded-xl px-4 py-2.5 text-xs text-white outline-none focus:border-brand-red"
                  />
                </div>
              </div>

              {/* Personal Info */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs uppercase font-bold text-gray-300 mb-1">
                    Ваше ім’я *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Олександр"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full bg-black/50 border border-white/15 rounded-xl px-4 py-2.5 text-sm text-white outline-none focus:border-brand-red"
                  />
                </div>
                <div>
                  <label className="block text-xs uppercase font-bold text-gray-300 mb-1">
                    Телефон для зв’язку *
                  </label>
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full bg-black/50 border border-white/15 rounded-xl px-4 py-2.5 text-sm text-white outline-none focus:border-brand-red font-mono"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs uppercase font-bold text-gray-300 mb-1">
                  Ім’я щасливчика (кому даруєте)
                </label>
                <input
                  type="text"
                  placeholder="Для кого цей подарунок"
                  value={recipient}
                  onChange={(e) => setRecipient(e.target.value)}
                  className="w-full bg-black/50 border border-white/15 rounded-xl px-4 py-2.5 text-sm text-white outline-none focus:border-brand-red"
                />
              </div>

              {certType === 'physical' && (
                <div>
                  <label className="block text-xs uppercase font-bold text-gray-300 mb-1">
                    Адреса доставки Новою Поштою або Самовивіз
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="м. Одеса, відділення №... або самовивіз Торгова, 2"
                    value={deliveryAddress}
                    onChange={(e) => setDeliveryAddress(e.target.value)}
                    className="w-full bg-black/50 border border-white/15 rounded-xl px-4 py-2.5 text-sm text-white outline-none focus:border-brand-red"
                  />
                </div>
              )}

              {/* Total & Submit */}
              <div className="pt-4 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-4">
                <div>
                  <span className="text-[10px] text-gray-400 uppercase block">До сплати:</span>
                  <span className="text-2xl font-extrabold text-white">
                    {finalAmount} <span className="text-xs font-normal text-gray-400">грн</span>
                  </span>
                </div>
                <button
                  type="submit"
                  className="w-full sm:w-auto bg-brand-red hover:bg-red-700 text-white font-bold px-10 py-3.5 rounded-xl uppercase text-xs tracking-wider transition-all"
                >
                  Замовити сертифікат
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
