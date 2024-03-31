import { StyledZone } from './StyledParticipantAreaZone';
import { useLanguageStore } from '../../Zustand/useLanguageStore';
import translations from './translations';
import RunnerMan from '../../Icons/RunnerMan/RunnerMan';
import { ParticipantAreaProfile } from '../ParticipantAreaProfile/ParticipantAreaProfile';

export const ParticipantAreaZone = () => {
  const { language } = useLanguageStore();
  const t = translations[language];
  return (
    <StyledZone as="section" id="participantZone">
      <div className="photo">
        <RunnerMan />
        <p>{t.addPhoto}</p>
      </div>

      <ParticipantAreaProfile />
    </StyledZone>
  );
};
