import { StyledHeading } from './StyledParticipantAreaHeading';
import { useLanguageStore } from '../../Zustand/useLanguageStore';
import translations from './translations';
import TrippleArrowDown from '../../Icons/TrippleArrowDown/TrippleArrowDown';

export const ParticipantAreaHeading = () => {
  const { language } = useLanguageStore();
  const t = translations[language];
  return (
    <StyledHeading as="section">
      <h1>{t.hematorun}</h1>
      <h2>{t.participantArea}</h2>
      <TrippleArrowDown />
    </StyledHeading>
  );
};
