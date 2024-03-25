import { useLanguageStore } from '../../Zustand/useLanguageStore';

import translations from './translations';

import scss from './HematoRunRoute.module.scss';

import { IconArrow } from '../../Icons/IconArrow/IconArrow';
import { IconBgDeco } from '../../Icons/IconBgDeco/IconBgDeco';
import runRoute from '../../assets/Images/hematoRunRoute/hematoRunRoute.webp';

export const HematoRunRoute = () => {
  const { language } = useLanguageStore();
  const t = translations[language];
  return (
    <section>
      <div className={scss.header}>
        <h2 className={scss.header__text}>{t.heading}</h2>
        <IconArrow />
      </div>
      <div className={scss.background}>
        <div className={scss.map__container}>
          <img className={scss.map} src={runRoute} about="run route" />
        </div>
        <div className={scss.backgroundIcon}>
          <IconBgDeco />
        </div>
      </div>
    </section>
  );
};
