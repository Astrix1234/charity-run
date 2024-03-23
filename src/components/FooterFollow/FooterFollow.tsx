import { StyledFollow } from './StyledFooterFollow';
import { Link } from 'react-router-dom';
import { IconFacebook } from '../../Icons/IconFacebook/IconFacebook';
import { IconLinkedIn } from '../../Icons/IconLinkedIn/IconLinkedIn';
import { IconInstagram } from '../../Icons/IconInstagram/IconInstagram';
import { IconYouTube } from '../../Icons/IconYouTube/IconYouTube';

export const FooterFollow = () => {
  return (
    <StyledFollow>
      <h3>Obserwuj nas:</h3>
      <p className="globe-website">
        <img className="globe" src="/charity-run/images/globe.png"></img>
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
