import { StyledData } from './StyledParticipantAreaRun';
import { useLanguageStore } from '../../Zustand/useLanguageStore';
import translations from './translations';

export const ParticipantAreaData = () => {
  const { language } = useLanguageStore();
  const t = translations[language];
  return <StyledData></StyledData>;
};
