import { StyledNavigation } from './StyledParticipantAreaNavigation';
import { useLanguageStore } from '../../Zustand/useLanguageStore';
import translations from './translations';
import { Link } from 'react-router-dom';

export const ParticipantAreaNavigation = () => {
  const { language } = useLanguageStore();
  const t = translations[language];
  return (
    <StyledNavigation>
      <h1>{t.myProfile}</h1>
      <h2>{t.navigation}</h2>
      <p>
        <Link to="/participant-area/#my-data">{t.myData} /01</Link>
      </p>
      <p>
        <Link to="/participant-area/#my-data">{t.myResult} /02</Link>
      </p>
      <p>
        <Link to="/participant-area/#timetable">{t.timetable} /03</Link>
      </p>
      <p>
        <Link to="/participant-area/#prepare">{t.getReady} /04</Link>
      </p>
      <p>
        <Link to="#">{t.logout} /05</Link>
      </p>
    </StyledNavigation>
  );
};
