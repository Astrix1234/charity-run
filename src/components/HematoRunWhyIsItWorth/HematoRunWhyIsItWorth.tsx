import scss from './HematoRunWhyIsItWorth.module.scss';
import { Button } from '../Button/Button';
import { useLanguageStore } from '../../Zustand/useLanguageStore';
import translations from './translations';
import { Link } from 'react-router-dom';
import { IconBloodCell } from '../IconBloodCell/IconBloodCell';

export const HematoRunWhyIsItWorth = () => {
  const { language } = useLanguageStore();
  const t = translations[language];

  const handleClick = () => {
    console.log('Button clicked');
  };

  return (
    <section className={scss.whyIsItWorth}>
      <div className={scss.whyIsItWorth__container}>
        <div className={scss.whyIsItWorth__titleContainer}>
          <h2 className={scss.whyIsItWorth__title}>{t.title}</h2>
          <div className={scss.whyIsItWorth__icon}>
            <IconBloodCell />
          </div>
        </div>
        <div className={scss.whyIsItWorth__listContainer}>
          <ul className={scss.whyIsItWorth__list}>
            <li
              className={`${scss['whyIsItWorth__item']} ${scss['whyIsItWorth__item-fundraising']}`}
            >
              <p>{t.fundraising}</p>
            </li>
            <li
              className={`${scss['whyIsItWorth__item']} ${scss['whyIsItWorth__item-awareness']}`}
            >
              <p>{t.awareness}</p>
            </li>
            <li
              className={`${scss['whyIsItWorth__item']} ${scss['whyIsItWorth__item-opportunity']}`}
            >
              <p>{t.opportunity}</p>
            </li>
            <li
              className={`${scss['whyIsItWorth__item']} ${scss['whyIsItWorth__item-joy']}`}
            >
              <p>{t.joy}</p>
            </li>
            <li
              className={`${scss['whyIsItWorth__item']} ${scss['whyIsItWorth__item-family']}`}
            >
              <p>{t.family}</p>
            </li>
          </ul>
        </div>
        <div className={scss.whyIsItWorth__button}>
          <Button onClick={handleClick} content={t.button} />
        </div>{' '}
      </div>
    </section>
  );
};
