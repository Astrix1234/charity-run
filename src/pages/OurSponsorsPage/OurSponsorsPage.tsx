import { Helmet } from 'react-helmet-async';
import OurSponsors from '../../components/OurSponsors/OurSponsors';
import { useLanguageStore } from '../../Zustand/useLanguageStore';
import translations from './translations';

export default function OurSponsorsPage() {
  const { language } = useLanguageStore();
  const t = translations[language];

  return (
    <>
      <Helmet>
        <title>{t.title}</title>
      </Helmet>
      <OurSponsors />
    </>
  );
}
