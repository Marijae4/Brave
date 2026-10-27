import React, { createContext, useContext, useState, ReactNode } from 'react';

type Lang = 'SRB' | 'ENG';

interface LangContextType {
  lang: Lang;
  setLang: (l: Lang) => void;
  toggleLang: () => void;
}

const LangContext = createContext<LangContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [lang, setLangState] = useState<Lang>(() => {
    try {
      const saved = localStorage.getItem('brave-lang');
      if (saved === 'SRB' || saved === 'ENG') return saved;
    } catch {}
    return 'SRB';
  });

  const setLang = (l: Lang) => {
    setLangState(l);
    try { localStorage.setItem('brave-lang', l); } catch {}
  };

  const toggleLang = () => setLang(lang === 'SRB' ? 'ENG' : 'SRB');

  return (
    <LangContext.Provider value={{ lang, setLang, toggleLang }}>
      {children}
    </LangContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LangContext);
  if (!context) throw new Error('useLanguage must be used within a LanguageProvider');
  return context;
};
