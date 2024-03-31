import { StyledHeading } from './StyledParticipantAreaHeading';
import { useLanguageStore } from '../../Zustand/useLanguageStore';
import translations from './translations';
import TrippleArrowDown from '../../Icons/TrippleArrowDown/TrippleArrowDown';
import HandwrittenLine from '../../Icons/HandwrittenLine/HandwrittenLine';

export const ParticipantAreaHeading = () => {
  const { language } = useLanguageStore();
  const t = translations[language];
  return (
    <StyledHeading as="section">
      <h1>{t.hematorun}</h1>
      <div className="participantArea">
        <h2>{t.participantArea}</h2>
        <HandwrittenLine />
      </div>

      <TrippleArrowDown />
    </StyledHeading>
  );
};
