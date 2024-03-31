import { useLanguageStore } from '../../Zustand/useLanguageStore';

import translations from './translations';
import scss from './Gallery.module.scss';

const Gallery = () => {
  const { language } = useLanguageStore();
  const t = translations[language];
  return (
    <section className={scss.background}>
      <div className={scss.container}>
        <h2 className={scss.heading}>{t.heading}</h2>
        <div className={scss.gallery}>
          <ul className={scss.gallery__list}>
            <li className={scss.gallery__item}></li>
            <li className={scss.gallery__item}></li>
            <li className={scss.gallery__item}></li>
            <li className={scss.gallery__item}></li>
            <li className={scss.gallery__item}></li>
            <li className={scss.gallery__item}></li>
            <li className={scss.gallery__item}></li>
            <li className={scss.gallery__item}></li>
            <li className={scss.gallery__item}></li>
            <li className={scss.gallery__item}></li>
            <li className={scss.gallery__item}></li>
            <li className={scss.gallery__item}></li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
