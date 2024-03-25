import { Helmet } from 'react-helmet-async';
import OurSponsors from '../../components/OurSponsors/OurSponsors';

export default function OurSponsorsPage() {
  return (
    <div>
      <Helmet>
        <title>Sponsorzy i Partnerzy</title>
      </Helmet>
      <OurSponsors />
    </div>
  );
}
