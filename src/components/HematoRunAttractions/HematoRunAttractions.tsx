import React from 'react';
import scss from './HematoRunAttractions.module.scss';
import NumberCircle from '../NumberCircle/NumberCircle';
import { IconBloodCell } from '../../Icons/IconBloodCell/IconBloodCell';
import { useLanguageStore } from '../../Zustand/useLanguageStore';
import translations from './translations';

const attractions = [
  {
    id: 1,
    name: '/Piknik rodzinny',
    url: './images/attractions/Attractions-img1.jpg',
  },
  {
    id: 2,
    name: '/Spotkania ze sportowcami',
    url: './images/attractions/Attractions-img2.jpg',
  },
  {
    id: 3,
    name: '/Scena muzyczna',
    url: './images/attractions/Attractions-img3.jpg',
  },
  {
    id: 4,
    name: '/Strefa gastro',
    url: './images/attractions/Attractions-img4.jpg',
  },
];

const Attractions: React.FC = () => {
  const { language } = useLanguageStore();
  const t = translations[language];

  return (
    <section className={scss.attractions__section}>
      <div className={scss.attractions__title}>
        <h1>{t.attractionsTitle}</h1>
        <div>
          <IconBloodCell />
        </div>
      </div>
      <div className={scss.attractions__container}>
        {attractions.map((attraction, index) => (
          <div className={scss.attraction__block} key={attraction.id}>
            <img
              src={attraction.url}
              alt={`${t.attractionNames[index]}`}
              className={scss.attraction__image}
            />
            <NumberCircle number={attraction.id} />
            <div className={scss.attraction__name}>
              {t.attractionNames[index]}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Attractions;
