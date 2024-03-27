import scss from './ButtonOrange.module.scss';

interface ButtonOrangeProps {
  content: string;
  onClick: () => void;
  icon?: React.ReactNode;
  disabled?: boolean;
}

export const ButtonOrange: React.FC<ButtonOrangeProps> = ({
  content,
  onClick,
  icon,
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
      >
        {icon && <span className={scss.button__icon}>{icon}</span>}
        {content}
      </button>
      <div className={scss.button__dashedBorder}></div>
    </div>
  );
};
