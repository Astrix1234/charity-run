import React from 'react';
import scss from './HematoRunAttractions.module.scss';
import IdNumber from '../IdNumber/IdNumber';
import attractions from '../../../public/images/attractions';
import { IconBloodCell } from '../../Icons/IconBloodCell/IconBloodCell';

const Attractions: React.FC = () => {
  return (
    <section className={scss.attractions__section}>
      <div className={scss.attractions__title}>
        <h1>Atrakcje dla uczestników</h1>
        <div>
          <IconBloodCell />
        </div>
      </div>
      <div className={scss.attractions__container}>
        {attractions.map(attraction => (
          <div className={scss.attraction__block} key={attraction.id}>
            <img
              src={attraction.imageUrl}
              alt={`Atrakcja ${attraction.id}`}
              className={scss.attraction__image}
            />
            <IdNumber number={attraction.id} />
            <div className={scss.attraction__name}>{attraction.name}</div>
            <div className={scss.attraction__name}>{attraction.name}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Attractions;
