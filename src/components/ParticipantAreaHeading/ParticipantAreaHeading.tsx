import { StyledHeading } from './StyledParticipantAreaHeading';
import { useLanguageStore } from '../../Zustand/useLanguageStore';
import translations from './translations';
import TrippleArrowDown from '../../Icons/TrippleArrowDown/TrippleArrowDown';

export const ParticipantAreaHeading = () => {
  const { language } = useLanguageStore();
  const t = translations[language];
  return (
    <StyledHeading>
      <h1>{t.hematorun}</h1>
      <TrippleArrowDown />
    </StyledHeading>
  );
};