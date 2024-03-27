import { Helmet } from 'react-helmet-async';
import OurAmbassadors from '../../components/OurAmbassadors/OurAmbassadors';
import { useLanguageStore } from '../../Zustand/useLanguageStore';
import translations from './translations';

export default function OurAmbassadorsPage() {
  const { language } = useLanguageStore();
  const t = translations[language];

  return (
    <>
      <Helmet>
        <title>{t.title}</title>
      </Helmet>
      <OurAmbassadors />
    </>
  );
}
