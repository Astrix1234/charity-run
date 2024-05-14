import scss from './EmptyAmbassadorBox.module.scss';
import ItemSquare from '../ItemSquare/ItemSquare';
import translations from './translations';
import { useLanguageStore } from '../../Zustand/useLanguageStore';
import { Link } from 'react-router-dom';

type EmptyAmbassadorBox = {
  pos: number;
  type?: 'leader' | 'ambassador';
};

function EmptyAmbassadorBox({ pos, type = 'ambassador' }: EmptyAmbassadorBox) {
  const { language } = useLanguageStore();
  const t = translations[language];
  return (
    <ItemSquare heading={t.title[type]} pos={pos}>
      <div className={scss.container}>
        <div className={scss.box}>
          <p className={scss.cta}>{t.cta[type]}</p>
          <Link
            onClick={() => console.log(1)}
            className={scss.link}
            to="/register"
          >
            {t.link}
          </Link>
        </div>
      </div>
    </ItemSquare>
  );
}

export default EmptyAmbassadorBox;
