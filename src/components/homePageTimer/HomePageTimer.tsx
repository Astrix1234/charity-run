import { useEffect, useState } from 'react';
import { useLanguageStore } from '../../Zustand/useLanguageStore';
import scss from './HomePageTimer.module.scss';
import translations from './translations';
import {
  differenceInDays,
  differenceInHours,
  differenceInMinutes,
} from 'date-fns';

const eventDate = new Date('May 26, 2024 09:00:00');

type TimeRemaining = {
  days: number;
  hours: number;
  minutes: number;
};

function HomePageTimer() {
  const [timeRemaining, setTimeRemaining] = useState<TimeRemaining>({
    days: 0,
    hours: 0,
    minutes: 0,
  });

  useEffect(() => {
    const calculateTimeRemaining = (): TimeRemaining => {
      const currentDate = new Date();
      const difference = eventDate.getTime() - currentDate.getTime();

      //  If the event time has already passed, we return zero values
      if (difference <= 0) {
        return { days: 0, hours: 0, minutes: 0 };
      }

      const days = differenceInDays(eventDate, currentDate);
      const hours = differenceInHours(eventDate, currentDate) % 24;
      const minutes = differenceInMinutes(eventDate, currentDate) % 60;

      return { days, hours, minutes };
    };

    const updateRemainingTime = () => {
      setTimeRemaining(calculateTimeRemaining());
    };

    // Call the function that updates the remaining time at the start to initiate the countdown
    updateRemainingTime();

    const intervalId = setInterval(updateRemainingTime, 1000 * 60); // Updated every minute

    return () => clearInterval(intervalId);
  }, []);

  const { language } = useLanguageStore();
  const t = translations[language];
  const countdownText = `${timeRemaining.days} ${t.day} ${timeRemaining.hours} ${t.hour} : ${timeRemaining.minutes} ${t.minute}`;
  return (
    <div className={scss.container}>
      <div className={scss.col}>
        <p className={scss.heading}>{t.until}</p>
        <p className={scss.timer}>{countdownText}</p>
      </div>
    </div>
  );
}

export default HomePageTimer;
