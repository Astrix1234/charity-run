import SponsorsHero from '../SponsorsHero/SponsorsHero';
import scss from './OurSponsors.module.scss';

function OurSponsors() {
  return (
    <div className={scss.container}>
      <SponsorsHero />
    </div>
  );
}

export default OurSponsors;
