import { StyledData } from './StyledParticipantAreaRun';
import { useLanguageStore } from '../../Zustand/useLanguageStore';
import translations from './translations';
import { useUserDataStore } from '../../Zustand/useUserDataStore';
import { useParticipantUserDataStore } from '../../Zustand/useParticipantUserDataStore';
import { Link } from 'react-router-dom';

export const ParticipantAreaData = () => {
  const { language } = useLanguageStore();
  const t = translations[language];
  const { userData } = useUserDataStore();
  const { participantUserData } = useParticipantUserDataStore();

  return (
    <StyledData>
      <h1>{t.myData}</h1>
      <div>
        <div>
          <p>01/ {t.nameSurname}</p>
          {userData && (
            <p>
              {userData.name} {userData.surname}
            </p>
          )}
        </div>
        <div>
          <p>02/ {t.emailAddress}</p>
          {userData && <p>{userData.email}</p>}
        </div>
        <div>
          <p>03/ {t.phoneNumber}</p>
          {participantUserData && participantUserData.length > 0 && (
            <p>{participantUserData[0].phone}</p>
          )}
        </div>
        <div>
          <p>04/ {t.tShirt}</p>
          {participantUserData && participantUserData.length > 0 && (
            <p>{participantUserData[0].shirt}</p>
          )}
        </div>
        <Link to="/new-password">edit password</Link>
      </div>
    </StyledData>
  );
};
