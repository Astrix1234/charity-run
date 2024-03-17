import scss from './ButtonPlEng.module.scss';

interface ButtonPlEngProps {
  onClick: () => void;
}

export const ButtonPlEng: React.FC<ButtonPlEngProps> = ({ onClick }) => {
  return (
    <button className={scss.buttonPlEng} type="button" onClick={onClick}>
      PL|ENG
    </button>
  );
};
