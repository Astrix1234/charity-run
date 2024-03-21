import { StyledFollow } from './FooterStyles';
import { Link } from 'react-router-dom';

export const InfoFollow = () => {
  return (
    <StyledFollow>
      <h3>Obserwuj nas:</h3>
      <p>
        <Link to="#">Strona Fundacji</Link>
      </p>
    </StyledFollow>
  );
};
