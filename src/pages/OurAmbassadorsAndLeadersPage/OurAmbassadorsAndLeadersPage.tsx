import { Helmet } from 'react-helmet-async';
import OurAmbassadorsAndLeaders from '../../components/AmbassadorsAndLeadersAll/OurAmbassadorsAndLeaders/OurAmbassadorsAndLeaders';

export default function OurAmbassadorsAndLeadersPage() {
  return (
    <>
      <Helmet>
        <title>OurAmbassadorsAndLeadersPage</title>
      </Helmet>
      <OurAmbassadorsAndLeaders />
    </>
  );
}
