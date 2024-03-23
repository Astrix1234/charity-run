import scss from './HematoRunWhyIsItWorth.module.scss';
// import { Button } from '../Button/Button';
// import { useLanguageStore } from '../../Zustand/useLanguageStore';
// import translations from '../../translations';
// import { Link } from 'react-router-dom';
import { IconBloodCell } from '../IconBloodCell/IconBloodCell';

export const HematoRunWhyIsItWorth = () => {
  // const handleClick = () => {
  //   console.log('Button clicked');
  // };

  return (
    <section className={scss.whyIsItWorth}>
      <div className={scss.whyIsItWorth__container}>
        <div className={scss.whyIsItWorth__titleContainer}>
          <h2 className={scss.whyIsItWorth__title}>
            Dlaczego warto wziąć udział?
          </h2>
          <div>
            <IconBloodCell />
          </div>
        </div>
        <div className={scss.whyIsItWorth__listContainer}>
          <ul className={scss.whyIsItWorth__list}>
            <li
              className={`${scss['whyIsItWorth__item']} ${scss['whyIsItWorth__item-fundraising']}`}
            >
              <p>
                Twój udział przyczyni się do zebrania funduszy na badania,
                leczenie i wsparcie dla osób z białaczkami.
              </p>
            </li>
            <li
              className={`${scss['whyIsItWorth__item']} ${scss['whyIsItWorth__item-awareness']}`}
            >
              <p>
                Pomożesz nam zwiększyć świadomość społeczną na temat białaczek
                oraz innych chorób krwi.
              </p>
            </li>
            <li
              className={`${scss['whyIsItWorth__item']} ${scss['whyIsItWorth__item-opportunity']}`}
            >
              <p>
                Udział w biegu to doskonała okazja do aktywności fizycznej i
                zadbania o swoje zdrowie.
              </p>
            </li>
            <li
              className={`${scss['whyIsItWorth__item']} ${scss['whyIsItWorth__item-joy']}`}
            >
              <p>
                Poczujesz radość z pomagania innym, co przyniesie Ci ogromną
                satysfakcję
              </p>
            </li>
            <li
              className={`${scss['whyIsItWorth__item']} ${scss['whyIsItWorth__item-family']}`}
            >
              <p>
                Spędzisz miło i aktywnie czas z rodziną i ludźmi o podobnych
                wartościach i dobrym sercu.{' '}
              </p>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};
