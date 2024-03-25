import { useLanguageStore } from '../../Zustand/useLanguageStore';
import BecomeSponsorButton from '../BecomeSponsorButton/BecomeSponsorButton';
import SponsorsList from '../SponsorsList/SponsorsList';
import scss from './SponsorsGallery.module.scss';
import translations from './translations';

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
  const { language } = useLanguageStore();
  const t = translations[language];
  return (
    <section className={scss.section}>
      <h2 className={scss.heading}>{t.heading}</h2>
      <div className={scss.lists}>
        <SponsorsList
          list={sponsorsList}
          heading={language === 'PL' ? 'sponsorzy' : 'sponsors'}
        />
        <SponsorsList
          list={partnersList}
          heading={language === 'PL' ? 'partnerzy' : 'partners'}
        />
      </div>
      <BecomeSponsorButton />
    </section>
  );
}

export default SponsorsGallery;
