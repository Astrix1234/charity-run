import scss from './Button.module.scss';

interface ButtonProps {
  content: string;
  onClick: () => void;
}

export const Button: React.FC<ButtonProps> = ({ content, onClick }) => {
  return (
    <div className={scss.button}>
      <button onClick={onClick} className={scss.button__button}>
        {content}
      </button>
      <div className={scss.button__dashedBorder}></div>
    </div>
  );
};
