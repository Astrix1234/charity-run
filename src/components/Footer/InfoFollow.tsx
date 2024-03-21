import { StyledFollow } from './FooterStyles';
import { Link } from 'react-router-dom';
import { Globe } from './Globe';
import { IconFacebook } from '../IconFacebook/IconFacebook';
import { IconLinkedIn } from '../IconLinkedIn/IconLinkedIn';
import { IconInstagram } from '../IconInstagram/IconInstagram';
import { IconYouTube } from '../IconYouTube/IconYouTube';

export const InfoFollow = () => {
  return (
    <StyledFollow>
      <h3>Obserwuj nas:</h3>
      <p className="website">
        <Globe />
        <Link to="#">Strona Fundacji</Link>
      </p>
      <div className="social-media">
        <IconFacebook />
        <IconInstagram />
        <IconYouTube />
        <IconLinkedIn />
      </div>
    </StyledFollow>
  );
};
