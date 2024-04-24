import { StyledStatute } from './StyledStatute';
import { useLanguageStore } from '../../Zustand/useLanguageStore';
import translations from './translations';

export const Statute = () => {
  const { language } = useLanguageStore();
  const t = translations[language];
  return (
    <StyledStatute>
      <h1>
        {t.h1}
        <br />
        {t.h1_br}
      </h1>
      <h2>{t.h2_1}</h2>
      <p className="end">{t.h2_1__p}</p>
      <h2>{t.h2_2}</h2>
      <h3>{t.h2_2__h3_1}</h3>
      <div className="important">{t.h2_2__h3_1__important1}</div>
      <p>{t.h2_2__h3_1__p1}</p>
      <div className="important">{t.h2_2__h3_1_important2}</div>
      <div className="important">{t.h2_2__h3_1_important3}</div>
      <div className="important">{t.h2_2__h3_1_important4}</div>
      <div className="important end">{t.h2_2__h3_1_important5}</div>
      <h2>{t.h2_3}</h2>
      <h3>{t.h2_3__h3_2}</h3>
      <p>{t.h2_3__h3_2__p1}</p>
      <h3>{t.h2_3__h3_3}</h3>
      <p>{t.h2_3__h3_3__p1}</p>
      <p>
        <b>{t.h2_3__h3_3__p1b}</b>
      </p>
      <p>{t.h2_3__h3_3__p2}</p>
      <p>{t.h2_3__h3_3__p3}</p>
      <p className="end">{t.h2_3__h3_3__p4}</p>
      <h2>{t.h2_4}</h2>{' '}
      <p>
        {t.h2_4__p1}
        <br />
        <strong>{t.h2_4__p1_strong}</strong>
        <br />
        {t.h2_4__p1br}
      </p>
      <p>{t.h2_4__p2}</p>
      <p>{t.h2_4__p3}</p>
      <p>{t.h2_4__p4}</p>
      <p>{t.h2_4__p5}</p>
      <p>{t.h2_4__p6}</p>
      <p className="end">{t.h2_4__p7}</p>
      <h2>{t.h2_5}</h2> <p>{t.h2_5__p1}</p>
      <p>{t.h2_5__p2}</p>
      <p>{t.h2_5__p3}</p>
      <p>{t.h2_5__p4}</p>
      <p>{t.h2_5__p5}</p>
      <p>{t.h2_5__p6}</p>
      <p>{t.h2_5__p7}</p>
      <ul>
        <li>{t.h2_5__ul1__li1}</li>
        <li>{t.h2_5__ul1__li2}</li>
        <li>{t.h2_5__ul1__li3}</li>
        <li>{t.h2_5__ul1__li4}</li>
        <li>{t.h2_5__ul1__li5}</li>
        <li>{t.h2_5__ul1__li6}</li>
        <li>{t.h2_5__ul1__li7}</li>
      </ul>
      <p>{t.h2_5__p8}</p>
      <ul className="end">
        <li>{t.h2_5__ul2__li1}</li>
        <li>{t.h2_5__ul2__li2}</li>
      </ul>
      <h2>{t.h2_6}</h2>
      <p>{t.h2_6__p1}</p>
      <p>{t.h2_6__p2}</p>
      <p>{t.h2_6__p3}</p>
      <p>{t.h2_6__p4}</p>
      <p>{t.h2_6__p5}</p>
      <p>{t.h2_6__p6}</p>
      <p>{t.h2_6__p7}</p>
      <p>{t.h2_6__p8}</p>
      <p>{t.h2_6__p9}</p>
      <p>{t.h2_6__p10}</p>
      <p>{t.h2_6__p11}</p>
      <p>{t.h2_6__p12}</p>
      <p>{t.h2_6__p13}</p>
      <p className="end">{t.h2_6__p14}</p>
      <h2>{t.h2_7}</h2>
      <p>{t.h2_7__p1}</p>
      <p>{t.h2_7__p2}</p>
      <p>{t.h2_7__p3}</p>
      <ul>
        <li>{t.h2_7__ul1__li1}</li>
        <li>{t.h2_7__ul1__li2}</li>
        <li>{t.h2_7__ul1__li3}</li>
        <li>{t.h2_7__ul1__li4}</li>
        <li>{t.h2_7__ul1__li5}</li>
      </ul>
      <p>{t.h2_7__p4}</p>
      <p>{t.h2_7__p5}</p>
      <p className="end">{t.h2_7__p6}</p>
      <h2>{t.h2_8}</h2>
      <p>{t.h2_8__p1}</p>
      <p>{t.h2_8__p2}</p>
      <p>{t.h2_8__p3}</p>
      <p>{t.h2_8__p4}</p>
      <p>{t.h2_8__p5}</p>
      <p>{t.h2_8__p6}</p>
      <p>{t.h2_8__p7}</p>
      <p>{t.h2_8__p8}</p>
      <p className="end">{t.h2_8__p9}</p>
      <h2>{t.h2_9}</h2>
      <p className="end">{t.h2_9__p1}</p>
      <h2>{t.h2_10}</h2>
      <p>{t.h2_10__p1}</p>
      <p>{t.h2_10__p2}</p>
      <p>{t.h2_10__p3}</p>
      <p>{t.h2_10__p4}</p>
      <p>{t.h2_10__p5}</p>
      <p>{t.h2_10__p6}</p>
      <p>{t.h2_10__p7}</p>
      <p>{t.h2_10__p8}</p>
      <p>{t.h2_10__p9}</p>
      <p>
        {t.h2_10__p10}
        <br />
        <strong>{t.h2_10__p10_strong}</strong>
      </p>
    </StyledStatute>
  );
};
