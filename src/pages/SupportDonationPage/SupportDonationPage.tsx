import { Helmet } from 'react-helmet-async';
import SupportDonation from '../../components/SupportDonation/SupportDonation';

export default function SupportDonationPage() {
  return (
    <>
      <Helmet>
        <title>Please Support</title>
      </Helmet>
      <SupportDonation />
    </>
  );
}
