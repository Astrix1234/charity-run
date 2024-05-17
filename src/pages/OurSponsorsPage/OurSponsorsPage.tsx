import { Helmet } from 'react-helmet-async';
import OurSponsors from '../../components/SponsorAll/OurSponsors/OurSponsors';

export default function OurSponsorsPage() {
  return (
    <>
      <Helmet>
        <title>Our Donors</title>
      </Helmet>
      <OurSponsors />
    </>
  );
}
