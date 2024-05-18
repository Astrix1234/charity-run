import { useLanguageStore } from '../../../Zustand/useLanguageStore';
import scss from './SupportSponsorText.module.scss';
import translations from './translations';

function SupportSponsor() {
  const { language } = useLanguageStore();
  const t = translations[language];

  return (
    <div className={scss.sponsorship}>
      <div className={scss.title}>{t.title}</div>
      <br />

      <div className={scss.content}>
        <p>{t.greeting}</p>
        <p>{t.projectDescription}</p>
      </div>
      <br />

      <div className={scss.title}>{t.whySponsor}</div>

      <div className={scss.content}>
        <p className={scss.benefits}>
          <span>{t.sponsorBenefits.point1}</span>
          {t.sponsorBenefits.point1Title}
        </p>
        <p className={scss.benefits}>
          <span>{t.sponsorBenefits.point2}</span>
          {t.sponsorBenefits.point2Title}
        </p>
        <p className={scss.benefits}>
          <span>{t.sponsorBenefits.point3}</span>
          {t.sponsorBenefits.point3Title}
        </p>
      </div>
      <div className={scss.title}>{t.howToHelp}</div>
      <div className={scss.content}>
        <p>{t.howToHelpDescription}</p>
      </div>

      <div className={scss.title}>{t.contact}</div>

      <div className={scss.content}>
        <p>{t.contactEmail}</p>
      </div>
      <div className={scss.contactEmail}>
        <a href={`mailto:${t.email}`} className={scss.contactLink}>
          {t.email}
        </a>
        <a className={scss.phoneLink} href={`tel:${t.phoneTo}`}>
          {t.phoneText}
        </a>
      </div>
      <br />
      <div className={scss.content}>
        <p>{t.thanks}</p>
        <br />
        <p>
          {t.regards}
          <br />
          {t.team}
        </p>
        <br />
      </div>
    </div>
  );
}

export default SupportSponsor;
