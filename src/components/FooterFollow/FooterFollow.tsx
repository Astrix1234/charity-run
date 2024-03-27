import { StyledFollow } from './StyledFooterFollow';
import { Link } from 'react-router-dom';
import { IconFacebook } from '../../Icons/IconFacebook/IconFacebook';
import { IconLinkedIn } from '../../Icons/IconLinkedIn/IconLinkedIn';
import { IconInstagram } from '../../Icons/IconInstagram/IconInstagram';
import { IconYouTube } from '../../Icons/IconYouTube/IconYouTube';
import { useLanguageStore } from '../../Zustand/useLanguageStore';
import translations from './translations';

export const FooterFollow = () => {
  const { language } = useLanguageStore();
  const t = translations[language];
  return (
    <StyledFollow>
      <h3>{t.follow}</h3>
      <p className="globe-website">
        <img className="globe" src="/charity-run/images/globe.png"></img>
        <Link to="https://fundacja.hematologiczna.org/" target="_blanc">
          {t.foundation}
        </Link>
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
