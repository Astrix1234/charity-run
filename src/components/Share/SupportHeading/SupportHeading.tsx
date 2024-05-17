import MiniTripleOrangeWave from '../../../Icons/MiniTripleOrangeWave/MiniTripleOrangeWave';
import { useLanguageStore } from '../../../Zustand/useLanguageStore';
import scss from './SupportHeading.module.scss';

type SupportHeadingProps = {
  headingText: { pl: string; eng: string };
};

function SupportHeading({ headingText }: SupportHeadingProps) {
  const { language } = useLanguageStore();

  return (
    <div className={scss.container}>
      <h2 className={scss.heading}>
        {headingText[language === 'PL' ? 'pl' : 'eng']}
      </h2>

      <MiniTripleOrangeWave />
    </div>
  );
}

export default SupportHeading;
