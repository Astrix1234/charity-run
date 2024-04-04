import CookieConsent from 'react-cookie-consent';
import { useCookieConsentStore } from '../../Zustand/useCookieConsentStore';

const CookieBanner = () => {
  const { setShowConsent } = useCookieConsentStore();

  return (
    <CookieConsent
      enableDeclineButton
      onAccept={() => setShowConsent(false)}
      onDecline={() => setShowConsent(false)}
      overlay
      style={{
        backgroundColor: '#1ca2a7',
      }}
      buttonStyle={{
        backgroundColor: 'hsl(25, 98%, 54%)',
        color: 'white',
      }}
    >
      This website uses cookies to enhance the user experience.
    </CookieConsent>
  );
};

export default CookieBanner;
