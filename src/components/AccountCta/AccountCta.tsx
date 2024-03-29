import { useLanguageStore } from '../../Zustand/useLanguageStore';
import translations from './translations';
import scss from './AccountCta.module.scss';

type AccountCtaProps = {
  type?: 'login' | 'register';
};

function AccountCta({ type = 'login' }: AccountCtaProps) {
  const { language } = useLanguageStore();
  const t = translations[language];

  return (
    <div className={scss.row}>
      <span className={scss.text}>{t.text[type]}</span>{' '}
      <button className={scss.btn}>{t.button[type]}</button>
    </div>
  );
}

export default AccountCta;
