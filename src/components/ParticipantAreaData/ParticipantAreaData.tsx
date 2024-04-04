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
          <p>{t.nameSurname}</p>
          {userData && (
            <p>
              {userData.name} {userData.surname}
            </p>
          )}
          <p>/01</p>
        </div>
        <div>
          <p>{t.emailAddress}</p>
          {userData && <p>{userData.email}</p>}
          <p>/02</p>
        </div>
        {participantUserData && participantUserData.length > 0 && (
          <div>
            <p>{t.phoneNumber}</p>
            <p>{participantUserData[0].phone}</p>
            <p>/03</p>
          </div>
        )}
        {participantUserData && participantUserData.length > 0 && (
          <div>
            <p>{t.phoneNumber}</p>
            <p>{participantUserData[0].shirt}</p>
            <p>/04</p>
          </div>
        )}
        <Link to="/new-password">edit password</Link>
      </div>
    </StyledData>
  );
};
