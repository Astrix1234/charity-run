import { StyledZone } from './StyledParticipantAreaZone';
import { Link } from 'react-router-dom';
import { useLanguageStore } from '../../Zustand/useLanguageStore';
import translations from './translations';
import RunnerMan from '../../Icons/RunnerMan/RunnerMan';
import { ParticipantAreaProfile } from '../ParticipantAreaProfile/ParticipantAreaProfile';
import { IconPencil } from '../../Icons/IconPencil/IconPlus';

export const ParticipantAreaZone = () => {
  const { language } = useLanguageStore();
  const t = translations[language];
  return (
    <StyledZone as="section" id="participantZone">
      <div className="photo">
        <RunnerMan />
        <p className="addPhoto">
          <IconPencil />
          <Link to="#">{t.addPhoto}</Link>
        </p>
      </div>

      <ParticipantAreaProfile />
    </StyledZone>
  );
};
