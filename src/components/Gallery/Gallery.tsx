import {
  slider1,
  slider2,
  slider3,
  slider4,
} from '../../../public/images/gallery';
import Slider from '../Slider/Slider';

const Gallery = () => {
  const galleryList = [slider1, slider2, slider3, slider4];

  return (
    <section id="gallery">
      <Slider array={galleryList} />;
    </section>
  );
};

export default Gallery;
