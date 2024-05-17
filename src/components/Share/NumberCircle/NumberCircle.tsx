import scss from './NumberCircle.module.scss';

type NumberCircleProps = {
  number: number;
  sizePx?: number;
  fontSizePx?: number;
  color?: string;
};

function NumberCircle({ number = 0, color = '' }: NumberCircleProps) {
  const numberStyle = {
    backgroundColor: `${color}`,
  };

  return (
    <div style={numberStyle} className={scss.number}>
      {number}
    </div>
  );
}

export default NumberCircle;
