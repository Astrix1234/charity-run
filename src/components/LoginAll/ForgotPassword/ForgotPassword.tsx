import { Link } from 'react-router-dom';
import { useLanguageStore } from '../../../Zustand/useLanguageStore';
import scss from './ForgotPassword.module.scss';
import translations from './translations';

function ForgotPassword() {
  const { language } = useLanguageStore();
  const t = translations[language];
  return (
    <Link to="/restore-password" className={scss.btn}>
      {t.text}
    </Link>
  );
}

export default ForgotPassword;
