import Link from 'next/link';
import { Compass, Home, Phone } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-[80vh] flex items-center justify-center bg-brand-dark px-4 text-white">
      <div className="max-w-md w-full text-center p-8 bg-neutral-900 border border-white/10 rounded-3xl shadow-2xl">
        <div className="w-16 h-16 rounded-2xl bg-brand-red/20 text-brand-red flex items-center justify-center mx-auto mb-6">
          <Compass className="w-8 h-8 animate-spin" style={{ animationDuration: '6s' }} />
        </div>
        <span className="text-brand-red text-xs uppercase font-extrabold tracking-widest block mb-2">
          Помилка 404
        </span>
        <h1 className="text-3xl font-extrabold font-accent mb-4">
          ВИ ЗАБЛУКАЛИ В ТЕМРЯВІ...
        </h1>
        <p className="text-gray-400 text-xs leading-relaxed mb-8">
          Схоже, цієї кімнати не існує або ключ до неї було назавжди втрачено. Поверніться до безпечного виходу або зателефонуйте нашому оператору.
        </p>
        <div className="flex flex-col gap-3">
          <Link
            href="/"
            className="w-full bg-brand-red hover:bg-red-700 text-white font-bold py-3.5 rounded-xl uppercase text-xs tracking-wider transition-all flex items-center justify-center gap-2"
          >
            <Home className="w-4 h-4" />
            <span>На головну сторінку</span>
          </Link>
          <a
            href="tel:+380931701444"
            className="w-full bg-white/5 hover:bg-white/10 text-gray-300 font-bold py-3.5 rounded-xl uppercase text-xs tracking-wider border border-white/10 transition-all flex items-center justify-center gap-2"
          >
            <Phone className="w-4 h-4 text-brand-red" />
            <span>Допомога оператора</span>
          </a>
        </div>
      </div>
    </div>
  );
}
