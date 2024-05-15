import { useLanguageStore } from '../../Zustand/useLanguageStore';
import Slider from '../Slider/Slider';
import scss from './PartnersBar.module.scss';
import translations from './translations';

export const PartnersBar = () => {
  const { language } = useLanguageStore();
  const t = translations[language];
  const partnersLogos = [
    '../images/partners/partner-01.jpg',
    '../images/partners/partner-02.jpg',
    '../images/partners/partner-03.jpg',
    '../images/partners/partner-04.jpg',
    '../images/partners/partner-05.jpg',
    '../images/partners/partner-06.jpg',
    '../images/partners/partner-07.jpg',
    '../images/partners/partner-08.jpg',
    '../images/partners/partner-09.jpg',
    '../images/partners/partner-10.jpg',
  ];

  const partnersList = partnersLogos.map((logo, index) => (
    <img
      src={logo}
      key={index}
      className={scss.partnersBar__partnerLogo}
      alt={`partner logo ${index + 1}`}
    />
  ));

  return (
    <div className={scss.partnersBar__container}>
      <div className={scss.partnersBar__title}>{t.partners}</div>
      <Slider array={partnersList} reverse={false} />
    </div>
  );
};
