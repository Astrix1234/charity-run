import { StyledMain } from './StyledParticipantAreaMain';
import { Link } from 'react-router-dom';
import { useLanguageStore } from '../../Zustand/useLanguageStore';
import translations from './translations';
import RunnerMan from '../../Icons/RunnerMan/RunnerMan';
import { ParticipantAreaNavigation } from '../ParticipantAreaNavigation/ParticipantAreaNavigation';
import { IconPencil } from '../../Icons/IconPencil/IconPlus';

export const ParticipantAreaMain = () => {
  const { language } = useLanguageStore();
  const t = translations[language];
  return (
    <StyledMain as="section" id="participantZone">
      <div className="photo">
        <RunnerMan />
        <p className="addPhoto">
          <IconPencil />
          <Link to="#">{t.addPhoto}</Link>
        </p>
      </div>

      <ParticipantAreaNavigation />
    </StyledMain>
  );
};
