import { StyledHeading } from './StyledParticipantAreaHeading';
import { useLanguageStore } from '../../../Zustand/useLanguageStore';
import translations from './translations';
import TrippleArrowDown from '../../../Icons/TrippleArrowDown/TrippleArrowDown';
import HandwrittenLine from '../../../Icons/HandwrittenLine/HandwrittenLine';
import HematorunTitle from '../../Share/hematorunTitle/HematorunTitle';

export const ParticipantAreaHeading = () => {
  const { language } = useLanguageStore();
  const t = translations[language];
  return (
    <StyledHeading as="section" id="heading">
      <HematorunTitle />
      <div className="participantArea">
        <h2>{t.participantArea}</h2>
        <HandwrittenLine />
      </div>
      <div className="arrows">
        <TrippleArrowDown />
      </div>
    </StyledHeading>
  );
};
