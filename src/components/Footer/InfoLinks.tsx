import { StyledInfo } from './FooterStyles';
import { Link } from 'react-router-dom';

export const InfoLinks = () => {
  return (
    <StyledInfo>
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
    </StyledInfo>
  );
};
