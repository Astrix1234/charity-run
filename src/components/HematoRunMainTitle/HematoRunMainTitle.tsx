import scss from './HematoRunMainTitle.module.scss';
import { Button } from '../Button/Button';
import { useLanguageStore } from '../../Zustand/useLanguageStore';
import translations from './translations';
import { Link } from 'react-router-dom';
import { IconBloodCell } from '../../Icons/IconBloodCell/IconBloodCell';
import { IconRoad } from '../../Icons/IconRoad/IconRoad';
import { HematoSliderTitle } from '../HematoSliderTitle/HematoSliderTitle';

export const HematoRunMainTitle = () => {
  const { language } = useLanguageStore();
  const t = translations[language];

  const handleClick = () => {
    console.log('Button clicked');
  };
  return (
    <section id="home" className={scss.hematoTitles}>
      <div className={scss.hematoTitles__container}>
        <p className={scss.hematoTitles__giveOthers}>{t.giveOthersPower}</p>
        <div className={scss.hematoTitles__titleContainer}>
          <h1 className={scss.hematoTitles__title}>HEMAT</h1>
          <div>
            <IconBloodCell />
          </div>
          <HematoSliderTitle />
        </div>
        <p className={scss.hematoTitles__foundation}>
          {t.foundationForHelpingPeopleWithLeukemia}
        </p>
        <p className={scss.hematoTitles__date}>26.05.2024 ŁÓDŹ</p>
        <div className={scss.hematoTitles__kmContainer}>
          <p className={scss.hematoTitles__km}>5 KM | 1 KM</p>
          <IconRoad />
        </div>
        <Button onClick={handleClick} content={t.joinUs} />

        <div className={scss.hematoTitles__logInContainer}>
          <p>{t.alreadyHaveAccount}</p>
          <Link className={scss.hematoTitles__logIn} to="/login">
            {t.logIn}
          </Link>
        </div>
        <div className={scss.hematoTitles__illustrationContainer}>
          <div className={scss.hematoTitles__illustration}></div>
          <p className={scss.hematoTitles__runWithUs}>{t.runWithAs}</p>
          <Link
            className={scss.hematoTitles__findOutMore}
            to="/#run-description"
          >
            {t.findOutMore}
          </Link>
        </div>
      </div>
    </section>
  );
};
