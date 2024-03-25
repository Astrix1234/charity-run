import { lazy, useEffect } from 'react';
import { HelmetProvider } from 'react-helmet-async';
import { Route, Routes, useLocation } from 'react-router-dom';
import { Layout } from './components/Layout/Layout';
import { useLanguageStore } from './Zustand/useLanguageStore';
import { useLocationStore } from './Zustand/useLocationStore';

const HomePage = lazy(() => import('./pages/HomePage/HomePage'));
const LoginPage = lazy(() => import('./pages/LoginPage/LoginPage'));
const RegisterPage = lazy(() => import('./pages/RegisterPage/RegisterPage'));
const RegulationsPage = lazy(
  () => import('./pages/RegulationsPage/RegulationsPage')
);
const OurAmbassadorsPage = lazy(
  () => import('./pages/OurAmbassadorsPage/OurAmbassadorsPage')
);
const OurSponsorsPage = lazy(
  () => import('./pages/OurSponsorsPage/OurSponsorsPage')
);
const ParticipantAreaPage = lazy(
  () => import('./pages/ParticipantAreaPage/ParticipantAreaPage')
);
const PleaseSupportPage = lazy(
  () => import('./pages/SupportSponsorsPage/SupportSponsorsPage')
);
const SupportDonationPage = lazy(
  () => import('./pages/SupportDonationPage/SupportDonationPage')
);
const SupportVolunteersPage = lazy(
  () => import('./pages/SupportVolunteersPage/SupportVolunteersPage')
);
const ContactPage = lazy(() => import('./pages/ContactPage/ContactPage'));

function App() {
  const { language, setLanguage } = useLanguageStore(state => ({
    language: state.language,
    setLanguage: state.setLanguage,
  }));
  const location = useLocation();
  const { setPath } = useLocationStore();

  useEffect(() => {
    localStorage.setItem('language', language);
  }, [language]);

  useEffect(() => {
    const storedLanguage = localStorage.getItem('language');
    if (storedLanguage === 'PL' || storedLanguage === 'EN') {
      setLanguage(storedLanguage);
    }
  }, [setLanguage]);

  useEffect(() => {
    setPath(location.pathname + location.hash);
  }, [location, setPath]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <HelmetProvider>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="register" element={<RegisterPage />} />
          <Route path="regulations" element={<RegulationsPage />} />
          <Route path="our-ambassadors" element={<OurAmbassadorsPage />} />
          <Route path="our-sponsors" element={<OurSponsorsPage />} />
          <Route path="participant-area" element={<ParticipantAreaPage />} />
          <Route path="support-sponsors" element={<PleaseSupportPage />} />
          <Route path="support-donation" element={<SupportDonationPage />} />
          <Route
            path="support-volunteers"
            element={<SupportVolunteersPage />}
          />
          <Route path="contact" element={<ContactPage />} />
          <Route path="*" element={<HomePage />} />
        </Route>
      </Routes>
    </HelmetProvider>
  );
}

export default App;
