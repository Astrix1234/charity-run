import { IconBloodCell } from '../../Icons/IconBloodCell/IconBloodCell';
import { useLanguageStore } from '../../Zustand/useLanguageStore';
import scss from './HematorunTitle.module.scss';

type HematorunTitleProps = {
  mainTitle?: { pl: string; eng: string };
  secondTitle?: { pl: string; eng: string };
};

function HematorunTitle({
  mainTitle = { pl: 'Hemat', eng: 'Hemat' },
  secondTitle = { pl: 'bieg', eng: 'run' },
}: HematorunTitleProps) {
  const { language } = useLanguageStore();
  const currentLanguage = language === 'EN' ? 'eng' : 'pl';
  return (
    <div className={scss.title}>
      <span>{mainTitle[currentLanguage]}</span>
      <IconBloodCell />
      <span>{secondTitle[currentLanguage]}</span>
    </div>
  );
}

export default HematorunTitle;
