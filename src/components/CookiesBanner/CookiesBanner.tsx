import CookieConsent from 'react-cookie-consent';

const CookieBanner = () => {
  return (
    <CookieConsent
      enableDeclineButton
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
