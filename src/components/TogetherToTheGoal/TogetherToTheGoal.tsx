import scss from './TogetherToTheGoal.module.scss';
import { useLanguageStore } from '../../Zustand/useLanguageStore';
import translations from './translations';

export const TogetherToTheGoal = () => {
  const { language } = useLanguageStore();
  const t = translations[language];

  return (
    <div className={scss.togetherToTheGoal}>
      <h3 className={scss.togetherToTheGoal__together}>
        {t.togetherToTheGoal}
      </h3>
      <h1 className={scss.togetherToTheGoal__title}>{t.hematorun}</h1>
      <p className={scss.togetherToTheGoal__foundation}>
        {t.foundationForHelpingPeopleWithLeukemia}{' '}
      </p>{' '}
    </div>
  );
};
