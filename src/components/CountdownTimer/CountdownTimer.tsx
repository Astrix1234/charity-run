import scss from './CountdownTimer.module.scss';

export const CountdownTimer = () => {
  return (
    <div className={scss.countdownTimer}>
      <div className={scss.countdownTimer__container}>
        <span className={scss.countdownTimer__text}>Dni</span>
        <span className={scss.countdownTimer__text}>Godzin</span>
        <span className={scss.countdownTimer__text}>Minut</span>
        <span className={scss.countdownTimer__number}>112</span>
        <span
          className={`${scss.countdownTimer__semi} ${scss.countdownTimer__number}`}
        >
          12
        </span>
        <span className={scss.countdownTimer__number}>12</span>
      </div>
    </div>
  );
};
