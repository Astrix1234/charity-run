import { useLanguageStore } from '../../../Zustand/useLanguageStore';
import scss from './SupportVolunteersJoin.module.scss';
import translations from './translations';

function SupportSponsor() {
  const { language } = useLanguageStore();
  const t = translations[language];

  return (
    <div className={scss.sponsorship}>
      <div className={scss.content}>
        <p className={scss.boldText}>{t.greeting}</p>
        <p className={scss.normalText}>{t.projectDescription}</p>
      </div>
      <br />
    </div>
  );
}

export default SupportSponsor;
