import { Helmet } from 'react-helmet-async';
import OurAmbassadors from '../../components/OurAmbassadors/OurAmbassadors';

export default function OurAmbassadorsPage() {
  return (
    <div>
      <Helmet>
        <title>Ambasadorzy</title>
      </Helmet>
      <OurAmbassadors />
    </div>
  );
}
