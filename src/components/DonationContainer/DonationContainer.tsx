import { useLanguageStore } from '../../Zustand/useLanguageStore';
import DonationBox from '../DonationBox/DonationBox';
import scss from './DonationContainer.module.scss';
import translations from './translations';

function DonationContainer() {
  const { language } = useLanguageStore();
  const t = translations[language];
  return (
    <div className={scss.container}>
      <p className={scss.info}>{t.info}</p>
      <DonationBox />
      <p className={scss.thanks}>{t.thanks}</p>
    </div>
  );
}

export default DonationContainer;
