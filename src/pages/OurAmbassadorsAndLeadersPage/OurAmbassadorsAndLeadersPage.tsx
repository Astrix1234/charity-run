import { Helmet } from 'react-helmet-async';
import OurAmbassadors from '../../components/OurAmbassadors/OurAmbassadorsAndLeaders';

export default function OurAmbassadorsAndLeadersPage() {
  return (
    <>
      <Helmet>
        <title>OurAmbassadorsAndLeadersPage</title>
      </Helmet>
      <OurAmbassadors />
    </>
  );
}
