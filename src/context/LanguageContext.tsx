'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import { Language, translations } from '@/lib/translations';

interface LanguageContextType {
  lang: Language;
  language: Language;
  setLang: (lang: Language) => void;
  t: (section: keyof typeof translations['ua']) => any;
}

const LanguageContext = createContext<LanguageContextType>({
  lang: 'ua',
  language: 'ua',
  setLang: () => {},
  t: (section) => translations.ua[section],
});

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<Language>('ua');

  useEffect(() => {
    // Check saved preference
    const saved = localStorage.getItem('pautina_lang') as Language | null;
    if (saved === 'ua' || saved === 'en') {
      setLangState(saved);
      document.documentElement.lang = saved === 'ua' ? 'uk' : 'en';
    }
  }, []);

  const setLang = (newLang: Language) => {
    setLangState(newLang);
    try {
      localStorage.setItem('pautina_lang', newLang);
      document.documentElement.lang = newLang === 'ua' ? 'uk' : 'en';
    } catch (e) {
      // ignore
    }
  };

  const t = (section: keyof typeof translations['ua']) => {
    return translations[lang][section] || translations['ua'][section];
  };

  return (
    <LanguageContext.Provider value={{ lang, language: lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  return context;
}
