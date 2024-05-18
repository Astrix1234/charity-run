import { Helmet } from 'react-helmet-async';
import SupportDonation from '../../components/DonationAll/SupportDonation/SupportDonation';

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
