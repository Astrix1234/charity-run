import { IconBloodCell } from '../../../Icons/IconBloodCell/IconBloodCell';
import { Wave } from '../../../Icons/WaveBackground/Wave';
import { useLanguageStore } from '../../../Zustand/useLanguageStore';
import Slider from '../../Share/Slider/Slider';
import scss from './Partners.module.scss';
import translations from './translations';
import { PatronLogo } from '../../../types';
import { PartnersLogos } from './PartnersLogos';

const Partners = () => {
  const { language } = useLanguageStore();
  const t = translations[language];

  const partnersList = makePartnersList(PartnersLogos);

  function makePartnersList(patronsLogos: PatronLogo[]) {
    return patronsLogos.map(logo => (
      <div className={scss.partners_logo} key={logo.id}>
        <a href={logo.link} target="_blank">
          <img src={logo.logo} alt="patron's logo" />
        </a>
      </div>
    ));
  }

  return (
    <>
      <section className={scss.padding} id="our-partners"></section>
      <section className={scss.partners}>
        <div aria-hidden="true" className={scss.partners__background}>
          <Wave />
        </div>
        <div className={scss.partners__container}>
          <h2 className={scss.partners__title}>{t.sponsorsTitle}</h2>
          <div className={scss.partners__iconBlood}>
            <IconBloodCell />
          </div>
        </div>
        <div className={scss.partners__wrapper}>
          <div className={scss.partners__box}>
            <Slider array={partnersList} reverse={false} />
          </div>
          <div className={scss.partners__box}>
            <Slider array={partnersList} reverse={true} />
          </div>
        </div>
      </section>
    </>
  );
};

export default Partners;
