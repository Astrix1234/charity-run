import scss from './HematoRunWhyIsItWorth.module.scss';
import { Button } from '../Button/Button';
import { useLanguageStore } from '../../Zustand/useLanguageStore';
import translations from './translations';
import { IconBloodCell } from '../../Icons/IconBloodCell/IconBloodCell';
import { IconNumberOne } from '../../Icons/IconNumbers/IconNumberOne/IconNumberOne';
import { IconNumberTwo } from '../../Icons/IconNumbers/IconNumberTwo/IconNumberTwo';
import { IconNumberThree } from '../../Icons/IconNumbers/IconNumberThree/IconNumberThree';
import { IconNumberFour } from '../../Icons/IconNumbers/IconNumberFour/IconNumberFour';
import { IconNumberFive } from '../../Icons/IconNumbers/IconNumberFive/IconNumberFive';
import { IconWavyArrowDown } from '../../Icons/IconWavyArrowDown/IconWavyArrowDown';

export const HematoRunWhyIsItWorth = () => {
  const { language } = useLanguageStore();
  const t = translations[language];

  const handleClick = () => {
    console.log('Button clicked');
  };

  return (
    <section className={scss.whyIsItWorth}>
      <div className={scss.whyIsItWorth__container}>
        <div className={scss.whyIsItWorth__IconBg}>
          {' '}
          <IconWavyArrowDown />
        </div>
        <div className={scss.whyIsItWorth__titleContainer}>
          <h2 className={scss.whyIsItWorth__title}>{t.title}</h2>
          <div className={scss.whyIsItWorth__iconBlood}>
            <IconBloodCell />
          </div>
        </div>
        <div className={scss.whyIsItWorth__listContainer}>
          <ul className={scss.whyIsItWorth__list}>
            <li
              className={`${scss['whyIsItWorth__item']} ${scss['whyIsItWorth__item-fundraising']}`}
            >
              <p>{t.fundraising}</p>
              <div>
                <IconNumberOne />
              </div>
            </li>
            <li
              className={`${scss['whyIsItWorth__item']} ${scss['whyIsItWorth__item-awareness']}`}
            >
              <div>
                <IconNumberTwo /> git pull
              </div>
              <p>{t.awareness}</p>
            </li>
            <li
              className={`${scss['whyIsItWorth__item']} ${scss['whyIsItWorth__item-opportunity']}`}
            >
              <p>{t.opportunity}</p>
              <div>
                {' '}
                <IconNumberThree />
              </div>
            </li>
            <li
              className={`${scss['whyIsItWorth__item']} ${scss['whyIsItWorth__item-joy']}`}
            >
              <div>
                {' '}
                <IconNumberFour />
              </div>{' '}
              <p>{t.joy}</p>
            </li>
            <li
              className={`${scss['whyIsItWorth__item']} ${scss['whyIsItWorth__item-family']}`}
            >
              <p>{t.family}</p>
              <div>
                <IconNumberFive />
              </div>
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
