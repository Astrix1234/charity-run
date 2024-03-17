import { create } from 'zustand';

interface LanguageState {
  language: 'PL' | 'EN';
  toggleLanguage: () => void;
  setLanguage: (lang: 'PL' | 'EN') => void;
}

export const useLanguageStore = create<LanguageState>(set => ({
  language: 'PL',
  toggleLanguage: () =>
    set(state => ({
      language: state.language === 'PL' ? 'EN' : 'PL',
    })),
  setLanguage: (lang: 'PL' | 'EN') =>
    set(() => ({
      language: lang,
    })),
}));
