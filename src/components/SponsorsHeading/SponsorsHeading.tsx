import BecomeSponsorButton from '../BecomeSponsorButton/BecomeSponsorButton';
import scss from './SponsorsHeading.module.scss';

function SponsorsHeading() {
  return (
    <div className={scss.container}>
      <h1 className={scss.heading}>
        <span className={scss.heading__sub}>
          Dziękujemy wszystkim sponsorom i partnerom
        </span>
        <span className={scss.heading__main}>Hematobiegu!</span>
      </h1>
      <BecomeSponsorButton />
    </div>
  );
}

export default SponsorsHeading;
