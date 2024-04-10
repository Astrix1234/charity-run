import { Link } from 'react-router-dom';
import { IconBloodCell } from '../../Icons/IconBloodCell/IconBloodCell';
import { Wave } from '../../Icons/WaveBackground/Wave';
import { useLanguageStore } from '../../Zustand/useLanguageStore';
import Slider from '../Slider/Slider';
import scss from './Sponsors.module.scss';
import translations from './translations';
import { KopernikLogo } from '../../Icons/SponsorsIcons/KopernikLogo';

const Sponsors = () => {
  const { language } = useLanguageStore();
  const t = translations[language];

  const sponsorsList = [
    <div className={scss.sponsors__logo}>
      <KopernikLogo />
    </div>,
    // <div className={scss.sponsors__logo}>
    //   <KopernikLogo />
    // </div>,
  ];

  return (
    <>
      <section className={scss.padding} id="our-sponsors"></section>
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
          <div className={scss.sponsors__box}>
            <Slider array={sponsorsList} reverse={false} />
          </div>
          <div className={scss.sponsors__box}>
            <Slider array={sponsorsList} reverse={true} />
          </div>
        </div>
        <div className={scss.sponsors__link__container}>
          <Link className={scss.sponsors__link} to="/our-sponsors">
            {t.seeSponsors}
          </Link>
        </div>
      </section>
    </>
  );
};

export default Sponsors;
