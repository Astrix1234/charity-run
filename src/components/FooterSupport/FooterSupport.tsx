import { StyledSupport } from './StyledFooterSuipport';
import { useLanguageStore } from '../../Zustand/useLanguageStore';
import translations from './translations';

export const FooterSupport = () => {
  const { language } = useLanguageStore();
  const t = translations[language];
  return (
    <StyledSupport>
      <h3>{t.support}</h3>
      <p className="bank">{t.bankAccount}</p>
      <div className="account">
        <p>{t.bank}</p>
        <p>{t.accountNo}</p>
      </div>
      <div className="footnote">
        <p>{t.footnote}</p>
        <p>{t.krs}</p>
      </div>
      <p>{t.nip}</p>
    </StyledSupport>
  );
};
