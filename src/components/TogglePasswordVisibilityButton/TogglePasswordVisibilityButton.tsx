import IconEye from '../../Icons/IconEye/IconEye';
import IconEyeSlash from '../../Icons/IconEyeSlash/IconEyeSlash';
import scss from './TogglePasswordVisibilityButton.module.scss';

type TogglePasswordVisibilityButtonProps = {
  password: string;
  isVisible: boolean;
  toggleVisibility: () => void;
};

function TogglePasswordVisibilityButton({
  password,
  isVisible,
  toggleVisibility,
}: TogglePasswordVisibilityButtonProps) {
  if (!password) return null;
  return (
    <button type="button" onClick={toggleVisibility} className={scss.btn}>
      {isVisible ? <IconEye /> : <IconEyeSlash />}
    </button>
  );
}

export default TogglePasswordVisibilityButton;
