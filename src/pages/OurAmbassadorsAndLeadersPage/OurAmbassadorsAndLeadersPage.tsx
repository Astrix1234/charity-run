import { Helmet } from 'react-helmet-async';
import OurAmbassadors from '../../components/OurAmbassadorsAndLeaders/OurAmbassadorsAndLeaders';

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
