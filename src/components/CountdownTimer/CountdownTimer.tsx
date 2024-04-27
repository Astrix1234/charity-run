import scss from './CountdownTimer.module.scss';

export const CountdownTimer = () => {
  return (
    <div className={scss.countdownTimer}>
      <div className={scss.countdownTimer__container}>COUNTDOWN TIMER</div>
    </div>
  );
};
