import { IconBloodCell } from '../../Icons/IconBloodCell/IconBloodCell';
import { IpsumLogo } from '../../Icons/SponsorsIcons/IpsumLogo';
import { LogoIpsum } from '../../Icons/SponsorsIcons/LogoIpsum';
import { Wave } from '../../Icons/WaveBackground/Wave';
import { useLanguageStore } from '../../Zustand/useLanguageStore';
import Slider from '../Slider/Slider';
import scss from './Sponsors.module.scss';
import translations from './translations';

const Sponsors = () => {
  const { language } = useLanguageStore();
  const t = translations[language];

  const sponsorsList = [
    <div className={scss.sponsors__logo}>
      <IpsumLogo />
    </div>,
    <div className={scss.sponsors__logo}>
      <LogoIpsum />
    </div>,
    <div className={scss.sponsors__logo}>
      <IpsumLogo />
    </div>,
    <div className={scss.sponsors__logo}>
      <LogoIpsum />
    </div>,
  ];

  return (
    <section id="sponsor" className={scss.sponsors}>
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
    </section>
  );
};

export default Sponsors;
