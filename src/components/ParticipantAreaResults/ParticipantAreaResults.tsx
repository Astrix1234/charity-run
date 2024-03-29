import { StyledResults } from './StyledParticipantAreaResults';
import { useLanguageStore } from '../../Zustand/useLanguageStore';
import translations from './translations';

export const ParticipantAreaResults = () => {
  const { language } = useLanguageStore();
  const t = translations[language];
  return <StyledResults></StyledResults>;
};
