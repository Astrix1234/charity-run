import { IconHandHeart } from '../../Icons/IconHandHeart/IconHandHeart';
import { useLanguageStore } from '../../Zustand/useLanguageStore';
import { ButtonOrange } from '../ButtonOrange/ButtonOrange';

type SupportButtonProps = {
  handleClick: () => void;
  disabled?: boolean;
};

function SupportButton({ handleClick, disabled = false }: SupportButtonProps) {
  const { language } = useLanguageStore();

  return (
    <ButtonOrange
      disabled={disabled}
      icon={<IconHandHeart />}
      content={language === 'PL' ? 'Wesprzyj' : 'Support'}
      onClick={handleClick}
    />
  );
}

export default SupportButton;
