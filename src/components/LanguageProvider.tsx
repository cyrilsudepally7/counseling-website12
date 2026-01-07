'use client';

import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

type Language = 'en' | 'es';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  toggleLanguage: () => void;
  t: (translations: { en: string; es: string }) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('en');

  // Load saved language preference from localStorage
  useEffect(() => {
    const saved = localStorage.getItem('preferred-language') as Language;
    if (saved && (saved === 'en' || saved === 'es')) {
      setLanguage(saved);
    }
  }, []);

  // Save language preference
  const handleSetLanguage = (lang: Language) => {
    setLanguage(lang);
    localStorage.setItem('preferred-language', lang);
  };

  const toggleLanguage = () => {
    handleSetLanguage(language === 'en' ? 'es' : 'en');
  };

  const t = (translations: { en: string; es: string }) => {
    return translations[language];
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage: handleSetLanguage, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}

// Language toggle button component
export function LanguageToggle({ className = '' }: { className?: string }) {
  const { language, toggleLanguage } = useLanguage();

  return (
    <button
      onClick={toggleLanguage}
      className={`flex items-center gap-2 px-3 py-1.5 rounded-full border border-warm-300 hover:border-primary-400 bg-white hover:bg-primary-50 transition-all text-sm font-medium ${className}`}
      aria-label={language === 'en' ? 'Cambiar a español' : 'Switch to English'}
    >
      <span className="text-lg leading-none">
        {language === 'en' ? '🇪🇸' : '🇺🇸'}
      </span>
      <span className="text-warm-700">
        {language === 'en' ? 'Español' : 'English'}
      </span>
    </button>
  );
}

// Fixed bottom-right language toggle
export function FixedLanguageToggle() {
  const { language, toggleLanguage } = useLanguage();

  return (
    <button
      onClick={toggleLanguage}
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2 px-4 py-2.5 rounded-full border border-warm-200 bg-white/95 backdrop-blur-sm shadow-soft-lg hover:shadow-soft-xl hover:border-primary-300 transition-all text-sm font-medium"
      aria-label={language === 'en' ? 'Cambiar a español' : 'Switch to English'}
    >
      <span className="text-lg leading-none">
        {language === 'en' ? '🇪🇸' : '🇺🇸'}
      </span>
      <span className="text-warm-700">
        {language === 'en' ? 'Español' : 'English'}
      </span>
    </button>
  );
}
