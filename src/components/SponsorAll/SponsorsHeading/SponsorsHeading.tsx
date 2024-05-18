import { useLanguageStore } from '../../../Zustand/useLanguageStore';
import BecomeSponsorButton from '../../FooterAll/BecomeSponsorButton/BecomeSponsorButton';
import HematorunTitle from '../../Share/hematorunTitle/HematorunTitle';
import scss from './SponsorsHeading.module.scss';
import translations from './translations';

function SponsorsHeading() {
  const { language } = useLanguageStore();
  const t = translations[language];

  return (
    <div className={scss.container}>
      <h2 className={scss.heading}>
        <span className={scss.text}>{t.heading}</span>
        <HematorunTitle secondTitle={{ pl: 'biegu!', eng: 'run!' }} />
      </h2>
      <BecomeSponsorButton />
    </div>
  );
}

export default SponsorsHeading;
