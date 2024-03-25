import scss from './ButtonOrange.module.scss';

interface ButtonOrangeProps {
  content: string;
  onClick: () => void;
  icon?: React.ReactNode;
}

export const ButtonOrange: React.FC<ButtonOrangeProps> = ({
  content,
  onClick,
  icon,
}) => {
  return (
    <div className={scss.button}>
      <button onClick={onClick} className={scss.button__button}>
        {icon && <span className={scss.button__icon}>{icon}</span>}
        {content}
      </button>
      <div className={scss.button__dashedBorder}></div>
    </div>
  );
};
