import { Pagination } from '@mui/material';

import { useLanguageStore } from '../../Zustand/useLanguageStore';

import { images } from './Images';

import translations from './translations';
import scss from './Gallery.module.scss';

const Gallery: React.FC = () => {
  const { language } = useLanguageStore();
  const t = translations[language];
  return (
    <section className={scss.background}>
      <div className={scss.container}>
        <h2 className={scss.heading}>{t.heading}</h2>
        <div className={scss.gallery}>
          <ul className={scss.gallery__list}>
            {images.map((image, index) => (
              <li key={index}>
                <img
                  className={scss.gallery__img}
                  src={image.src}
                  alt={image.alt}
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
