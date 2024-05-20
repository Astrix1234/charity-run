import { Link } from 'react-router-dom';
import { IconBloodCell } from '../../../Icons/IconBloodCell/IconBloodCell';
import { useLanguageStore } from '../../../Zustand/useLanguageStore';
import Slider from '../../Share/Slider/Slider';
import scss from './Patrons.module.scss';
import translations from './translations';

const Donor = () => {
  const { language } = useLanguageStore();
  const t = translations[language];
  return <h3 className={scss.marqueeFiller}>{t.becomeDonor}</h3>;
};
const Partner = () => {
  const { language } = useLanguageStore();
  const t = translations[language];
  return <h3 className={scss.marqueeFiller}>{t.becomePartner}</h3>;
};

const Patrons = () => {
  const { language } = useLanguageStore();
  const t = translations[language];

  const donorsList = [
    <div className={scss.sponsors__logo}>
      <Donor />
    </div>,
    <div className={scss.sponsors__logo}>
      <Donor />
    </div>,
    <div className={scss.sponsors__logo}>
      <Donor />
    </div>,
    <div className={scss.sponsors__logo}>
      <Donor />
    </div>,
  ];
  const partnersList = [
    <div className={scss.sponsors__logo}>
      <Partner />
    </div>,
    <div className={scss.sponsors__logo}>
      <Partner />
    </div>,
    <div className={scss.sponsors__logo}>
      <Partner />
    </div>,
    <div className={scss.sponsors__logo}>
      <Partner />
    </div>,
  ];

  return (
    <>
      <section className={scss.padding} id="our-sponsors"></section>
      <section className={scss.sponsors}>
        <div className={scss.sponsors__container}>
          <h2 className={scss.sponsors__title}>{t.patronsTitle}</h2>
          <div className={scss.sponsors__iconBlood}>
            <IconBloodCell />
          </div>
        </div>
        <div className={scss.sponsors__wrapper}>
          <div className={scss.sponsors__subSection}>
            <h3 className={scss.sponsors__subtitle}>{t.honorary}</h3>
            <div className={scss.sponsors__box}>
              <Slider array={donorsList} reverse={false} />
            </div>
          </div>
          <div className={scss.sponsors__subSection}>
            <h3 className={scss.sponsors__subtitle}>{t.media}</h3>
            <div className={scss.sponsors__box}>
              <Slider array={partnersList} reverse={true} />
            </div>
          </div>
          <div className={scss.sponsors__subSection}>
            <h3 className={scss.sponsors__subtitle}>{t.patrons}</h3>
            <div className={scss.sponsors__box}>
              <Slider array={partnersList} reverse={false} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Patrons;
