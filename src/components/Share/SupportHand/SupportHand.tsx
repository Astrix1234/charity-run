import { IconArrow } from '../../../Icons/IconArrow/IconArrow';
import { IconHandHeart } from '../../../Icons/IconHandHeart/IconHandHeart';
import { useLanguageStore } from '../../../Zustand/useLanguageStore';
import { ButtonOrange } from '../ButtonOrange/ButtonOrange';
import scss from './SupportHand.module.scss';
import translations from './translations';
import { useNavigate } from 'react-router-dom';

const SupportHand = () => {
  const { language } = useLanguageStore();
  const t = translations[language];

  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/support-donation');
  };

  return (
    <div className={scss.support__wrapper}>
      <img
        src="images/heart-in-jar.webp"
        alt="hand putting heart into jar full of hearts"
      />
      <div className={scss.support__arrow}>
        <IconArrow />
      </div>
      <ButtonOrange
        icon={<IconHandHeart />}
        content={t.button}
        onClick={handleClick}
      />
    </div>
  );
};

export default SupportHand;
