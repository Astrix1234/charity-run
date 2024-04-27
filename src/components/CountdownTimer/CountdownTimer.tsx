import scss from './CountdownTimer.module.scss';

export const CountdownTimer = () => {
  return (
    <section id="countdownTimer" className={scss.countdownTimer}>
      <div className={scss.countdownTimer__container}></div>;
    </section>
  );
};
