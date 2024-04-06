// import scss from './HematoRunWhyIsItWorth.module.scss';
// import { Button } from '../Button/Button';
// import { useLanguageStore } from '../../Zustand/useLanguageStore';
// import translations from './translations';
// import { IconBloodCell } from '../../Icons/IconBloodCell/IconBloodCell';
// import { IconNumberOne } from '../../Icons/IconNumbers/IconNumberOne/IconNumberOne';
// import { IconNumberTwo } from '../../Icons/IconNumbers/IconNumberTwo/IconNumberTwo';
// import { IconNumberThree } from '../../Icons/IconNumbers/IconNumberThree/IconNumberThree';
// import { IconNumberFour } from '../../Icons/IconNumbers/IconNumberFour/IconNumberFour';
// import { IconNumberFive } from '../../Icons/IconNumbers/IconNumberFive/IconNumberFive';
// import { IconWavyArrowDown } from '../../Icons/IconWavyArrowDown/IconWavyArrowDown';
// import { useNavigate } from 'react-router';
// import { useIsLoginStore } from '../../Zustand/useIsLoginStore';

// export const HematoRunWhyIsItWorth = () => {
//   const { language } = useLanguageStore();
//   const t = translations[language];
//   const navigate = useNavigate();
//   const { isLogin } = useIsLoginStore();

//   const handleClick = () => {
//     isLogin ? navigate('/run-registration') : navigate('/login');
//   };

//   return (
//     <section className={scss.whyIsItWorth}>
//       <div className={scss.whyIsItWorth__container}>
//         <div className={scss.whyIsItWorth__IconBg}>
//           {' '}
//           <IconWavyArrowDown />
//         </div>
//         <div className={scss.whyIsItWorth__titleContainer}>
//           <h2 className={scss.whyIsItWorth__title}>{t.title}</h2>
//           <div className={scss.whyIsItWorth__iconBlood}>
//             <IconBloodCell />
//           </div>
//         </div>
//         <div className={scss.whyIsItWorth__listContainer}>
//           <ul className={scss.whyIsItWorth__list}>
//             <li
//               className={`${scss['whyIsItWorth__item']} ${scss['whyIsItWorth__item-fundraising']}`}
//             >
//               <p className={scss.whyIsItWorth__itemText}>{t.fundraising}</p>
//               <div>
//                 <IconNumberOne />
//               </div>
//             </li>
//             <li
//               className={`${scss['whyIsItWorth__item']} ${scss['whyIsItWorth__item-awareness']}`}
//             >
//               <div>
//                 <IconNumberTwo />
//               </div>
//               <p className={scss.whyIsItWorth__itemText}>{t.awareness}</p>
//             </li>
//             <li
//               className={`${scss['whyIsItWorth__item']} ${scss['whyIsItWorth__item-opportunity']}`}
//             >
//               <p className={scss.whyIsItWorth__itemText}>{t.opportunity}</p>
//               <div>
//                 {' '}
//                 <IconNumberThree />
//               </div>
//             </li>
//             <li
//               className={`${scss['whyIsItWorth__item']} ${scss['whyIsItWorth__item-joy']}`}
//             >
//               <div>
//                 {' '}
//                 <IconNumberFour />
//               </div>{' '}
//               <p className={scss.whyIsItWorth__itemText}>{t.joy}</p>
//             </li>
//             <li
//               className={`${scss['whyIsItWorth__item']} ${scss['whyIsItWorth__item-family']}`}
//             >
//               <p className={scss.whyIsItWorth__itemText}>{t.family}</p>
//               <div>
//                 <IconNumberFive />
//               </div>
//             </li>
//           </ul>
//         </div>
//         <div className={scss.whyIsItWorth__button}>
//           <Button onClick={handleClick} content={t.button} />
//         </div>
//       </div>
//     </section>
//   );
// };

// import scss from './HematoRunWhyIsItWorth.module.scss';
// import { Button } from '../Button/Button';
// import { useLanguageStore } from '../../Zustand/useLanguageStore';
// import translations from './translations';
// import { IconBloodCell } from '../../Icons/IconBloodCell/IconBloodCell';
// // import { IconNumberOne } from '../../Icons/IconNumbers/IconNumberOne/IconNumberOne';
// // import { IconNumberTwo } from '../../Icons/IconNumbers/IconNumberTwo/IconNumberTwo';
// // import { IconNumberThree } from '../../Icons/IconNumbers/IconNumberThree/IconNumberThree';
// // import { IconNumberFour } from '../../Icons/IconNumbers/IconNumberFour/IconNumberFour';
// // import { IconNumberFive } from '../../Icons/IconNumbers/IconNumberFive/IconNumberFive';
// import { IconWavyArrowDown } from '../../Icons/IconWavyArrowDown/IconWavyArrowDown';
// import { useNavigate } from 'react-router';
// import { useIsLoginStore } from '../../Zustand/useIsLoginStore';
// import NumberCircle from '../NumberCircle/NumberCircle';

// export const HematoRunWhyIsItWorth = () => {
//   const { language } = useLanguageStore();
//   const t = translations[language];
//   const navigate = useNavigate();
//   const { isLogin } = useIsLoginStore();

//   const handleClick = () => {
//     isLogin ? navigate('/run-registration') : navigate('/login');
//   };

