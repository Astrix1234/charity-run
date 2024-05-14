import { Helmet } from 'react-helmet-async';
import OurSponsors from '../../components/OurSponsors/OurSponsors';

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
