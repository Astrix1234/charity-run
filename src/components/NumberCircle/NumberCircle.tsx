import scss from './NumberCircle.module.scss';

type NumberCircleProps = {
  number: number;
  sizePx?: number;
  fontSizePx?: number;
  color?: string;
};

function NumberCircle({
  number = 0,
  sizePx = 124,
  fontSizePx = 86,
  color = '',
}: NumberCircleProps) {
  const numberStyle = {
    width: `${sizePx}px`,
    fontSie: `${fontSizePx}px`,
    backgroundColor: `${color}`,
  };

  return (
    <div style={numberStyle} className={scss.number}>
      {number}
    </div>
  );
}

export default NumberCircle;
