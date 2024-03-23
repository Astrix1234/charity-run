import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import scss from './HematoSliderTitle.module.scss';
import { Autoplay } from 'swiper/modules';
import { useLanguageStore } from '../../Zustand/useLanguageStore';
import translations from './translations';

export const HematoSliderTitle = () => {
  const { language } = useLanguageStore();
  const t = translations[language];

  return (
    <>
      <Swiper
        spaceBetween={5}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
        loop={true}
        className={scss.swiper}
      >
        <SwiperSlide>{t.run}</SwiperSlide>
        <SwiperSlide>{t.walk}</SwiperSlide>
        <SwiperSlide>{t.slippers}</SwiperSlide>
        <SwiperSlide>{t.mumsWithChildren}</SwiperSlide>
      </Swiper>
    </>
  );
};
