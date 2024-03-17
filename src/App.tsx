import { lazy, useEffect } from 'react';
import { HelmetProvider } from 'react-helmet-async';
import { Route, Routes } from 'react-router-dom';
import { Layout } from './components/Layout/Layout';
import { useLanguageStore } from './Zustand/useLanguageStore';

const HomePage = lazy(() => import('./pages/HomePage/HomePage'));
const LoginPage = lazy(() => import('./pages/LoginPage/LoginPage'));
const RegisterPage = lazy(() => import('./pages/RegisterPage/RegisterPage'));
const ParticipantAreaPage = lazy(
  () => import('./pages/ParticipantAreaPage/ParticipantAreaPage')
);
const PleaseSupportPage = lazy(
  () => import('./pages/PleaseSupportPage/PleaseSupportPage')
);
const ContactPage = lazy(() => import('./pages/ContactPage/ContactPage'));

function App() {
  const { language, setLanguage } = useLanguageStore(state => ({
    language: state.language,
    setLanguage: state.setLanguage,
  }));

  useEffect(() => {
    localStorage.setItem('language', language);
  }, [language]);

  useEffect(() => {
    const storedLanguage = localStorage.getItem('language');
    if (storedLanguage === 'PL' || storedLanguage === 'EN') {
      setLanguage(storedLanguage);
    }
  }, [setLanguage]);

  return (
    <HelmetProvider>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="register" element={<RegisterPage />} />
          <Route path="participant-area" element={<ParticipantAreaPage />} />
          <Route path="please-support" element={<PleaseSupportPage />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="*" element={<HomePage />} />
        </Route>
      </Routes>
    </HelmetProvider>
  );
}

export default App;
