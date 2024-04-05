import CookieConsent from 'react-cookie-consent';
import { useCookieConsentStore } from '../../Zustand/useCookieConsentStore';
import { useLanguageStore } from '../../Zustand/useLanguageStore';

import translations from './translations';

const CookieBanner = () => {
  const { setShowConsent } = useCookieConsentStore();
  const { language } = useLanguageStore();
  const t = translations[language];

  return (
    <CookieConsent
      enableDeclineButton
      onAccept={() => setShowConsent(false)}
      onDecline={() => setShowConsent(false)}
      overlay
      expires={30}
      style={{
        backgroundColor: '#1ca2a7',
        fontSize: '13px',
        opacity: '0.9',
      }}
      buttonStyle={{
        backgroundColor: 'hsl(25, 98%, 54%)',
        color: 'white',
      }}
      buttonText={t.buttonText}
      declineButtonText={t.declineButtonText}
    >
      {t.text}
    </CookieConsent>
  );
};

export default CookieBanner;
