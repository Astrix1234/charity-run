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
  return (
    <button type="button" onClick={toggleVisibility} className={scss.btn}>
      {password ? isVisible ? <IconEye /> : <IconEyeSlash /> : null}
    </button>
  );
}

export default TogglePasswordVisibilityButton;
