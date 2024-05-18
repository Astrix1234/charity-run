import { useLanguageStore } from '../../../Zustand/useLanguageStore';
import translations from './translations';
import scss from './AccountCta.module.scss';
import { Link } from 'react-router-dom';

type AccountCtaProps = {
  type?: 'login' | 'register';
};

function AccountCta({ type = 'login' }: AccountCtaProps) {
  const { language } = useLanguageStore();
  const t = translations[language];

  return (
    <div className={scss.row}>
      <span className={scss.text}>{t.text[type]}</span>{' '}
      <Link
        to={`/${type === 'login' ? 'login' : 'register'}`}
        className={scss.btn}
      >
        {t.button[type]}
      </Link>
    </div>
  );
}

export default AccountCta;
