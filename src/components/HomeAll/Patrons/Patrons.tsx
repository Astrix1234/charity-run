import { IconBloodCell } from '../../../Icons/IconBloodCell/IconBloodCell';
import { useLanguageStore } from '../../../Zustand/useLanguageStore';
import Slider from '../../Share/Slider/Slider';
import scss from './Patrons.module.scss';
import translations from './translations';
import { honoraryLogos, mediaLogos, otherLogos } from './patronsLogos';
import { PatronLogo } from '../../../types';

const Patrons = () => {
  const { language } = useLanguageStore();
  const t = translations[language];

  const honoraryList = makePatronsList(honoraryLogos);

  const mediaList = makePatronsList(mediaLogos);

  const otherList = makePatronsList(otherLogos);

  function makePatronsList(patronsLogos: PatronLogo[]) {
    return patronsLogos.map(logo => (
      <div className={scss.sponsors__logo} key={logo.id}>
        <a href={logo.link} target="_blank">
          <img src={logo.logo} alt="patron's logo" />
        </a>
      </div>
    ));
  }

  return (
    <>
      <section className={scss.padding} id="our-patrons"></section>
      <section className={scss.patrons}>
        <div className={scss.patrons__container}>
          <h2 className={scss.patrons__title}>{t.patronsTitle}</h2>
          <div className={scss.patrons__iconBlood}>
            <IconBloodCell />
          </div>
        </div>
        <div className={scss.patrons__wrapper}>
          <div className={scss.patrons__subSection}>
            <h3 className={scss.patrons__subtitle}>{t.honorary}</h3>
            <div className={scss.patrons__box}>
              <Slider array={honoraryList} reverse={false} />
            </div>
          </div>
          <div className={scss.patrons__subSection}>
            <h3 className={scss.patrons__subtitle}>{t.media}</h3>
            <div className={scss.patrons__box}>
              <Slider array={mediaList} reverse={true} />
            </div>
          </div>
          <div className={scss.patrons__subSection}>
            <h3 className={scss.patrons__subtitle}>{t.patrons}</h3>
            <div className={scss.patrons__box}>
              <Slider array={otherList} reverse={false} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Patrons;
