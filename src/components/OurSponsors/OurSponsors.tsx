import SponsorsGallery from '../SponsorsGallery/SponsorsGallery';
import SponsorsHero from '../SponsorsHero/SponsorsHero';
import scss from './OurSponsors.module.scss';

function OurSponsors() {
  return (
    <div className={scss.container}>
      <SponsorsHero />
      <SponsorsGallery />
    </div>
  );
}

export default OurSponsors;
