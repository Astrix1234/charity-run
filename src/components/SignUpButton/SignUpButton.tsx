import { useNavigate } from 'react-router-dom';
import { useIsLoginStore } from '../../Zustand/useIsLoginStore';
import { useLanguageStore } from '../../Zustand/useLanguageStore';
import translations from './translations';
import { Button } from '../Button/Button';

type SignUpButtonProps = {
  additionalAction?: () => void;
};

function SignUpButton({ additionalAction }: SignUpButtonProps) {
  const { language } = useLanguageStore();
  const { isLogin } = useIsLoginStore();
  const t = translations[language];
  const navigate = useNavigate();

  const handleClick = () => {
    isLogin ? navigate('/run-registration') : navigate('/login');
    additionalAction?.();
  };
  return <Button onClick={handleClick} content={t.signUp} />;
}

export default SignUpButton;
