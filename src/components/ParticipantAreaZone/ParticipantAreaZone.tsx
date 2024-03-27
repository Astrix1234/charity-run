import { StyledZone } from './StyledParticipantAreaZone';
import { useLanguageStore } from '../../Zustand/useLanguageStore';
import translations from './translations';

export const ParticipantAreaZone = () => {
  const { language } = useLanguageStore();
  const t = translations[language];
  return <StyledZone></StyledZone>;
};
