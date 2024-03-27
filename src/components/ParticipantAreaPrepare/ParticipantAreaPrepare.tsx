import { StyledPrepare } from './StyledParticipantAreaPrepare';
import { useLanguageStore } from '../../Zustand/useLanguageStore';
import translations from './translations';

export const ParticipantAreaPrepare = () => {
  const { language } = useLanguageStore();
  const t = translations[language];
  return <StyledPrepare></StyledPrepare>;
};
