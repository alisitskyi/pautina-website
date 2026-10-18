import { Metadata } from 'next';
import { MapPin, Phone, Mail, Clock, MessageSquare, Send } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Контакти та локації квестів у Одесі | PAUTINA Rooms',
  description: 'Контакти квест-кімнат PAUTINA Rooms в Одесі. Адреси: вул. Торгова, 2 та пр-т Шевченка, 4д. Телефони, графік роботи, карти проїзду.',
};

export default function ContactsPage() {
  return (
    <div className="bg-brand-dark min-h-screen text-white pt-10 pb-24">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-brand-red text-xs uppercase font-extrabold tracking-widest block mb-2">Зв'яжіться з нами</span>
          <h1 className="text-4xl md:text-6xl font-extrabold font-accent tracking-tight mb-4">
            НАШІ <span className="text-brand-red">КОНТАКТИ</span>
          </h1>
          <p className="text-gray-300 text-sm md:text-base leading-relaxed">
            Ми працюємо щодня без вихідних з 10:00 до 22:30. Зателефонуйте або завітайте на будь-яку з наших локацій в Одесі!
          </p>
        </div>

        {/* 2 Locations Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {/* Location 1 */}
          <div className="bg-neutral-900 border border-white/10 rounded-3xl p-8 flex flex-col justify-between shadow-2xl">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-brand-red/20 text-brand-red text-xs font-bold uppercase tracking-wider mb-4">
                Центральна локація
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold font-accent mb-4">
                м. Одеса, вул. Торгова, 2
              </h2>
              <p className="text-gray-400 text-xs mb-6 leading-relaxed">
                Орієнтири: бульвар Жванецького, Шахський палац, Новий ринок. Зручний під’їзд та парковка біля входу.
              </p>

              <div className="space-y-3 text-sm text-gray-300 mb-8 border-t border-b border-white/10 py-6">
                <div className="flex items-center gap-3">
                  <Phone className="w-4 h-4 text-brand-red" />
                  <a href="tel:+380931701444" className="hover:text-brand-red font-bold">
                    +38 (093) 170-14-44
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <Clock className="w-4 h-4 text-brand-gold" />
                  <span>Щодня з 10:00 до 22:30 (за попереднім записом)</span>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="w-4 h-4 text-brand-red" />
                  <span>Квести: Гаррі і Таємна Кімната, Дзвінок, Скарби Чорної Бороди</span>
                </div>
              </div>
            </div>

            <a
              href="https://maps.google.com/?q=Odesa+Torgova+2"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full bg-white/10 hover:bg-white/20 text-white font-bold py-3.5 rounded-xl text-center uppercase text-xs tracking-wider transition-all block border border-white/15"
            >
              Відкрити на Google Картах ↗
            </a>
          </div>

          {/* Location 2 */}
          <div className="bg-neutral-900 border border-white/10 rounded-3xl p-8 flex flex-col justify-between shadow-2xl">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-brand-gold/20 text-brand-gold text-xs font-bold uppercase tracking-wider mb-4">
                Приморська локація
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold font-accent mb-4">
                м. Одеса, пр-т Шевченка, 4д
              </h2>
              <p className="text-gray-400 text-xs mb-6 leading-relaxed">
                Орієнтири: парк Перемоги, Політехнічний університет, палац спорту. Окремий антуражний вхід.
              </p>

              <div className="space-y-3 text-sm text-gray-300 mb-8 border-t border-b border-white/10 py-6">
                <div className="flex items-center gap-3">
                  <Phone className="w-4 h-4 text-brand-red" />
                  <a href="tel:+380931701444" className="hover:text-brand-red font-bold">
                    +38 (093) 170-14-44
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <Clock className="w-4 h-4 text-brand-gold" />
                  <span>Щодня з 10:00 до 22:30 (за попереднім записом)</span>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="w-4 h-4 text-brand-red" />
                  <span>Квести: Пила: Фінальна Гра, Втеча з Психлікарні, Шерлок Холмс</span>
                </div>
              </div>
            </div>

            <a
              href="https://maps.google.com/?q=Odesa+Shevchenko+4d"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full bg-white/10 hover:bg-white/20 text-white font-bold py-3.5 rounded-xl text-center uppercase text-xs tracking-wider transition-all block border border-white/15"
            >
              Відкрити на Google Картах ↗
            </a>
          </div>
        </div>

        {/* Quick Message Form */}
        <div className="bg-neutral-950 border border-white/10 rounded-3xl p-8 md:p-12 max-w-3xl mx-auto shadow-2xl">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold font-accent mb-2">Напишіть нам повідомлення</h3>
            <p className="text-gray-400 text-xs">
              Маєте запитання або пропозицію щодо співпраці? Залиште повідомлення, і ми зв'яжемося з вами.
            </p>
          </div>

          <form className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Ваше ім’я"
                required
                className="w-full bg-black/60 border border-white/15 rounded-xl px-4 py-3 text-xs text-white outline-none focus:border-brand-red"
              />
              <input
                type="tel"
                placeholder="+380 (XX) XXX-XX-XX"
                required
                className="w-full bg-black/60 border border-white/15 rounded-xl px-4 py-3 text-xs text-white outline-none focus:border-brand-red font-mono"
              />
            </div>
            <textarea
              rows={4}
              placeholder="Ваше повідомлення або запитання..."
              required
              className="w-full bg-black/60 border border-white/15 rounded-xl px-4 py-3 text-xs text-white outline-none focus:border-brand-red resize-none"
            />
            <button
              type="submit"
              className="w-full bg-brand-red hover:bg-red-700 text-white font-bold py-3.5 rounded-xl uppercase text-xs tracking-wider transition-all flex items-center justify-center gap-2"
            >
              <Send className="w-4 h-4" />
              <span>Надіслати повідомлення</span>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
