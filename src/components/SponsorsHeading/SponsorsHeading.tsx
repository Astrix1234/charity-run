import { useLanguageStore } from '../../Zustand/useLanguageStore';
import BecomeSponsorButton from '../BecomeSponsorButton/BecomeSponsorButton';
import HematorunTitle from '../hematorunTitle/HematorunTitle';
import scss from './SponsorsHeading.module.scss';
import translations from './translations';

function SponsorsHeading() {
  const { language } = useLanguageStore();
  const t = translations[language];

  return (
    <div className={scss.container}>
      <h2 className={scss.heading}>
        <span className={scss.heading__sub}>{t.sub}</span>
        <HematorunTitle secondTitle={{ pl: 'biegu!', eng: 'run!' }} />
      </h2>
      <BecomeSponsorButton />
    </div>
  );
}

export default SponsorsHeading;
