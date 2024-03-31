import { StyledProfile } from './StyledParticipantAreaProfile';
import { useLanguageStore } from '../../Zustand/useLanguageStore';
import translations from './translations';
import { Link } from 'react-router-dom';

export const ParticipantAreaProfile = () => {
  const { language } = useLanguageStore();
  const t = translations[language];
  return (
    <StyledProfile>
      <h1>{t.participantArea}</h1>
      <h2>{t.myProfile}</h2>
      <p>
        <Link to="/participant-area/#myData">{t.myData} /01</Link>
      </p>
      <p>
        <Link to="/participant-area/#myData">{t.myResult} /02</Link>
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
    </StyledProfile>
  );
};
