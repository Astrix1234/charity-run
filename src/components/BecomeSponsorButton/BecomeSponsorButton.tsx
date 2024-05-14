import { useLanguageStore } from '../../Zustand/useLanguageStore';
import { Button } from '../Button/Button';
import translations from './translations';
import { useNavigate } from 'react-router-dom';

function BecomeSponsorButton() {
  const { language } = useLanguageStore();
  const t = translations[language];
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/support-donors');
  };

  return <Button content={t.text} onClick={handleClick} />;
}

export default BecomeSponsorButton;
