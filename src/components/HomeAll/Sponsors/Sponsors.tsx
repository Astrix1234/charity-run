import { Link } from 'react-router-dom';
import { IconBloodCell } from '../../../Icons/IconBloodCell/IconBloodCell';
import { Wave } from '../../../Icons/WaveBackground/Wave';
import { useLanguageStore } from '../../../Zustand/useLanguageStore';
import Slider from '../../Share/Slider/Slider';
import scss from './Sponsors.module.scss';
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

const Sponsors = () => {
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
      <section className={scss.padding} id="our-partners"></section>
      <section className={scss.sponsors}>
        <div aria-hidden="true" className={scss.sponsors__background}>
          <Wave />
        </div>
        <div className={scss.sponsors__container}>
          <h2 className={scss.sponsors__title}>{t.sponsorsTitle}</h2>
          <div className={scss.sponsors__iconBlood}>
            <IconBloodCell />
          </div>
        </div>
        <div className={scss.sponsors__wrapper}>
          <h3 className={scss.sponsors__subtitle}>{t.donor}</h3>
          <div className={scss.sponsors__box}>
            <Slider array={donorsList} reverse={false} />
          </div>
          <h3 className={scss.sponsors__subtitle}>{t.partners}</h3>
          <div className={scss.sponsors__box}>
            <Slider array={partnersList} reverse={true} />
          </div>
        </div>
        <div className={scss.sponsors__link__container}>
          <Link className={scss.sponsors__link} to="/our-donors">
            {t.seeSponsors}
          </Link>
        </div>
      </section>
    </>
  );
};

export default Sponsors;
