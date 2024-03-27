import { Helmet } from 'react-helmet-async';
import SupportDonation from '../../components/SupportDonation/SupportDonation';
import { useLanguageStore } from '../../Zustand/useLanguageStore';
import translations from './translations';

export default function SupportDonationPage() {
  const { language } = useLanguageStore();
  const t = translations[language];
  return (
    <>
      <Helmet>
        <title>{t.title}</title>
      </Helmet>
      <SupportDonation />
    </>
  );
}
