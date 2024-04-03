import { StyledData } from './StyledParticipantAreaRun';
import { useLanguageStore } from '../../Zustand/useLanguageStore';
import translations from './translations';

export const ParticipantAreaData = () => {
  const { language } = useLanguageStore();
  const t = translations[language];
  return (
    <StyledData>
      <h1>{t.myData}</h1>
      <div>
        <div>
          <p>{t.nameSurname}</p>
          <p>backendName</p>
          <p>/01</p>
        </div>
        <div>
          <p>{t.phoneNumber}</p>
          <p>backendPhone</p>
          <p>/02</p>
        </div>
        <div>
          <p>{t.emailAddress}</p>
          <p>backendMail</p>
          <p>/03</p>
        </div>
      </div>
    </StyledData>
  );
};
