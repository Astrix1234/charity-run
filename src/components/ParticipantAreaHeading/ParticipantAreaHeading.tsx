import { StyledHeading } from './StyledParticipantAreaHeading';
import { useLanguageStore } from '../../Zustand/useLanguageStore';
import translations from './translations';

export const ParticipantAreaHeading = () => {
  const { language } = useLanguageStore();
  const t = translations[language];
  return (
    <StyledHeading>
      <h1>HEMATOBIEG</h1>
    </StyledHeading>
  );
};
