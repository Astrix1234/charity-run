import { StyledLinks } from './StyledFooterLinks';
import { Link } from 'react-router-dom';
import { useLanguageStore } from '../../Zustand/useLanguageStore';
import translations from './translations';

export const FooterLinks = () => {
  const { language } = useLanguageStore();
  const t = translations[language];
  return (
    <StyledLinks>
      <h3>{t.links}</h3>
      <p>
        <Link to="/participant-area">{t.link1}</Link>
      </p>
      <p>
        <Link to="/support-volunteers">{t.link2}</Link>
      </p>
      <p>
        <Link
          className="gala"
          to="https://gala.fundacja.hematologiczna.org/gala/"
          target="_blanc"
        >
          {t.link3}
        </Link>
      </p>
    </StyledLinks>
  );
};
