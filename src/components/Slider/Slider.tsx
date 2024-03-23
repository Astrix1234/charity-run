import scss from './Slider-header.module.scss';

interface SliderProps {
  array: JSX.Element[];
}

const Slider = ({ array }: SliderProps) => {
  return (
    <div className={scss.slider}>
      <div className={scss.slider__wrapper}>
        {array.map((item, index) => (
          <div className={scss.slider__item} key={index}>
            {item}
          </div>
        ))}
      </div>
      <div className={scss.slider__wrapper}>
        {array.map((item, index) => (
          <div className={scss.slider__item} key={index}>
            {item}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Slider;
