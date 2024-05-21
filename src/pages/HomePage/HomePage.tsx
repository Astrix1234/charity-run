import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { HematoRunMainTitle } from '../../components/HomeAll/HematoRunMainTitle/HematoRunMainTitle';
import { HematoRunRoute } from '../../components/HomeAll/HematoRunRoute/HematoRunRoute';
import { HematoRunInfo } from '../../components/HomeAll/HematoRunInfo/HematoRunInfo';
import { HematoRunWhyIsItWorth } from '../../components/HomeAll/HematoRunWhyIsItWorth/HematoRunWhyIsItWorth';
import HematoFAQ from '../../components/HomeAll/HematoFAQ/HematoFAQ';
import Attractions from '../../components/HomeAll/HematoRunAttractions/HematoRunAttractions';
import GalleryCarousel from '../../components/HomeAll/GalleryCarousel/GalleryCarousel';
import Partners from '../../components/HomeAll/Partners/Partners';
import { Timetable } from '../../components/Share/Timetable/Timetable';
import Patrons from '../../components/HomeAll/Patrons/Patrons';

export default function HomePage() {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const id = hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [hash]);

  return (
    <div>
      <Helmet>
        <title>Hemato Run</title>
      </Helmet>
      <HematoRunMainTitle />
      <Patrons />
      <HematoRunInfo />
      <GalleryCarousel />
      <Timetable />
      <HematoRunRoute />
      <HematoRunWhyIsItWorth />
      <Attractions />
      <Partners />
      <HematoFAQ />
    </div>
  );
}
