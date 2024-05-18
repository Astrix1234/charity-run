import { StyledResults } from './StyledParticipantAreaResults';
import { useLanguageStore } from '../../../Zustand/useLanguageStore';
import translations from './translations';
import MiniTripleOrangeWave from '../../../Icons/MiniTripleOrangeWave/MiniTripleOrangeWave';

export const ParticipantAreaResults = () => {
  const { language } = useLanguageStore();
  const t = translations[language];
  return (
    <StyledResults>
      <h1>{t.myResults}</h1>
      <div>
        <h2>/ {t.edition}</h2>
        <p>
          {t.hematorun} <br />
          {t.city}
          <br />
          26.05.2024
        </p>
        <h3>/ {t.result}</h3>
        <MiniTripleOrangeWave />
      </div>
    </StyledResults>
  );
};
