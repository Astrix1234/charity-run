import { Link } from 'react-router-dom';
import { StyledNavigation } from './StyledFooterNavigation';
import { useLanguageStore } from '../../Zustand/useLanguageStore';
import translations from './translations';

export const FooterNavigation = () => {
  const { language } = useLanguageStore();
  const t = translations[language];
  return (
    <StyledNavigation as="ul">
      <li>
        <Link to="#">{t.statute}</Link>
      </li>
      <li>
        <Link to="#">{t.rodo}</Link>
      </li>
      <li>
        <Link to="#">{t.privacyPolicy}</Link>
      </li>
      <li>
        <Link to="#">{t.reserved}</Link>
      </li>
    </StyledNavigation>
  );
};
