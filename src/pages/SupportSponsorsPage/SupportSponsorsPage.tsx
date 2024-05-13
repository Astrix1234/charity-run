import { Helmet } from 'react-helmet-async';
import SupportSponsor from '../../components/SupportSponsor/SupportSponsor';
export default function SupporSponsorstPage() {
  return (
    <div>
      <Helmet>
        <title>Become a Donor</title>
      </Helmet>
      <SupportSponsor />
    </div>
  );
}
