import Slider from '../Slider/Slider';
import scss from './Gallery.module.scss';

const Gallery = () => {
  const galleryList = [
    <div className={scss.gallery__box}>
      <img
        className={scss.gallery__img}
        src="images/gallery/slider1.webp"
        alt="slider1"
      />
    </div>,
    <div className={scss.gallery__box}>
      <img
        className={scss.gallery__img}
        src="images/gallery/slider2.webp"
        alt="slider2"
      />
    </div>,
    <div className={scss.gallery__box}>
      <img
        className={scss.gallery__img}
        src="images/gallery/slider3.webp"
        alt="slider3"
      />
    </div>,
    <div className={scss.gallery__box}>
      <img
        className={scss.gallery__img}
        src="images/gallery/slider4.webp"
        alt="slider4"
      />
    </div>,
  ];

  return (
    <section id="gallery">
      <Slider array={galleryList} />;
    </section>
  );
};

export default Gallery;
