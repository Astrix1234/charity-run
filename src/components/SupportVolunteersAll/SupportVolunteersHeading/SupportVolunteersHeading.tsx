import HandwrittenLine from '../../../Icons/HandwrittenLine/HandwrittenLine';
import { useLanguageStore } from '../../../Zustand/useLanguageStore';
import scss from './SupportVolunteersHeading.module.scss';

type AmbassadorsHeadingProps = { subText: { pl: string; eng: string } };

function AmbassadorsHeading({ subText }: AmbassadorsHeadingProps) {
  const { language } = useLanguageStore();
  return (
    <div className={scss.header}>
      <h2 className={scss.heading}>
        <span className={scss.heading__sub}>
          {subText[language === 'PL' ? 'pl' : 'eng']}
        </span>
      </h2>
      <div className={scss.line}>
        <HandwrittenLine color="#1CA2A7" />
      </div>
    </div>
  );
}

export default AmbassadorsHeading;
