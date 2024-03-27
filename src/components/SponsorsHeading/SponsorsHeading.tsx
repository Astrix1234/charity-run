import { useLanguageStore } from '../../Zustand/useLanguageStore';
import BecomeSponsorButton from '../BecomeSponsorButton/BecomeSponsorButton';
import scss from './SponsorsHeading.module.scss';
import translations from './translations';

function SponsorsHeading() {
  const { language } = useLanguageStore();
  const t = translations[language];

  return (
    <div className={scss.container}>
      <h2 className={scss.heading}>
        <span className={scss.heading__sub}>{t.sub}</span>
        <span className={scss.heading__main}>{t.main}</span>
      </h2>
      <BecomeSponsorButton />
    </div>
  );
}

export default SponsorsHeading;