//   return (
//     <section className={scss.whyIsItWorth}>
//       <div className={scss.whyIsItWorth__container}>
//         <div className={scss.whyIsItWorth__IconBg}>
//           {' '}
//           <IconWavyArrowDown />
//         </div>
//         <div className={scss.whyIsItWorth__titleContainer}>
//           <h2 className={scss.whyIsItWorth__title}>{t.title}</h2>
//           <div className={scss.whyIsItWorth__iconBlood}>
//             <IconBloodCell />
//           </div>
//         </div>
//         <div className={scss.whyIsItWorth__listContainer}>
//           <ul className={scss.whyIsItWorth__list}>
//             <li
//               className={`${scss['whyIsItWorth__item']} ${scss['whyIsItWorth__item-fundraising']} ${scss['whyIsItWorth__itemOdd']}`}
//             >
//               <p className={scss.whyIsItWorth__itemText}>{t.fundraising}</p>
//               <div className={scss.whyIsItWorth__itemNumber}>
//                 <NumberCircle number={1} />
//               </div>
//             </li>
//             <li
//               className={`${scss['whyIsItWorth__item']} ${scss['whyIsItWorth__item-awareness']} ${scss['whyIsItWorth__itemEven']}`}
//             >
//               <div className={scss.whyIsItWorth__itemNumber}>
//                 <NumberCircle number={2} />
//               </div>
//               <p className={scss.whyIsItWorth__itemText}>{t.awareness}</p>
//             </li>
//             <li
//               className={`${scss['whyIsItWorth__item']} ${scss['whyIsItWorth__item-opportunity']} ${scss['whyIsItWorth__itemOdd']}`}
//             >
//               <p className={scss.whyIsItWorth__itemText}>{t.opportunity}</p>
//               <div className={scss.whyIsItWorth__itemNumber}>
//                 <NumberCircle number={3} />
//               </div>
//             </li>
//             <li
//               className={`${scss['whyIsItWorth__item']} ${scss['whyIsItWorth__item-joy']} ${scss['whyIsItWorth__itemEven']}`}
//             >
//               <div className={scss.whyIsItWorth__itemNumber}>
//                 <NumberCircle number={4} />
//               </div>
//               <p className={scss.whyIsItWorth__itemText}>{t.joy}</p>
//             </li>
//             <li
//               className={`${scss['whyIsItWorth__item']} ${scss['whyIsItWorth__item-family']} ${scss['whyIsItWorth__itemOdd']}`}
//             >
//               <p className={scss.whyIsItWorth__itemText}>{t.family}</p>
//               <div className={scss.whyIsItWorth__itemNumber}>
//                 <NumberCircle number={5} />
//               </div>
//             </li>
//           </ul>
//         </div>
//         <div className={scss.whyIsItWorth__button}>
//           <Button onClick={handleClick} content={t.button} />
//         </div>
//       </div>
//     </section>
//   );
// };

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
import { useNavigate } from 'react-router';
import { useIsLoginStore } from '../../Zustand/useIsLoginStore';
import { IconWavyArrowDownMobile } from '../../Icons/IconWavyArrowDownMobile/IconWavyArrowDownMobile';

export const HematoRunWhyIsItWorth = () => {
  const { language } = useLanguageStore();
  const t = translations[language];
  const navigate = useNavigate();
  const { isLogin } = useIsLoginStore();

  const handleClick = () => {
    isLogin ? navigate('/run-registration') : navigate('/login');
  };

  return (
    <section className={scss.whyIsItWorth}>
      <div className={scss.whyIsItWorth__container}>
        <div className={scss.whyIsItWorth__IconBg}>
          <IconWavyArrowDown />
        </div>
        <div className={scss.whyIsItWorth__IconBgMobile}>
          <IconWavyArrowDownMobile />
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
              className={`${scss['whyIsItWorth__item']} ${scss['whyIsItWorth__item-fundraising']} ${scss['whyIsItWorth__itemOdd']}`}
            >
              <p className={scss.whyIsItWorth__itemText}>{t.fundraising}</p>
              <div className={scss.whyIsItWorth__itemNumber}>
                <IconNumberOne />
              </div>
            </li>
            <li
              className={`${scss['whyIsItWorth__item']} ${scss['whyIsItWorth__item-awareness']} ${scss['whyIsItWorth__itemEven']}`}
            >
              <div className={scss.whyIsItWorth__itemNumber}>
                <IconNumberTwo />
              </div>
              <p className={scss.whyIsItWorth__itemText}>{t.awareness}</p>
            </li>
            <li
              className={`${scss['whyIsItWorth__item']} ${scss['whyIsItWorth__item-opportunity']} ${scss['whyIsItWorth__itemOdd']}`}
            >
              <p className={scss.whyIsItWorth__itemText}>{t.opportunity}</p>
              <div className={scss.whyIsItWorth__itemNumber}>
                <IconNumberThree />
              </div>
            </li>
            <li
              className={`${scss['whyIsItWorth__item']} ${scss['whyIsItWorth__item-joy']} ${scss['whyIsItWorth__itemEven']}`}
            >
              <div className={scss.whyIsItWorth__itemNumber}>
                <IconNumberFour />
              </div>
              <p className={scss.whyIsItWorth__itemText}>{t.joy}</p>
            </li>
            <li
              className={`${scss['whyIsItWorth__item']} ${scss['whyIsItWorth__item-family']} ${scss['whyIsItWorth__itemOdd']}`}
            >
              <p className={scss.whyIsItWorth__itemText}>{t.family}</p>
              <div className={scss.whyIsItWorth__itemNumber}>
                <IconNumberFive />
              </div>
            </li>
          </ul>
        </div>
        <div className={scss.whyIsItWorth__button}>
          <Button onClick={handleClick} content={t.button} />
        </div>
      </div>
    </section>
  );
};
