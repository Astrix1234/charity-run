import MiniTripleOrangeWave from '../../Icons/MiniTripleOrangeWave/MiniTripleOrangeWave';
import { useLanguageStore } from '../../Zustand/useLanguageStore';
import scss from './SupportHeading.module.scss';

type SupportHeadingProps = {
  headingText: { pl: string; eng: string };
};

function SupportHeading({ headingText }: SupportHeadingProps) {
  const { language } = useLanguageStore();

  return (
    <div className={scss.container}>
      <h1 className={scss.heading}>
        {headingText[language === 'PL' ? 'pl' : 'eng']}
      </h1>
      <MiniTripleOrangeWave />
    </div>
  );
}

export default SupportHeading;
