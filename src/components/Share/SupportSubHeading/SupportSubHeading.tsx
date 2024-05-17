import { useLanguageStore } from '../../../Zustand/useLanguageStore';
import HematorunTitle from '../hematorunTitle/HematorunTitle';
import scss from './SupportSubHeading.module.scss';

type SupportSubHeadingProps = {
  content: { pl: string; eng: string };
  titleMain?: { pl: string; eng: string };
  titleSub?: { pl: string; eng: string };
};

function SupportSubHeading({
  content,
  titleMain = { pl: 'Hemat', eng: 'Hemat' },
  titleSub = { pl: 'bieg', eng: 'run' },
}: SupportSubHeadingProps) {
  const { language } = useLanguageStore();
  const languageString = language === 'PL' ? 'pl' : 'eng';

  return (
    <h3 className={scss.heading}>
      <span className={scss.sub}>{content[languageString]}</span>
      <HematorunTitle mainTitle={titleMain} secondTitle={titleSub} />
    </h3>
  );
}

export default SupportSubHeading;
