import { Helmet } from 'react-helmet-async';
import { HematoRunMainTitle } from '../../components/HematoRunMainTitle/HematoRunMainTitle';
import { HematoRunInfo } from '../../components/HematoRunInfo/HematoRunInfo';
import { HematoRunWhyIsItWorth } from '../../components/HematoRunWhyIsItWorth/HematoRunWhyIsItWorth';
import GalleryCarousel from '../../components/GalleryCarousel/GalleryCarousel';
import Sponsors from '../../components/Sponsors/Sponsors';

export default function HomePage() {
  return (
    <div>
      <Helmet>
        <title>Haemato-run</title>
      </Helmet>
      <HematoRunMainTitle />
      <HematoRunInfo />
      <GalleryCarousel />
      <HematoRunWhyIsItWorth />
      <Sponsors />
    </div>
  );
}
