import scss from './ButtonOrange.module.scss';

interface ButtonOrangeProps {
  content: string;
  onClick?: () => void;
  icon?: React.ReactNode;
  disabled?: boolean;
  type?: 'submit' | 'reset' | 'button' | undefined;
}

export const ButtonOrange: React.FC<ButtonOrangeProps> = ({
  content,
  onClick,
  icon,
  type,
  disabled = false,
}) => {
  return (
    <div className={scss.button}>
      <button
        disabled={disabled}
        onClick={onClick}
        className={`${scss.button__button} ${
          disabled ? scss.button__disabled : ''
        }`}
        type={type}
      >
        {icon && <span className={scss.button__icon}>{icon}</span>}
        {content}
      </button>
      <div className={scss.button__dashedBorder}></div>
    </div>
  );
};
