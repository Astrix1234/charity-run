import { StyledProfile } from './StyledParticipantAreaProfile';
import { useLanguageStore } from '../../Zustand/useLanguageStore';
import translations from './translations';

export const ParticipantAreaProfile = () => {
  const { language } = useLanguageStore();
  const t = translations[language];
  return <StyledProfile></StyledProfile>;
};
