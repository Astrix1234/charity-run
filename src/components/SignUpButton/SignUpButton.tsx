import { useNavigate } from 'react-router-dom';
import { useIsLoginStore } from '../../Zustand/useIsLoginStore';
import { useLanguageStore } from '../../Zustand/useLanguageStore';
import translations from './translations';
import { Button } from '../Button/Button';

function SignUpButton() {
  const { language } = useLanguageStore();
  const { isLogin } = useIsLoginStore();
  const t = translations[language];
  const navigate = useNavigate();

  const handleClick = () => {
    isLogin ? navigate('/run-registration') : navigate('/login');
  };
  return <Button onClick={handleClick} content={t.signUp} />;
}

export default SignUpButton;
