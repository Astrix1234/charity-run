import scss from './HematoRunInfo.module.scss';
import { useState } from 'react';
import { useLanguageStore } from '../../../Zustand/useLanguageStore';
import translations from './translations';
import { useMediaQuery } from 'react-responsive';

export const HematoRunInfo = () => {
  const [rolledUp, setRolledUp] = useState(true);
  const { language } = useLanguageStore();
  const t = translations[language];

  const isDesktop = useMediaQuery({ minWidth: 1360 });

  const handleClick = () => {
    setRolledUp(!rolledUp);
  };

  return (
    <section id="run-description" className={scss.runInfo}>
      <div className={scss.runInfo__container}>
        <div className={scss.runInfo__titleContainer}>
          <p className={scss.runInfo__comment}>//{t.charityRun}</p>
          <h2 className={scss.runInfo__title}>{t.hematoRun}</h2>
          <div className={scss.runInfo__underlines}></div>
        </div>
        <div
          className={`${scss.runInfo__text} ${
            !rolledUp ? scss.runInfo__developed : ''
          } `}
        >
          <p className={scss.runInfo__paragraph}>{t.runInfo1}</p>
          <p className={scss.runInfo__paragraph}>
            <b>{t.runInfo2}</b> {t.runInfo3}
          </p>
          <p className={scss.runInfo__paragraph}>{t.runInfo4}</p>
          <p className={scss.runInfo__paragraph}>
            {t.runInfo5} <b>{t.runInfo6}</b>
          </p>
          <p className={scss.runInfo__paragraph}>
            {t.runInfo7} <b>{t.runInfo8}</b>&nbsp;{t.runInfo9}
          </p>
          <p className={scss.runInfo__paragraph}>
            {t.runInfo10} <b>{t.runInfo11}</b>&nbsp;{t.runInfo12}
          </p>
          <p className={scss.runInfo__paragraph}>{t.runInfo13}</p>
          <p className={scss.runInfo__paragraph}>{t.runInfo14}</p>
        </div>
        {rolledUp ? (
          <button
            className={scss.runInfo__button}
            type="button"
            onClick={handleClick}
          >
            {t.moreAbout}
          </button>
        ) : (
          <button
            className={scss.runInfo__button}
            type="button"
            onClick={handleClick}
          >
            {t.scrollDown}
          </button>
        )}
        {isDesktop && <div className={scss.runInfo__runningHelp}></div>}
      </div>
    </section>
  );
};
