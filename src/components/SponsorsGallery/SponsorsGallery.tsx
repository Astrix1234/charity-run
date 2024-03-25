import BecomeSponsorButton from '../BecomeSponsorButton/BecomeSponsorButton';
import SponsorsList from '../SponsorsList/SponsorsList';
import scss from './SponsorsGallery.module.scss';

const sponsorsList = [
  { name: 'Biesiada Catering', url: './images/sponsors/sponsor-1.png' },
  { name: 'Creative Flow', url: './images/sponsors/sponsor-2.png' },
  { name: 'Zoo Borysew', url: './images/sponsors/sponsor-3.png' },
  { name: 'Fizjobella', url: './images/sponsors/sponsor-4.png' },
];

const partnersList = [
  { name: 'Amgen', url: './images/partners/partner-1.png' },
  { name: 'GFT', url: './images/partners/partner-2.png' },
  { name: 'Business Law House', url: './images/partners/partner-3.png' },
];

function SponsorsGallery() {
  return (
    <section className={scss.section}>
      <h2 className={scss.heading}>Nasi sponsorzy i partnerzy</h2>
      <div className={scss.lists}>
        <SponsorsList list={sponsorsList} heading="sponsorzy" />
        <SponsorsList list={partnersList} heading="partnerzy" />
      </div>
      <BecomeSponsorButton />
    </section>
  );
}

export default SponsorsGallery;
