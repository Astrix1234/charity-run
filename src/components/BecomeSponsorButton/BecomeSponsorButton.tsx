import { useLanguageStore } from '../../Zustand/useLanguageStore';
import { Button } from '../Button/Button';
import translations from './translations';

function BecomeSponsorButton() {
  const { language } = useLanguageStore();
  const t = translations[language];

  return <Button content={t.text} onClick={() => {}} />;
}

export default BecomeSponsorButton;
