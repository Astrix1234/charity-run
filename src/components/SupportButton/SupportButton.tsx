import { IconHandHeart } from '../../Icons/IconHandHeart/IconHandHeart';
import { useLanguageStore } from '../../Zustand/useLanguageStore';
import { ButtonOrange } from '../ButtonOrange/ButtonOrange';

type SupportButtonProps = {
  handleClick?: () => void;
  disabled?: boolean;
  type?: 'submit' | 'button' | 'reset' | undefined;
};

function SupportButton({
  handleClick,
  disabled = false,
  type = 'button',
}: SupportButtonProps) {
  const { language } = useLanguageStore();

  return (
    <ButtonOrange
      disabled={disabled}
      icon={<IconHandHeart />}
      content={language === 'PL' ? 'Wesprzyj' : 'Support'}
      onClick={handleClick}
      type={type}
    />
  );
}

export default SupportButton;
