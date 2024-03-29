import { StyledData } from './StyledParticipantAreaRun';
import { useLanguageStore } from '../../Zustand/useLanguageStore';
import translations from './translations';

export const ParticipantAreaData = () => {
  const { language } = useLanguageStore();
  const t = translations[language];
  return (
    <StyledData>
      <h1>{t.myData}</h1>
    </StyledData>
  );
};
