import { StyledRun } from './StyledParticipantAreaRun';
import { useLanguageStore } from '../../Zustand/useLanguageStore';
import translations from './translations';

export const ParticipantAreaRun = () => {
  const { language } = useLanguageStore();
  const t = translations[language];
  return <StyledRun></StyledRun>;
};
