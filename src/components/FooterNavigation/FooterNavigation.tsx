import { Link } from 'react-router-dom';
import { StyledNavigation } from './StyledFooterNavigation';
import { useLanguageStore } from '../../Zustand/useLanguageStore';
import translations from './translations';

export const FooterNavigation = () => {
  const { language } = useLanguageStore();
  const t = translations[language];
  return (
    <StyledNavigation>
      <ul>
        <li>
          <Link to="#">{t.clause}</Link>
        </li>
      </ul>
      <p>
        Wszelkie prawa zastrzeżone © Fundacja Na Rzecz Pomocy Chorym Na
        Białaczki 2024
      </p>
      <p>Utworzone przez wolontariuszy</p>
    </StyledNavigation>
  );
};
