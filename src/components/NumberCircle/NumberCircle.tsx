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
    width: `clamp(72px, 22vw, ${sizePx}px)`,
    fontSize: `clamp(48px, 14vw, ${fontSizePx}px)`,
    backgroundColor: `${color}`,
  };

  return (
    <div style={numberStyle} className={scss.number}>
      {number}
    </div>
  );
}

export default NumberCircle;
