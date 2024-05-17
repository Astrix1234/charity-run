import { useLanguageStore } from '../../../Zustand/useLanguageStore';
import scss from './MobileLanguageSwitcher.module.scss';
import translations from './translations';

function MobileLanguageSwitcher() {
  const { language, toggleLanguage } = useLanguageStore();
  const t = translations[language];

  return (
    <div className={scss.container}>
      <p className={scss.text}>{t.heading}</p>
      <div className={scss.switcher}></div>
      <button
        onClick={toggleLanguage}
        className={`${scss.btn} ${scss[`btn__${language.toLowerCase()}`]}`}
        aria-label="Toggle Between Polish and English"
      >
        <span />
        <span
          className={`${scss.btn__option} ${
            language === 'PL' ? scss.btn__active : ''
          }`}
        >
          PL
        </span>
        <span
          className={`${scss.btn__option} ${
            language === 'EN' ? scss.btn__active : ''
          }`}
        >
          EN
        </span>
      </button>
    </div>
  );
}

export default MobileLanguageSwitcher;
