import HandwrittenLine from '../../Icons/HandwrittenLine/HandwrittenLine';
import { useLanguageStore } from '../../Zustand/useLanguageStore';
import scss from './AmbassadorsHeading.module.scss';
import translations from './translations';

function AmbassadorsHeading() {
  const { language } = useLanguageStore();
  const t = translations[language];

  return (
    <div className={scss.header}>
      <h1 className={scss.heading}>
        <span className={scss.heading__sub}>{t.sub}</span>
        <span className={scss.heading__main}>{t.main}</span>
      </h1>
      <HandwrittenLine />
    </div>
  );
}

export default AmbassadorsHeading;
