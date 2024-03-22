import scss from './Slider-header.module.scss';

interface SliderProps {
  array: string[];
}

const Slider = ({ array }: SliderProps) => {
  return (
    <div className={scss.slider}>
      <div className={scss.slider__wrapper}>
        {array.map((item, index) => (
          <div className={scss.slider__item} key={index}>
            <img
              className={scss.slider__img}
              src={item}
              alt={`Slider photo ${index + 1}`}
            />
          </div>
        ))}
      </div>
      <div className={scss.slider__wrapper}>
        {array.map((item, index) => (
          <div className={scss.slider__item} key={index}>
            <img
              className={scss.slider__img}
              src={item}
              alt={`Slider photo ${index + 1}`}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Slider;
