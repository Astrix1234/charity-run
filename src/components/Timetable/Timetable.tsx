import scss from './Timetable.module.scss';
import { useLanguageStore } from '../../Zustand/useLanguageStore';
import translations from './translations';
import { IconBloodCell } from '../../Icons/IconBloodCell/IconBloodCell';
import { IconLine } from '../../Icons/TimetableIcons/IconLine/IconLine';
import { IconLineMobile } from '../../Icons/TimetableIcons/IconLineMobile/IconLineMobile';
import { useCreateData } from './useCreateData';
import { IconEnd } from '../../Icons/TimetableIcons/IconEnd/IconEnd';
import { IconFoot } from '../../Icons/TimetableIcons/IconFoot/IconFoot';
import { useMediaQuery } from 'react-responsive';

export const Timetable = () => {
  const { language } = useLanguageStore();
  const t = translations[language];
  const data = useCreateData();
  const array = [
    <IconFoot />,
    <IconFoot />,
    <IconFoot />,
    <IconFoot />,
    <IconFoot />,
  ];

  const isDesktop = useMediaQuery({ minWidth: 1360 });

  return (
    <section id="timetable" className={scss.timetable}>
      <div className={scss.timetable__container}>
        <div className={scss.timetable__titleContainer}>
          <div className={scss.timetable__titleIcon}>
            <h2 className={scss.timetable__title}>{t.timeTable}</h2>
            <div className={scss.timetable__titleBlood}>
              <IconBloodCell />
            </div>
          </div>
          <p className={scss.timetable__time}>26.05.2024 ({t.sunday})</p>
        </div>
        <div className={scss.timetable__line}>
          {isDesktop ? <IconLine /> : <IconLineMobile />}
        </div>
        {data.map((item, index) => (
          <div
            key={index}
            className={`${scss.timetable__element} ${
              scss[`timetable__element${index}`]
            }`}
          >
            <div className={scss.timetable__icon}>{item.icon}</div>
            <div
              className={scss.timetable__comment}
              dangerouslySetInnerHTML={{ __html: item.comment }}
            ></div>
            <p className={scss.timetable__place}>{item.place}</p>
            <p className={scss.timetable__address}>{item.address}</p>
            <p className={scss.timetable__times}>{item.time}</p>
            <p className={scss.timetable__hours}>{item.hours}</p>
          </div>
        ))}
        <div
          className={`${scss.timetable__element} ${scss.timetable__element5}`}
        >
          <div className={scss.timetable__icon}>
            <IconEnd />
          </div>
          <p className={scss.timetable__comment}>{t.end}</p>
          <p className={scss.timetable__hours}>19.00</p>
        </div>
        {isDesktop &&
          array.map((item, index) => (
            <div key={index} className={scss[`timetable__icon${index}`]}>
              {item}
            </div>
          ))}
      </div>
    </section>
  );
};
