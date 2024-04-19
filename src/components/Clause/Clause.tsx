import { StyledClause } from './StyledClause';
import { useLanguageStore } from '../../Zustand/useLanguageStore';
import translations from './translations';

export const Clause = () => {
  const { language } = useLanguageStore();
  const t = translations[language];
  return (
    <StyledClause>
      <h1>{t.h1}</h1>
      <h2>{t.h2_1}</h2>
      <p>{t.h2_1__p1}</p>
      <h2>{t.h2_2}</h2>
      <p>{t.h2_2__p1}</p>
      <h2>{t.h2_3}</h2>
      <p>
        {t.h2_3__p1}
        <br />
        {t.h2_3__p1_br}
      </p>
      <h2>{t.h2_4}</h2>
      <p>{t.h2_4__p1}</p>
      <ul>
        <li>{t.h2_4__li1}</li>
        <li>{t.h2_4__li2}</li>
        <li>{t.h2_4__li3}</li>
        <li>{t.h2_4__li4}</li>
        <li>{t.h2_4__li5}</li>
        <li>{t.h2_4__li6}</li>
      </ul>
    </StyledClause>
  );
};
