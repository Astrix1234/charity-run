import { useLanguageStore } from '../../../Zustand/useLanguageStore';
import TrippleVector from '../../../Icons/TrippleVector/TrippleVector';
import scss from './SupportVolunteersText.module.scss';
import translations from './translations';

function SupportVolunteersText() {
  const { language } = useLanguageStore();
  const t = translations[language];

  return (
    <div className={scss.sponsorship}>
      <p className={scss.content}>
        <span className={scss.welcome}>{t.welcome}</span> {t.welcomeNext}
      </p>
      <div className={scss.vector}>
        <TrippleVector />
      </div>
      <p className={scss.heading}>{t.joinTeam}</p>
      <div className={scss.content}>
        {t.contactInfo} <br />
        <span className={scss.content}></span>
        <div className={scss.contactEmail}>
          <a href={`mailto:${t.email}`} className={scss.contactLink}>
            {t.email}
          </a>
        </div>
        {t.instructions}
      </div>
      <p className={scss.contentThanks}>{t.thanks}</p>
    </div>
  );
}

export default SupportVolunteersText;
