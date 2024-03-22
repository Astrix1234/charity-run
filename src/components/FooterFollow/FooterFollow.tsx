import { StyledFollow } from './StyledFooterFollow';
import { Link } from 'react-router-dom';
import { IconFacebook } from '../IconFacebook/IconFacebook';
import { IconLinkedIn } from '../IconLinkedIn/IconLinkedIn';
import { IconInstagram } from '../IconInstagram/IconInstagram';
import { IconYouTube } from '../IconYouTube/IconYouTube';

export const FooterFollow = () => {
  return (
    <StyledFollow>
      <h3>Obserwuj nas:</h3>
      <p className="website">
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
