import scss from './Regulations.module.scss';
import { Button } from '../Button/Button';
import { useLanguageStore } from '../../Zustand/useLanguageStore';
import translations from './translations';
import { TogetherToTheGoal } from '../TogetherToTheGoal/TogetherToTheGoal';
import { IconAgree } from '../../Icons/IconAgree/IconAgree';

export const Regulations = () => {
  const { language } = useLanguageStore();
  const t = translations[language];

  const handleClick = () => {
    console.log('Button clicked');
  };

  return (
    <section className={scss.regulations}>
      <div className={scss.regulations__container}>
        <TogetherToTheGoal />
        <div className={scss.regulations__modal}>
          <div className={scss.regulations__info}>
            <h4 className={scss.regulations__title}>
              {t.processingInformation}
            </h4>
            <p className={scss.regulations__text}>
              {t.processingInformationDetails}
            </p>
          </div>
          <div className={scss.regulations__info}>
            <h4 className={scss.regulations__title}>
              {t.foundationInformationClause}
            </h4>
            <p className={scss.regulations__text}>
              {t.foundationInformationClauseDetails}
            </p>
          </div>
          <div className={scss.regulations__button}>
            <Button
              onClick={handleClick}
              content={t.button}
              icon={<IconAgree />}
            />
          </div>
        </div>
      </div>
    </section>
  );
};
