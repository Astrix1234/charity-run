import 'react-responsive-modal/styles.css';
import './custom-styling.css';

import { useLanguageStore } from '../../Zustand/useLanguageStore';
import translations from './translations';
import scss from './HematoRunRoute.module.scss';
import { IconArrow } from '../../Icons/IconArrow/IconArrow';
import { IconBgDeco } from '../../Icons/IconBgDeco/IconBgDeco';
import { WaveCreme } from '../../Icons/WaveCremeBackground/WaveCreme';

export const HematoRunRoute = () => {
  //translation
  const { language } = useLanguageStore();
  const t = translations[language];
  return (
    <section id="runroute" className={scss.section}>
      <div aria-hidden="true" className={scss.background}>
        <WaveCreme />
      </div>
      <div className={scss.header}>
        <h2 className={scss.header__text}>{t.heading}</h2>
        <IconArrow />
      </div>
      <div className={scss.map__container}>
        <img className={scss.map} src="images/mapaRun.png" about="run route" />
      </div>
      <div className={scss.backgroundIcon}>
        <IconBgDeco />
      </div>
    </section>
  );
};
