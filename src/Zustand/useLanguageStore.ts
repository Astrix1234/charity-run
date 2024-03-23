import { create } from 'zustand';

interface LanguageState {
  language: 'PL' | 'EN';
  toggleLanguage: () => void;
  setLanguage: (lang: 'PL' | 'EN') => void;
}

export const useLanguageStore = create<LanguageState>(set => ({
  language:
    localStorage.getItem('language') === 'PL' ||
    localStorage.getItem('language') === 'EN'
      ? (localStorage.getItem('language') as 'PL' | 'EN')
      : 'PL',
  toggleLanguage: () =>
    set(state => ({
      language: state.language === 'PL' ? 'EN' : 'PL',
    })),
  setLanguage: (lang: 'PL' | 'EN') =>
    set(() => ({
      language: lang,
    })),
}));
