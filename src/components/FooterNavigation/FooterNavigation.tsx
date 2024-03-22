import { Link } from 'react-router-dom';
import { StyledNavigation } from './StyledFooterNavigation';

export const FooterNavigation = () => {
  return (
    <StyledNavigation as="ul">
      <li>
        <Link to="#">Regulamin</Link>
      </li>
      <li>
        <Link to="#">Rodo</Link>
      </li>
      <li>
        <Link to="#">Polityka prywatności</Link>
      </li>
      <li>
        <Link to="#">Wszelkie prawa zastrzeżone</Link>
      </li>
    </StyledNavigation>
  );
};
