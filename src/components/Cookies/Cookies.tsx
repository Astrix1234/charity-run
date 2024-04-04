import CookieConsent from 'react-cookie-consent';

const Cookie = () => {
  return (
    <CookieConsent enableDeclineButton>
      This website uses cookies to enhance the user experience.
    </CookieConsent>
  );
};

export default Cookie;
