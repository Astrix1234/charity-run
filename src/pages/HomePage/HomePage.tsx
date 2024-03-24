import { Helmet } from 'react-helmet-async';
import { HematoRunMainTitle } from '../../components/HematoRunMainTitle/HematoRunMainTitle';
import { HematoRunInfo } from '../../components/HematoRunInfo/HematoRunInfo';
import { HematoRunWhyIsItWorth } from '../../components/HematoRunWhyIsItWorth/HematoRunWhyIsItWorth';

import HematoFAQ from '../../components/HematoFAQ/HematoFAQ';

import Gallery from '../../components/Gallery/Gallery';

import GalleryCarousel from '../../components/GalleryCarousel/GalleryCarousel';
import Sponsors from '../../components/Sponsors/Sponsors';
import { Timetable } from '../../components/Timetable/Timetable';


export default function HomePage() {
  return (
    <div>
      <Helmet>
        <title>Haemato-run</title>
      </Helmet>
      <HematoRunMainTitle />
      <HematoRunInfo />
      <GalleryCarousel />
      <Timetable />
      <HematoRunWhyIsItWorth />

      <HematoFAQ />

      <Sponsors />

    </div>
  );
}
