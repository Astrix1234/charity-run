import React from 'react';
import scss from './HematoRunAttractions.module.scss';
import NumberCircle from '../NumberCircle/NumberCircle';
import { IconBloodCell } from '../../Icons/IconBloodCell/IconBloodCell';
import { useLanguageStore } from '../../Zustand/useLanguageStore';
import translations from './translations';
import { IconBgAttractions } from '../../Icons/IconBgAttractions/IconBgAttractions';

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
    <section id="attractions" className={scss.attractions}>
      <div className={scss.attractions__container}>
        <div className={scss.attractions__title}>
          <h1 className={scss.attractions__header}>{t.attractionsTitle}</h1>
          <div>
            <IconBloodCell />
          </div>
        </div>
        <div className={scss.attractions__containerItems}>
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
      </div>
      <div className={scss.attractions__backgroundIcon}>
        <IconBgAttractions />
      </div>
    </section>
  );
};

export default Attractions;
