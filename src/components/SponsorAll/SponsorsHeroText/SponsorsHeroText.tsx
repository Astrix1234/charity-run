import CurvedArrowDonwLeft from '../../../Icons/CurvedArrowDownLeft/CurvedArrowDonwLeft';
import HandwrittenLineMini from '../../../Icons/HandwrittenLineMini/HandwrittenLineMini';
import { useLanguageStore } from '../../../Zustand/useLanguageStore';
import scsss from './SponsorsHeroText.module.scss';
import translations from './translations';

function SponsorsHeroText() {
  const { language } = useLanguageStore();
  const t = translations[language];

  return (
    <div className={scsss.container}>
      <p className={scsss.text}>
        {t.paragraph1}
        <span className={scsss.underline}>
          {t.name}
          <span className={scsss.icon}>
            <HandwrittenLineMini />
          </span>
        </span>
        {t.paragraph2}
      </p>
      <p className={scsss.text}>{t.paragraph3}</p>
      <CurvedArrowDonwLeft />
    </div>
  );
}

export default SponsorsHeroText;
