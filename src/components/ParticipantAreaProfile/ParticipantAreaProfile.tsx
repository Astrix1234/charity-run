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
      <Link to="#">{t.myData} /01</Link>
      <Link to="#">{t.myResult} /02</Link>
      <Link to="#">{t.timetable} /03</Link>
      <Link to="#">{t.getReady} /04</Link>
      <Link to="#">{t.logout} /05</Link>
    </StyledProfile>
  );
};
