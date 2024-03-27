import { useLanguageStore } from '../../Zustand/useLanguageStore';
import scss from './SupportSubHeading.module.scss';

type SupportSubHeadingProps = {
  subText: { pl: string; eng: string };
  mainText: { pl: string; eng: string };
};

function SupportSubHeading({ subText, mainText }: SupportSubHeadingProps) {
  const { language } = useLanguageStore();
  const languageString = language === 'PL' ? 'pl' : 'eng';

  return (
    <h2 className={scss.heading}>
      <span className={scss.sub}>{subText[languageString]}</span>
      <span className={scss.main}>{mainText[languageString]}</span>
    </h2>
  );
}

export default SupportSubHeading;
