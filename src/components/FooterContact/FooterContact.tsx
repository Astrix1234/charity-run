import { StyledContact } from './StyledFooterContact';
import { useLanguageStore } from '../../Zustand/useLanguageStore';
import translations from './translations';

export const FooterContact = () => {
  const { language } = useLanguageStore();
  const t = translations[language];
  return (
    <StyledContact>
      <h3>{t.contact}</h3>
      <div className="address">
        <p>{t.address}</p>
        <p>{t.city}</p>
        <p>{t.street}</p>
      </div>
      <p>{t.mail}</p>
      <p className="mail">
        <a href="mailto:kontakt@fundacja.hematologiczna.org">
          kontakt@fundacja.hematologiczna.org
        </a>
      </p>
      <p className="mail">
        <a href="mailto:hematobieg@fundacja.hematologiczna.org">
          hematobieg@fundacja.hematologiczna.org
        </a>
      </p>
    </StyledContact>
  );
};
