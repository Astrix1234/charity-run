import { lazy, useEffect } from 'react';
import { HelmetProvider } from 'react-helmet-async';
import { Route, Routes, useLocation } from 'react-router-dom';
import { Layout } from './components/Layout/Layout';
import { useLanguageStore } from './Zustand/useLanguageStore';
import { Loader } from './components/Loader/Loader';
import { useIsLoadingStore } from './Zustand/useIsLoadingStore';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useIsLoginStore } from './Zustand/useIsLoginStore';
import { getCurrentUser } from './Zustand/api';
import { useUserDataStore } from './Zustand/useUserDataStore';
import CookiesBanner from './components/CookiesBanner/CookiesBanner.tsx';

import RestorePasswordPage from './pages/RestorePasswordPage/RestorePasswordPage';
import NewPasswordPage from './pages/NewPasswordPage/NewPasswordPage';

const HomePage = lazy(() => import('./pages/HomePage/HomePage'));
const LoginPage = lazy(() => import('./pages/LoginPage/LoginPage'));
const RegisterPage = lazy(() => import('./pages/RegisterPage/RegisterPage'));
const RegistrationForRunPage = lazy(
  () => import('./pages/RegistrationForRunPage/RegistrationForRunPage')
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

const GalleryPage = lazy(() => import('./pages/GalleryPage/GalleryPage'));

function App() {
  const { language, setLanguage } = useLanguageStore(state => ({
    language: state.language,
    setLanguage: state.setLanguage,
  }));
  const { isLoading, setIsLoading } = useIsLoadingStore();
  const { setIsLogin } = useIsLoginStore();
  const { setUserData } = useUserDataStore();

  const location = useLocation();

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
    window.scrollTo(0, 0);
  }, [location.pathname]);

  useEffect(() => {
    if (location.hash) {
      setTimeout(() => {
        const id = location.hash.replace('#', '');
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  }, [location.hash]);

  useEffect(() => {
    const checkLogin = async () => {
      try {
        setIsLoading(true);
        const response = await getCurrentUser();
        console.log('Response:', response);
        if (response) {
          setIsLogin(true);
          setUserData(response);
        }
      } catch (error) {
        console.error('Error checking login:', error);
      } finally {
        setIsLoading(false);
      }
    };

    checkLogin();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <CookiesBanner />
      {isLoading && <Loader />}
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        style={{ marginTop: '150px' }}
      />
      <HelmetProvider>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="login" element={<LoginPage />} />
            <Route path="register" element={<RegisterPage />} />
            <Route path="restore-password" element={<RestorePasswordPage />} />
            <Route path="new-password" element={<NewPasswordPage />} />
            <Route
              path="run-registration"
              element={<RegistrationForRunPage />}
            />
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
            <Route path="gallery" element={<GalleryPage />} />
            <Route path="*" element={<HomePage />} />
          </Route>
        </Routes>
      </HelmetProvider>
    </>
  );
}

export default App;
