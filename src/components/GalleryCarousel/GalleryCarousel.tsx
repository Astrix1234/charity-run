import { Link } from 'react-router-dom';
import { useLanguageStore } from '../../Zustand/useLanguageStore';
import Slider from '../Slider/Slider';
import scss from './GalleryCarousel.module.scss';
import translations from './translations';

const GalleryCarousel = () => {
  const { language } = useLanguageStore();
  const t = translations[language];

  const galleryList = [
    <div className={scss.gallery__box}>
      <img
        className={scss.gallery__img}
        src="images/gallery/slider1.webp"
        alt="slider1"
        loading="lazy"
      />
    </div>,
    <div className={scss.gallery__box}>
      <img
        className={scss.gallery__img}
        src="images/gallery/slider2.webp"
        alt="slider2"
        loading="lazy"
      />
    </div>,
    <div className={scss.gallery__box}>
      <img
        className={scss.gallery__img}
        src="images/gallery/slider3.webp"
        alt="slider3"
        loading="lazy"
      />
    </div>,
    <div className={scss.gallery__box}>
      <img
        className={scss.gallery__img}
        src="images/gallery/slider4.webp"
        alt="slider4"
        loading="lazy"
      />
    </div>,
  ];

  return (
    <section id="gallery" className={scss.gallery}>
      <Slider array={galleryList} reverse={false} />
      <Link className={scss.gallery__link} to="/gallery">
        <p className={scss.gallery__placeholder}>{t.seeGallery}</p>
      </Link>
    </section>
  );
};

export default GalleryCarousel;
