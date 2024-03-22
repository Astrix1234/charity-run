import { StyledLinks } from './StyledFooterLinks';
import { Link } from 'react-router-dom';

export const FooterLinks = () => {
  return (
    <StyledLinks>
      <h3>Przydatne linki</h3>
      <p>
        <Link to="#">O fundacji</Link>
      </p>
      <p>
        <Link to="#">Strefa uczestnika</Link>
      </p>
      <p>
        <Link to="#">Wolontariat</Link>
      </p>
    </StyledLinks>
  );
};
