import scss from './TogetherToTheGoal.module.scss';
import { useLanguageStore } from '../../Zustand/useLanguageStore';
import translations from './translations';
import HematorunTitle from '../hematorunTitle/HematorunTitle';

export const TogetherToTheGoal = () => {
  const { language } = useLanguageStore();
  const t = translations[language];

  return (
    <div className={scss.togetherToTheGoal}>
      <h3 className={scss.togetherToTheGoal__together}>
        {t.togetherToTheGoal}
      </h3>
      <HematorunTitle />
      <p className={scss.togetherToTheGoal__foundation}>
        {t.foundationForHelpingPeopleWithLeukemia}{' '}
      </p>{' '}
    </div>
  );
};
