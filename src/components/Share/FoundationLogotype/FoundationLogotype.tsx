import { StyledLogotype } from './StyledFoundationLogotype';
import { FoundationLogoCircle } from '../FoundationLogoCircle/FoundationLogoCircle';
import { useLanguageStore } from '../../../Zustand/useLanguageStore';
import translations from './translations';

export const FoundationLogotype = () => {
  const { language } = useLanguageStore();
  const t = translations[language];
  return (
    <StyledLogotype>
      <FoundationLogoCircle />
      <h2>
        {t.foundation}
        <br />
        <strong>{t.people}</strong>
      </h2>
    </StyledLogotype>
  );
};
