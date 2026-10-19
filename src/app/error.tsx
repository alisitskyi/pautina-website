'use client';

import { useEffect } from 'react';
import { AlertTriangle, RefreshCw, Home } from 'lucide-react';
import Link from 'next/link';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error('Next.js Page Error:', error);
  }, [error]);

  return (
    <div className="min-h-[70vh] flex items-center justify-center bg-brand-dark px-4 text-white">
      <div className="max-w-md w-full text-center p-8 bg-neutral-900 border border-white/10 rounded-3xl shadow-2xl">
        <div className="w-16 h-16 rounded-2xl bg-red-950/60 border border-red-800 text-brand-red flex items-center justify-center mx-auto mb-6">
          <AlertTriangle className="w-8 h-8" />
        </div>
        <span className="text-brand-red text-xs uppercase font-extrabold tracking-widest block mb-2">
          Технічний збій
        </span>
        <h2 className="text-2xl font-extrabold font-accent mb-3">
          Щось пішло не так
        </h2>
        <p className="text-gray-400 text-xs leading-relaxed mb-6">
          Сталася неочікувана помилка при завантаженні сторінки. Спробуйте оновити сеанс.
        </p>
        <div className="flex flex-col gap-3">
          <button
            onClick={() => reset()}
            className="w-full bg-brand-red hover:bg-[#e06d02] text-white font-bold py-3.5 rounded-xl uppercase text-xs tracking-wider transition-all flex items-center justify-center gap-2"
          >
            <RefreshCw className="w-4 h-4" />
            <span>Спробувати ще раз</span>
          </button>
          <Link
            href="/"
            className="w-full bg-white/5 hover:bg-white/10 text-gray-300 font-bold py-3.5 rounded-xl uppercase text-xs tracking-wider border border-white/10 transition-all flex items-center justify-center gap-2"
          >
            <Home className="w-4 h-4" />
            <span>Повернутися на головну</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
