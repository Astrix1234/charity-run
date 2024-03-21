import { StyledLinks } from './FooterStyles';
import { Link } from 'react-router-dom';

export const InfoLinks = () => {
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
