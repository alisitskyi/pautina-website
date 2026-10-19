'use client';

import { useState } from 'react';
import { Quest, Slot } from '@/types';
import { Calendar, Clock, Users, CheckCircle2, AlertCircle, X } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import { questTranslationsEn } from '@/lib/translations';

interface BookingSectionProps {
  quest: Quest;
  initialSlots: Slot[];
}

export default function BookingSection({ quest, initialSlots }: BookingSectionProps) {
  const { language, t } = useLanguage();
  const roomT = t('roomPage');
  const cardT = t('card');

  const displayTitle = language === 'en' && questTranslationsEn[quest.slug]?.title
    ? questTranslationsEn[quest.slug].title
    : quest.title;

  const [selectedDate, setSelectedDate] = useState<string>(
    new Date().toISOString().split('T')[0]
  );
  const [slots] = useState<Slot[]>(initialSlots);
  const [selectedSlot, setSelectedSlot] = useState<Slot | null>(null);
  const [playerCount, setPlayerCount] = useState<number>(quest.players.min);

  // Booking Modal State
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('+380');
  const [comment, setComment] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [bookingSuccess, setBookingSuccess] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  // Price calculation
  // Base price for min players, +200 UAH for each extra player
  const extraPlayers = Math.max(0, playerCount - quest.players.min);
  const calculatedPrice = selectedSlot ? selectedSlot.price + extraPlayers * 200 : quest.price.min;

  const handleSlotClick = (slot: Slot) => {
    if (!slot.isAvailable) return;
    setSelectedSlot(slot);
    setIsModalOpen(true);
    setError(null);
  };

  const handleBookingSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedSlot) return;

    // Validate phone
    const cleanedPhone = phone.replace(/[\s\-\(\)]/g, '');
    if (cleanedPhone.length < 10) {
      setError(language === 'en' ? 'Please enter a valid phone number' : 'Будь ласка, введіть коректний номер телефону');
      return;
    }

    if (!name.trim()) {
      setError(language === 'en' ? 'Please enter your name' : 'Будь ласка, введіть ваше ім’я');
      return;
    }

    setIsSubmitting(true);
    setError(null);

    try {
      const response = await fetch('/api/booking', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          questId: quest.id,
          date: selectedDate,
          time: selectedSlot.time,
          name: name.trim(),
          phone: cleanedPhone,
          playersCount: playerCount,
          comment: comment.trim(),
        }),
      });

      const data = await response.json();

      if (!response.ok || !data.success) {
        setError(data.error || (language === 'en' ? 'Booking error. Please try again or call us.' : 'Помилка бронювання. Спробуйте ще раз або зателефонуйте нам.'));
        return;
      }

      setBookingSuccess(data.data.bookingId);
    } catch (err) {
      setError(language === 'en' ? 'Connection error. Please check your internet or call us.' : 'Помилка з’єднання. Перевірте інтернет або зателефонуйте нам.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-brand-gray/60 p-6 sm:p-8 rounded-2xl border border-white/10 shadow-xl backdrop-blur-sm">
      <div className="flex items-center justify-between mb-6">
        <div>
          <span className="text-[10px] text-[#fb7b04] font-extrabold uppercase tracking-widest block mb-1">
            {language === 'en' ? 'Online Schedule' : 'Онлайн-розклад'}
          </span>
          <h3 className="text-xl sm:text-2xl font-extrabold uppercase tracking-wider text-white font-accent">
            {roomT.bookingTitle}
          </h3>
        </div>
        <div className="text-right">
          <span className="text-[10px] text-gray-400 block uppercase">
            {language === 'en' ? 'Price from' : 'Вартість від'}
          </span>
          <span className="text-xl font-extrabold text-white">
            {quest.price.min} <span className="text-xs font-normal text-gray-400">{cardT.currency}</span>
          </span>
        </div>
      </div>

      {/* Date Picker */}
      <div className="mb-6">
        <label className="block text-xs uppercase font-bold text-gray-300 mb-2 flex items-center gap-1.5">
          <Calendar className="w-3.5 h-3.5 text-[#fb7b04]" />
          <span>{roomT.selectDate}</span>
        </label>
        <input
          type="date"
          value={selectedDate}
          min={new Date().toISOString().split('T')[0]}
          onChange={(e) => setSelectedDate(e.target.value)}
          className="w-full bg-black/70 border border-white/20 rounded-xl px-4 py-3 text-white outline-none focus:border-[#fb7b04] transition-all cursor-pointer font-medium text-sm"
        />
      </div>

      {/* Slots Grid */}
      <div className="mb-6">
        <label className="block text-xs uppercase font-bold text-gray-300 mb-2 flex items-center gap-1.5">
          <Clock className="w-3.5 h-3.5 text-[#fb7b04]" />
          <span>{roomT.availableSlots}</span>
        </label>
        <div className="grid grid-cols-3 sm:grid-cols-3 gap-2.5">
          {slots.map((slot) => (
            <button
              key={slot.id}
              disabled={!slot.isAvailable}
              onClick={() => handleSlotClick(slot)}
              className={`
                py-3 px-2 rounded-xl text-center transition-all border
                ${
                  slot.isAvailable
                    ? 'bg-white/5 border-white/15 hover:border-[#fb7b04] hover:bg-[#fb7b04]/15 cursor-pointer active:scale-95 text-white'
                    : 'bg-black/40 opacity-30 border-transparent cursor-not-allowed text-gray-500'
                }
              `}
            >
              <span className="block font-extrabold text-sm sm:text-base">{slot.time}</span>
              <span className="text-[11px] text-gray-400 font-medium">
                {slot.isAvailable ? `${slot.price} ${cardT.currency}` : roomT.busy}
              </span>
            </button>
          ))}
        </div>
      </div>

      <div className="text-xs text-gray-400 italic bg-black/30 p-3 rounded-lg border border-white/5">
        {language === 'en'
          ? 'ℹ️ Booking is free. Payment is made on location before the game in cash or by credit card.'
          : 'ℹ️ Бронювання безкоштовне. Оплата здійснюється на локації перед початком гри готівкою або карткою.'}
      </div>

      {/* Booking Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in">
          <div className="bg-neutral-900 border border-white/20 rounded-2xl max-w-lg w-full p-6 sm:p-8 relative shadow-2xl">
            {/* Close Button */}
            <button
              onClick={() => {
                setIsModalOpen(false);
                setBookingSuccess(null);
              }}
              className="absolute top-4 right-4 text-gray-400 hover:text-white"
            >
              <X className="w-6 h-6" />
            </button>

            {bookingSuccess ? (
              <div className="text-center py-6">
                <CheckCircle2 className="w-16 h-16 text-green-500 mx-auto mb-4" />
                <h3 className="text-2xl font-bold font-accent mb-2">{roomT.successTitle}</h3>
                <p className="text-gray-300 text-sm mb-4">
                  {roomT.yourBookingId}{' '}
                  <span className="font-bold text-white font-mono bg-white/10 px-2 py-1 rounded">{bookingSuccess}</span>
                </p>
                <div className="bg-black/50 p-4 rounded-xl text-left text-xs text-gray-300 space-y-2 mb-6 border border-white/10">
                  <p><strong>{language === 'en' ? 'Quest:' : 'Квест:'}</strong> {displayTitle}</p>
                  <p><strong>{language === 'en' ? 'Date & Time:' : 'Дата та час:'}</strong> {selectedDate} {language === 'en' ? 'at' : 'о'} {selectedSlot?.time}</p>
                  <p><strong>{language === 'en' ? 'Location:' : 'Локація:'}</strong> {quest.location.address}</p>
                  <p><strong>{language === 'en' ? 'Players:' : 'Гравців:'}</strong> {playerCount}</p>
                  <p><strong>{language === 'en' ? 'Total to pay:' : 'Сума до оплати:'}</strong> {calculatedPrice} {cardT.currency}</p>
                </div>
                <p className="text-xs text-gray-400 mb-6">
                  {roomT.successMsg}
                </p>
                <button
                  onClick={() => {
                    setIsModalOpen(false);
                    setBookingSuccess(null);
                  }}
                  className="w-full bg-[#fb7b04] hover:bg-[#e06d02] text-white font-bold py-3 rounded-xl uppercase text-xs tracking-wider"
                >
                  {language === 'en' ? 'Got it, thank you!' : 'Зрозуміло, дякую!'}
                </button>
              </div>
            ) : (
              <div>
                <span className="text-[10px] text-[#fb7b04] font-bold uppercase tracking-widest block mb-1">
                  {language === 'en' ? 'Session Confirmation' : 'Підтвердження сеансу'}
                </span>
                <h3 className="text-xl sm:text-2xl font-bold font-accent mb-4">
                  {displayTitle}
                </h3>

                <div className="bg-black/40 p-3.5 rounded-xl text-xs text-gray-300 mb-6 border border-white/10 flex justify-between items-center">
                  <div>
                    <span className="block text-gray-400 text-[10px] uppercase">
                      {language === 'en' ? 'Session' : 'Сеанс'}
                    </span>
                    <span className="font-bold text-white">{selectedDate} {language === 'en' ? 'at' : 'о'} {selectedSlot?.time}</span>
                  </div>
                  <div>
                    <span className="block text-gray-400 text-[10px] uppercase">
                      {language === 'en' ? 'Location' : 'Локація'}
                    </span>
                    <span className="font-bold text-white">{quest.location.address}</span>
                  </div>
                  <div className="text-right">
                    <span className="block text-gray-400 text-[10px] uppercase">
                      {language === 'en' ? 'Total' : 'Разом'}
                    </span>
                    <span className="font-bold text-[#fb7b04] text-sm">{calculatedPrice} {cardT.currency}</span>
                  </div>
                </div>

                <form onSubmit={handleBookingSubmit} className="space-y-4">
                  {/* Player Count Selector */}
                  <div>
                    <label className="block text-xs uppercase font-bold text-gray-300 mb-1.5 flex items-center gap-1.5">
                      <Users className="w-3.5 h-3.5 text-[#fb7b04]" />
                      <span>{roomT.playersCountLabel} ({quest.players.min}-{quest.players.max}):</span>
                    </label>
                    <div className="flex gap-2">
                      {Array.from(
                        { length: quest.players.max - quest.players.min + 1 },
                        (_, i) => quest.players.min + i
                      ).map((count) => (
                        <button
                          key={count}
                          type="button"
                          onClick={() => setPlayerCount(count)}
                          className={`flex-1 py-2 rounded-lg text-xs font-bold transition-all border ${
                            playerCount === count
                              ? 'bg-[#fb7b04] border-[#fb7b04] text-white'
                              : 'bg-black/50 border-white/10 text-gray-300 hover:border-white/30'
                          }`}
                        >
                          {count}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Name */}
                  <div>
                    <label className="block text-xs uppercase font-bold text-gray-300 mb-1">
                      {roomT.nameInput}
                    </label>
                    <input
                      type="text"
                      required
                      placeholder={language === 'en' ? 'Alexander' : 'Олександр'}
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full bg-black/70 border border-white/20 rounded-xl px-4 py-2.5 text-sm text-white outline-none focus:border-[#fb7b04]"
                    />
                  </div>

                  {/* Phone */}
                  <div>
                    <label className="block text-xs uppercase font-bold text-gray-300 mb-1">
                      {roomT.phoneInput}
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+380 (XX) XXX-XX-XX"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full bg-black/70 border border-white/20 rounded-xl px-4 py-2.5 text-sm text-white outline-none focus:border-[#fb7b04] font-mono"
                    />
                  </div>

                  {/* Comment */}
                  <div>
                    <label className="block text-xs uppercase font-bold text-gray-300 mb-1">
                      {roomT.commentInput}
                    </label>
                    <input
                      type="text"
                      placeholder={language === 'en' ? 'e.g. Birthday celebration' : 'Святкуємо день народження'}
                      value={comment}
                      onChange={(e) => setComment(e.target.value)}
                      className="w-full bg-black/70 border border-white/20 rounded-xl px-4 py-2.5 text-sm text-white outline-none focus:border-[#fb7b04]"
                    />
                  </div>

                  {error && (
                    <div className="flex items-center gap-2 text-xs text-red-400 bg-red-950/40 border border-red-800 p-2.5 rounded-lg">
                      <AlertCircle className="w-4 h-4 shrink-0" />
                      <span>{error}</span>
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full mt-2 bg-[#fb7b04] hover:bg-[#e06d02] text-white font-bold py-3.5 rounded-xl uppercase text-xs tracking-wider transition-all shadow-md shadow-[#fb7b04]/30 disabled:opacity-50"
                  >
                    {isSubmitting ? roomT.bookingInProgress : roomT.confirmBtn}
                  </button>
                </form>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
