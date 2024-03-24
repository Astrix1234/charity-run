import scss from './Slider.module.scss';

interface SliderProps {
  array: JSX.Element[];
  reverse: boolean;
}

const Slider = ({ array, reverse }: SliderProps) => {
  return (
    <div className={reverse ? scss.slider__reverse : scss.slider}>
      <div className={scss.slider__wrapper}>
        {array.map((item, index) => (
          <div className={scss.slider__item} key={index}>
            {item}
          </div>
        ))}
      </div>
      <div className={scss.slider__wrapper} aria-hidden="true">
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
