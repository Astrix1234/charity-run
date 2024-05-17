import HandwrittenLine from '../../../Icons/HandwrittenLine/HandwrittenLine';
import { useLanguageStore } from '../../../Zustand/useLanguageStore';
import HematorunTitle from '../../Share/hematorunTitle/HematorunTitle';
import scss from './AmbassadorsAndLeadersHeading.module.scss';
import translations from './translations';

function AmbassadorsAndLeadersHeading() {
  const { language } = useLanguageStore();
  const t = translations[language];

  return (
    <div className={scss.header}>
      <h2 className={scss.heading}>
        <span className={scss.text}>{t.heading}</span>
        <HematorunTitle secondTitle={{ pl: 'biegu', eng: 'run' }} />
      </h2>
      <div className={scss.line}>
        <HandwrittenLine />
      </div>
    </div>
  );
}

export default AmbassadorsAndLeadersHeading;
