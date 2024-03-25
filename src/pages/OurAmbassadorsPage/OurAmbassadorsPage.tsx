import { Helmet } from 'react-helmet-async';
import OurAmbassadors from '../../components/OurAmbassadors/OurAmbassadors';

export default function OurAmbassadorsPage() {
  return (
    <div>
      <Helmet>
        <title>Our Ambassadors</title>
      </Helmet>
      <OurAmbassadors />
    </div>
  );
}
