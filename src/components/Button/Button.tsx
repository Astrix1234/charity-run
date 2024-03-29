import scss from './Button.module.scss';

interface ButtonProps {
  content: string;
  onClick: () => void;
  icon?: React.ReactNode;
  type?: 'submit' | 'reset' | 'button' | undefined;
}

export const Button: React.FC<ButtonProps> = ({
  content,
  onClick,
  icon,
  type = 'button',
}) => {
  return (
    <div className={scss.button}>
      <button type={type} onClick={onClick} className={scss.button__button}>
        {icon && <span className={scss.button__icon}>{icon}</span>}
        {content}
      </button>
      <div className={scss.button__dashedBorder}></div>
    </div>
  );
};
