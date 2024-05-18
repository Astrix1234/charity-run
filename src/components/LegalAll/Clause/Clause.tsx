import { StyledClause } from './StyledClause';
import { useLanguageStore } from '../../../Zustand/useLanguageStore';
import translations from './translations';

export const Clause = () => {
  type Language = 'PL' | 'EN';

  const { language } = useLanguageStore() as { language: Language };
  const t = translations[language];
  return (
    <StyledClause>
      <h1>{t.h1}</h1>
      <h2>{t.h2_1}</h2>
      <p>{t.h2_1__p1}</p>
      <p>{t.h2_2__p1}</p>
      <p>{t.h2_3__p1}</p>
      <ul>
        <li>{t.h2_3__li1}</li>
        <li>{t.h2_3__li2}</li>
        <li>{t.h2_3__li3}</li>
        <li>{t.h2_3__li4}</li>
      </ul>
      <p>{t.h2_4__p1}</p>
      <p>{t.h2_5__p1}</p>
      <p>{t.h2_6__p1}</p>
      <p>{t.h2_7__p1}</p>
      <p>{t.h2_8__p1}</p>
      <p>{t.h2_9__p1}</p>
      <p>{t.h2_10__p1}</p>
      <p>
        {t.h2_11__p1}
        <br />
        {t.h2_11__p1_br}
      </p>
    </StyledClause>
  );
};
